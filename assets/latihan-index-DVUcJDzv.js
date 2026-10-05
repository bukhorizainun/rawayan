import{i as e,n as t}from"./shell-DgwTLdl8.js";import{t as n}from"./load-CQdxdYV8.js";import{i as r,n as i,r as a,t as o}from"./curriculum-Q-ioAjzw.js";import{t as s}from"./pack-card-BV97XeDk.js";t(`latihan`);var c=document.getElementById(`main`),l=new URLSearchParams(location.search),u=(()=>{try{return localStorage.getItem(`rawayan.fase`)}catch{return null}})(),d={mapel:l.get(`mapel`)||`semua`,fase:l.get(`fase`)||u||`semua`,sumber:l.get(`sumber`)||`semua`};c.innerHTML=`
<div class="page-head wrap">
  <p class="eyebrow">Latihan</p>
  <h1>Latihan yang naik pelan-pelan.</h1>
  <p>Setiap paket bertingkat berisi soal ${Object.values(i).map(e=>e.label.toLowerCase()).join(`, `)}. Soal penalaran melatih berpikir kritis, banyak di antaranya memakai konteks Tujuan Pembangunan Berkelanjutan (SDG). Bank soal olimpiade dan sumatif yang lama tetap ada di sini, dengan gambar yang sudah digambar ulang.</p>
</div>
<div class="wrap">
  <div class="grid" style="margin-bottom:var(--s-5)">
    <a class="tile" href="${e(`latihan/kerjakan.html?paket=penalaran`)}">
      <span class="eyebrow">Lintas mapel</span><h3>Tantangan Penalaran</h3>
      <p>Menilai alasan, membaca data, merancang percobaan. Semua soal penalaran dari semua fase.</p></a>
    <a class="tile" href="${e(`latihan/kemajuan.html`)}">
      <span class="eyebrow">Catatan pribadi</span><h3>Kemajuanku</h3>
      <p>Lihat konsep yang sudah kamu kuasai dan yang perlu dilatih lagi.</p></a>
    <div class="tile"><span class="eyebrow">Soal bertema SDG</span><h3>Belajar untuk bumi</h3>
      <p>Soal dengan konteks air bersih, energi, iklim, laut, dan lainnya.</p>
      <details style="margin-top:6px"><summary style="cursor:pointer;font-weight:600;font-size:var(--fs-sm);color:var(--accent)">Pilih tema SDG</summary><div class="chip-row" style="margin-top:8px" data-sdg></div></details></div>
  </div>
  <div class="filters">
    <div><div class="label">Mapel</div><div class="tabs" data-f="mapel"></div></div>
    <div><div class="label">Fase</div><div class="fase-rail compact" data-f="fase"></div></div>
    <div><div class="label">Sumber</div><div class="tabs" data-f="sumber"></div></div>
  </div>
  <div data-list aria-live="polite"></div>
</div>`;var f={mapel:[[`semua`,`Semua`],...Object.keys(r).map(e=>[e,r[e].label])],fase:[[`semua`,`Semua`],...Object.keys(o).map(e=>[e,`${e} · ${o[e].kelas}`])],sumber:[[`semua`,`Semua`],[`rawayan`,`Bertingkat`],[`olimpiade`,`Olimpiade`],[`sumatif`,`Sumatif`],[`materi`,`Materi`]]};function p(){for(let e of[`mapel`,`sumber`])c.querySelector(`[data-f="${e}"]`).innerHTML=f[e].map(([t,n])=>`<button type="button" data-v="${t}" aria-pressed="${d[e]===t}">${n}</button>`).join(``);c.querySelector(`[data-f="fase"]`).innerHTML=[[`semua`,`A–F`,`Semua fase`,`SD sampai SMA`],...Object.keys(o).map(e=>[e,e,o[e].jenjang,o[e].kelas])].map(([e,t,n,r])=>`<button type="button" class="fase-card" data-v="${e}" aria-pressed="${d.fase===e}"><span class="fase-letter"${e===`semua`?` style="font-size:.95rem"`:``}>${t}</span><span class="fase-meta"><b>${n}</b><small>${r}</small></span></button>`).join(``)}var m=[];function h(){let e=m.filter(e=>(d.mapel===`semua`||e.subject===d.mapel)&&(d.fase===`semua`||e.fase.includes(d.fase))&&(d.sumber===`semua`||e.source.kind===d.sumber)),t=c.querySelector(`[data-list]`);if(!e.length){t.innerHTML=`<p class="empty">Belum ada paket untuk pilihan ini.</p>`;return}t.innerHTML=Object.keys(o).filter(t=>e.some(e=>e.fase[0]===t)).map(t=>`<section class="fase-group"><h2>Fase ${t} <small>${o[t].jenjang} ${o[t].kelas}</small></h2>
    <div class="pack-list grid">${e.filter(e=>e.fase[0]===t).sort(_).map(s).join(``)}</div></section>`).join(``)}var g={rawayan:0,materi:1,sumatif:2,olimpiade:3},_=(e,t)=>g[e.source.kind]-g[t.source.kind]||e.subject.localeCompare(t.subject)||e.title.localeCompare(t.title);c.querySelector(`.filters`).addEventListener(`click`,e=>{let t=e.target.closest(`button[data-v]`);if(!t)return;let n=t.closest(`[data-f]`).dataset.f;if(d[n]=t.dataset.v,n===`fase`&&d.fase!==`semua`)try{localStorage.setItem(`rawayan.fase`,d.fase)}catch{}let r=new URLSearchParams(Object.entries(d).filter(([,e])=>e!==`semua`));history.replaceState(null,``,r.toString()?`?`+r:location.pathname),p(),h()}),p(),n().then(t=>{m=t.packs;let n=[...new Set(m.flatMap(e=>e.sdg))].sort((e,t)=>e-t);c.querySelector(`[data-sdg]`).innerHTML=n.map(t=>`<a class="chip accent" href="${e(`latihan/kerjakan.html?paket=sdg-`+t)}" title="${a[t]}">SDG ${t} · ${a[t]}</a>`).join(``),h()}).catch(()=>{c.querySelector(`[data-list]`).innerHTML=`<p class="empty">Daftar latihan belum bisa dimuat. Periksa koneksi lalu muat ulang halaman.</p>`});