const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ohm-BE8mlalw.js","assets/shell-t9a_eRi5.js","assets/shell-TIovDeCx.css","assets/param-BIvfrwEB.js","assets/peluru-CylfPr1i.js","assets/cruise-BUe8Wx3z.js"])))=>i.map(i=>d[i]);
import{n as e,t}from"./shell-t9a_eRi5.js";/* empty css              */import{t as n}from"./preload-helper-ildnd_tl.js";function r(e,t,n){e.innerHTML=`
  <div class="mae">
    <section class="mae-model" aria-label="Model">
      <p class="mae-tag"><span>M</span>Model</p>
      <div data-model></div>
    </section>
    <div class="mae-side">
      <section aria-label="Analyze">
        <p class="mae-tag"><span>A</span>Analyze · ubah variabelnya</p>
        <div class="mae-controls" data-analyze></div>
        <div class="readouts" data-read style="margin-top:var(--s-4)"></div>
      </section>
      <section aria-label="Engineering">
        <p class="mae-tag"><span>E</span>Engineering · misi</p>
        <ol class="mae-missions" data-missions></ol>
        <p class="mae-score" data-score aria-live="polite"></p>
      </section>
    </div>
  </div>`;let r=t=>e.querySelector(t),i=[],a=[],o=[],s=()=>{r(`[data-missions]`).innerHTML=i.map((e,t)=>`
      <li class="${a[t]?`done`:``}">
        <span class="mae-check" aria-hidden="true">${a[t]?`✓`:t+1}</span>
        <div><p>${e.text}</p>
          ${!a[t]&&e.hint?`<details><summary>Petunjuk</summary><p class="muted">${e.hint}</p></details>`:``}
          ${a[t]&&e.why?`<p class="mae-why">${e.why}</p>`:``}</div>
      </li>`).join(``);let e=a.filter(Boolean).length;r(`[data-score]`).textContent=e===i.length&&e>0?`Semua ${e} misi selesai. Kamu sudah merancang, bukan sekadar mencoba.`:`${e} dari ${i.length} misi selesai`},c={model:r(`[data-model]`),analyze:r(`[data-analyze]`),readouts:r(`[data-read]`),setMissions(e){i=e,a=e.map(()=>!1),s()},refresh(){let e=!1;i.forEach((t,n)=>{!a[n]&&t.done()&&(a[n]=!0,e=!0)}),e&&s()},onDispose(e){o.push(e)}};return n(c),c.refresh(),()=>o.forEach(e=>e())}var i=e=>e.map(([e,n])=>`<div class="readout"><span>${t(e)}</span><b>${t(n)}</b></div>`).join(``);function a(e){let t=e.getBoundingClientRect(),n=Math.min(window.devicePixelRatio||1,2);e.width=Math.max(1,Math.round(t.width*n)),e.height=Math.max(1,Math.round(t.height*n));let r=e.getContext(`2d`);return r.setTransform(n,0,0,n,0,0),{g:r,w:t.width,h:t.height}}function o(e,n,r,i){let a=document.createElement(`div`);a.innerHTML=`<div class="filters" style="margin:0 0 4px"><div class="label">${t(e)}</div></div>
    <div class="tabs" role="radiogroup" aria-label="${t(e)}">${n.map(([e,n])=>`<button type="button" role="radio" data-v="${e}" aria-pressed="${e===r}" aria-checked="${e===r}">${t(n)}</button>`).join(``)}</div>`;let o=e=>a.querySelectorAll(`button`).forEach(t=>{let n=t.dataset.v===String(e);t.setAttribute(`aria-pressed`,String(n)),t.setAttribute(`aria-checked`,String(n))});return a.addEventListener(`click`,e=>{let t=e.target.closest(`button[data-v]`);if(!t)return;let r=n.find(([e])=>String(e)===t.dataset.v)[0];o(r),i(r)}),{el:a,set:o}}var s={ink:`#1b1e2b`,muted:`#6b6f80`,line:`#e4dfd3`,math:`#3d47c9`,sci:`#0f8a7e`,eng:`#c47a0e`,code:`#6a46b8`,bad:`#c2414f`,ok:`#2e8b57`,paper:`#faf8f3`},c=[{id:`sd`,label:`SD`,fokus:`Lihat dan sentuh konsepnya. Arsir, seret, bandingkan.`,area:`matematika`},{id:`smp`,label:`SMP`,fokus:`Eksperimen sebab-akibat: ubah satu variabel, amati yang lain.`,area:`sains`},{id:`sma`,label:`SMA`,fokus:`Rumus, grafik dan pemecahan masalah. Hitung dulu, baru uji.`,area:`sains`},{id:`teknik`,label:`Teknik Lanjut`,fokus:`Pemodelan sistem dinamis dengan parameter nyata dan spesifikasi desain.`,area:`koding`}],l=[{id:`pecahan`,level:`sd`,title:`Eksperimen Pecahan`,tag:`Matematika · Fase B–C`,summary:`Arsir dua batang pecahan dan temukan pecahan senilai.`,mount:()=>n(()=>import(`./pecahan-BVvqmRPp.js`).then(e=>e.mount),[])},{id:`ohm`,level:`smp`,title:`Rangkaian Listrik Sederhana`,tag:`IPA · Fase D · Hukum Ohm`,summary:`Atur tegangan dan hambatan. Nyalakan lampu seterang mungkin tanpa membuatnya putus.`,mount:()=>n(()=>import(`./ohm-BE8mlalw.js`).then(e=>e.mount),__vite__mapDeps([0,1,2,3]))},{id:`peluru`,level:`sma`,title:`Misi Gerak Parabola`,tag:`Fisika · Fase E–F`,summary:`Rancang lemparan yang mengenai sasaran, melewati tembok, bahkan di Bulan.`,mount:()=>n(()=>import(`./peluru-CylfPr1i.js`).then(e=>e.mount),__vite__mapDeps([4,1,2,3]))},{id:`cruise`,level:`teknik`,title:`Cruise Control PID`,tag:`Sistem Kendali · Teknik`,summary:`Setel Kp, Ki dan Kd supaya mobil mencapai 10 m/s dengan cepat, tanpa overshoot, dan tetap stabil di tanjakan.`,mount:()=>n(()=>import(`./cruise-BUe8Wx3z.js`).then(e=>e.mount),__vite__mapDeps([5,3,1,2]))}];e(`lab`);var u=document.getElementById(`main`),d=new URLSearchParams(location.search),f=l.find(e=>e.id===d.get(`w`))||l[0],p=f.level;u.innerHTML=`
<div class="page-head wrap">
  <p class="eyebrow">Rawayan Lab</p>
  <h1>Model, analisis, lalu rancang.</h1>
  <p>Setiap lab punya tiga bagian. <b>Model</b> menunjukkan apa yang terjadi. <b>Analyze</b> berisi variabel yang bisa kamu ubah. <b>Engineering</b> berisi misi: kamu harus mencapai target, bukan hanya mencoba-coba.</p>
</div>
<div class="wrap">
  <div class="tabs mae-levels" role="tablist" aria-label="Jenjang" data-levels>${c.map(e=>`<button type="button" role="tab" data-l="${e.id}" aria-pressed="${e.id===p}" aria-selected="${e.id===p}">${e.label}</button>`).join(``)}</div>
  <p class="muted" data-fokus style="margin:var(--s-3) 0 var(--s-4)"></p>
  <div class="mae-picker" data-list></div>
</div>
<div class="wrap" style="margin-top:var(--s-6)">
  <div class="mae-head"><span class="chip accent" data-tag></span><h2 data-title></h2></div>
  <div data-frame></div>
</div>
<div class="wrap wawasan" style="margin-top:var(--s-7);max-width:var(--max-text)">
  <p>Pola belajar ini meniru cara kerja insinyur: membuat model, menguji pengaruh tiap variabel, lalu merancang solusi yang memenuhi syarat. Kerangka yang mirip dipakai NGSS (Amerika Serikat) sebagai <i>Science and Engineering Practices</i>. Bentuk interaksinya terinspirasi simulasi PhET (University of Colorado Boulder) dan Mathigon. Lab Cruise Control memakai model dan spesifikasi dari Control Tutorials for MATLAB &amp; Simulink (University of Michigan).</p>
</div>`;var m=e=>u.querySelector(e),h=null;function g(){let e=c.find(e=>e.id===p);document.body.dataset.area=e.area,m(`[data-fokus]`).textContent=e.fokus,u.querySelectorAll(`[data-levels] button`).forEach(e=>{let t=e.dataset.l===p;e.setAttribute(`aria-pressed`,String(t)),e.setAttribute(`aria-selected`,String(t))}),m(`[data-list]`).innerHTML=l.filter(e=>e.level===p).map(e=>`<button type="button" class="tile mae-pick" data-w="${e.id}" aria-current="${e.id===f.id}">
      <span class="eyebrow">${t(e.tag)}</span><h3>${t(e.title)}</h3><p>${t(e.summary)}</p></button>`).join(``)}async function _(e,t=!0){f=l.find(t=>t.id===e)||f,p=f.level,g(),m(`[data-tag]`).textContent=f.tag,m(`[data-title]`).textContent=f.title,document.title=`${f.title} · Rawayan Lab`,t&&history.replaceState(null,``,`?w=${f.id}`),h?.();let n=m(`[data-frame]`);n.innerHTML=`<p class="muted">Memuat lab…</p>`;let i=await f.mount();h=r(n,f,i)}m(`[data-levels]`).addEventListener(`click`,e=>{let t=e.target.closest(`button[data-l]`);if(!t)return;p=t.dataset.l;let n=l.find(e=>e.level===p);n?_(n.id):g()}),m(`[data-list]`).addEventListener(`click`,e=>{let t=e.target.closest(`button[data-w]`);t&&_(t.dataset.w).then(()=>m(`[data-frame]`).scrollIntoView({behavior:`smooth`,block:`start`}))}),_(f.id,d.has(`w`));export{i,o as n,a as r,s as t};