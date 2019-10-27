<template>
    <section>
        <h2 class="filter-header">Filter</h2>
        <div id="SearchFilter">
            <div v-if="doesGenreExist">
                <h3 class="genre-header">Genre</h3>
                <div v-bind:key="index" v-for="(category,index) in genreNameResults">
                    <label class="checkbox-label">
                        <input class="genre" type="checkbox" :value="category">
                        <span class="checkbox-custom"></span>
                        {{ category }}
                    </label>
                </div>
            </div>
            <div v-if="doesPlatformExist">
                <h3 class="genre-header">Platform</h3>
                <div v-bind:key="index" v-for="(category,index) in platformNameResults">
                    <label class="checkbox-label">
                        <input class="platform" type="checkbox" :value="category">
                        <span class="checkbox-custom"></span>
                        {{ category }}
                    </label>
                </div>
            </div>
            <div class="search-buttons">
                <div>
                    <a @click="clearAll">Clear All</a>
                </div>
                <div>
                    <a @click="applyButtonPressed(games)">Apply</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import app from '../App';

export default {
    name: 'SearchFilter',
    components: {
        app
    },
    props: ["games"],
    data(){
        return {
            doesGenreExist: false,
            doesPlatformExist: false,
            genreNameResults: [],
            platformNameResults: []
        }
    },
    methods: {
        // when apply button is pressed, it will initialize the filter
        applyButtonPressed(games) {
            var loadingGifToggle = function(toggle) {
                var loadingGif = document.getElementById('loading-gif');
                var overlay = document.getElementById('overlay');
                if (toggle == "on") {
                    loadingGif.style.display = "block";
                    overlay.style.display = "block";
                } else {
                    loadingGif.style.display = "none";
                    overlay.style.display = "none";
                }
            };

            var applyFilter = function(type, value, gameList) {
                gameList.forEach(function(game) {
                    if (game[type]) {
                        var gameType = game[type];
                        var passFilter = false;

                        gameType.forEach(function(type) {
                            if (type.name == value) {
                                passFilter = true;
                            }   
                        });

                        if (!passFilter) {
                            var gameBlock = document.getElementById(game.id);
                            gameBlock.style.display = "none";
                        }
                    } else {
                        var gameBlock = document.getElementById(game.id);
                        gameBlock.style.display = "none";
                    }
                });
            };

            loadingGifToggle("on");

            var genreChecked = [];
            var platformChecked = [];
            var gameResults = Array.prototype.slice.call(document.querySelectorAll('.SearchItems'));

            genreChecked = Array.prototype.slice.call(document.querySelectorAll('input[type="checkbox"].genre:checked'));
            platformChecked = Array.prototype.slice.call(document.querySelectorAll('input[type="checkbox"].platform:checked'));
            gameResults.forEach(function(game) {
                game.style.display = "grid";
            });
            
            
            genreChecked.forEach(function(genre) {
                applyFilter("genres", genre.value, games);
            });

            platformChecked.forEach(function(platform) {
                applyFilter("platforms", platform.value, games);
            });

            loadingGifToggle("off");
        },
        // when clear all button is pressed, it removes the filters
        clearAll() {
            var loadingGifToggle = function(toggle) {
                var loadingGif = document.getElementById('loading-gif');
                var overlay = document.getElementById('overlay');
                if (toggle == "on") {
                    loadingGif.style.display = "block";
                    overlay.style.display = "block";
                } else {
                    loadingGif.style.display = "none";
                    overlay.style.display = "none";
                }
            };

            loadingGifToggle("on");

            var gameResults = Array.prototype.slice.call(document.querySelectorAll('.SearchItems'));
            var filterBoxes = Array.prototype.slice.call(document.querySelectorAll('input[type="checkbox"]'));

            gameResults.forEach(function(game) {
                game.style.display = "grid";
            });

            filterBoxes.forEach(function(box) {
                box.checked = false;
            });

            loadingGifToggle("off");
        },
        
        // populate filters when results come back
        populateFilter() {
            var gameList = this.games;
            var doesGenreExist = this.doesGenreExist;
            var genreNameResults = [];
            this.genreNameResults = [];

            // run through each game
            gameList.forEach(function(game) {
                // genre exist on game set variable
                if (game.hasOwnProperty("genres")) {
                    if (!doesGenreExist) {
                        doesGenreExist = true;
                    }
                    var genreArray = game.genres;
                    // for each genre on particular game, check if genre is unique 
                    // and not on list.
                    // if its not, add it
                    genreArray.forEach(function(genre) {
                        var genreName = genre.name;
                        if (genreNameResults.length > 0) {
                            var isGenreIncluded = genreNameResults.every(function(genreUniqueName) {
                                return genreName != genreUniqueName;
                            });
                            if (isGenreIncluded) {
                                genreNameResults.push(genreName);
                            }
                        } else if (genreNameResults.length == 0) {
                            genreNameResults.push(genreName);
                        }
                    });
                }
            });

            this.genreNameResults = genreNameResults;
            this.doesGenreExist = doesGenreExist;
        },
        // populate platform options when results come back
        populatePlatform() {
            // console.log("function runs");

            var gameList = this.games;
            var doesPlatformExist = this.doesPlatformExist;
            var platformNameResults = [];
            this.platformNameResults = [];

            // run through each game
            gameList.forEach(function(game) {
                // genre exist on game set variable
                if (game.hasOwnProperty("platforms")) {
                    if (!doesPlatformExist) {
                        doesPlatformExist = true;
                    }
                    var platformArray = game.platforms;
                    // for each genre on particular game, check if genre is unique 
                    // and not on list.
                    // if its not, add it
                    platformArray.forEach(function(platform) {
                        var platformName = platform.name;
                        if (platformNameResults.length > 0) {
                            var isPlatformIncluded = platformNameResults.every(function(platformUniqueName) {
                                return platformName != platformUniqueName;
                            });
                            if (isPlatformIncluded) {
                                platformNameResults.push(platformName);
                            }
                        } else if (platformNameResults.length == 0) {
                            platformNameResults.push(platformName);
                        }
                    });
                }
            });

            this.platformNameResults = platformNameResults;
            this.doesPlatformExist = doesPlatformExist;
        }
    },
    watch: {
        games: function() {
            this.populateFilter();
            this.populatePlatform();
        }
    }
}
</script>

