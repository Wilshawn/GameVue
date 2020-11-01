<template>
    <section id="SearchBar">
        <div class="container">
            <input v-model="searchText" v-on:keyup.enter="getResults(searchText)" type="text" placeholder="Enter Videogame..." /><i v-on:click="getResults(searchText)" class="fa fa-3x fa-search fa-rotate-90"></i>
        </div>
    </section>
</template>

<script>

const inputValue = document.querySelector('#SearchBar input[type="text"]');
const proxyurl = "https://cors-anywhere.herokuapp.com/";

import axios from 'axios';

export default {
    name: 'SearchBar',
    data(){
        return {
            searchText: '',
            games: []
        }
    },
    methods: {
        getResults(searchString) {
            var url = "https://api.igdb.com/v4/games?search=" + searchString + "&fields=name,id,genres.name,first_release_date,platforms.name,aggregated_rating,url";
            axios({
                url: proxyurl + url,
                method: 'POST',
                headers: {
                    'Client-ID': '712pxo6xha8z3hxqbjem9i50416n8x',
                    'Authorization': '8o9isyr6d7x78exbs8cf6wd0nx4rpw',
                    'Access-Control-Allow-Origin': 'http://localhost:8080'
                }
            })
            .then(res => {
                console.log(res.data);
                res => games = res.data;
                this.searchText = '';
            })
            .catch(err => {
                console.log(err);
            });
        }
    },
    created() {
        var url = "https://api.igdb.com/v4/games?fields=name,id,genres.name,first_release_date,platforms.name,aggregated_rating,url&filter[first_release_date][gt]=1546275599&order=popularity:desc";
        axios({
            url: proxyurl + url,
            method: 'POST',
            headers: {
                'Client-ID': '712pxo6xha8z3hxqbjem9i50416n8x',
                'Authorization': '8o9isyr6d7x78exbs8cf6wd0nx4rpw',
                'Access-Control-Allow-Origin': 'http://localhost:8080'
            }
        })
        .then(res => {
            this.games = res.data;
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }
}
</script>

<style scoped>
#SearchBar {
    padding: 30px 10px;
    background: #fff;
    text-align: center;
    margin: 0 auto;
    color: #EE1B15;
}
#SearchBar input {
    background: transparent;
    border: 0;
    border-bottom: 10px solid #181818;
    font: bold 100% "Lora", serif;
    color: #EE1B15;
    
}
#SearchBar input:focus {
    outline-width: 0;
}
#SearchBar i.fa {
    position: absolute;
    right: 0;
    font-size: 100%;
}
#SearchBar i.fa,
::placeholder {
    color: #EE1B15;
}
::placeholder {
    opacity: .3;
}

</style>