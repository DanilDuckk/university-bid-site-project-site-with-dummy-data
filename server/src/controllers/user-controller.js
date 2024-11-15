import data from '../data/users-json.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import bids from "../data/bids-json.js";
import products from "../data/products-json.js";

export function getAllUsers(req, res){
    res.json(data);
}

export function getUserById(req, res){
    const userId = parseInt(req.params.id, 10);
    const user = data.find(p => p.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

export async function registerUser(req, res) {
    const {username, email, password} = req.body;
    const existingUser = data.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({message: 'User already exists'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        id: data.length + 1,
        username,
        email,
        password: hashedPassword,
        role: 'bidder'
    };
    data.push(newUser);
    const token = jwt.sign({ userId: newUser.id, username: newUser.username, role: newUser.role }, 'my_secret_key', { expiresIn: '1h' });
    return res.status(201).json({ message: 'User registered successfully', token });
}

export function loginUser(req, res) {
    const { username, password } = req.body;
    const user = data.find(user => user.username === username);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (bcrypt.compareSync(password, user.password)) {
       const token = jwt.sign({ userId: user.id, username: user.username, role: user.role }, 'my_secret_key', { expiresIn: '1h' });
       console.log('user: ' + username + ' token: ' + token);
       return res.json({ token });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
}

export function getUserByToken(req, res){
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access token is missing' });
    }

    try {
        const decoded = jwt.verify(token, 'my_secret_key');

        const user = data.find(user => user.id === decoded.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.json({
            username: user.username,
            email: user.email,
            role: user.role
        });

    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Invalid token' });
    }
}

export function getUserBidsByToken(req, res){
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access token is missing' });
    }

    try {
        const decoded = jwt.verify(token, 'my_secret_key');

        const user = data.find(user => user.id === decoded.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        let userBids = bids.filter(bid => bid.userId === user.id);

        const responseBids = userBids.map(bid => {
            const product = products.find(product => product.id === bid.productId);
            return {
                productId: product.id,
                productName: product.name,
                productImage: product.picture,
                bidAmount: bid.amount,
            };
        });

        return res.json(responseBids);
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Invalid token' });
    }
}