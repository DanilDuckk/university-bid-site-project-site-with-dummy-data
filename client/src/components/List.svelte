<script>
    import { productStore, filteredDucks, deleteProduct } from '../stores/productStore.js'
    import { getUserRole } from '../stores/userStore.js'
    import { onDestroy } from "svelte";
    export let searchTerm;

    let userRole;
    (async () => {
        try {
            userRole = await getUserRole();
        } catch (error) {
            console.error('Error fetching user role:', error);
        }
    })();

    $: items = $productStore;

    let filteredItems = items;
    const unsubscribe = filteredDucks.subscribe(value => {
        filteredItems = value;
    });

    onDestroy(() => {
        unsubscribe();
    });

    $: {
        if (searchTerm) {
            filteredItems = items.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.person.toLowerCase().includes(searchTerm.toLowerCase())
            );
        } else {
            filteredItems = items;
        }
    }

    async function handleDelete(productId) {
        if (confirm("Are you sure you want to delete this product?")) {
            try {
                await deleteProduct(productId);
                filteredItems = filteredItems.filter(item => item.id !== productId);
            } catch (error) {
                console.error("Failed to delete the product:", error);
            }
        }
    }
</script>

<div class="items-grid">
    {#each filteredItems as item}
        <div class="item">
            <a href="/details?id={item.id}">
                <img src="{item.picture}" alt="{item.name}"/>
            </a>
            <h3>{item.name}</h3>
            <p>{item.price}$</p>
            <p>Seller: {item.person}</p>
            <p>Ends: {item.ends}</p>
            {#if userRole === 'admin'}
                <button on:click={() => handleDelete(item.id)}>Delete</button>
            {/if}
        </div>
    {/each}
</div>

<style>
    button {
        font-size: 1.5vw;
        width: 60%;
        padding: 1.5vw;
        border: none;
        border-radius: 0.5vw;
        cursor: pointer;
    }
    button:hover {
        background-color: lightgray;
    }
    .items-grid {
        width: 75vw;
        height: 50vw;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1vw;
        padding: 1vw;
    }
    img {
        width: 20vw;
        height: 20vw;
        object-fit: cover;
        cursor: pointer;
    }
    .item {
        background-color: #fff;
        padding: 2vw;
        border: 0.2vw solid #ccc;
        text-align: center;
        font-size: 1.5vw;
    }
</style>