<template>
    <section id="SearchResults">
        <div v-if="games.length !== 0">
            <div v-bind:key="game.id" v-for="game in games" class="search-item-container">
                <SearchResultsItem v-bind:game="game" />
            </div>
        </div>
        <div v-else>
            <p class="no-results">No Search Results Found</p>
        </div>
    </section>
</template>

<script>
import app from '../App';
import SearchResultsItem from './SearchResultsItem';

export default {
    name: 'SearchResults',
    components: {
        app,
        SearchResultsItem
    },
    props: ["games"]
}
</script>

<style scoped>
    #SearchResults {
        margin: 20px 0;
        position: relative;
    }
    .no-results {
        text-align: center;
    }
    .search-item-container {
        padding: 40px;
        margin: 20px 0;
        background: #f6f6f6;
    }
</style>