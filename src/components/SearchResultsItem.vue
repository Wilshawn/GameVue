<template>
    <div class="SearchItems" :id="game.id">
        <div v-if="game.cover" class="game-cover">
            <img :src="'https://images.igdb.com/igdb/image/upload/t_1080p/' + game.cover.image_id + '.jpg'" />
        </div>
        <div v-else class="game-cover">
            <img src="../assets/images/boxart-not-found.jpg" />
        </div>
        <div>
            <h3 class="search-results-header">{{ game.name }}</h3>
            <div v-if="game.summary"><p cl>{{ game.summary }}</p></div>
            <div class="results-details-layout">
                <div v-if="game.human_date"><strong>Release Date:</strong><br>{{ game.human_date }}</div>
                <div v-else><strong>Release Date:</strong><br>N/A</div>

                <div v-if="game.aggregated_rating >= 75"><strong>Rating:</strong><br><span class="game-rating rating-high">{{ Math.round(game.aggregated_rating) }}</span></div>
                <div v-else-if="game.aggregated_rating >= 50"><strong>Rating:</strong><br><span class="game-rating rating-mid">{{ Math.round(game.aggregated_rating) }}</span></div>
                <div v-else-if="game.aggregated_rating >= 0"><strong>Rating:</strong><br><span class="game-rating rating-low">{{ Math.round(game.aggregated_rating) }}</span></div>
                <div v-else><strong>Rating:</strong><br><span class="game-rating">N/A</span></div>

                <div v-if="!game.genres"><strong>Genre:</strong><br>N/A</div>
                <div v-else-if="game.genres.length >= 2"><strong>Genre:</strong><br>{{ game.genres[0].name }},<br> {{ game.genres[1].name }}</div>
                <div v-else-if="game.genres.length == 1"><strong>Genre:</strong><br>{{ game.genres[0].name }}</div>
                <div v-else><strong>Genre:</strong><br>N/A</div>

                <div v-if="!game.platforms"><strong>Platform:</strong><br>N/A</div>
                <div v-else-if="game.platforms.length == 0"><strong>Platform:</strong><br>N/A</div>
                <div v-else-if="game.platforms.length > 2"><strong>Platform:</strong><br>Multi-platform</div>
                <div v-else-if="game.platforms.length == 2"><strong>Platform:</strong><br>{{ game.platforms[0].name }},<br>{{ game.platforms[1].name }}</div>
                <div v-else><strong>Platform:</strong><br>{{ game.platforms[0].name }}</div>

                <div><strong>Developer:</strong><br>{{ game.developer }}</div>

                <div><strong>Publisher:</strong><br>{{ game.publisher }}</div>

            </div>
            <div class="btn">
                <a :href="game.url" target="_blank">View Details</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchResults',
    props: ["game"]
}
</script>

<style scoped>
    .SearchItems {
        display: grid;
        /* grid-template-columns: 1fr; */
        grid-column-gap: 10px;
    }
    .search-item-container p {
        font-size: 55%;

        overflow: auto;
        max-height: 100px;
        text-align: justify;
        margin-bottom: 20px;
    }
    .game-cover {
        justify-self: center;
        align-self: center;
    }
    .game-cover img {
        border: 1px solid #484848;
        max-width: 200px;
        margin-bottom: 10px;
    }
    @media (min-width: 768px) {
        .SearchItems {
            grid-template-columns: 30% 70%;
        }
        .game-cover img {
            margin-bottom: 0;
        }
    }
    .search-results-header {
        font: bold 90% "Lora", serif;
        color: #181818;
        margin-bottom: 10px;
        text-align: center;
    }
    .results-details-layout {
        display: flex;
        text-align: center;
        font-size: 55%;
        flex-wrap: wrap;
    }
    .results-details-layout div {
        flex-basis: 50%;
        margin: 10px 0;
    }
    .btn {
        text-align: center;
        margin: 10px 0;
    }
    .btn a {
        padding: 10px 20px;
        color: #fff;
        background: #181818;
        margin: 20px 0;
        border: 1px solid #181818;
        font-size: 55%;
        font-weight: bold;
    }
    .btn a:hover {
        background: #fff;
        color: #181818;
    }
    .game-rating {
        background: #efefef;
        padding: 3px 7px;
        font-weight: bold;
        margin-top: 3px;
        display: inline-block;
    }
    .rating-high {
        background: #66CC33;
        color: #fff;
    }
    .rating-mid {
        background: #FFCC33;
        color: #fff;
    }
    .rating-low {
        background: #FF1D00;
        color: #fff;
    }
    @media (min-width: 768px) {
        .results-details-layout div {
            flex-basis: 33.3%;
            flex-wrap: nowrap;
        }
    }
</style>