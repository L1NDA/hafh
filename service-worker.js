"use strict";var precacheConfig=[["/hafh/index.html","d78c6612e374dbfd17a701e03a3812bf"],["/hafh/static/css/main.dcb8209a.css","d6a078b4e858eb63228ab836c06453c2"],["/hafh/static/js/main.575e6e00.js","e24fc17401bd93833a05c94e47becd16"],["/hafh/static/media/education.94c6ce93.jpg","94c6ce930c2274f0bf6abfd9b5ede91c"],["/hafh/static/media/food.9d9ca31d.jpg","9d9ca31d99b2e2c16e25fc7f2da8017c"],["/hafh/static/media/heart.093df1fc.png","093df1fcc8393f765206996a88fe3a62"],["/hafh/static/media/home.5b420a30.jpg","5b420a30cfb0ecf3b2ddc3951893af43"],["/hafh/static/media/legal.731b3a48.jpg","731b3a48144237000a58fc571454a9d6"],["/hafh/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/hafh/static/media/message.751be37d.png","751be37db24a71a78561b07203d0bf04"],["/hafh/static/media/stock.b884be07.jpeg","b884be07ab09950902e7649d775c1971"],["/hafh/static/media/stock2.39c49f72.jpg","39c49f725e6146adec48e06141513673"],["/hafh/static/media/stock3.738c6f50.jpg","738c6f507c4ee08d1bc4beb6ccd3551a"],["/hafh/static/media/stock4.70ce88d2.jpg","70ce88d26158742cf41d12507f937f2f"],["/hafh/static/media/stock5.01df42ed.jpg","01df42edb4b266f093e41fe4a50a3825"],["/hafh/static/media/stock6.34851cbe.jpg","34851cbe5b1bf8b3087a7dc4a720fe26"],["/hafh/static/media/stock7.d510b801.jpg","d510b801a7a08e414b2b17535fb0bb4d"],["/hafh/static/media/stock8.3e859acd.jpg","3e859acd7bd372f2600ecfaab90b6ffd"],["/hafh/static/media/video.1f9c974d.scss","1f9c974db65c9afd7aa0c677af126de5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var c="/hafh/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});