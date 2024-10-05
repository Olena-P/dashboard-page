(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(a){if(a.ep)return;a.ep=!0;const e=l(a);fetch(a.href,e)}})();let c=1;function h(t,n){const l=document.getElementById("pagination-container");if(!l)return;const s=Math.ceil(t.length/n);l.innerHTML="";const a=r=>`
    <li>
      <a href="#" class="${c===r?"active":""}" data-page="${r}">
        ${r}
      </a>
    </li>
  `;let e=`
    <div class="pagination">
      <span class="showing-data" aria-live="polite" >
        Showing data ${Math.min((c-1)*n+1,t.length)} to ${Math.min(c*n,t.length)} of ${t.length} entries
      </span>
      <nav>
        <ul>
          <li>
            <a href="#" class="prev" data-page="${Math.max(1,c-1)}" aria-label="Previous page">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
  `;const i=4;let o=[];const p=(r,u)=>{for(let d=r;d<=u;d++)o.push(d)};s<=i+1?p(1,s):(c<=i-2?(p(1,i),o.push("..."),o.push(s)):c>=s-(i-2)?(o.push(1),o.push("..."),p(s-(i-1),s)):(o.push(1),o.push("..."),p(c-1,c+1),o.push("..."),o.push(s)),o.forEach(r=>{r==="..."?e+='<li><span class="ellipsis">...</span></li>':e+=a(r)}),e+=`
          <li>
            <a href="#" class="next" data-page="${Math.min(s,c+1)}" aria-label="Next page">
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  `,l.innerHTML=e,l.querySelectorAll("a[data-page]").forEach(r=>{r.addEventListener("click",u=>{u.preventDefault();const d=parseInt(u.target.getAttribute("data-page"));isNaN(d)||(c=Math.max(1,Math.min(d,s))),m(c),h(t,n)})}),l.querySelectorAll(".prev, .next").forEach(r=>{r.addEventListener("click",u=>{u.preventDefault();const d=parseInt(r.getAttribute("data-page"));isNaN(d)||(c=Math.max(1,Math.min(d,s))),m(c),h(t,n)})}))}let f=[],L=1;const v=8;async function E(){try{const t=await fetch("/assets/customers.json");if(!t.ok)throw new Error("Network response was not ok.");f=await t.json(),m(L),h(f,v)}catch(t){console.error("Error loading customer data:",t)}}function m(t){const n=document.querySelector(".customer-table tbody");if(!n)return;n.innerHTML="";const l=(t-1)*v,s=Math.min(l+v,f.length);for(let a=l;a<s;a++){const e=f[a],i=document.createElement("tr");i.innerHTML=`
      <td>${e.name}</td>
      <td>${e.company}</td>
      <td>${e.phone}</td>
      <td>${e.email}</td>
      <td>${e.country}</td>
      <td><span class="status ${e.status.toLowerCase()}">${e.status}</span></td>
    `,n.appendChild(i)}}const y=document.getElementById("sidebarToggle"),g=document.querySelector(".sidebar");function b(){const t=g.classList.contains("active");y.setAttribute("aria-expanded",t.toString())}y.addEventListener("click",function(){g.classList.toggle("active"),b()});const S=document.getElementById("sidebarClose");S.addEventListener("click",function(){g.classList.remove("active"),b()});const M=document.querySelectorAll(".sidebar__item a");M.forEach(t=>{t.addEventListener("click",n=>{n.preventDefault(),document.querySelectorAll(".sidebar__item").forEach(o=>o.classList.remove("sidebar__item--active")),t.closest(".sidebar__item").classList.add("sidebar__item--active");const a=t.getAttribute("href").substring(1)+"-section";document.querySelectorAll(".content-section").forEach(o=>o.classList.remove("active"));const i=document.getElementById(a);i&&i.classList.add("active"),g.classList.remove("active"),b()})});new Typed("#typed-text",{strings:["Hello Evano"],typeSpeed:100,backSpeed:0,showCursor:!1,onComplete:function(){const t=document.getElementById("wave-emoji");t.classList.add("animate"),setTimeout(()=>{const n=document.createElement("span");n.textContent=",",t.parentNode.insertBefore(n,t.nextSibling)},500)}});document.addEventListener("DOMContentLoaded",()=>{E(),m()});
//# sourceMappingURL=index.js.map
