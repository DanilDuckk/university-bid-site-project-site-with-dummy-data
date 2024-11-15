<script>
    import Filter from '../components/Filter.svelte'
    import List from '../components/List.svelte'
    import { getUserRole } from "../stores/userStore.js";

    let searchTerm = ''

    let userRole;
    (async () => {
        try {
            userRole = await getUserRole();
        } catch (error) {
            console.error('Error fetching user role:', error);
        }
    })();

    function handleCreateRedirection() {
        window.location.href = '/admin/create';
    }
</script>

<body>
<div class="search-container">
    <input type="text" bind:value="{searchTerm}" placeholder="Search..." />
    {#if userRole === 'admin'}
        <button on:click={handleCreateRedirection}>Create</button>
    {/if}
</div>

<main>
    <Filter/>
    <List {searchTerm}/>
</main>
</body>

<style>
    .search-container {
        display: flex;
        justify-content: center;
        padding: 2vw;
    }

    input {
        width: 50vw;
        padding: 1vw;
        font-size: 1.6vw;
        border: 0.2vw solid #ccc;
    }

    main {
        display: flex;
        padding: 2vw;
    }

    button {
        font-size: 1.5vw;
        width: 10%;
        margin-left: 1.5vw;
        border: none;
        border-radius: 0.5vw;
        cursor: pointer;
    }

    button:hover {
        background-color: lightgray;
    }
</style>