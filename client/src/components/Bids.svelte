<script>
    import {onMount} from "svelte";
    import { bidStore, fetchBidsDetails } from "../stores/bidStore.js";
    import { fetchUserName } from "../stores/userStore.js";
    const params = new URLSearchParams(window.location.search);
    const itemId = params.get('id');
    let bids = [];

    async function displayBidsDetails() {
        const bidsContainer = document.querySelector('.bids-container');

        const bidsWithUsernames = await Promise.all(bids.map(async bid => {
            const userName = await fetchUserName(bid.userId);
            return {
                ...bid,
                userName
            };
        }));

        bidsContainer.innerHTML = '';

        bidsWithUsernames.forEach(bid => {
            const bidDiv = document.createElement('div');
            bidDiv.classList.add('bid-item');
            bidDiv.textContent = `${bid.userName}: ${bid.amount}$`;
            bidsContainer.appendChild(bidDiv);
        });
    }

    onMount(async () => {
        await fetchBidsDetails(itemId);
        bids = $bidStore;
        await displayBidsDetails();
    });
</script>

<h3>Current Bids</h3>
<div class="bids-container"></div>

<style>
    .bids-container {
        display: flex;
        flex-direction: column;
    }
</style>