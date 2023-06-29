(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"037a":function(e,t,a){},2306:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticStyle:{display:"none"},attrs:{id:"overlay"}}),a("section",{attrs:{id:"SearchBar"}},[a("div",{staticClass:"container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],attrs:{type:"text",placeholder:"Enter Videogame..."},domProps:{value:e.searchText},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getResults(e.searchText)},input:function(t){t.target.composing||(e.searchText=t.target.value)}}}),a("i",{staticClass:"fa fa-3x fa-search fa-rotate-90",on:{click:function(t){return e.getResults(e.searchText)}}})])]),a("div",{staticClass:"layout"},[a("div",[a("SearchFilter",{attrs:{games:e.games}})],1),a("div",[a("SearchResults",{attrs:{games:e.games}})],1)]),e._m(0),a("button",{attrs:{id:"topButton",title:"Go to Top"},on:{click:function(t){return e.goToTop()}}},[e._v("Top")])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"none"},attrs:{id:"loading-gif"}},[n("img",{attrs:{src:a("f727")}})])}],o=(a("7f7f"),a("ac6a"),a("cee4")),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h2",{staticClass:"filter-header",on:{click:function(t){return e.toggleFilter("all")}}},[e._v("Filter "),a("span",{staticClass:"fa fa-chevron-up"})]),a("div",{attrs:{id:"SearchFilter"}},[e.doesGenreExist?a("div",[a("h3",{staticClass:"genre-header",on:{click:function(t){return e.toggleFilter("genre")}}},[e._v("Genre "),a("span",{staticClass:"fa fa-chevron-up"})]),a("div",{staticClass:"genre-filter-section"},e._l(e.genreNameResults,(function(t,n){return a("div",{key:n},[a("label",{staticClass:"checkbox-label"},[a("input",{staticClass:"genre",attrs:{type:"checkbox"},domProps:{value:t}}),a("span",{staticClass:"checkbox-custom"}),e._v("\n                        "+e._s(t)+"\n                    ")])])})),0)]):e._e(),e.doesPlatformExist?a("div",[a("h3",{staticClass:"genre-header",on:{click:function(t){return e.toggleFilter("platform")}}},[e._v("Platform "),a("span",{staticClass:"fa fa-chevron-up"})]),a("div",{staticClass:"platform-filter-section"},e._l(e.platformNameResults,(function(t,n){return a("div",{key:n},[a("label",{staticClass:"checkbox-label"},[a("input",{staticClass:"platform",attrs:{type:"checkbox"},domProps:{value:t}}),a("span",{staticClass:"checkbox-custom"}),e._v("\n                        "+e._s(t)+"\n                    ")])])})),0)]):e._e(),e.doesCompanyExist?a("div",[a("h3",{staticClass:"genre-header",on:{click:function(t){return e.toggleFilter("company")}}},[e._v("Company "),a("span",{staticClass:"fa fa-chevron-up"})]),a("div",{staticClass:"company-filter-section"},e._l(e.companyNameResults,(function(t,n){return a("div",{key:n},[a("label",{staticClass:"checkbox-label"},[a("input",{staticClass:"company",attrs:{type:"checkbox"},domProps:{value:t}}),a("span",{staticClass:"checkbox-custom"}),e._v("\n                        "+e._s(t)+"\n                    ")])])})),0)]):e._e(),a("div",{staticClass:"search-buttons"},[a("div",[a("a",{on:{click:e.clearAll}},[e._v("Clear All")])]),a("div",[a("a",{on:{click:function(t){return e.applyButtonPressed(e.games)}}},[e._v("Apply")])])])])])},l=[],c={name:"SearchFilter",components:{app:O},props:["games"],data:function(){return{doesGenreExist:!1,doesPlatformExist:!1,doesCompanyExist:!1,genreNameResults:[],platformNameResults:[],companyNameResults:[]}},methods:{applyButtonPressed:function(e){var t=function(e){var t=document.getElementById("loading-gif"),a=document.getElementById("overlay");"on"==e?(t.style.display="block",a.style.display="block"):(t.style.display="none",a.style.display="none")},a=function(e,t,a){var n=e;a.forEach((function(a){if(a[e]){var r=a[e],s=!1;if(r.forEach((function(e){"involved_companies"==n?e.company.name==t&&(s=!0):e.name==t&&(s=!0)})),!s){var o=document.getElementById(a.id).parentNode;o.style.display="none"}}else{o=document.getElementById(a.id).parentNode;o.style.display="none"}}))};t("on");var n=[],r=[],s=[],o=Array.prototype.slice.call(document.querySelectorAll(".SearchItems"));n=Array.prototype.slice.call(document.querySelectorAll('input[type="checkbox"].genre:checked')),r=Array.prototype.slice.call(document.querySelectorAll('input[type="checkbox"].platform:checked')),s=Array.prototype.slice.call(document.querySelectorAll('input[type="checkbox"].company:checked')),o.forEach((function(e){e.style.display="grid"})),n.forEach((function(t){a("genres",t.value,e)})),r.forEach((function(t){a("platforms",t.value,e)})),s.forEach((function(t){a("involved_companies",t.value,e)})),t("off")},clearAll:function(){var e=function(e){var t=document.getElementById("loading-gif"),a=document.getElementById("overlay");"on"==e?(t.style.display="block",a.style.display="block"):(t.style.display="none",a.style.display="none")};e("on");var t=Array.prototype.slice.call(document.querySelectorAll(".search-item-container")),a=Array.prototype.slice.call(document.querySelectorAll('input[type="checkbox"]'));t.forEach((function(e){e.style.display="grid"})),a.forEach((function(e){e.checked=!1})),e("off")},populateFilter:function(){var e=this.games,t=this.doesGenreExist,a=[];this.genreNameResults=[],e.forEach((function(e){if(e.hasOwnProperty("genres")){t||(t=!0);var n=e.genres;n.forEach((function(e){var t=e.name;if(a.length>0){var n=a.every((function(e){return t!=e}));n&&a.push(t)}else 0==a.length&&a.push(t)}))}})),this.genreNameResults=a,this.doesGenreExist=t},populatePlatform:function(){var e=this.games,t=this.doesPlatformExist,a=[];this.platformNameResults=[],e.forEach((function(e){if(e.hasOwnProperty("platforms")){t||(t=!0);var n=e.platforms;n.forEach((function(e){var t=e.name;if(a.length>0){var n=a.every((function(e){return t!=e}));n&&a.push(t)}else 0==a.length&&a.push(t)}))}})),this.platformNameResults=a,this.doesPlatformExist=t},populateCompany:function(){var e=this.games,t=this.doesCompanyExist,a=[];this.companyNameResults=[],e.forEach((function(e){if(e.hasOwnProperty("involved_companies")){t||(t=!0);var n=e.involved_companies;n.forEach((function(e){var t=e.company.name;if(a.length>0){var n=a.every((function(e){return t!=e}));n&&a.push(t)}else 0==a.length&&a.push(t)}))}})),this.companyNameResults=a,this.doesCompanyExist=t},toggleFilter:function(e){if("all"!=e){var t=document.getElementsByClassName(e+"-filter-section")[0],a=t.previousElementSibling.firstElementChild;t&&("none"===t.style.display?(t.style.display="block",a.classList.add("fa-chevron-up"),a.classList.remove("fa-chevron-down")):(t.style.display="none",a.classList.add("fa-chevron-down"),a.classList.remove("fa-chevron-up")))}else if("all"==e){t=document.getElementById("SearchFilter"),a=t.previousElementSibling.firstElementChild;t&&("none"===t.style.display?(t.style.display="block",a.classList.add("fa-chevron-up"),a.classList.remove("fa-chevron-down")):(t.style.display="none",a.classList.add("fa-chevron-down"),a.classList.remove("fa-chevron-up")))}}},watch:{games:function(){this.populateFilter(),this.populatePlatform(),this.populateCompany(),window.innerWidth<1200&&this.toggleFilter("all")}}},u=c,d=(a("8bd5"),a("2877")),p=Object(d["a"])(u,i,l,!1,null,"3b9b963a",null),m=p.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"SearchResults"}},[0!==e.games.length?a("div",e._l(e.games,(function(e){return a("div",{key:e.id,staticClass:"search-item-container"},[a("SearchResultsItem",{attrs:{game:e}})],1)})),0):a("div",[a("p",{staticClass:"no-results"},[e._v("No Search Results Found")])])])},g=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"SearchItems",attrs:{id:e.game.id}},[e.game.cover?n("div",{staticClass:"game-cover"},[n("img",{attrs:{src:"https://images.igdb.com/igdb/image/upload/t_1080p/"+e.game.cover.image_id+".jpg"}})]):n("div",{staticClass:"game-cover"},[n("img",{attrs:{src:a("5d50")}})]),n("div",[n("h3",{staticClass:"search-results-header"},[e._v(e._s(e.game.name))]),e.game.summary?n("div",[n("p",{attrs:{cl:""}},[e._v(e._s(e.game.summary))])]):e._e(),n("div",{staticClass:"results-details-layout"},[e.game.human_date?n("div",[n("strong",[e._v("Release Date:")]),n("br"),e._v(e._s(e.game.human_date))]):n("div",[n("strong",[e._v("Release Date:")]),n("br"),e._v("N/A")]),e.game.aggregated_rating>=75?n("div",[n("strong",[e._v("Rating:")]),n("br"),n("span",{staticClass:"game-rating rating-high"},[e._v(e._s(Math.round(e.game.aggregated_rating)))])]):e.game.aggregated_rating>=50?n("div",[n("strong",[e._v("Rating:")]),n("br"),n("span",{staticClass:"game-rating rating-mid"},[e._v(e._s(Math.round(e.game.aggregated_rating)))])]):e.game.aggregated_rating>=0?n("div",[n("strong",[e._v("Rating:")]),n("br"),n("span",{staticClass:"game-rating rating-low"},[e._v(e._s(Math.round(e.game.aggregated_rating)))])]):n("div",[n("strong",[e._v("Rating:")]),n("br"),n("span",{staticClass:"game-rating"},[e._v("N/A")])]),e.game.genres?e.game.genres.length>=2?n("div",[n("strong",[e._v("Genre:")]),n("br"),e._v(e._s(e.game.genres[0].name)+","),n("br"),e._v(" "+e._s(e.game.genres[1].name))]):1==e.game.genres.length?n("div",[n("strong",[e._v("Genre:")]),n("br"),e._v(e._s(e.game.genres[0].name))]):n("div",[n("strong",[e._v("Genre:")]),n("br"),e._v("N/A")]):n("div",[n("strong",[e._v("Genre:")]),n("br"),e._v("N/A")]),e.game.platforms?0==e.game.platforms.length?n("div",[n("strong",[e._v("Platform:")]),n("br"),e._v("N/A")]):e.game.platforms.length>2?n("div",[n("strong",[e._v("Platform:")]),n("br"),e._v("Multi-platform")]):2==e.game.platforms.length?n("div",[n("strong",[e._v("Platform:")]),n("br"),e._v(e._s(e.game.platforms[0].name)+","),n("br"),e._v(e._s(e.game.platforms[1].name))]):n("div",[n("strong",[e._v("Platform:")]),n("br"),e._v(e._s(e.game.platforms[0].name))]):n("div",[n("strong",[e._v("Platform:")]),n("br"),e._v("N/A")]),n("div",[n("strong",[e._v("Developer:")]),n("br"),e._v(e._s(e.game.developer))]),n("div",[n("strong",[e._v("Publisher:")]),n("br"),e._v(e._s(e.game.publisher))])]),n("div",{staticClass:"btn"},[n("a",{attrs:{href:e.game.url,target:"_blank"}},[e._v("View Details")])])])])},h=[],y={name:"SearchResults",props:["game"]},_=y,b=(a("5b41"),Object(d["a"])(_,v,h,!1,null,"5da0ee39",null)),E=b.exports,x={name:"SearchResults",components:{app:O,SearchResultsItem:E},props:["games"]},k=x,C=(a("83fd"),Object(d["a"])(k,f,g,!1,null,"f113acd0",null)),A=C.exports,w=(document.querySelector('#SearchBar input[type="text"]'),"https://cors-anywhere.herokuapp.com/"),S="712pxo6xha8z3hxqbjem9i50416n8x",T="ze7wwlheeixze4toghuc90pt4af42w",P={name:"app",components:{SearchFilter:m,SearchResults:A},data:function(){return{searchText:"",games:[],accessToken:""}},methods:{populateResults:function(e){var t=this,a=function(e){var t=["January","February","March","April","May","June","July","August","September","October","November","December"],a=new Date(1e3*(e+14400)),n=a.getFullYear(),r=t[a.getMonth()],s=a.getDate(),o=r+" "+s+", "+n;return o},n=function(e){e.forEach((function(e){e.first_release_date&&(e["human_date"]=a(e.first_release_date))}))},r=function(e){e.forEach((function(e){e["developer"]="N/A",e["publisher"]="N/A";var t=e.involved_companies;t&&t.forEach((function(t){t.publisher&&(e["publisher"]=t.company.name),t.developer&&(e["developer"]=t.company.name)}))}))},s=new Date,i=s.getFullYear()-1,l=Date.parse("31 Dec "+i+" 16:59:59 GMT")/1e3,c="https://id.twitch.tv/oauth2/token?client_id="+S+"&client_secret="+T+"&grant_type=client_credentials",u="https://api.igdb.com/v4/games?fields=name,id,genres.name,first_release_date,platforms.name,aggregated_rating,url,cover.image_id,summary,involved_companies.developer,involved_companies.publisher,involved_companies.company.name&filter[first_release_date][gt]="+l+"&order=popularity:desc&limit=25";Object(o["a"])({url:w+c,method:"POST",headers:{"Access-Control-Allow-Origin":"http://localhost:8080/"}}).then((function(e){t.accessToken=e.data.access_token,Object(o["a"])({url:w+u,method:"POST",headers:{"Client-ID":S,Authorization:"Bearer "+e.data.access_token,"Access-Control-Allow-Origin":"http://localhost:8080/"}}).then((function(e){t.games=e.data,console.log(t.games),n(t.games),r(t.games),loadingGifToggle("off")})).catch((function(e){}))})).catch((function(e){}))},getResults:function(e){var t=this,a=function(e){var t=document.getElementById("loading-gif"),a=document.getElementById("overlay");"on"==e?(console.log("loading gif on"),t.style.display="block",a.style.display="block"):(console.log("loading gif off"),t.style.display="none",a.style.display="none")},n=function(e){var t=["January","February","March","April","May","June","July","August","September","October","November","December"],a=new Date(1e3*(e+14400)),n=a.getFullYear(),r=t[a.getMonth()],s=a.getDate(),o=r+" "+s+", "+n;return o},r=function(e){e.forEach((function(e){e.first_release_date&&(e["human_date"]=n(e.first_release_date))}))},s=function(e){e.forEach((function(e){e["developer"]="N/A",e["publisher"]="N/A";var t=e.involved_companies;t&&t.forEach((function(t){t.publisher&&(e["publisher"]=t.company.name),t.developer&&(e["developer"]=t.company.name)}))}))};if(a("on"),""!==e){var i="https://api.igdb.com/v4/games?search="+e+"&fields=name,id,genres.name,first_release_date,platforms.name,aggregated_rating,url,cover.image_id,summary,involved_companies.developer,involved_companies.publisher,involved_companies.company.name&limit=25",l=Array.prototype.slice.call(document.querySelectorAll('input[type="checkbox"]'));l.forEach((function(e){e.checked=!1})),Object(o["a"])({url:w+i,method:"GET",headers:{"Client-ID":S,Authorization:"Bearer "+this.accessToken,"Access-Control-Allow-Origin":"*"}}).then((function(e){t.games=e.data,r(t.games),s(t.games),t.searchText="",a("off")})).catch((function(e){}))}},displayTopButton:function(){var e=document.getElementById("topButton");document.body.scrollTop>20||document.documentElement.scrollTop>20?e.style.display="block":e.style.display="none"},goToTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},created:function(){this.populateResults(),window.addEventListener("scroll",this.displayTopButton)},destroyed:function(){window.addEventListener("scroll",this.displayTopButton)}},R=P,N=(a("034f"),Object(d["a"])(R,r,s,!1,null,null,null)),O=N.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(O)}}).$mount("#app")},"5b41":function(e,t,a){"use strict";var n=a("037a"),r=a.n(n);r.a},"5d50":function(e,t,a){e.exports=a.p+"img/boxart-not-found.6fcde115.jpg"},"64a9":function(e,t,a){},"64c5":function(e,t,a){},"83fd":function(e,t,a){"use strict";var n=a("2306"),r=a.n(n);r.a},"8bd5":function(e,t,a){"use strict";var n=a("64c5"),r=a.n(n);r.a},f727:function(e,t,a){e.exports=a.p+"img/loading-results.620799e3.gif"}});
//# sourceMappingURL=app.f69d9d24.js.map