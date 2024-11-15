<script>
    import {deleteBidsForProduct} from "../stores/productStore.js";

    export  let itemId;
    async function handleDelete(){
        const confirmation = confirm("Are you sure you want to clear bids for current product?");
        if(!confirmation){
            return;
        }
        await deleteBidsForProduct(itemId);
        location.reload();
    }
</script>

<div class="button-box">
    <button on:click={handleDelete}>Clear bids</button>
</div>

<style>
    .button-box {
        display: flex;
        justify-content: center;
        left: 50vw;
    }
    button {
        font-size: 1.5vw;
        width: 30%;
        padding: 1.5vw;
        border: none;
        border-radius: 0.5vw;
        cursor: pointer;
    }
    button:hover {
        background-color: lightgray;
    }
</style>