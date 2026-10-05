import{l as e,n as t,t as n}from"./shell-DgwTLdl8.js";import{i as r,n as i,r as a,t as o}from"./tutor-panel-CBmQN1Ft.js";t(`tutor`);var s=document.getElementById(`main`);s.innerHTML=`
<div class="page-head wrap">
  <p class="eyebrow">${n(e.name)}</p>
  <h1>${n(e.promise)}</h1>
  <p>${n(e.name)} meniru cara guru yang baik membimbing di kelas. Ia tidak langsung memberi jawaban. Ia bertanya dulu, lalu menaikkan bantuannya sedikit demi sedikit, dan hanya membuka jawaban di tahap terakhir.</p>
  <p class="muted">${n(e.meaning)}</p>
</div>
<div class="wrap feature" style="align-items:start">
  <div class="stack">
    <h2 style="font-size:var(--fs-xl)">Tangga bantuan</h2>
    <ol class="ladder-list">${r.map(e=>`<li><span class="mono">${e.level}</span><b>${e.name}</b><small>${e.text}</small></li>`).join(``)}</ol>
  </div>
  <div class="stack">
    <h2 style="font-size:var(--fs-xl)">Coba sekarang</h2>
    <div class="card stack">
      <p>Seorang siswa menulis:</p>
      <p class="formula mono" style="font-size:1.2rem">2/3 + 1/4 = 3/7</p>
      <p>Apa yang akan dilakukan ${n(e.short)}? Buka percakapan lalu ketik jawaban yang sama, <span class="mono">2/3 + 1/4 = 3/7</span>.</p>
      <button class="btn btn-primary" type="button" data-demo>Buka percakapan</button>
    </div>
    <div class="card stack">
      <h3 style="font-size:var(--fs-lg)">Mesin hitung</h3>
      <p style="font-size:var(--fs-sm)">AI tidak dipercaya untuk berhitung. Setiap hitungan diperiksa oleh mesin hitung pecahan yang pasti. Coba tulis hitungan:</p>
      <label class="sr-only" for="expr">Hitungan</label>
      <input id="expr" class="formula mono" style="width:100%;border:1px solid var(--line-strong)" value="2/3 + 1/4">
      <p class="mono" data-out aria-live="polite"></p>
    </div>
  </div>
</div>
<section class="block"><div class="wrap text stack">
  <h2 style="font-size:var(--fs-xl)">Bagaimana ia bekerja</h2>
  <ol>
    <li><b>Halaman yang memutuskan.</b> Tingkat bantuan, kapan jawaban boleh dibuka, dan apakah siswa sudah sampai pada jawabannya ditentukan oleh aturan di halaman, bukan oleh AI.</li>
    <li><b>Hitungan diperiksa mesin.</b> Kalau siswa menulis hitungan, hasilnya dicek dengan pecahan yang pasti. Kesalahan yang umum, seperti menjumlahkan pembilang dan penyebut langsung, dikenali dan dijawab dengan pertanyaan yang tepat.</li>
    <li><b>AI hanya merangkai kalimat.</b> Kalau AI tersedia, ia menyusun satu kalimat sesuai tingkat bantuan. Kalimat yang membocorkan jawaban, memakai angka baru, atau memberi bantuan berlebih ditolak.</li>
    <li><b>Tetap jalan tanpa AI.</b> Kalau AI tidak tersedia, ${n(e.short)} memakai naskah guru yang sudah ditulis untuk setiap soal. Materi, simulasi, dan latihan tidak bergantung pada AI.</li>
  </ol>
  <details class="card"><summary><b>Pengaturan lanjutan: alamat server tutor</b></summary>
    <p style="font-size:var(--fs-sm);margin-top:12px">Untuk guru atau pengembang yang menjalankan server tutor sendiri (model lokal, layanan gratis, atau server lain dengan protokol yang sama). Kosongkan untuk memakai naskah guru saja.</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap"><input data-ep style="flex:1;min-width:220px;padding:10px;border:1px solid var(--line-strong);border-radius:8px" placeholder="https://contoh.workers.dev/chat"><button class="btn btn-ghost btn-small" type="button" data-save>Simpan</button></div>
    <p class="muted" style="font-size:var(--fs-xs)" data-saved></p>
  </details>
</div></section>`;var c=null;s.querySelector(`[data-demo]`).addEventListener(`click`,()=>{c??(c=new o),c.open({subject:`matematika`,topic:`Penjumlahan pecahan berpenyebut berbeda`,jenjang:`SD kelas 5`,lang:`id`,item:{no:1,id:`demo-pecahan`,stem:`Hitunglah 2/3 + 1/4.`,options:[],answer:null,steps:[`Samakan penyebut: KPK dari 3 dan 4 adalah 12.`,`2/3 = 8/12 dan 1/4 = 3/12.`,`8/12 + 3/12 = 11/12.`],answerText:`11/12`,tutor:{goal:[`11/12`],goalRe:`11\\s*/\\s*12`,forbid:[`11/12`,`12`],allow:[3,4,7,8],opening:`Coba tulis caramu menjumlahkan 2/3 dan 1/4 di sini.`,hints:[`Sepertiga dan seperempat itu potongan yang berbeda ukuran. Bagaimana caranya supaya ukurannya sama?`,`Cari bilangan yang bisa dibagi 3 dan juga bisa dibagi 4.`,`Ubah kedua pecahan menjadi per-dua-belas, lalu jumlahkan pembilangnya.`]}}})});var l=s.querySelector(`#expr`),u=s.querySelector(`[data-out]`),d=()=>{try{u.textContent=`= `+a(i(l.value))}catch{u.textContent=`Tulis hitungan dengan angka, pecahan a/b, + − × ÷, dan kurung.`}};l.addEventListener(`input`,d),d();var f=s.querySelector(`[data-ep]`);try{f.value=localStorage.getItem(`rawayan.tutor.endpoint`)||``}catch{}s.querySelector(`[data-save]`).addEventListener(`click`,()=>{try{f.value.trim()?localStorage.setItem(`rawayan.tutor.endpoint`,f.value.trim()):localStorage.removeItem(`rawayan.tutor.endpoint`),s.querySelector(`[data-saved]`).textContent=`Tersimpan di perangkat ini. Muat ulang halaman latihan untuk memakainya.`}catch{s.querySelector(`[data-saved]`).textContent=`Peramban ini tidak mengizinkan penyimpanan.`}});