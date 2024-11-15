<script>
    import { writable } from 'svelte/store';
    import { addProduct } from '../stores/productStore.js'
    import {getUserRole} from "../stores/userStore.js";

    let userRole;
    (async () => {
        try {
            userRole = await getUserRole();
            if(userRole!=='admin') {
                window.location.href = '/*';
            }
        } catch (error) {
            console.error('Error fetching user role:', error);
        }
    })();

    const name = writable('');
    const description = writable('');
    const price = writable('');
    const person = writable('');
    const imageLink = writable('');
    const isPet = writable(false);
    const endDate = writable('');

    let imagePreview = '';

    const testImage = () => {
        imageLink.subscribe(value => {
            imagePreview = value;
        })();
    };

    const createProduct = async () => {
        const body = {
            picture: $imageLink,
            name: $name,
            description: $description,
            price: $price,
            person: $person,
            isPet: $isPet,
            ends: $endDate
        };

        if(name === undefined || description === undefined
            || price === undefined || person === undefined
            || isPet === undefined || endDate === undefined || imageLink === undefined) {
            alert('Please fill all input fields');
            return;
        }

        await addProduct(body);
        alert('Product successfully created!')
        window.location.href = '/';
    };
</script>

<h1>Create Product</h1>

<container class="main-container">
    <div class="left-container">
        <div class="input-field">
            <h3>Name:</h3>
            <input type="text" bind:value={$name} />
        </div>

        <div class="input-field">
            <h3>Description:</h3>
            <input type="text" bind:value={$description}>
        </div>

        <div class="input-field">
            <h3>Price:</h3>
            <input type="number" bind:value={$price} />
        </div>

        <div class="input-field">
            <h3>Person:</h3>
            <input type="text" bind:value={$person} />
        </div>

        <div class="input-field">
            <h3>Image Link:</h3>
            <input type="text" bind:value={$imageLink} />
        </div>

        <div class="input-field">
            <h3>Is Pet:</h3>
            <input type="checkbox" bind:checked={$isPet} />
        </div>

        <div class="input-field">
            <h3>End Date:</h3>
            <input type="date" bind:value={$endDate} />
        </div>
    </div>
    <div class="right-container">
        {#if imagePreview}
            <h3>Image Preview:</h3>
            <img class="image-preview" src={imagePreview} alt="Image Preview" />
        {/if}
        <button on:click={testImage}>Test Image</button>
        <button on:click={createProduct}>Create Product</button>
    </div>
</container>

<style>
    h1{
        margin: 1vw;
        display: flex;
        justify-content: center;
    }

    h3{
        margin: 1vw;
    }

    input {
        font-size: 1.5vw;
        width: 100%;
        padding: 1.5vw;
        border: 1px solid #ccc;
        border-radius: 0.5vw;
        margin-bottom: 5px;
        margin-left: 1vw;
    }

    .image-preview {
        margin-top: 1rem;
        width: 100%;
        height: auto;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        margin-top: 1rem;
    }

    .left-container {
        flex: 1;
        max-width: 40%;
        margin-right: 20px;
    }

    .right-container {
        flex: 1;
        max-width: 40%;
        background-color: #f7f7f7;
        padding: 1vw;
        border-radius: 1vw;
        box-shadow: 0 2vw 5vw rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: auto;
        margin-bottom: 1vw;
    }

    .main-container {
        display: flex;
        justify-content: space-between;
        padding: 1vw;
    }

    button {
        font-size: 1.5vw;
        width: 50%;
        padding: 1.5vw;
        border: none;
        border-radius: 0.5vw;
        cursor: pointer;
    }

    button:hover {
        background-color: lightgray;
    }
</style>