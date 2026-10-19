import{i as e,n as t,t as n}from"./shell-t9a_eRi5.js";/* empty css              */import{c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as d,s as f,t as p,u as m}from"./progress-Ds5ss5od.js";import{i as h,n as g,r as _}from"./characters-DBfijHs5.js";import{t as v}from"./icons-CWK0q9Zq.js";t(`main`),document.documentElement.lang=f();var y=document.getElementById(`main`),b=new URLSearchParams(location.search),x=b.get(`q`)||``,S=b.get(`kat`)||`all`,C=b.get(`usia`)||`all`,w=b.get(`jenis`)||`all`,T={eyebrow:m(`Rawayan Main`,`Rawayan Play`),h1:m(`Main dulu, paham kemudian.`,`Play first, understand along the way.`),lead:m(`Game dan simulasi untuk penasaran yang tidak bisa diam: susun program robot, pecahkan kasus pola, arahkan bola dengan gravitasi. Tanpa akun, tanpa iklan.`,`Games and simulations for restless curiosity: program a robot, crack pattern cases, guide a marble with gravity. No account, no ads.`),privacy:m(`Kemajuanmu hanya disimpan di perangkat ini. Rawayan tidak mengumpulkan data pribadi.`,`Your progress is stored only on this device. Rawayan collects no personal data.`),continueSub:m(`Game yang terakhir kamu mainkan`,`Games you played last`),featuredSub:m(`Tiga game baru dengan tokoh Rawayan`,`Three new games with Rawayan characters`),ageAll:m(`Semua usia`,`All ages`),kindAll:m(`Game & simulasi`,`Games & simulations`),results:m(`{n} hasil`,`{n} results`),forAdults:m(`Untuk orang tua dan guru`,`For parents and teachers`),starsOf:m(`{n} bintang`,`{n} stars`),open:m(`Lihat detail`,`See details`),meetRawi:m(`Rawi si robot`,`Rawi the robot`),meetHuhu:m(`Huhu si detektif`,`Huhu the detective`),meetBola:m(`Bola si kelereng`,`Bola the marble`)},E=(e,t)=>e.replace(/\{(\w+)\}/g,(e,n)=>String(t[n])),D={rawi:h,huhu:_,bola:g},O=e=>a.find(t=>t.id===e.category),k=e=>`<span class="mn-diff" aria-label="${s(u.difficulty)}: ${s(u.diff[e-1])}">${[1,2,3].map(t=>`<i class="${t<=e?`on`:``}"></i>`).join(``)}</span>`;function A(e,t=!1){let n=O(e),r=e.art.props.slice(0,t?3:2).map((e,n)=>`<span class="mn-prop p${n}">${v(e,t?54:40)}</span>`).join(``),i=e.art.character?`<span class="mn-char">${D[e.art.character]()}</span>`:`<span class="mn-icon">${v(n.icon,t?96:72)}</span>`;return`<span class="mn-art" style="--bg:${e.art.bg};--cat:${n.color}">${i}${r}</span>`}function j(e){let t=O(e),r=e.kind===`game`?o(e.id):0;return`<li><button type="button" class="mn-card" data-open="${e.id}" style="--cat:${t.color}">
    ${A(e)}
    <span class="mn-badge ${e.kind}">${s(e.kind===`game`?u.game:u.simulation)}</span>${e.addedAt>=`2026-10-15`?`<span class="mn-new">${s({id:`Baru`,en:`New`})}</span>`:``}
    <span class="mn-body"><span class="mn-cat">${v(t.icon,16)} ${s(t.name)}</span>
      <span class="mn-title">${n(s(e.title))}</span><span class="mn-hook">${n(s(e.hook))}</span>
      <span class="mn-skill"><b>${s(u.learn)}:</b> ${n(s(e.skill))}</span>
      <span class="mn-meta"><span>${e.age[0]}–${e.age[1]>20?`∞`:e.age[1]} ${s(u.years)}</span>${k(e.difficulty)}<span>${e.minutes[0]}–${e.minutes[1]} ${s(u.minutes)}</span>${r?`<span class="mn-st" aria-label="${E(s(T.starsOf),{n:r})}">★ ${r}</span>`:``}</span>
    </span></button></li>`}y.innerHTML=`
<section class="mn-hero wrap">
  <div class="mn-hero-text">
    <p class="eyebrow">${s(T.eyebrow)}</p>
    <h1>${s(T.h1)}</h1>
    <p class="lead">${s(T.lead)}</p>
    <div class="mn-cta"><button type="button" class="btn btn-accent" data-playnow>▶ ${s(u.playNow)}</button><a class="btn btn-ghost" href="#semua">${s(u.explore)}</a>
      <button type="button" class="btn btn-ghost btn-small mn-lang" data-lang aria-label="${f()===`id`?`Switch to English`:`Ganti ke Bahasa Indonesia`}">${f()===`id`?`English`:`Bahasa Indonesia`}</button></div>
  </div>
  <div class="mn-stage" aria-hidden="true">
    <div class="mn-hill"></div>
    <figure class="mn-who w1">${h(`happy`)}<figcaption>${s(T.meetRawi)}</figcaption></figure>
    <figure class="mn-who w2">${_(`idle`)}<figcaption>${s(T.meetHuhu)}</figcaption></figure>
    <figure class="mn-who w3">${g(`happy`)}<figcaption>${s(T.meetBola)}</figcaption></figure>
  </div>
</section>
<section class="wrap mn-row" data-continue hidden><div class="mn-row-head"><h2>${s(u.continueTitle)}</h2><p>${s(T.continueSub)}</p></div><ul class="mn-cards" data-continue-list></ul></section>
<section class="wrap mn-row"><div class="mn-row-head"><h2>${s(u.featured)}</h2><p>${s(T.featuredSub)}</p></div>
  <ul class="mn-cards featured">${i.filter(e=>e.featured).map(j).join(``)}</ul></section>
<section class="wrap mn-row"><div class="mn-row-head"><h2>${s(u.collections)}</h2></div>
  <div class="mn-collections">${d.map(e=>`<article class="mn-col"><h3>${s(e.name)}</h3><p>${s(e.about)}</p>
    <ul>${e.items.map(e=>c(e)).filter(Boolean).map(e=>`<li><button type="button" data-open="${e.id}">${v(e.art.props[0],28)}<span>${n(s(e.title))}</span></button></li>`).join(``)}</ul></article>`).join(``)}</div></section>
<section class="wrap mn-row" id="semua">
  <div class="mn-row-head"><h2>${s(u.everything)}</h2><p data-count aria-live="polite"></p></div>
  <div class="mn-tools">
    <label class="mn-search"><span class="sr-only">${s(u.search)}</span><input type="search" data-q placeholder="${s(u.search)}…" value="${n(x)}" autocomplete="off"></label>
    <select data-age aria-label="${s(u.age)}"><option value="all">${s(T.ageAll)}</option><option value="6-8">6–8 ${s(u.years)}</option><option value="9-12">9–12 ${s(u.years)}</option><option value="13-16">13–16 ${s(u.years)}</option></select>
    <select data-kind aria-label="${s(u.game)}"><option value="all">${s(T.kindAll)}</option><option value="game">${s(u.game)}</option><option value="simulation">${s(u.simulation)}</option></select>
    <button type="button" class="btn btn-ghost btn-small" data-shuffle>🎲 ${s(u.shuffle)}</button>
  </div>
  <div class="mn-chips" role="group" aria-label="Kategori" data-chips></div>
  <p class="mn-cat-about" data-about></p>
  <ul class="mn-cards" data-grid></ul>
  <p class="mn-empty" data-empty hidden>${s(u.empty)}</p>
</section>
<section class="wrap mn-row"><div class="wawasan mn-adults"><h3>${s(T.forAdults)}</h3><p>${s(T.privacy)} ${s({id:`Setiap kartu menyebut keterampilan yang dilatih, rentang usia, tingkat kesulitan, dan perkiraan waktu. Simulasi fisika di sini disederhanakan untuk belajar, bukan perhitungan teknik yang tepat.`,en:`Every card names the skill it trains, the age range, difficulty and expected time. The physics simulations here are simplified for learning, not exact engineering calculations.`})}</p></div></section>
<dialog class="mn-dialog" data-dialog aria-labelledby="mn-d-title"></dialog>`;var M=e=>y.querySelector(e),N=l().map(c).filter(e=>!!e&&e.kind===`game`);N.length&&(M(`[data-continue]`).hidden=!1,M(`[data-continue-list]`).innerHTML=N.slice(0,3).map(j).join(``));var P=e=>{if(C===`all`)return!0;let[t,n]=C.split(`-`).map(Number);return e.age[0]<=n&&e.age[1]>=t},F=e=>e.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``),I=e=>{if(!x)return!0;let t=F([e.title.id,e.title.en,e.hook.id,e.hook.en,e.description.id,e.description.en,e.skill.id,e.skill.en,...e.tags,O(e).name.id,O(e).name.en].join(` `));return F(x).split(/\s+/).every(e=>t.includes(e))};function L(){return i.filter(e=>(S===`all`||e.category===S)&&P(e)&&(w===`all`||e.kind===w)&&I(e)).sort((e,t)=>e.kind===t.kind?0:e.kind===`game`?-1:1)}function R(){let e=i.filter(e=>P(e)&&(w===`all`||e.kind===w)&&I(e)),t=a.filter(e=>i.some(t=>t.category===e.id));M(`[data-chips]`).innerHTML=[`<button type="button" class="mn-chip" data-cat="all" aria-pressed="${S===`all`}">${s(u.all)} <span>${e.length}</span></button>`,...t.map(t=>`<button type="button" class="mn-chip" data-cat="${t.id}" aria-pressed="${S===t.id}" style="--cat:${t.color}">${v(t.icon,20)} ${s(t.name)} <span>${e.filter(e=>e.category===t.id).length}</span></button>`)].join(``);let n=a.find(e=>e.id===S);M(`[data-about]`).textContent=n?s(n.about):``;let r=L();M(`[data-grid]`).innerHTML=r.map(j).join(``),M(`[data-empty]`).hidden=r.length>0,M(`[data-count]`).textContent=E(s(T.results),{n:r.length});let o=new URLSearchParams;x&&o.set(`q`,x),S!==`all`&&o.set(`kat`,S),C!==`all`&&o.set(`usia`,C),w!==`all`&&o.set(`jenis`,w),history.replaceState(null,``,location.pathname+(o.toString()?`?`+o:``)+location.hash)}M(`[data-age]`).value=C,M(`[data-kind]`).value=w,M(`[data-q]`).addEventListener(`input`,e=>{x=e.target.value.trim(),R()}),M(`[data-age]`).addEventListener(`change`,e=>{C=e.target.value,R()}),M(`[data-kind]`).addEventListener(`change`,e=>{w=e.target.value,R()}),M(`[data-chips]`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-cat]`);t&&(S=t.dataset.cat,R())}),M(`[data-shuffle]`).addEventListener(`click`,()=>{let e=L().length?L():i;B(e[Math.floor(Math.random()*e.length)].id)}),M(`[data-lang]`).addEventListener(`click`,()=>{r(f()===`id`?`en`:`id`),location.reload()}),M(`[data-playnow]`).addEventListener(`click`,()=>{let t=i.filter(e=>e.kind===`game`),n=t.filter(e=>o(e.id)===0),r=n.length?n:t;location.href=e(r[Math.floor(Math.random()*r.length)].href)});var z=M(`[data-dialog]`);function B(t){let r=c(t);if(!r)return;let i=O(r),a=r.kind===`game`?p(r.id):null,l=r.devices.map(e=>s(u[e])).join(`, `);z.innerHTML=`<div class="mn-d" style="--cat:${i.color}">
    <button type="button" class="mn-d-close" data-close aria-label="${s(u.close)}">✕</button>
    ${A(r,!0)}
    <div class="mn-d-body"><p class="mn-cat">${v(i.icon,18)} ${s(i.name)} · ${s(r.kind===`game`?u.game:u.simulation)}</p>
      <h2 id="mn-d-title">${n(s(r.title))}</h2><p>${n(s(r.description))}</p>
      <dl class="mn-facts"><div><dt>${s(u.age)}</dt><dd>${r.age[0]}–${r.age[1]>20?`∞`:r.age[1]} ${s(u.years)}</dd></div><div><dt>${s(u.difficulty)}</dt><dd>${s(u.diff[r.difficulty-1])}</dd></div>
        <div><dt>⏱</dt><dd>${r.minutes[0]}–${r.minutes[1]} ${s(u.minutes)}</dd></div><div><dt>${s(u.devices)}</dt><dd>${l}</dd></div></dl>
      ${r.objectives.length?`<h3>${s(u.objectives)}</h3><ul class="mn-obj">${r.objectives.map(e=>`<li>${n(s(e))}</li>`).join(``)}</ul>`:`<p><b>${s(u.learn)}:</b> ${n(s(r.skill))}</p>`}
      <h3>${s(u.controls)}</h3><p>${n(s(r.controls))}</p>
      <p class="muted mn-small">${s(u.offline)}: ${n(s(r.offline))} · ${s(u.credits)}: ${n(s(r.attribution))}</p>
      ${a&&(a.unlocked||Object.keys(a.stars).length)?`<p class="mn-small">★ ${o(r.id)} · ${s(u.level)} ${Math.min(a.unlocked+1,99)}</p>`:``}
      <div class="mn-d-btns"><a class="btn btn-accent" href="${e(r.href)}">▶ ${s(u.play)}</a><button type="button" class="btn btn-ghost" data-close>${s(u.close)}</button></div>
    </div></div>`,z.querySelectorAll(`[data-close]`).forEach(e=>e.addEventListener(`click`,()=>z.close())),typeof z.showModal==`function`?z.showModal():z.setAttribute(`open`,``),z.querySelector(`.btn-accent`)?.focus()}z.addEventListener(`click`,e=>{e.target===z&&z.close()}),y.addEventListener(`click`,e=>{let t=e.target.closest(`[data-open]`);t&&!z.contains(t)&&B(t.dataset.open)}),R();