import{r as e}from"./math-BcwMNRSQ.js";import{i as t,l as n,n as r,t as i}from"./shell-DgwTLdl8.js";import{t as a}from"./tutor-panel-CBmQN1Ft.js";import{i as o,r as s}from"./load-CQdxdYV8.js";import{a as c,n as l,r as u,t as d}from"./curriculum-Q-ioAjzw.js";import{t as f}from"./figure-DfBK-i3Q.js";import{t as p}from"./downloads-Cs4xgJLx.js";import{n as m}from"./feedback-link-KP_iDHKW.js";import{n as h}from"./mastery-DRxYhEpB.js";var g=`ABCDE`;function _(r,o){document.title=`${o.title} · Latihan · Rawayan`,document.body.dataset.area=o.subject;let s=new a,_=o.lang===`en`?`en`:`id`,y=o.fase.map(e=>d[e].jenjang+` `+d[e].kelas).join(`, `),b=new Map;r.innerHTML=`
    <div class="page-head wrap">
      <a class="eyebrow" href="${t(`latihan/`)}" style="text-decoration:none">← Semua latihan</a>
      <h1>${i(o.title)}</h1>
      <div class="chip-row" style="margin-bottom:12px">
        <span class="chip accent">${i(o.mapel)}</span><span class="chip">${c(o.fase)}</span>
        ${o.kelas?`<span class="chip">Kelas ${o.kelas.join(`, `)}</span>`:``}
        <span class="chip">${o.items.length} soal</span>
      </div>
      <p>${i(o.description)}</p>
      ${o.lessonId?`<p><a href="${t(`belajar/materi.html?id=`+o.lessonId)}">Baca materinya dulu →</a></p>`:``}
      <div data-dl style="margin:12px 0"></div>
      <p class="muted" style="font-size:var(--fs-sm)">Kerjakan satu per satu. Tombol <b>Periksa</b> membuka pembahasan soal itu. Kalau buntu, tekan <b>${i(n.askLabel)}</b>: ia akan bertanya balik, tidak langsung memberi jawaban.</p>
    </div>
    <div class="wrap" data-items></div>
    <div class="wrap"><section class="card scorecard" data-score hidden></section></div>
    <div class="sticky-bar"><div class="wrap">
      <span class="mono" data-count></span>
      <div class="progress" aria-hidden="true"><i data-bar></i></div>
      <button class="btn btn-primary btn-small" type="button" data-check-all>Periksa semua</button>
      <button class="btn btn-ghost btn-small" type="button" data-reset>Ulangi</button>
    </div></div>`,p(r.querySelector(`[data-dl]`),o.id,[`soal`,`kunci`]);let x=r.querySelector(`[data-items]`);x.innerHTML=o.items.map((e,t)=>{let n=o.sections?.find(e=>e.from===t);return(n?`<h2 style="font-size:var(--fs-xl);margin:32px 0 16px">${i(n.title)}</h2>`:``)+T(e,t)}).join(``),o.items.forEach(e=>{e.figure&&f(x.querySelector(`#${v(e.id)} .item-fig`),e.figure)}),e(x);let S=e=>[...x.querySelectorAll(`input[name="${e.id}"]:checked`)].map(e=>+e.value);function C(e,t){let n=x.querySelector(`#${v(e.id)}`),r=S(e),i=e.answer==null?null:Array.isArray(e.answer)?e.answer:[e.answer],a=i?r.length===i.length&&i.every(e=>r.includes(e)):!1;n.querySelectorAll(`.options label`).forEach(e=>{let t=+e.dataset.j;e.classList.toggle(`correct`,!!i?.includes(t)),e.classList.toggle(`wrong`,r.includes(t)&&!i?.includes(t))}),n.classList.toggle(`is-ok`,!!i&&a),n.classList.toggle(`is-bad`,!!i&&!a),n.querySelector(`[data-result]`).innerHTML=i?a?`<span class="chip ok">Benar</span>`:`<span class="chip bad">${r.length?`Belum tepat`:`Belum dijawab`}</span>`:`<span class="chip">kunci tidak tersedia</span>`;let s=n.querySelector(`.explain`);s.hidden=!1,n.querySelectorAll(`input`).forEach(e=>e.disabled=!0),n.querySelector(`[data-check]`).disabled=!0,i&&!b.has(e.id)&&h(e.concept||o.id,a),b.set(e.id,a),w()}function w(){let e=o.items.length,a=b.size;r.querySelector(`[data-count]`).textContent=`${a}/${e} diperiksa`,r.querySelector(`[data-bar]`).style.setProperty(`--p`,`${100*a/e}%`);let s=r.querySelector(`[data-score]`);if(a===e){let e=o.items.filter(e=>e.answer!=null),r=e.filter(e=>b.get(e.id)).length,a=e.length?Math.round(100*r/e.length):0;s.hidden=!1,s.innerHTML=`<p class="eyebrow">Hasil latihan</p><div class="score">${a}</div>
        <p>${r} dari ${e.length} soal tepat. ${a>=80?`Hebat, pertahankan.`:a>=60?`Sudah bagus. Baca lagi pembahasan soal yang belum tepat.`:`Tidak apa-apa. Baca pembahasannya, tanya ${i(n.short)}, lalu ulangi.`}</p>
        <p class="muted" style="font-size:var(--fs-sm)">Kemajuanmu tersimpan di perangkat ini saja. <a href="${t(`latihan/kemajuan.html`)}">Lihat Kemajuanku</a></p>`}else s.hidden=!0}x.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`.item`);if(!n)return;let r=+n.dataset.i,i=o.items[r];t.closest(`[data-check]`)&&C(i,r),t.closest(`[data-ask]`)&&s.open({subject:o.subject,topic:o.topic||o.title,jenjang:y,lang:_,item:{...i,no:r+1},picked:S(i)})}),r.querySelector(`[data-check-all]`).addEventListener(`click`,()=>{let e=o.items.filter(e=>!b.has(e.id)&&!S(e).length).length;(!e||confirm(`Masih ada ${e} soal yang belum dijawab. Tetap periksa semua?`))&&(o.items.forEach((e,t)=>{b.has(e.id)||C(e,t)}),r.querySelector(`[data-score]`).scrollIntoView({behavior:`smooth`,block:`center`}))}),r.querySelector(`[data-reset]`).addEventListener(`click`,()=>{b.clear(),x.querySelectorAll(`input`).forEach(e=>{e.checked=!1,e.disabled=!1}),x.querySelectorAll(`.options label`).forEach(e=>e.classList.remove(`correct`,`wrong`)),x.querySelectorAll(`.item`).forEach(e=>{e.classList.remove(`is-ok`,`is-bad`),e.querySelector(`.explain`).hidden=!0,e.querySelector(`[data-result]`).innerHTML=``,e.querySelector(`[data-check]`).disabled=!1}),w(),window.scrollTo({top:0})}),w();function T(e,r){let a=e.multi?`checkbox`:`radio`,s=[e.level?`<span class="chip accent" title="${i(l[e.level].hint)}">${l[e.level].label}</span>`:``,e.label?`<span class="chip">${i(e.label)}</span>`:``,...(e.sdg||[]).map(e=>`<a class="chip" href="${t(`latihan/kerjakan.html?paket=sdg-`+e)}" title="${i(u[e])}">SDG ${e}</a>`)].join(``),c=e.steps?.length?`<ol>${e.steps.map(e=>`<li>${e}</li>`).join(``)}</ol>`:``,d=e.answer==null?``:Array.isArray(e.answer)?e.answer.map(e=>g[e]).join(`, `):`${g[e.answer]}. ${e.answerText||e.options[e.answer]}`;return`<article class="item" id="${v(e.id)}" data-i="${r}">
      <div class="item-top"><div class="chip-row" style="align-items:center"><span class="item-no">${r+1}</span>${s}</div><span data-result></span></div>
      <div class="item-body${e.figure?` has-fig`:``}">
        <div>
          <div class="item-stem">${e.stem}</div>
          ${e.multi?`<p class="muted" style="font-size:var(--fs-sm)">Jawaban boleh lebih dari satu.</p>`:``}
          <div class="options" role="${e.multi?`group`:`radiogroup`}">${e.options.map((t,n)=>`<label data-j="${n}"><input type="${a}" name="${e.id}" value="${n}"><span><span class="key">${g[n]}.</span> ${t}</span></label>`).join(``)}</div>
        </div>
        ${e.figure?`<div class="item-fig"></div>`:``}
      </div>
      <div class="item-foot">
        <button class="btn btn-ghost btn-small" type="button" data-check>Periksa</button>
        <button class="btn btn-ghost btn-small" type="button" data-ask>${i(n.askLabel)}</button>
        <a class="muted" style="font-size:var(--fs-xs);margin-left:auto" href="${m({jenis:`kesalahan soal`,dari:`${location.pathname}?paket=${o.id}#${v(e.id)} (soal ${r+1}, ${e.id})`})}">Laporkan soal</a>
      </div>
      <div class="explain" hidden>
        ${d?`<p>Jawaban: <span class="answer">${d}</span></p>`:``}
        ${c}${e.explanation?`<p>${e.explanation}</p>`:``}${e.note?`<p class="muted">${e.note}</p>`:``}
        ${!c&&!e.explanation&&e.answer!=null?`<p class="muted">Belum ada pembahasan tertulis untuk soal ini. ${i(n.name)} bisa membantumu memahaminya.</p>`:``}
      </div>
    </article>`}}var v=e=>`q-`+e.replace(/[^a-zA-Z0-9_-]/g,`_`);r(`latihan`);var y=document.getElementById(`main`),b=new URLSearchParams(location.search).get(`paket`)||``;(b===`penalaran`||/^sdg-\d+$/.test(b)?o(b):s(b)).then(e=>_(y,e)).catch(()=>{y.innerHTML=`<div class="page-head wrap"><p class="eyebrow">Latihan</p><h1>Paket tidak ditemukan.</h1>
    <p>Paket <code>${i(b)||`(kosong)`}</code> tidak ada atau belum bisa dimuat.</p>
    <a class="btn btn-primary" href="${t(`latihan/`)}">Lihat semua latihan</a></div>`});