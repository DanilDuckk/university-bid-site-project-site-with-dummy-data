import {derived, writable} from 'svelte/store';
import { fetchBidsDetails } from './bidStore.js'

const BASE_URL = 'http://localhost:3000';

export const productStore = writable([]);
export const selectedFilter = writable('');

export async function fetchAllProducts() {
    try {
        const response = await fetch(BASE_URL+'/products');
        if (!response.ok) {
            response.status;
        }
        const data = await response.json();
        productStore.set(data);
    } catch (error) {
        console.error('Failed to fetch items:', error);
    }
}

export const filteredDucks = derived(
    [productStore, selectedFilter],
    ([$productStore, $selectedFilter]) => {
        let filteredDucks = [...$productStore];

        if ($selectedFilter === 'A-Z') {
            filteredDucks.sort((a, b) => a.name.localeCompare(b.name));
        } else if ($selectedFilter === 'Price') {
            filteredDucks.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if ($selectedFilter === 'Pet') {
            filteredDucks = filteredDucks.filter(duck => duck.isPet);
        }

        return filteredDucks;
    }
);

export async function deleteProduct(productId) {
    const response = await fetch(BASE_URL+`/products/${productId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to delete product');
    }

    await fetchAllProducts();
}

export async function deleteBidsForProduct(productId) {
    let response = await fetch(BASE_URL+`/products/${productId}/bids`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to delete product');
    }

    await fetchBidsDetails();
}

export async function modifyProduct(name,description,price,itemId) {
    const response = await fetch(BASE_URL+`/products/${itemId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            price: price,
            name: name,
            description: description
        })
    });

    if (!response.ok) {
        throw new Error('Failed to delete product');
    }
}

export async function addProduct(body){
    const response = await fetch(BASE_URL+'/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        console.error('Failed to create product');
    }
}

export async function fetchItemDetails(itemId) {
    try {
        const response = await fetch(`http://localhost:3000/products/${itemId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return  await response.json();
    } catch (error) {
        console.error('Failed to fetch item details:', error);
    }
}