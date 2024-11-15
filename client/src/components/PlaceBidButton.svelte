<script>
    import {addBid} from "../stores/bidStore.js";
    import {onMount} from "svelte";
    import {fetchUserInfo} from "../stores/userStore.js";
    const token = localStorage.getItem('token');
    let userInfo

    onMount(async () => {
        userInfo = await fetchUserInfo(token);
    });

    async function placeBid(productId, amount) {
        const body = {
            productId: productId,
            amount: amount
        };

        await addBid(body)
        location.reload();
    }

    function submitBid() {
        const url = window.location.href;
        const urlParams = new URL(url);
        const productId = urlParams.searchParams.get('id');
        const amount = document.getElementById('bidAmount').value;

        if (!amount) {
            alert('Please enter a valid amount')
            console.error('Please enter a valid amount');
            return;
        }

        if(!localStorage.getItem('token')){
            alert('Please login or register an account');
            return;
        }

        if(userInfo.role!=='bidder'){
            alert('Admin can not make bids');
            return;
        }

        const confirmation = confirm("Is this your final bid?")
        if(!confirmation){
            return;
        }

        placeBid(productId, amount);
    }
</script>

<div class="container">
    <div class="form-group">
        <label for="userName">Amount:</label>
        <input type="number" id="bidAmount" name="amount" placeholder="Enter your bid" required>
    </div>
    <button on:click={submitBid}>
        <h3>Place bid</h3>
    </button>
</div>

<style>
    .container {
        display: flex;
        justify-content: left;
        align-items: center;
        height: 7vw;
    }
    input {
        width: 60%;
        padding: 15px 10px;
        border: 2px solid #ced4da;
        border-radius: 5px;
        font-size: 1.5vw;
        color: black;
        background-color: #fff;
        transition: border-color 0.2s;
    }
    label {
        font-size: 1.5vw;
        color: black;
    }
    button {
        font-size: 1.5vw;
        width: 30%;
        padding: 1.5vw;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5vw;
        cursor: pointer;
    }
    button:hover {
        background-color: lightgray;
    }
</style>