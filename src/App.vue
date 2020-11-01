<template>
  <div id="app">
    <div id="overlay" style="display: none;"></div>
    <section id="SearchBar">
        <div class="container">
            <input v-model="searchText" v-on:keyup.enter="getResults(searchText)" type="text" placeholder="Enter Videogame..." /><i v-on:click="getResults(searchText)" class="fa fa-3x fa-search fa-rotate-90"></i>
        </div>
    </section>
    <div class="layout">
      <div>
        <SearchFilter v-bind:games="games" />
      </div>
      <div>
        <SearchResults v-bind:games="games" />
      </div>
    </div>
    <div id="loading-gif" style="display: none;">
        <img src="./assets/images/loading-results.gif" />
    </div>
    <button @click="goToTop()" id="topButton" title="Go to Top">Top</button>
  </div>
</template>

<script>
const inputValue = document.querySelector('#SearchBar input[type="text"]');
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const client_id = "712pxo6xha8z3hxqbjem9i50416n8x";
const client_secret = "ze7wwlheeixze4toghuc90pt4af42w";

import axios from 'axios';
import SearchFilter from './components/SearchFilter.vue'
import SearchResults from './components/SearchResults.vue'

export default {
  name: 'app',
  components: {
    SearchFilter,
    SearchResults
  },
  data(){
    return {
      searchText: '',
      games: [],
      accessToken: '',
    }
  },
  methods: {
    // populate results on load
    populateResults(accessToken) {
      // covert unix timestamp to human date
      var convertTS = function(timestamp_date) {
        var months_arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var date = new Date((timestamp_date + 14400) * 1000);
        var year = date.getFullYear()
        var month = months_arr[date.getMonth()];
        var day = date.getDate();
        var new_date = month + ' ' + day + ', ' + year;
        return new_date;
      }

      var addNewDate = function (gameList) {
        gameList.forEach(function(game) {
          if(game.first_release_date) {
            game["human_date"] = convertTS(game.first_release_date);
          }
        });
      }

       var addDeveloperAndPublisher = function(gameList) {
        gameList.forEach(function(game) {
          game["developer"] = 'N/A';
          game["publisher"] = 'N/A';
          var involvedCompanies = game.involved_companies;

          if (involvedCompanies) {
            involvedCompanies.forEach(function(involved_company) {
              if (involved_company.publisher) {
                game["publisher"] = involved_company.company.name;
              }

              if (involved_company.developer) {
                game["developer"] = involved_company.company.name;
              }
            })
          }
        })
      }

      var date = new Date();
      var greaterThanYear = date.getFullYear() - 1;
      var greaterThanYearTS = Date.parse('31 Dec ' + greaterThanYear + ' 16:59:59 GMT')/1000;
      var accessTokenURL = "https://id.twitch.tv/oauth2/token?client_id=" + client_id + "&client_secret="+ client_secret + "&grant_type=client_credentials";

      var url = "https://api.igdb.com/v4/games?fields=name,id,genres.name,first_release_date,platforms.name,aggregated_rating,url,cover.image_id,summary,involved_companies.developer,involved_companies.publisher,involved_companies.company.name&filter[first_release_date][gt]=" + greaterThanYearTS + "&order=popularity:desc&limit=25";

      // get access token
      axios({
          url: proxyurl + accessTokenURL,
          method: 'POST',
          headers: {
              'Access-Control-Allow-Origin': 'http://localhost:8080/',
          }
      })
      .then(res => {
        this.accessToken = res.data.access_token;
        axios({
          url: proxyurl + url,
          method: 'POST',
          headers: {
              'Client-ID': client_id,
              'Authorization': 'Bearer ' + res.data.access_token,
              'Access-Control-Allow-Origin': 'http://localhost:8080/'
          }
        })
        .then(res => {
          this.games = res.data;
          console.log(this.games);
          addNewDate(this.games);
          addDeveloperAndPublisher(this.games);
          loadingGifToggle("off");
        })
        .catch(err => {
        });
      })
      .catch(err => {
      });
    },
 
    // get results based on search value
    getResults(searchString) {
      var loadingGifToggle = function(toggle) {
        var loadingGif = document.getElementById('loading-gif');
        var overlay = document.getElementById('overlay');

        if (toggle == "on") {
          console.log("loading gif on");
          loadingGif.style.display = "block";
          overlay.style.display = "block";
        } else {
          console.log("loading gif off");
          loadingGif.style.display = "none";
          overlay.style.display = "none";
        }
      };

     var convertTS = function(timestamp_date) {
        var months_arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var date = new Date((timestamp_date + 14400) * 1000);
        var year = date.getFullYear()
        var month = months_arr[date.getMonth()];
        var day = date.getDate();
        var new_date = month + ' ' + day + ', ' + year;
        return new_date;
      };

      var addNewDate = function (gameList) {
        gameList.forEach(function(game) {
          if(game.first_release_date) {
            game["human_date"] = convertTS(game.first_release_date);
          }
        });
      };

      var addDeveloperAndPublisher = function(gameList) {
        gameList.forEach(function(game) {
          game["developer"] = 'N/A';
          game["publisher"] = 'N/A';
          var involvedCompanies = game.involved_companies;

          if (involvedCompanies) {
            involvedCompanies.forEach(function(involved_company) {
              if (involved_company.publisher) {
                game["publisher"] = involved_company.company.name;
              }

              if (involved_company.developer) {
                game["developer"] = involved_company.company.name;
              }
            })
          }
        })
      };

      loadingGifToggle("on");
      if (searchString !== '') {
        var url = "https://api.igdb.com/v4/games?search=" + searchString + "&fields=name,id,genres.name,first_release_date,platforms.name,aggregated_rating,url,cover.image_id,summary,involved_companies.developer,involved_companies.publisher,involved_companies.company.name&limit=25";

        var filterBoxes = Array.prototype.slice.call(document.querySelectorAll('input[type="checkbox"]'));

        filterBoxes.forEach(function(box) {
            box.checked = false;
        });

        axios({
            url: proxyurl + url,
            method: 'GET',
            headers: {
              'Client-ID': client_id,
              'Authorization': 'Bearer ' + this.accessToken,
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(res => {
            this.games = res.data;
            addNewDate(this.games);
            addDeveloperAndPublisher(this.games);
            this.searchText = '';
            loadingGifToggle("off");
        })
        .catch(err => {
        });
      }
      
    },
    displayTopButton: function() {
      var topButton = document.getElementById("topButton");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
    },
    goToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  created() {
    this.populateResults();
    window.addEventListener('scroll', this.displayTopButton);
  },
  destroyed() {
    window.addEventListener('scroll', this.displayTopButton);
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Lora:400,700|Raleway:400,700&display=swap');

  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline
  }

  article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,input,textarea,label {
    display: block
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #FFF;
    color: #484848;
    font-family: 'Raleway',sans-serif;
    font-size: 30px;
  }

  a {
    text-decoration: none;
    color: inherit
  }

  img {
    max-width: 100%;
    height: auto
  }

  .container {
    display: grid;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  * {
    box-sizing: border-box
  }

  .layout {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
    grid-column-gap: 10px;
    
  }
  @media (min-width: 1200px) {
    .layout {
      grid-template-columns: 30% 70%;
      
      
    }
  }
  strong {
    font-weight: bold;
  }
  #SearchBar {
    padding: 30px 10px;
    background: #fff;
    text-align: center;
    margin: 0 auto;
    color: #181818;
  }
  #SearchBar input {
    background: transparent;
    border: 0;
    border-bottom: 1px solid #181818;
    font: bold 100% "Lora", serif;
  }
  #SearchBar input:focus {
      outline-width: 0;
  }
  #SearchBar i.fa {
      position: absolute;
      right: 0;
      font-size: 100%;
      cursor: pointer;
  }
  #SearchBar i.fa,
  ::placeholder {
      color: #181818;
  }
  ::placeholder {
      opacity: .3;
  }
  .loading-gif {
      display: block;
      text-align: center;
  }
  #app {
    position: relative;
  }
  #loading-gif {
    position: fixed;
    top: 30%;
    left: 0;
    right: 0;
    z-index: 2;
    text-align: center;
  }
  #overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #f0f0f0;
    z-index: 1;
    opacity: .5;
  }
  #topButton {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    background: #181818;
    color: #fff;
    cursor: pointer;
    padding: 10px 20px;
    font-weight: bold;
    border: 0;
    outline: 0;
  }
  span.fa.fa-chevron-up,
  span.fa.fa-chevron-down {
    font-size: .75em;
    position: relative;
    bottom: 2px;
  }
</style>
