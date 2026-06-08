import{a as u,S as p,i}from"./assets/vendor-DaKTFKe4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const f=s=>{const r=new URLSearchParams({key:"56220585-56a0c3bb81d566663f8c5eae4",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get(`https://pixabay.com/api/?${r}`).then(e=>e.data)},c=document.querySelector(".gallery"),m=document.querySelector(".loading-span"),d=new p(".gallery-link",{captionDelay:250,animationSpeed:200});function h(){c.innerHTML=""}function y(){m.classList.add("is-active")}function g(){m.classList.remove("is-active")}function b(s){const r=s.map(e=>`
            <li class="gallery-card">
                <a href="${e.largeImageURL}" class="gallery-link">
                    <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}"
                    />
                    <div class="info">
                        <p class="info-item"><b>Likes</b> ${e.likes}</p>
                        <p class="info-item"><b>Views</b> ${e.views}</p>
                        <p class="info-item"><b>Comments</b> ${e.comments}</p>
                        <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
                    </div>
                </a>
            </li>
        `).join("");c.innerHTML=r,d.refresh()}const n=document.querySelector("form"),L=s=>{s.preventDefault();const r=n.elements.search_text.value.trim();if(!r){i.error({message:"Input cant be empty!",position:"topCenter"});return}h(),y(),f(r).then(e=>{if(!e.hits.length){i.error({position:"topCenter",message:"Sorry, there are no images matching your search query. Please, try again!"}),n.elements.search_text.placeholder=`${r}`,n.reset();return}b(e.hits),n.elements.search_text.placeholder=`${r}`,n.reset()}).catch(e=>{i.error({message:"Something went wrong!",position:"topCenter"}),console.log(e)}).finally(()=>{g()})};n.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
