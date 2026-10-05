import{i as e,n as t,t as n}from"./shell-DgwTLdl8.js";import{t as r}from"./param-BmOyOyjx.js";t(`proyek`);var i=document.getElementById(`main`),a={distanceMeanKm:225e6,distanceClosestKm:546e5,light:3e5,gMars:3.71,gEarth:9.8,dMars:6779,dEarth:12742};i.innerHTML=`
<div class="page-head wrap">
  <a class="eyebrow" href="${e(`proyek/`)}" style="text-decoration:none">← Proyek</a>
  <h1>Misi ke Mars</h1>
  <div class="chip-row" style="margin-bottom:12px"><span class="chip accent">Matematika</span><span class="chip">Sains</span><span class="chip">Bahasa Inggris</span><span class="chip">Fase D–E</span></div>
  <p>Kamu anggota tim pengendali misi. Robot penjelajah sudah mendarat di Mars, dan tugasmu menghitung, memeriksa, lalu melaporkan. Gunakan angka di setiap tugas. Hasil hitunganmu diperiksa langsung.</p>
</div>
<div class="wrap mission">
  <section class="mission-step">
    <header><span class="eyebrow">Tugas 1 · Matematika</span><h2>Sinyal yang terlambat</h2></header>
    <div class="stack">
      <p>Sinyal radio merambat secepat cahaya, sekitar <b>300.000 km/s</b>. Jarak rata-rata Bumi–Mars sekitar <b>225 juta km</b>. Berapa <b>menit</b> sinyal perintah kita sampai ke robot?</p>
      <div class="answer-row"><input inputmode="decimal" data-a1 aria-label="Jawaban dalam menit" placeholder="menit"><button class="btn btn-accent btn-small" type="button" data-c1>Periksa</button></div>
      <p data-f1 aria-live="polite"></p>
      <details><summary>Petunjuk</summary><p>Waktu = jarak : kecepatan. Hasilnya dalam detik, lalu bagi 60.</p></details>
    </div>
  </section>
  <section class="mission-step">
    <header><span class="eyebrow">Tugas 2 · Sains</span><h2>Lebih ringan di Mars</h2></header>
    <div class="stack">
      <p>Gravitasi Mars <b>3,71 m/s²</b>, gravitasi Bumi <b>9,8 m/s²</b>. Robot bermassa <b>1.025 kg</b>. Berapa <b>newton</b> berat robot di Mars? Apakah massanya berubah?</p>
      <div class="answer-row"><input inputmode="decimal" data-a2 aria-label="Berat dalam newton" placeholder="newton"><button class="btn btn-accent btn-small" type="button" data-c2>Periksa</button></div>
      <p data-f2 aria-live="polite"></p>
      <p>Kalau bola dilempar di Mars, apakah jatuhnya lebih jauh? <a class="arrow-link" href="${e(`jelajah/parabola.html?g=mars`)}">Coba di Lab Gerak Parabola</a></p>
    </div>
  </section>
  <section class="mission-step">
    <header><span class="eyebrow">Tugas 3 · Matematika</span><h2>Seberapa besar Mars?</h2></header>
    <div class="stack">
      <p>Diameter Mars sekitar <b>6.779 km</b> dan diameter Bumi <b>12.742 km</b>. Perbandingan diameter Mars : Bumi kira-kira ....</p>
      <div class="choice-list" data-q3>${[`1 : 4`,`1 : 2`,`2 : 3`,`1 : 1`].map((e,t)=>`<label><input type="radio" name="q3" value="${t}"> ${e}</label>`).join(``)}</div>
      <p data-f3 aria-live="polite"></p>
    </div>
  </section>
  <section class="mission-step">
    <header><span class="eyebrow">Tugas 4 · Bahasa Inggris</span><h2>Mission report</h2></header>
    <div class="stack">
      <p>Write a short report (40–80 words) to the mission director. Say what you found in tasks 1–3. Use the past tense and include at least two numbers.</p>
      <p class="muted" style="font-size:var(--fs-sm)">Start like this: <i>Dear Director, Today our team calculated ...</i></p>
      <div class="answer-row"><textarea data-report aria-label="Mission report" placeholder="Dear Director, ..."></textarea></div>
      <ul data-checks style="font-size:var(--fs-sm);list-style:none;padding:0;display:grid;gap:4px"></ul>
      <button class="btn btn-ghost btn-small" type="button" data-copy>Salin laporan</button>
    </div>
  </section>
  <section class="mission-step">
    <header><span class="eyebrow">Renungkan</span><h2>Kalau kamu insinyurnya</h2></header>
    <div class="stack"><p>Sinyal butuh lebih dari 10 menit untuk sampai. Kenapa robot di Mars harus bisa mengambil keputusan sendiri, misalnya menghindari batu, tanpa menunggu perintah dari Bumi? Diskusikan dengan teman atau gurumu.</p></div>
  </section>
</div>`;var o=e=>i.querySelector(e),s=e=>Number(e.replace(/\s/g,``).replace(/\.(?=\d{3})/g,``).replace(`,`,`.`));o(`[data-c1]`).addEventListener(`click`,()=>{let e=a.distanceMeanKm/a.light,t=e/60,n=s(o(`[data-a1]`).value);o(`[data-f1]`).innerHTML=isFinite(n)?Math.abs(n-t)<=.3?`<span class="chip ok">Tepat</span> 225.000.000 : 300.000 = 750 detik = ${r(t,1)} menit. Saat Mars paling dekat (sekitar 54,6 juta km), sinyal hanya butuh sekitar ${r(a.distanceClosestKm/a.light/60,1)} menit.`:Math.abs(n-e)<1?`<span class="chip bad">Hampir</span> Itu masih dalam detik. Ubah ke menit.`:`<span class="chip bad">Belum tepat</span> Coba lagi: jarak dibagi kecepatan.`:`Tulis angkanya dulu.`}),o(`[data-c2]`).addEventListener(`click`,()=>{let e=1025*a.gMars,t=s(o(`[data-a2]`).value);o(`[data-f2]`).innerHTML=isFinite(t)?Math.abs(t-e)<=5?`<span class="chip ok">Tepat</span> w = m × g = 1.025 × 3,71 ≈ ${r(e,0)} N, sedangkan di Bumi ${r(1025*a.gEarth,0)} N. Massanya tetap 1.025 kg; yang berubah hanya beratnya.`:`<span class="chip bad">Belum tepat</span> Berat = massa × gravitasi tempat itu.`:`Tulis angkanya dulu.`}),i.querySelectorAll(`input[name="q3"]`).forEach(e=>e.addEventListener(`change`,()=>{let t=a.dMars/a.dEarth;o(`[data-f3]`).innerHTML=+e.value==1?`<span class="chip ok">Tepat</span> 6.779 : 12.742 ≈ ${r(t,2)}, kira-kira setengah. Mars hanya sekitar separuh lebar Bumi.`:`<span class="chip bad">Belum tepat</span> Bulatkan: 6.779 kira-kira 7.000 dan 12.742 kira-kira 13.000. Perbandingannya mendekati berapa?`}));var c=o(`[data-report]`),l=()=>{let e=c.value,t=e.trim().split(/\s+/).filter(Boolean).length,r=[[t>=40&&t<=80,`40–80 words (now ${t})`],[/\b(\w+ed|was|were|went|found|took|saw|made|sent|had)\b/i.test(e),`uses the past tense`],[(e.match(/\d[\d.,]*/g)||[]).length>=2,`includes at least two numbers`],[/^\s*dear\b/i.test(e),`starts with a greeting (Dear ...)`]];o(`[data-checks]`).innerHTML=r.map(([e,t])=>`<li>${e?`✓`:`○`} ${n(t)}</li>`).join(``)};c.addEventListener(`input`,l),l(),o(`[data-copy]`).addEventListener(`click`,()=>navigator.clipboard?.writeText(c.value));