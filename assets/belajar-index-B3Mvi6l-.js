import{i as e,n as t,t as n}from"./shell-t9a_eRi5.js";/* empty css              */import{t as r}from"./load-ZuOtMZTi.js";import{i,t as a}from"./curriculum-Q-ioAjzw.js";import{t as o}from"./registry-BRBxI3TC.js";import{t as s}from"./pack-card-u0bpA_Su.js";t(`belajar`);var c=document.getElementById(`main`),l=new URLSearchParams(location.search),u=(()=>{try{return localStorage.getItem(`rawayan.fase`)}catch{return null}})(),d=l.get(`mapel`)||`matematika`;d===`koding`&&location.replace(e(`koding/`)),d in i||(d=`matematika`);var f=l.get(`fase`)||u,p={A:`Mengenal bilangan, bentuk, dan kata-kata pertama.`,B:`Berhitung lebih jauh, pecahan, uang, faktor, dan mengukur.`,C:`Pecahan, persen, bangun, dan membaca data.`,D:`Aljabar, fungsi, geometri, dan peluang.`,E:`Eksponen, barisan, trigonometri, dan sains terpadu.`,F:`Kalkulus, peluang lanjut, dan topik pilihan.`},m={A:`Mengenal tubuh, benda, dan alam di sekitar.`,B:`Tumbuhan, hewan, wujud benda, gaya, energi, dan cuaca.`,C:`Tubuh manusia, energi, listrik, dan Bumi.`,D:`Zat, gerak, makhluk hidup, dan tata surya.`,E:`Pengukuran, gerak lurus, energi, perubahan iklim, dan kimia dasar.`,F:`Fisika, kimia, dan biologi lanjut.`};c.innerHTML=`
<div class="page-head wrap">
  <p class="eyebrow">Belajar</p>
  <h1>Mulai dari fasemu.</h1>
  <p>Materi disusun per Fase Kurikulum Merdeka, mengikuti Capaian Pembelajaran (Keputusan Kepala BSKAP No. 046/H/KR/2025). Pilih mata pelajaran dan fasemu, lalu ikuti peta belajarnya dari nomor 1.</p>
  <div class="tabs" role="group" aria-label="Mata pelajaran" data-tabs>
    ${Object.keys(i).map(e=>`<button type="button" data-s="${e}" aria-pressed="${e===d}">${i[e].label}</button>`).join(``)}
  </div>
</div>
<div class="wrap">
  <div class="fase-rail" role="group" aria-label="Pilih fase" data-rail></div>
  <div data-body aria-live="polite"></div>
</div>`;var h=null;function g(e){let t=h.lessons.filter(t=>t.subject===d&&t.fase.includes(e)),n=h.packs.filter(t=>t.subject===d&&t.fase[0]===e);return{lessons:t.length,items:n.reduce((e,t)=>e+t.count,0)}}function _(){let e=c.querySelector(`[data-rail]`);e.innerHTML=Object.keys(a).map(e=>{let t=g(e),n=!t.lessons&&!t.items;return`<button type="button" class="fase-card" data-f="${e}" aria-pressed="${e===f}" ${n?`disabled`:``}>
      <span class="fase-letter">${e}</span>
      <span class="fase-meta"><b>${a[e].kelas}</b><small>${a[e].jenjang}</small><small>${n?`segera`:`${t.lessons} materi · ${t.items} soal`}</small></span>
    </button>`}).join(``)}function v(){let t=c.querySelector(`[data-body]`);if(document.body.dataset.area=d,!h)return;if(!f||!g(f).lessons&&!g(f).items){t.innerHTML=`<p class="empty" style="text-align:center;padding:var(--s-7) 0">Pilih fase di atas untuk melihat peta belajarnya.</p>`;return}let r=f,l=h.lessons.filter(e=>e.subject===d&&e.fase.includes(r)),u=l.filter(e=>/^(mtk|sains|ing)-[a-f]+$/.test(e.id)),_=l.filter(e=>!u.includes(e)),v=new Set(l.map(e=>e.packId).filter(Boolean)),y=h.packs.filter(e=>e.subject===d&&e.fase[0]===r),b=y.filter(e=>!v.has(e.id)),x=o.filter(e=>e.subject===d&&e.fase.includes(r)&&e.href),S=e=>y.find(t=>t.id===e),C=(t,r)=>{let i=S(t.packId);return`<li class="path-step">
      <span class="path-no">${r}</span>
      <div class="path-body">
        <a class="path-title" href="${e(`belajar/materi.html?id=`+t.id)}">${n(t.title)}</a>
        <p>${n(t.summary)}</p>
        <div class="path-actions">
          <a class="arrow-link" href="${e(`belajar/materi.html?id=`+t.id)}">Baca materi</a>
          ${i?`<a class="chip accent" href="${e(`latihan/kerjakan.html?paket=`+i.id)}">Latihan · ${i.count} soal</a>`:``}
          ${t.elemen.slice(0,2).map(e=>`<span class="chip">${n(e)}</span>`).join(``)}
        </div>
      </div>
    </li>`};t.innerHTML=`
    <section class="fase-head">
      <p class="eyebrow">Fase ${r} · ${a[r].jenjang} ${a[r].kelas}</p>
      <h2>${i[d].label}</h2>
      <p>${d===`sains`?m[r]:p[r]}</p>
    </section>
    ${u.length?`<section class="fase-sec"><h3>Mulai dari ringkasan</h3><ol class="path">${u.map(e=>C(e,`★`)).join(``)}</ol></section>`:``}
    ${_.length?`<section class="fase-sec"><h3>Peta belajar per topik</h3><ol class="path">${_.map((e,t)=>C(e,t+1)).join(``)}</ol></section>`:``}
    ${x.length?`<section class="fase-sec"><h3>Coba langsung</h3><div class="grid">${x.map(t=>`<a class="tile" href="${e(t.href)}"><span class="eyebrow">${n(t.elemen)}</span><h3>${n(t.title)}</h3><p>${n(t.summary)}</p></a>`).join(``)}</div></section>`:``}
    ${b.length?`<section class="fase-sec"><h3>Bank soal tambahan</h3><p class="muted" style="font-size:var(--fs-sm)">Soal olimpiade, sumatif, dan paket latihan lain untuk fase ini.</p><div class="pack-list grid">${b.map(s).join(``)}</div></section>`:``}`}function y(){_(),v()}function b(){let e=new URLSearchParams({mapel:d,...f?{fase:f}:{}});history.replaceState(null,``,`?`+e);try{f&&localStorage.setItem(`rawayan.fase`,f)}catch{}}c.querySelector(`[data-tabs]`).addEventListener(`click`,t=>{let n=t.target.closest(`button[data-s]`);if(n){if(d=n.dataset.s,d===`koding`){location.href=e(`koding/`);return}c.querySelectorAll(`[data-tabs] button`).forEach(e=>e.setAttribute(`aria-pressed`,String(e===n))),f&&h&&!g(f).lessons&&!g(f).items&&(f=null),b(),y()}}),c.querySelector(`[data-rail]`).addEventListener(`click`,e=>{let t=e.target.closest(`button[data-f]`);t&&!t.disabled&&(f=t.dataset.f,b(),y(),c.querySelector(`[data-body]`).scrollIntoView({behavior:`smooth`,block:`start`}))}),r().then(e=>{h=e,(!f||!g(f).lessons&&!g(f).items)&&(f=Object.keys(a).find(e=>g(e).lessons)||null),y()}).catch(()=>{c.querySelector(`[data-body]`).innerHTML=`<p class="empty">Daftar materi belum bisa dimuat. Periksa koneksi lalu muat ulang halaman.</p>`});