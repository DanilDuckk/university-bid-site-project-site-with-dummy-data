<script>
    import { modifyProduct } from '../stores/productStore.js'
    let name, description, price;
    export let itemId;

    async function handleChange() {
        if (name === undefined || description === undefined) {
            alert('Please enter a valid data');
            return;
        }

        const confirmation = confirm("Are you sure you want to modify this product?")
        if(!confirmation){
            return;
        }
        await modifyProduct(name,description,price,itemId);
        location.reload();
    }
</script>

<div class="panel">
    <div class="form-group">
        <label for="name">New price</label>
        <input
                id="name"
                type="number"
                bind:value={price}
                class="input-field"
                placeholder="Enter price"
        />
    </div>

    <div class="form-group">
        <label for="name">New Name</label>
        <input
                id="name"
                type="text"
                bind:value={name}
                class="input-field"
                placeholder="Enter name"
        />
    </div>

    <div class="form-group">
        <label for="description">New Description</label>
        <input
                id="description"
                type="text"
                bind:value={description}
                class="input-field"
                placeholder="Enter description"
        />
        <button class="change-button" on:click={handleChange}>Change</button>
    </div>
</div>

<style>
    .panel {
        padding: 1.5vw;
        border-radius: 2vw;
        width: 50%;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        margin-left: 25%;
        flex-direction: column;
    }
    .form-group{
        margin-top: 1vw;
        margin-bottom: 1vw;
    }
    label {
        display: block;
        margin-bottom: 0.5vw;
        font-size: 1.5vw;
    }
    .input-field {
        font-size: 1.5vw;
        width: 65%;
        padding: 1.5vw;
        border: 1px solid #ccc;
        border-radius: 0.5vw;
        margin-bottom: 5px;
    }
    .change-button {
        font-size: 1.5vw;
        width: 30%;
        padding: 1.5vw;
        border: none;
        border-radius: 0.5vw;
        cursor: pointer;
        background-color: #007bff;
        color: white;
    }
    .change-button:hover {
        background-color: #0056b3;
    }
</style>
