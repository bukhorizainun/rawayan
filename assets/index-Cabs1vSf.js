import{c as e,i as t,l as n,n as r,r as i,t as a}from"./shell-DgwTLdl8.js";import{i as o,t as s}from"./tutor-panel-CBmQN1Ft.js";import{t as c}from"./load-CQdxdYV8.js";import{i as l,t as u}from"./curriculum-Q-ioAjzw.js";var d=640,f=340,p=150,m=170,h=112,g=300,_=620,v=Math.PI*2;function y(e){e.innerHTML=`
  <svg viewBox="0 0 ${d} ${f}" role="img" aria-label="Lingkaran satuan dan grafik sinus. Seret titik P untuk mengubah sudut.">
    <defs><pattern id="uc-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#e3ddcf" stroke-width="1"/></pattern>
      <radialGradient id="uc-fade" cx="50%" cy="50%" r="55%"><stop offset="55%" stop-color="#fff"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
      <mask id="uc-mask"><rect width="${d}" height="${f}" fill="url(#uc-fade)"/></mask></defs>
    <rect width="${d}" height="${f}" fill="url(#uc-grid)" mask="url(#uc-mask)"/>
    <line x1="18" y1="${m}" x2="${_}" y2="${m}" stroke="#cfc8b8" stroke-width="1.5"/>
    <line x1="${p}" y1="38" x2="${p}" y2="302" stroke="#cfc8b8" stroke-width="1.5"/>
    <line x1="${g}" y1="48" x2="${g}" y2="292" stroke="#cfc8b8" stroke-width="1.5"/>
    <circle cx="${p}" cy="${m}" r="${h}" fill="none" stroke="#1b1e2b" stroke-width="2"/>
    <path data-curve fill="none" stroke="#3d47c9" stroke-width="3" stroke-linecap="round"/>
    <path data-trace fill="none" stroke="#3d47c9" stroke-width="3" opacity=".18"/>
    <path data-arc fill="#3d47c9" fill-opacity=".12" stroke="#3d47c9" stroke-width="1.5"/>
    <line data-radius stroke="#1b1e2b" stroke-width="2"/>
    <line data-sin stroke="#0f8a7e" stroke-width="4" stroke-linecap="round"/>
    <line data-proj stroke="#0f8a7e" stroke-width="1.5" stroke-dasharray="5 5"/>
    <circle data-g r="6" fill="#0f8a7e" stroke="#fff" stroke-width="2"/>
    <g data-handle style="cursor:grab">
      <circle data-hit r="26" fill="transparent"/>
      <circle data-p r="10" fill="#3d47c9" stroke="#fff" stroke-width="3"/>
    </g>
    <text data-plabel font-family="Figtree" font-weight="700" font-size="16" fill="#1b1e2b">P</text>
    <text x="306" y="44" font-family="JetBrains Mono" font-size="13" fill="#6b6f80">y = sin θ</text>
    <text x="614" y="192" text-anchor="end" font-family="JetBrains Mono" font-size="13" fill="#6b6f80">θ = 360°</text>
    <text data-read x="${p}" y="330" text-anchor="middle" font-family="JetBrains Mono" font-size="15" font-weight="600" fill="#1b1e2b"></text>
  </svg>`;let t=e.querySelector(`svg`),n=e=>t.querySelector(`[data-${e}]`),r=e=>g+320*e/v,a=``;for(let e=0;e<=120;e++){let t=v*e/120;a+=`${e?`L`:`M`}${r(t).toFixed(1)} ${(m-h*Math.sin(t)).toFixed(1)}`}n(`trace`).setAttribute(`d`,a);let o=.9,s=!1,c=[];function l(){let e=(o%v+v)%v,t=p+h*Math.cos(e),i=m-h*Math.sin(e),a=r(e);n(`handle`).setAttribute(`transform`,`translate(${t} ${i})`),n(`plabel`).setAttribute(`x`,String(t+14*Math.cos(e)-4)),n(`plabel`).setAttribute(`y`,String(i-14*Math.sin(e)+5)),n(`radius`).setAttribute(`x1`,String(p)),n(`radius`).setAttribute(`y1`,String(m)),n(`radius`).setAttribute(`x2`,String(t)),n(`radius`).setAttribute(`y2`,String(i)),n(`sin`).setAttribute(`x1`,String(t)),n(`sin`).setAttribute(`y1`,String(m)),n(`sin`).setAttribute(`x2`,String(t)),n(`sin`).setAttribute(`y2`,String(i)),n(`proj`).setAttribute(`x1`,String(t)),n(`proj`).setAttribute(`y1`,String(i)),n(`proj`).setAttribute(`x2`,String(a)),n(`proj`).setAttribute(`y2`,String(i)),n(`g`).setAttribute(`cx`,String(a)),n(`g`).setAttribute(`cy`,String(i));let s=+(e>Math.PI);n(`arc`).setAttribute(`d`,`M${p} ${m}L180 ${m}A30 30 0 ${s} 0 ${p+30*Math.cos(e)} ${m-30*Math.sin(e)}Z`);let l=``;for(let t=0;t<=80;t++){let n=e*t/80;l+=`${t?`L`:`M`}${r(n).toFixed(1)} ${(m-h*Math.sin(n)).toFixed(1)}`}n(`curve`).setAttribute(`d`,l);let u=Math.round(e*180/Math.PI),d=Math.sin(e);n(`read`).textContent=`θ = ${u}°   sin θ = ${d.toFixed(2).replace(`.`,`,`).replace(`-`,`−`)}`,c.forEach(e=>e(u,d))}let u=e=>{let n=t.createSVGPoint();return n.x=e.clientX,n.y=e.clientY,n.matrixTransform(t.getScreenCTM().inverse())},y=!1,b=n(`handle`);if(b.addEventListener(`pointerdown`,e=>{y=s=!0,b.setPointerCapture(e.pointerId),e.preventDefault()}),b.addEventListener(`pointermove`,e=>{if(!y)return;let t=u(e);o=t.x>290?Math.max(0,Math.min(v-.001,(t.x-g)/320*v)):Math.atan2(m-t.y,t.x-p),l()}),b.addEventListener(`pointerup`,()=>y=!1),b.setAttribute(`tabindex`,`0`),b.setAttribute(`role`,`slider`),b.setAttribute(`aria-label`,`Sudut θ`),b.addEventListener(`keydown`,e=>{let t=e.key;if(t===`ArrowRight`||t===`ArrowUp`)o+=Math.PI/36;else if(t===`ArrowLeft`||t===`ArrowDown`)o-=Math.PI/36;else return;s=!0,e.preventDefault(),l()}),!i()){let e=performance.now(),n=new IntersectionObserver(([e])=>r=e.isIntersecting),r=!0;n.observe(t);let i=t=>{!s&&r&&!document.hidden&&(o+=(t-e)/1e3*.35,l()),e=t,s||requestAnimationFrame(i)};requestAnimationFrame(i)}return l(),{angle:()=>o,onChange:e=>c.push(e)}}r(`home`);var b=document.getElementById(`main`);b.innerHTML=`
<section class="hero">
  <div class="motif-field" aria-hidden="true"></div>
  <div class="wrap hero-grid">
    <div class="hero-text">
      <p class="eyebrow">Matematika · Sains · Bahasa Inggris</p>
      <h1>${a(e.tagline)}</h1>
      <p class="lead">Matematika, sains, dan bahasa Inggris yang bisa kamu lihat, eksplorasi, dan pahami.</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="${t(`belajar/`)}">Mulai belajar</a>
        <a class="btn btn-ghost" href="${t(`jelajah/`)}">Jelajahi konsep</a>
      </div>
    </div>
    <figure class="hero-vis">
      <div class="hero-stage" data-uc></div>
      <ol class="hero-steps">
        <li><b>Seret titiknya.</b> Titik P berputar di lingkaran.</li>
        <li><b>Lihat sudutnya.</b> Grafik sin θ ikut bergerak.</li>
        <li><b>Tanya kenapa.</b> <button class="link-btn" type="button" data-why>Kenapa grafiknya naik-turun?</button></li>
      </ol>
    </figure>
  </div>
</section>

<section class="block">
  <div class="wrap">
    <p class="eyebrow">Cara belajar di ${a(e.name)}</p>
    <h2 class="section-title">Pelajari, lihat, jelajahi, coba, latih, renungkan.</h2>
    <ol class="cycle">
      <li><b>Pelajari</b><span>Konsep dijelaskan singkat dan jelas.</span></li>
      <li><b>Lihat</b><span>Setiap ide punya gambarnya.</span></li>
      <li><b>Jelajahi</b><span>Geser, putar, dan ubah nilainya.</span></li>
      <li><b>Coba</b><span>Tebak dulu, lalu uji tebakanmu.</span></li>
      <li><b>Latih</b><span>Soal bertingkat dari mudah sampai penalaran.</span></li>
      <li><b>Renungkan</b><span>Jelaskan kenapa dengan kata-katamu.</span></li>
    </ol>
  </div>
</section>

<div class="motif-band" aria-hidden="true"></div>
<section class="block feature-band">
  <div class="wrap feature">
    <div>
      <p class="eyebrow">Jelajah · Matematika Fase D</p>
      <h2 class="section-title">Jelajahi Tabung</h2>
      <p class="lead">Kalau jari-jarinya dijadikan dua kali, volumenya jadi berapa kali? Tebak dulu, lalu putar tabung 3D-nya dan buktikan sendiri.</p>
      <a class="btn btn-accent" href="${t(`jelajah/tabung.html`)}">Buka eksplorasi</a>
    </div>
    <a class="feature-art" href="${t(`jelajah/tabung.html`)}" aria-label="Buka Jelajahi Tabung">${C()}</a>
  </div>
</section>

<section class="block">
  <div class="wrap">
    <p class="eyebrow">Mengikuti Kurikulum Merdeka</p>
    <h2 class="section-title">Pilih mapel dan fasemu.</h2>
    <div class="grid-3" data-areas></div>
  </div>
</section>

<div class="motif-band" aria-hidden="true"></div>
<section class="block tutor-band">
  <div class="wrap feature">
    <div>
      <p class="eyebrow">${a(n.name)}</p>
      <h2 class="section-title">${a(n.promise)}</h2>
      <p class="lead">Kalau kamu buntu, ${a(n.short)} tidak langsung memberi jawaban. Ia mulai dengan pertanyaan, lalu bantuannya naik sedikit demi sedikit. Hitungan diperiksa oleh mesin hitung, bukan ditebak oleh AI.</p>
      <p class="muted" style="font-size:var(--fs-sm)">${a(n.meaning)}</p>
      <a class="btn btn-ghost" href="${t(`tutor/`)}">Cara kerjanya</a>
    </div>
    <ol class="ladder-list">${o.map(e=>`<li><span class="mono">${e.level}</span><b>${e.name}</b><small>${e.text}</small></li>`).join(``)}</ol>
  </div>
</section>`;var x=y(b.querySelector(`[data-uc]`)),S=null;b.querySelector(`[data-why]`).addEventListener(`click`,()=>{S??(S=new s);let e=Math.round((x.angle()%(2*Math.PI)+2*Math.PI)%(2*Math.PI)*180/Math.PI);S.open({subject:`matematika`,topic:`Lingkaran satuan dan fungsi sinus`,jenjang:`SMA kelas 10–11`,lang:`id`,simulation:{theta:e},item:{no:1,id:`hero-sin`,stem:`Titik P berada pada sudut ${e}°. Kenapa grafik sin θ naik lalu turun, dan pada sudut berapa nilainya paling besar?`,options:[],answer:null,steps:[`sin θ adalah tinggi titik P di atas sumbu mendatar, karena jari-jarinya 1.`,`Dari 0° ke 90° titik P naik, jadi sin θ bertambah sampai 1.`,`Dari 90° ke 270° titik P turun sampai −1, lalu naik lagi ke 0 di 360°.`],answerText:`nilai terbesarnya 1 pada sudut 90°`,tutor:{goal:[90],forbid:[`90`],allow:[0,180,270,360,e],opening:`Coba perhatikan garis hijau tegak dari P ke sumbu mendatar. Apa yang terjadi pada panjang garis itu saat P berputar?`,hints:[`Garis hijau itu adalah tinggi titik P. Kapan titik P berada paling tinggi di lingkaran?`,`Seret P ke posisi paling atas lingkaran. Berapa sudutnya di situ?`,`Di titik paling atas, tingginya sama dengan jari-jari, yaitu 1. Sudut berapa yang menunjuk lurus ke atas?`]}}})}),c().then(e=>{let n=b.querySelector(`[data-areas]`);n.innerHTML=Object.keys(l).map(n=>{let r=e.packs.filter(e=>e.subject===n),i=[...new Set(r.flatMap(e=>e.fase))].sort(),a=r.reduce((e,t)=>e+t.count,0);return`<a class="tile area-tile" data-area="${n}" href="${t(`belajar/?mapel=`+n)}">
      <span class="eyebrow">${a} soal · ${r.length} paket</span>
      <h3>${l[n].label}</h3><p>${l[n].blurb}</p>
      <div class="chip-row">${i.map(e=>`<span class="chip accent">Fase ${e} · ${u[e].jenjang}</span>`).join(``)}</div></a>`}).join(``)}).catch(()=>{});function C(){return`<svg viewBox="0 0 400 300" aria-hidden="true">
    <ellipse cx="200" cy="250" rx="110" ry="28" fill="#3d47c9" fill-opacity=".08"/>
    <path d="M90 80v160a110 28 0 0 0 220 0V80" fill="#3d47c9" fill-opacity=".14" stroke="#1b1e2b" stroke-width="2.5"/>
    <path d="M90 240a110 28 0 0 1 220 0" fill="none" stroke="#8d8aa0" stroke-width="1.6" stroke-dasharray="6 5"/>
    <ellipse cx="200" cy="80" rx="110" ry="28" fill="#e8eafb" stroke="#1b1e2b" stroke-width="2.5"/>
    <line x1="200" y1="80" x2="310" y2="80" stroke="#c2414f" stroke-width="3"/><text x="255" y="70" text-anchor="middle" font-family="JetBrains Mono" font-size="16" fill="#c2414f">r</text>
    <line x1="330" y1="80" x2="330" y2="240" stroke="#0f8a7e" stroke-width="3"/><text x="346" y="165" font-family="JetBrains Mono" font-size="16" fill="#0f8a7e">t</text>
    <text x="200" y="168" text-anchor="middle" font-family="Fraunces" font-size="30" fill="#1b1e2b">V = πr²t</text>
  </svg>`}