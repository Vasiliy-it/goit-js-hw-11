import{i as u,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function f(i){return i.map(({webformatURL:o,largeImageURL:s,tags:t,likes:e,views:r,comments:a,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${t}"
            />
          </a>
          <div class="info">
            <div class="info__item">
              <p class="title">Likes</p>
              <p class="value">${e}</p>
            </div>
            <div class="info__item">
              <p class="title">Views</p>
              <p class="value">${r}</p>
            </div>
            <div class="info__item">
              <p class="title">Comments</p>
              <p class="value">${a}</p>
            </div>
            <div class="info__item">
              <p class="title">Downloads</p>
              <p class="value">${d}</p>
            </div>
          </div>
        </li>
      `).join("")}function m(){document.querySelector(".loader__container").classList.add("active")}function y(){document.querySelector(".loader__container").classList.remove("active")}const h="46887130-d3f8e3821f1ed34df6d7a3ffd",g="https://pixabay.com/api/";function v(i,o){const s=`${g}?key=${h}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`;m(),fetch(s).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0)u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again",position:"topRight"});else{const e=t.hits.slice(0,9);o(e)}}).catch(t=>{console.log(t)}).finally(()=>{y()})}const _=document.querySelector(".search-form"),l=document.querySelector("input[type=search]"),c=document.querySelector(".gallery__list");let n;_.addEventListener("submit",i=>{i.preventDefault();const o=l.value.trim();if(o===""){u.error({title:"Error",message:"Fill search input!",position:"topRight"});return}c.innerHTML="",v(o,s=>{const t=f(s);c.innerHTML=t,n?n.refresh():n=new p(".gallery__list a",{captionsData:"alt",captionDelay:250}),l.value=""})});
//# sourceMappingURL=index.js.map
