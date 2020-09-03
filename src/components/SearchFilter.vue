<template>
    <section>
        <h2 @click="toggleFilter('all')" class="filter-header">Filter <span class="fa fa-chevron-up"></span></h2>
        <div id="SearchFilter">
            <div v-if="doesGenreExist">
                <h3 @click="toggleFilter('genre')" class="genre-header">Genre <span class="fa fa-chevron-up"></span></h3>
                <div class="genre-filter-section">
                    <div v-bind:key="index" v-for="(category,index) in genreNameResults">
                        <label class="checkbox-label">
                            <input class="genre" type="checkbox" :value="category">
                            <span class="checkbox-custom"></span>
                            {{ category }}
                        </label>
                    </div>
                </div>
            </div>
            <div v-if="doesPlatformExist">
                <h3 @click="toggleFilter('platform')" class="genre-header">Platform <span class="fa fa-chevron-up"></span></h3>
                <div class="platform-filter-section">
                    <div v-bind:key="index" v-for="(category,index) in platformNameResults">
                        <label class="checkbox-label">
                            <input class="platform" type="checkbox" :value="category">
                            <span class="checkbox-custom"></span>
                            {{ category }}
                        </label>
                    </div>
                </div>
            </div>
            <div v-if="doesCompanyExist">
                <h3 @click="toggleFilter('company')" class="genre-header">Company <span class="fa fa-chevron-up"></span></h3>
                <div class="company-filter-section">
                    <div v-bind:key="index" v-for="(category,index) in companyNameResults">
                        <label class="checkbox-label">
                            <input class="company" type="checkbox" :value="category">
                            <span class="checkbox-custom"></span>
                            {{ category }}
                        </label>
                    </div>
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
            doesCompanyExist: false,
            genreNameResults: [],
            platformNameResults: [],
            companyNameResults: [],
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
                var gameTypeKey = type;
                gameList.forEach(function(game) {
                    if (game[type]) {
                        var gameType = game[type];
                        var passFilter = false;

                        gameType.forEach(function(type) {
                            if (gameTypeKey == 'involved_companies') {
                                if (type.company.name == value) {
                                    passFilter = true;
                                }
                            } else {
                                if (type.name == value) {
                                    passFilter = true;
                                }
                            }   
                        });

                        if (!passFilter) {
                            var gameBlock = document.getElementById(game.id).parentNode;
                            gameBlock.style.display = "none";
                        }
                    } else {
                        var gameBlock = document.getElementById(game.id).parentNode;
                        gameBlock.style.display = "none";
                    }
                });
            };

            loadingGifToggle("on");

            var genreChecked = [];
            var platformChecked = [];
            var companyChecked = [];
            var gameResults = Array.prototype.slice.call(document.querySelectorAll('.SearchItems'));

            genreChecked = Array.prototype.slice.call(document.querySelectorAll('input[type="checkbox"].genre:checked'));
            platformChecked = Array.prototype.slice.call(document.querySelectorAll('input[type="checkbox"].platform:checked'));
            companyChecked = Array.prototype.slice.call(document.querySelectorAll('input[type="checkbox"].company:checked'));
            gameResults.forEach(function(game) {
                game.style.display = "grid";
            });
            
            
            genreChecked.forEach(function(genre) {
                applyFilter("genres", genre.value, games);
            });

            platformChecked.forEach(function(platform) {
                applyFilter("platforms", platform.value, games);
            });

            companyChecked.forEach(function(company) {
                applyFilter("involved_companies", company.value, games);
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

            var gameResults = Array.prototype.slice.call(document.querySelectorAll('.search-item-container'));
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
        },
        populateCompany() {
            // console.log("function runs");

            var gameList = this.games;
            var doesCompanyExist = this.doesCompanyExist;
            var companyNameResults = [];
            this.companyNameResults = [];

        // run through each game
            gameList.forEach(function(game) {
                // genre exist on game set variable
                if (game.hasOwnProperty("involved_companies")) {
                    if (!doesCompanyExist) {
                        doesCompanyExist = true;
                    }
                    var companyArray = game.involved_companies;
                    // for each genre on particular game, check if genre is unique 
                    // and not on list.
                    // if its not, add it
                    companyArray.forEach(function(involved_company) {
                        var companyName = involved_company.company.name;
                        if (companyNameResults.length > 0) {
                            var isCompanyIncluded = companyNameResults.every(function(companyUniqueName) {
                                return companyName != companyUniqueName;
                            });
                            if (isCompanyIncluded) {
                                companyNameResults.push(companyName);
                            }
                        } else if (companyNameResults.length == 0) {
                            companyNameResults.push(companyName);
                        }
                    });
                }
            });

            this.companyNameResults = companyNameResults;
            this.doesCompanyExist = doesCompanyExist;
        },
        // toggle filters
        toggleFilter(filterName) {
            if (filterName != 'all') {
                var filter = document.getElementsByClassName(filterName + "-filter-section")[0];
                var filterIcon = filter.previousElementSibling.firstElementChild;
                if (filter) {
                    if (filter.style.display === "none") {
                        filter.style.display = "block";
                        filterIcon.classList.add('fa-chevron-up');
                        filterIcon.classList.remove('fa-chevron-down');
                    } else {
                        filter.style.display = "none";
                        filterIcon.classList.add('fa-chevron-down');
                        filterIcon.classList.remove('fa-chevron-up');
                    }
                }
            } else if (filterName == 'all') {
                var filter = document.getElementById('SearchFilter');
                var filterIcon = filter.previousElementSibling.firstElementChild;
                if (filter) {
                    if (filter.style.display === "none") {
                        filter.style.display = "block";
                        filterIcon.classList.add('fa-chevron-up');
                        filterIcon.classList.remove('fa-chevron-down');
                    } else {
                        filter.style.display = "none";
                        filterIcon.classList.add('fa-chevron-down');
                        filterIcon.classList.remove('fa-chevron-up');
                    }
                }
            }
            
           
        }
    },
    watch: {
        games: function() {
            this.populateFilter();
            this.populatePlatform();
            this.populateCompany();
            if (window.innerWidth < 1200) {
                this.toggleFilter('all');
            }
        }
    }
}
</script>

<style scoped>
    #SearchFilter {
        padding: 10px 25px;
        color: #181818;
    }
    #SearchFilter > div {
        margin-bottom: 25px;
    }
    #SearchFilter h3,
    .filter-header {
        cursor: pointer;
    }
    .filter-header {
        color: #181818;
        font: bold 100% "Lora", serif;
        margin-top: 40px;
        margin-bottom: 0;
    }
    .genre-header {
        color: #181818;
        font: bold 75% "Lora", serif;
        margin-top: 10px;
        margin-bottom: 15px;
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
        border: 1px solid #181818;
    }
    .checkbox-label .checkbox-custom:after {
        position: absolute;
        content: "";
        left: 12px;
        top: 12px;
        height: 0;
        width: 0;
        border: solid #181818;
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
        border: 2px solid #181818;
    }
    .checkbox-label input:checked ~ .checkbox-custom::after {
        -webkit-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
        opacity: 1;
        left: 7px;
        top: 1px;
        width: 6px;
        height: 12px;
        border: solid #181818;
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
        background: #181818;
        margin: 20px 0;
        border: 1px solid #181818;
        font-size: 65%;
        font-weight: bold;
        cursor: pointer
    }
    .search-buttons a:hover {
        background: #fff;
        color: #181818;
    }
</style>