import{i as e,n as t,r as n,t as r}from"./shell-DgwTLdl8.js";import{t as i}from"./load-CQdxdYV8.js";import{a}from"./curriculum-Q-ioAjzw.js";t(`belajar`),document.body.dataset.area=`koding`;var o=document.getElementById(`main`),s=[[1,`Berpikir Komputasional`],[2,`Algoritma`],[3,`Perulangan dan Percabangan`],[4,`Data dan Bilangan Biner`],[5,`Program Pertamaku`],[6,`Bagaimana Komputer Melihat`],[7,`Mesin yang Belajar dari Data`],[8,`Jaringan Saraf Tiruan`],[9,`AI Bahasa dan Chatbot`],[10,`Etika dan Dampak AI`],[11,`Literasi Digital dan Keamanan`],[12,`Proyek: Merancang AI untuk Masalah Nyata`]];o.innerHTML=`
<section class="hero kka-hero">
  <div class="wrap hero-grid">
    <div class="hero-text">
      <p class="eyebrow">Koding &amp; Kecerdasan Artifisial</p>
      <h1>Mengerti mesin yang berpikir.</h1>
      <p class="lead">Dua belas bab, dari algoritma sampai jaringan saraf. Setiap bab punya lab interaktif: kamu menyusun, menjalankan, melatih, dan menguji sendiri.</p>
      <div class="hero-cta"><a class="btn btn-primary" href="#bab">Mulai dari Bab 1</a><a class="btn btn-ghost" href="#kerangka">Tentang kurikulumnya</a></div>
    </div>
    <figure class="hero-vis"><canvas class="nn-canvas" data-nn aria-hidden="true"></canvas>
      <figcaption class="muted" style="font-size:var(--fs-xs);text-align:center">Sinyal mengalir dari masukan ke keluaran, seperti di jaringan saraf tiruan (Bab 8).</figcaption></figure>
  </div>
</section>
<section class="block" id="bab"><div class="wrap">
  <p class="eyebrow">Daftar isi</p>
  <h2 class="section-title">Dua belas bab, satu perjalanan.</h2>
  <ol class="book-toc" data-toc></ol>
</div></section>
<section class="block" id="kerangka"><div class="wrap feature" style="align-items:start">
  <div class="text stack">
    <p class="eyebrow">Kurikulum yang lebih kaya</p>
    <h2 class="section-title">Kurikulum Merdeka, diperkaya kerangka dunia.</h2>
    <p>Bab-bab ini mengikuti empat elemen mata pelajaran pilihan Koding dan Kecerdasan Artifisial dalam Capaian Pembelajaran (Keputusan Kepala BSKAP No. 046/H/KR/2025): berpikir komputasional, literasi digital, literasi dan etika kecerdasan artifisial, serta pemanfaatan dan pengembangan kecerdasan artifisial.</p>
    <p>Isinya juga diperkaya kerangka internasional: <b>AI4K12</b> dengan lima gagasan besar AI (persepsi, representasi dan penalaran, belajar, interaksi alami, dampak sosial), <b>CSTA K–12 Computer Science Standards</b>, dan <b>UNESCO AI Competency Framework for Students</b> yang menempatkan cara berpikir berpusat pada manusia dan etika di depan teknik.</p>
  </div>
  <div class="stack">
    <div class="wawasan"><p>Kata <b>algoritma</b> berasal dari nama Muhammad bin Musa <b>al-Khwarizmi</b>, ilmuwan di Baghdad abad ke-9 yang menulis cara-cara berhitung langkah demi langkah. Kata <b>aljabar</b> juga berasal dari judul bukunya.</p></div>
    <div class="unplugged"><p>Banyak bab punya kegiatan tanpa komputer: bermain peran sebagai robot, menyusun kartu langkah, atau melatih "mesin" dari kertas. Cocok untuk kelas yang perangkatnya terbatas.</p></div>
  </div>
</div></section>`,i().then(t=>{let n=new Map(t.lessons.filter(e=>e.subject===`koding`&&e.chapter!=null).map(e=>[e.chapter,e]));o.querySelector(`[data-toc]`).innerHTML=s.map(([t,i])=>{let o=n.get(t);return o?`<li class="toc-ch live"><a href="${e(`belajar/materi.html?id=`+o.id)}"><span class="toc-n">${String(t).padStart(2,`0`)}</span><span class="toc-t"><b>${r(o.title)}</b><small>${r(o.summary)}</small><span class="chip-row" style="margin-top:6px"><span class="chip accent">${a(o.fase)}</span>${(o.frameworks||[]).slice(0,1).map(e=>`<span class="chip">${r(e)}</span>`).join(``)}</span></span></a></li>`:`<li class="toc-ch soon"><span class="toc-n">${String(t).padStart(2,`0`)}</span><span class="toc-t"><b>${r(i)}</b><small>Sedang disiapkan</small></span></li>`}).join(``)}).catch(()=>{}),(function(){let e=o.querySelector(`[data-nn]`),t=e.getContext(`2d`),r=[4,6,6,3],i=n(),a=[],s=r.map(e=>Array(e).fill(0)),c=!0,l=performance.now();new IntersectionObserver(([e])=>c=e.isIntersecting).observe(e);let u=(e,t)=>r.map((n,i)=>Array.from({length:n},(a,o)=>[e*(.12+.76*i/(r.length-1)),t*((o+1)/(n+1))]));function d(){let e=Math.floor(Math.random()*r[0]);for(let t=0;t<r[1];t++)Math.random()<.55&&a.push({l:0,a:e,b:t,t:0,speed:.6+Math.random()*.5});s[0][e]=1}function f(n){let o=Math.min(2,devicePixelRatio||1),p=e.clientWidth,m=e.clientHeight;e.width!==Math.round(p*o)&&(e.width=p*o,e.height=m*o),t.setTransform(o,0,0,o,0,0),t.clearRect(0,0,p,m);let h=u(p,m),g=Math.min(.05,(n-l)/1e3);l=n;for(let e=0;e<r.length-1;e++)for(let[n,r]of h[e])for(let[i,a]of h[e+1])t.strokeStyle=`rgba(106,70,184,.12)`,t.lineWidth=1,t.beginPath(),t.moveTo(n,r),t.lineTo(i,a),t.stroke();if(!i&&c&&!document.hidden){Math.random()<g*2.2&&d();let e=[];for(let t of a)if(t.t+=g*t.speed,t.t>=1){if(s[t.l+1][t.b]=1,t.l+2<r.length)for(let n=0;n<r[t.l+2];n++)Math.random()<.35&&e.push({l:t.l+1,a:t.b,b:n,t:0,speed:.6+Math.random()*.5})}else e.push(t);a=e.slice(0,160),s=s.map(e=>e.map(e=>Math.max(0,e-g*1.4)))}for(let e of a){let[n,r]=h[e.l][e.a],[i,a]=h[e.l+1][e.b],o=e.t*e.t*(3-2*e.t);t.fillStyle=`rgba(196,122,14,.85)`,t.beginPath(),t.arc(n+(i-n)*o,r+(a-r)*o,3,0,7),t.fill()}h.forEach((e,n)=>e.forEach(([e,r],a)=>{let o=i?(n+a)%3==0?.6:0:s[n][a];t.fillStyle=`rgba(106,70,184,${.12+.3*o})`,t.beginPath(),t.arc(e,r,16+6*o,0,7),t.fill(),t.fillStyle=`#fff`,t.beginPath(),t.arc(e,r,9,0,7),t.fill(),t.strokeStyle=`#6a46b8`,t.lineWidth=2.5,t.stroke(),o>.05&&(t.fillStyle=`rgba(106,70,184,${o})`,t.beginPath(),t.arc(e,r,6,0,7),t.fill())})),i||requestAnimationFrame(f)}requestAnimationFrame(f),new ResizeObserver(()=>i&&requestAnimationFrame(f)).observe(e)})();