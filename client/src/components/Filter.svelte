<script>
    import { selectedFilter } from '../stores/productStore.js';

    const updateFilter = (filter) => {
        selectedFilter.set(filter);
    };
</script>

<div class="filters">
    <h3>Filters</h3>
    <label>
        <input type="radio" name="sort" value="A-Z" on:change={() => updateFilter('A-Z')}>
        A-Z
    </label>
    <label>
        <input type="radio" name="sort" value="Price" on:change={() => updateFilter('Price')}>
        Price (Low to High)
    </label>
    <label>
        <input type="radio" name="sort" value="Pet" on:change={() => updateFilter('Pet')}>
        Can be a pet
    </label>
</div>

<style>
    .filters {
        width: 20vw;
        padding: 2vw;
        background-color: #f0f0f0;
    }

    h3 {
        font-size: 1.5vw;
    }
    input {
        margin-right: 1vw;;
    }
    label {
        display: block;
        text-align: left;
        font-size: 1.2vw;
        margin-top: 1vw;
    }
</style>