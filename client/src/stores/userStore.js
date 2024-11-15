import { writable } from 'svelte/store';
import {fetchAllProducts} from "./productStore.js";

const BASE_URL = 'http://localhost:3000';

export const userStore = writable([]);

export async function registerUser(registrationData) {
    try {
        const response = await fetch(BASE_URL+'/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registrationData)
        });

        if (!response.ok) {
            const error = await response.json();
            alert(error.message || 'Registration failed');
            return;
        }
        const {token} = await response.json();
        localStorage.setItem('token', token);
        alert('User registered successfully!');
        window.location.href = '/';
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during registration.');
    }
}

export async function loginUser(loginData) {
    try {
        const response = await fetch(BASE_URL+'/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (!response.ok) {
            const error = await response.json();
            alert(error.message || 'Login failed');
            return;
        }

        const { token } = await response.json();
        localStorage.setItem('token', token);
        alert('Login successful!');
        window.location.href = '/';
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login.');
    }
}

export async function fetchUserInfo(token) {
    const response = await fetch(BASE_URL+'/users/token', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user information');
    }

    return await response.json();
}

export async function fetchUserName(userId) {
    try {
        const response = await fetch(BASE_URL+`/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.username;
    } catch (error) {
        console.error(`Failed to fetch user details for userId ${userId}:`, error);
        return 'Unknown User';
    }
}

export const getUserRole = async () => {
    let userRole;

    await fetchAllProducts();
    userRole = await fetchUserInfo(localStorage.getItem('token'));

    return userRole.role;
}