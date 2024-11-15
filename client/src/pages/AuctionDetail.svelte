<script>
    import PlaceBidButton from "../components/PlaceBidButton.svelte";
    import Bids from "../components/Bids.svelte";
    import AdminBidPanel from "../components/AdminProductPanel.svelte";
    import AdminClearBids from "../components/AdminClearBidsButton.svelte";
    import {onMount} from "svelte";
    import {fetchItemDetails} from "../stores/productStore.js";
    import {fetchUserInfo} from "../stores/userStore.js";
    const params = new URLSearchParams(window.location.search);
    export const itemId = params.get('id');

    let item = {};

    async function displayItemDetails() {
        document.querySelector('.image-container img').src = item.picture || 'placeholder.png';
        document.querySelector('.image-container img').alt = item.name || 'No Name.';
        document.querySelector('.description p').textContent = item.description || 'No description available.';
        document.querySelector('.title h3').textContent = item.name || 'No name.';
    }

    let userRole = Object;

    onMount(async () => {
        item = await fetchItemDetails(itemId);
        await displayItemDetails();
        userRole = await fetchUserInfo(localStorage.getItem('token'));
    });
</script>

<body>

<div class="main-container">

    <div class="left-side">
        <div class="image-container">
            <img src="placeholder.png" alt="Main Image">
        </div>

        <div class="title">
            <h3>Product Title</h3>
        </div>
        <div class="description">
            <p>This is a description of the product. It includes details about the item you're bidding on.</p>
        </div>
        <PlaceBidButton/>
    </div>

    <div class="right-side">
        <Bids/>
        {#if userRole.role === 'admin'}
            <AdminClearBids {itemId}/>
        {/if}
    </div>

</div>
{#if userRole.role === 'admin'}
    <AdminBidPanel {itemId}/>
{/if}

</body>

<style>
    body {
        margin: 0;
        padding: 0;
    }

    .main-container {
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }

    .left-side {
        flex: 1;
        max-width: 40%;
        margin-right: 20px;
    }

    .left-side img {
        width: 70%;
        height: auto;
        border-radius: 10px;
    }

    .right-side {
        flex: 1;
        max-width: 40%;
        background-color: #f7f7f7;
        padding: 1vw;
        border-radius: 1vw;
        box-shadow: 0 2vw 5vw rgba(0, 0, 0, 0.1);
    }
</style>