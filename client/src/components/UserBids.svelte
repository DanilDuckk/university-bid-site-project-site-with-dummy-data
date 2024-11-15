<script>
    import { bidStore, fetchUserBids } from '../stores/bidStore.js'
    import {onMount} from "svelte";

    const token = localStorage.getItem('token');
    onMount(async () => {
        await fetchUserBids(token);
    });
    $: bids = $bidStore;
</script>

<h3>Your Bids:</h3>
<container id="bids-container" class="bids-container">
    {#each bids as bid}
    <section class="bid-item">
        <a href="/details?id={bid.productId}">
            <img src="{bid.productImage}" alt="{bid.productName}"/>
        </a>
        <h3>{bid.productName}</h3>
        <span>Your bid: {bid.bidAmount}$</span>
    </section>
    {/each}
</container>

<style>
    h3 {
        padding-top: 1vw;
        display: flex;
        justify-content: center;
    }
    img {
       max-width: 15vw;
    }
    .bids-container {
        padding-top: 2vw;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .bid-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f9f9f9;
        border: none;
        border-radius: 5px;
        padding: 1vw;
        margin: 0.5vw;
        transition: transform 0.2s;
        box-shadow: 0 1vw 2vw rgba(0, 0, 0, 0.1);
    }
</style>