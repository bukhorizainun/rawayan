import{i as e,n as t,t as n}from"./shell-DgwTLdl8.js";import{a as r,i}from"./curriculum-Q-ioAjzw.js";import{t as a}from"./registry-BjQam6dG.js";t(`jelajah`);var o=document.getElementById(`main`);o.innerHTML=`
<div class="page-head wrap">
  <p class="eyebrow">Jelajah</p>
  <h1>Ubah nilainya, lihat apa yang terjadi.</h1>
  <p>Setiap eksplorasi mengikuti alur yang sama: tebak dulu, coba di simulasi, amati, lalu jelaskan. Simulasi berjalan di perangkatmu sendiri, tanpa perlu koneksi ke AI.</p>
</div>
<div class="wrap grid">
  ${a.filter(e=>e.href).map(t=>`<a class="tile" data-area="${t.subject}" href="${e(t.href)}">
    <span class="eyebrow">${i[t.subject].label} · ${r(t.fase)} · ${n(t.elemen)}</span>
    <h3>${n(t.title)}</h3><p>${n(t.summary)}</p>
    <div class="chip-row"><span class="chip">${t.tech===`webgl`?`3D, bisa diputar`:t.tech===`canvas`?`Grafik interaktif`:`Gambar interaktif`}</span></div></a>`).join(``)}
  <a class="tile" href="${e(``)}"><span class="eyebrow">Matematika · Fase E–F · Geometri</span><h3>Lingkaran Satuan</h3>
    <p>Ada di beranda: seret titik P dan lihat grafik sinus terbentuk.</p></a>
</div>
<div class="wrap" style="margin-top:var(--s-6)">
  <p class="muted" style="font-size:var(--fs-sm)">Ingin berlatih bahasa Inggris dengan suara? Buka English Lab dari menu Belajar.</p>
</div>`;