<style scoped>
    #SearchFilter {
        background: #484848;
        padding: 10px 25px;
        color: #fff;
    }
    .filter-header {
        color: #EE1B15;
        font: bold 100% "Lora", serif;
        margin-top: 40px;
        margin-bottom: 10px;
    }
    .genre-header {
        color: #fff;
        font: bold 75% "Lora", serif;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .checkbox-label {
        display: block;
        position: relative;
        cursor: pointer;
        font-size: 60%;
        line-height: 24px;
        /* height: 24px;
        width: 24px; */
        clear: both;
        text-indent: 35px;
        margin: 10px 0 10px 10px;
    }
    .checkbox-label input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }
    .checkbox-label .checkbox-custom {
        position: absolute;
        top: 0;
        left: 0;
        height: 24px;
        width: 24px;
        background: #fff;
        transition: all 0.3s ease-out;
    }
    .checkbox-label .checkbox-custom:after {
        position: absolute;
        content: "";
        left: 12px;
        top: 12px;
        height: 0;
        width: 0;
        border: solid #484848;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(0deg) scale(0);
        -ms-transform: rotate(0deg) scale(0);
        transform: rotate(0deg) scale(0);
        opacity: 1;
        transition: all 0.3s ease-out;
    }
    .checkbox-label input:checked ~ .checkbox-custom {
        background: #fff;
        -webkit-transform: rotate(0deg) scale(1);
        -ms-transform: rotate(0deg) scale(1);
        transform: rotate(0deg) scale(1);
        opacity: 1;
        border: 2px solid #fff;
    }
    .checkbox-label input:checked ~ .checkbox-custom::after {
        -webkit-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
        opacity: 1;
        left: 8px;
        top: 3px;
        width: 6px;
        height: 12px;
        border: solid #484848;
        border-width: 0 2px 2px 0;
        background: transparent;
    }
    .search-buttons {
        display: grid;
        grid-template-columns: 50% 50%;
        margin: 20px 10px;
        
    }
    .search-buttons a {
        padding: 10px 20px;
        color: #fff;
        background: #EE1B15;
        margin: 20px 0;
        border: 0;
        font-size: 65%;
        font-weight: bold;
        cursor: pointer
    }
    .search-buttons a:hover {
        background: #cc160f;
    }
</style>