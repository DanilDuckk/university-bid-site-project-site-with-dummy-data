import products from '../data/products-json.js'
import bids from '../data/bids-json.js'
import jwt from "jsonwebtoken";

export function getAllProducts(req, res){
    res.json(products);
}

export function getProductById(req, res){
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
}

export function getProductBids(req, res){
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    let productBids = bids.filter(bid => bid.productId === productId);

    res.json(productBids);
}

export function addBidToProduct(req, res) {
    const { productId } = req.body;
    const { amount } = req.body;

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization token is missing or invalid' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, 'my_secret_key');
        const userId = decoded.userId;

        if (!amount) {
            return res.status(400).json({ message: 'Amount is required' });
        }

        const newBid = {
            id: bids.length + 1,
            userId: userId,
            productId: parseInt(productId),
            amount: amount
        };

        bids.push(newBid);

        return res.status(201).json(newBid);

    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}

export function addNewProduct(req, res) {
    const newProduct = req.body;

    if (!newProduct.name || !newProduct.description || !newProduct.price) {
        return res.status(400).json({ error: 'Name, description, and price are required.' });
    }

    newProduct.id = products.length ? products[products.length - 1].id + 1 : 1;

    products.push(newProduct);

    res.status(201).json(newProduct);
}

export function deleteProduct(req, res) {
    const productId = parseInt(req.params.id, 10);

    const index = products.findIndex(product => product.id === productId);

    if (index !== -1) {
        products.splice(index, 1);
        res.status(200).json({ message: 'Product deleted successfully.' });
    } else {
        res.status(404).json({ message: 'Product not found.' });
    }
}

export function deleteBidsForProduct(req, res) {
    const productId = parseInt(req.params.id, 10);
    for (let i = bids.length - 1; i >= 0; i--) {
        if (bids[i].productId === productId) {
            bids.splice(i, 1);
        }
    }
    res.status(200).json({ message: `Bids for product ID ${productId} have been deleted.` });
}

export function changeExistingProduct(req, res) {
    const id = parseInt(req.params.id, 10);
    const { price, name, description } = req.body;

    const productIndex = products.findIndex(product => product.id === parseInt(id, 10));

    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }

    products[productIndex] = {
        ...products[productIndex],
        price: price || products[productIndex].price,
        name: name || products[productIndex].name,
        description: description || products[productIndex].description
    };

    res.status(200).json(products[productIndex]);
}