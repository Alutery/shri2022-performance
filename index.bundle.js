(()=>{var i={657:(e,t,i)=>{"use strict";i.r(t)},415:(e,t,i)=>{"use strict";i.r(t)}},n={};function a(e){var t=n[e];return void 0!==t||(t=n[e]={exports:{}},i[e](t,t.exports,a)),t.exports}a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};{a(657),a(415);const o=new Map,l=new Map;function t(e,t,i){setTimeout(()=>{e.forEach(e=>{e.addEventListener(t,i)})})}function e(){const r=document.querySelector(".main__devices");let s=r.querySelector(".section__tab_active").dataset.id;const e=r.querySelectorAll(".section__tab"),i=Array(e.length).fill(),c=(e.forEach((e,t)=>{i[t]=e.dataset.id}),r.querySelector(".section__select"));function n(e){let t=o.get(e),i=(t||(t=r.querySelector(`.section__tab[data-id=${e}]`),o.set(e,t)),l.get(e));i||(i=r.querySelector(`.section__panel[data-id=${e}]`),l.set(e,i));const n=r.querySelector(".section__tab_active"),a=r.querySelector(".section__panel_active");s=e,n.classList.remove("section__tab_active"),n.setAttribute("aria-selected","false"),n.removeAttribute("tabindex"),t.classList.add("section__tab_active"),t.setAttribute("aria-selected","true"),t.setAttribute("tabindex","0"),t.focus({preventScroll:!0}),a.classList.remove("section__panel_active"),a.setAttribute("aria-hidden","true"),i.classList.add("section__panel_active"),i.setAttribute("aria-hidden","false"),c.value=e}c.addEventListener("input",()=>{n(c.value)}),t(e,"click",e=>{n(e.target.dataset.id)}),t(e,"keydown",t=>{if(!(t.ctrlKey||t.metaKey||t.shiftKey||t.altKey)){t.preventDefault();let e=i.indexOf(s);if(37===t.which)--e;else if(39===t.which)++e;else if(36===t.which)e=0;else{if(35!==t.which)return;e=i.length-1}t=i.length;e=(e+t)%t,n(i[e])}})}function r(){const e=document.getElementById("header-menu");let t=!1;const i=document.getElementById("header-links");e.addEventListener("click",()=>{t=!t,e.setAttribute("aria-expanded",t?"true":"false"),e.querySelector(".header__menu-text").textContent=t?"Закрыть меню":"Открыть меню",i.classList.toggle("header__links_opened",t)})}document.addEventListener("DOMContentLoaded",()=>{setTimeout(e),setTimeout(r)})}})();