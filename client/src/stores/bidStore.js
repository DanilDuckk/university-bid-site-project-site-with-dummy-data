import { writable } from 'svelte/store';

const BASE_URL = 'http://localhost:3000';

export const bidStore = writable([]);

export async function addBid(body){
    let token = localStorage.getItem('token');
    try {
        const response = await fetch(BASE_URL+'/products/${body.productId}/bids', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

    } catch (error) {
        console.error('Error placing the bid:', error);
    }
}

export async function fetchUserBids(token) {
    try {
        const response = await fetch(BASE_URL+'/users/bids/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user bids');
    }

    const data = await response.json();
    bidStore.set(data);

    } catch (error) {
        console.error('Failed to fetch user bids:', error);
    }
}

export async function fetchBidsDetails(itemId) {
    try {
        const response = await fetch(BASE_URL+`/products/${itemId}/bids`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();

        bidStore.set(data);
    } catch (error) {
        console.error('Failed to fetch bids details:', error);
    }
}