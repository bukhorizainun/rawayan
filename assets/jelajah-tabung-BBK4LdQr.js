const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/scene3d-B-1nrfMp.js","assets/three.core-zJY0D0oi.js","assets/OrbitControls-BokKmm2T.js"])))=>i.map(i=>d[i]);
import{n as e}from"./math-BcwMNRSQ.js";import{i as t,l as n,n as r,r as i}from"./shell-DgwTLdl8.js";import{t as a}from"./tutor-panel-CBmQN1Ft.js";import{t as o}from"./preload-helper-ildnd_tl.js";import{n as s,t as c}from"./param-BmOyOyjx.js";r(`jelajah`),document.body.dataset.area=`matematika`;var l=document.getElementById(`main`);l.innerHTML=`
<div class="page-head wrap">
  <a class="eyebrow" href="${t(`jelajah/`)}" style="text-decoration:none">← Jelajah</a>
  <h1>Jelajahi Tabung</h1>
  <div class="chip-row" style="margin-bottom:12px"><span class="chip accent">Matematika · Fase D</span><span class="chip">Pengukuran: volume dan luas permukaan</span></div>
  <p>Kaleng, drum air, dan pipa berbentuk tabung. Ubah jari-jari dan tingginya, putar tabungnya, lalu temukan sendiri kenapa jari-jari jauh lebih berpengaruh pada volume daripada tinggi.</p>
</div>
<div class="wrap sim">
  <div style="display:grid;gap:var(--s-4)">
    <div class="sim-stage" data-stage>
      <div class="stage-bar">
        <span class="stage-hint" data-hint>Seret untuk memutar · cubit atau gulir untuk memperbesar</span>
        <span style="display:flex;gap:6px">
          <label class="sr-only" for="quality">Kualitas gambar</label>
          <select class="quality" id="quality" data-quality><option value="auto">Kualitas: Otomatis</option><option value="low">Rendah</option><option value="medium">Sedang</option><option value="high">Tinggi</option></select>
          <button class="quality" type="button" data-reset>Atur ulang</button>
        </span>
      </div>
    </div>
    <p class="text-alt" data-alt aria-live="polite"></p>
    <div class="two">
      <div class="net"><p class="eyebrow" style="margin:0 0 6px">Jaring-jaring tabung</p><svg viewBox="0 0 320 220" data-net role="img" aria-label="Jaring-jaring tabung: dua lingkaran dan satu persegi panjang"></svg></div>
      <div class="plot"><p class="eyebrow" style="margin:0 0 6px">Volume terhadap jari-jari</p><svg viewBox="0 0 320 220" data-plot role="img" aria-label="Grafik volume terhadap jari-jari untuk tinggi yang dipilih"></svg></div>
    </div>
  </div>
  <div class="sim-panel">
    <div class="card" style="display:grid;gap:14px" data-params></div>
    <div class="formula" data-formula aria-live="polite"></div>
    <div class="readouts" data-read></div>
    <section class="card">
      <p class="eyebrow">Tebak, uji, amati, jelaskan</p>
      <div class="steps" style="margin-top:12px">
        <div class="step" data-s1><h4>Tebak dulu</h4>
          <p style="font-size:var(--fs-sm);margin-bottom:8px">Tinggi tetap. Jari-jari dijadikan <b>dua kali</b> lipat. Volumenya menjadi …</p>
          <div class="choice-list">${[`2 kali`,`4 kali`,`8 kali`].map((e,t)=>`<label><input type="radio" name="pred" value="${t}"> ${e}</label>`).join(``)}</div></div>
        <div class="step" data-s2 aria-disabled="true"><h4>Uji di simulasi</h4>
          <p style="font-size:var(--fs-sm);margin-bottom:8px">Kami mulai dari r = 2 cm, lalu menaikkannya ke r = 4 cm. Tinggi tetap 5 cm.</p>
          <button class="btn btn-accent btn-small" type="button" data-run disabled>Jalankan uji</button></div>
        <div class="step" data-s3 aria-disabled="true"><h4>Amati</h4><div data-obs style="font-size:var(--fs-sm)" aria-live="polite">Hasil uji akan muncul di sini.</div></div>
        <div class="step" data-s4 aria-disabled="true"><h4>Jelaskan</h4><div data-exp style="font-size:var(--fs-sm)"></div></div>
      </div>
    </section>
    <button class="btn btn-ghost" type="button" data-ask>${n.askLabel} tentang tabung ini</button>
  </div>
</div>`;var u=e=>l.querySelector(e),d=3,f=5,p=null,m=s({id:`r`,label:`Jari-jari r`,min:1,max:6,step:.5,value:d,format:e=>c(e,1)+` cm`},e=>{d=e,g()}),h=s({id:`t`,label:`Tinggi t`,min:1,max:12,step:.5,value:f,format:e=>c(e,1)+` cm`},e=>{f=e,g()});u(`[data-params]`).append(m.el,h.el);function g(){p?.update(d,f),p||b();let t=d*d*f,n=d*d,r=2*d*f,i=2*d*(d+f);e(u(`[data-formula]`),`V = \\pi r^2 t = \\pi \\cdot ${_(d)}^2 \\cdot ${_(f)} = ${_(t)}\\pi \\approx ${_(Math.PI*t)}\\ \\text{cm}^3`),u(`[data-read]`).innerHTML=[[`Volume`,`${c(Math.PI*t)} cm³`],[`Luas alas πr²`,`${c(Math.PI*n)} cm²`],[`Luas selimut 2πrt`,`${c(Math.PI*r)} cm²`],[`Luas permukaan`,`${c(Math.PI*i)} cm²`]].map(([e,t])=>`<div class="readout"><span>${e}</span><b>${t}</b></div>`).join(``),u(`[data-alt]`).textContent=`Tabung dengan jari-jari ${c(d,1)} cm dan tinggi ${c(f,1)} cm. Volumenya ${c(t)}π, kira-kira ${c(Math.PI*t)} cm³. Luas permukaannya ${c(i)}π, kira-kira ${c(Math.PI*i)} cm².`,v(),y()}var _=e=>c(e).replace(`,`,`{,}`);function v(){let e=Math.min(260/(2*Math.PI*d),196/(f+4*d)),t=2*Math.PI*d*e,n=f*e,r=d*e,i=160-t/2,a=110-n/2,o=(e,t,n,r=`#3b3f50`,i=`middle`)=>`<text x="${e}" y="${t}" text-anchor="${i}" font-family="JetBrains Mono" font-size="11" fill="${r}">${n}</text>`;u(`[data-net]`).innerHTML=`
    <rect x="${i}" y="${a}" width="${t}" height="${n}" fill="#e8eafb" stroke="#1b1e2b" stroke-width="1.6"/>
    <circle cx="160" cy="${a-r}" r="${r}" fill="#c9cdf6" stroke="#1b1e2b" stroke-width="1.6"/>
    <circle cx="160" cy="${a+n+r}" r="${r}" fill="#c9cdf6" stroke="#1b1e2b" stroke-width="1.6"/>
    <line x1="160" y1="${a-r}" x2="${160+r}" y2="${a-r}" stroke="#c2414f" stroke-width="2"/>
    ${o(160,a+n/2+4,`2πr = `+c(2*Math.PI*d)+` cm`)}
    ${o(i-4,a+n/2+4,`t = `+c(f,1),`#0f8a7e`,`end`)}
    ${o(160+r+4,a-r+4,`r`,`#c2414f`,`start`)}`}function y(){let e=Math.PI*36*12,t=e=>40+e/6*268,n=t=>192-t/e*180,r=``;for(let e=0;e<=60;e++){let i=6*e/60;r+=`${e?`L`:`M`}${t(i).toFixed(1)} ${n(Math.PI*i*i*f).toFixed(1)}`}let i=[0,2,4,6].map(e=>`<text x="${t(e)}" y="210" text-anchor="middle" font-size="11" font-family="JetBrains Mono" fill="#6b6f80">${e}</text>`).join(``);u(`[data-plot]`).innerHTML=`
    <line x1="40" y1="192" x2="308" y2="192" stroke="#1b1e2b"/><line x1="40" y1="12" x2="40" y2="192" stroke="#1b1e2b"/>
    ${i}<text x="308" y="186" text-anchor="end" font-size="11" fill="#6b6f80">r (cm)</text><text x="46" y="22" font-size="11" fill="#6b6f80">V</text>
    <path d="${r}" fill="none" stroke="#3d47c9" stroke-width="2.5"/>
    <line x1="${t(d)}" y1="${n(Math.PI*d*d*f)}" x2="${t(d)}" y2="192" stroke="#3d47c9" stroke-dasharray="4 4"/>
    <circle cx="${t(d)}" cy="${n(Math.PI*d*d*f)}" r="6" fill="#3d47c9" stroke="#fff" stroke-width="2"/>`}function b(){let e=u(`[data-stage]`),t=e.querySelector(`svg.fallback`);t||(e.insertAdjacentHTML(`afterbegin`,`<svg class="fallback" viewBox="0 0 400 300" role="img" aria-label="Gambar tabung"></svg>`),t=e.querySelector(`svg.fallback`));let n=d*16,r=d*16*.28,i=f*16,a=150+i/2;t.innerHTML=`
    <path d="M${200-n} ${a-i}V${a}A${n} ${r} 0 0 0 ${200+n} ${a}V${a-i}" fill="#8a92e6" fill-opacity=".35" stroke="#1b1e2b" stroke-width="2"/>
    <path d="M${200-n} ${a}A${n} ${r} 0 0 1 ${200+n} ${a}" fill="none" stroke="#8d8aa0" stroke-dasharray="5 4"/>
    <ellipse cx="200" cy="${a-i}" rx="${n}" ry="${r}" fill="#c9cdf6" stroke="#1b1e2b" stroke-width="2"/>
    <line x1="200" y1="${a-i}" x2="${200+n}" y2="${a-i}" stroke="#c2414f" stroke-width="3"/>
    <line x1="${200+n+14}" y1="${a-i}" x2="${200+n+14}" y2="${a}" stroke="#0f8a7e" stroke-width="3"/>`}function x(){let e=navigator;return(e.hardwareConcurrency||4)<=4||(e.deviceMemory||4)<=3?`low`:window.devicePixelRatio>1.5?`medium`:`high`}async function S(){let e=await o(()=>import(`./scene3d-B-1nrfMp.js`),__vite__mapDeps([0,1,2]));if(!e.webglAvailable()){u(`[data-hint]`).textContent=`Perangkat ini tidak mendukung 3D, jadi gambar ditampilkan 2D.`,u(`[data-quality]`).hidden=!0,g();return}C().querySelector(`svg.fallback`)?.remove(),p=e.createScene(C(),x()),g()}var C=()=>u(`[data-stage]`);u(`[data-quality]`).addEventListener(`change`,e=>{let t=e.target.value;p?.setQuality(t===`auto`?x():t)}),u(`[data-reset]`).addEventListener(`click`,()=>p?.reset()),g(),new IntersectionObserver(([e],t)=>{e.isIntersecting&&(t.disconnect(),S())}).observe(C());var w=-1;l.querySelectorAll(`input[name="pred"]`).forEach(e=>e.addEventListener(`change`,()=>{w=+e.value,u(`[data-s2]`).setAttribute(`aria-disabled`,`false`),u(`[data-run]`).disabled=!1})),u(`[data-run]`).addEventListener(`click`,async()=>{u(`[data-run]`).disabled=!0,h.set(5),m.set(2);let e=Math.PI*4*5;await T(2,4,i()?0:1400,e=>m.set(Math.round(e*2)/2));let t=Math.PI*16*5,n=w===1;u(`[data-s3]`).setAttribute(`aria-disabled`,`false`),u(`[data-obs]`).innerHTML=`<p>r = 2 cm → V = 20π ≈ ${c(e)} cm³<br>r = 4 cm → V = 80π ≈ ${c(t)} cm³</p>
    <div class="feedback${n?` ok`:``}">Volume menjadi <b>${c(t/e)} kali</b>. Tebakanmu: ${[`2 kali`,`4 kali`,`8 kali`][w]}. ${n?`Tepat.`:`Belum tepat, dan itu wajar. Banyak orang menebak 2 kali.`}</div>`,u(`[data-s4]`).setAttribute(`aria-disabled`,`false`),u(`[data-exp]`).innerHTML=`<p>Di rumus V = πr²t, jari-jari muncul <b>dua kali</b> (r × r). Kalau r dijadikan 2 kali, r × r menjadi 2 × 2 = 4 kali. Tinggi hanya muncul sekali, jadi kalau t dijadikan 2 kali, volumenya hanya 2 kali.</p>
    <p>Lihat juga grafiknya: V terhadap r melengkung ke atas (kuadrat), bukan garis lurus.</p>
    <p><b>Sekarang kamu:</b> kalau jari-jari dijadikan 3 kali, volumenya menjadi berapa kali? Jelaskan alasannya, lalu uji dengan penggeser.</p>`});function T(e,t,n,r){return new Promise(i=>{if(!n)return r(t),i();let a=performance.now(),o=s=>{let c=Math.min(1,(s-a)/n),l=1-(1-c)**3;r(e+(t-e)*l),c<1?requestAnimationFrame(o):i()};requestAnimationFrame(o)})}var E=null;u(`[data-ask]`).addEventListener(`click`,()=>{E??(E=new a),E.open({subject:`matematika`,topic:`Volume dan luas permukaan tabung`,jenjang:`SMP kelas 8–9`,lang:`id`,simulation:{r:d,t:f},item:{no:1,id:`tabung-3x`,stem:`Tinggi tabung tetap. Jika jari-jarinya dijadikan 3 kali, volumenya menjadi berapa kali?`,options:[],answer:null,steps:[`Tulis V = π × r × r × t.`,`Ganti r dengan 3r: V baru = π × 3r × 3r × t.`,`3 × 3 = 9, jadi V baru = 9 × πr²t.`],answerText:`9 kali`,tutor:{goal:[9],forbid:[`9`],allow:[3,4,5,6,12],opening:`Di rumus V = πr²t, berapa kali huruf r muncul kalau r² ditulis sebagai perkalian?`,hints:[`Tulis r² sebagai r × r. Sekarang ganti setiap r dengan 3r.`,`3r × 3r itu sama dengan berapa kali r × r?`,`Hitung 3 × 3. Itulah berapa kali volumenya bertambah.`]}}})});