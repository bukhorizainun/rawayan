import{n as e}from"./math-BcwMNRSQ.js";import{i as t,n,r}from"./shell-DgwTLdl8.js";import{n as i,t as a}from"./param-BmOyOyjx.js";n(`jelajah`),document.body.dataset.area=`matematika`;var o=document.getElementById(`main`),s=[`0`,`\\tfrac{\\pi}{12}`,`\\tfrac{\\pi}{6}`,`\\tfrac{\\pi}{4}`,`\\tfrac{\\pi}{3}`,`\\tfrac{5\\pi}{12}`,`\\tfrac{\\pi}{2}`,`\\tfrac{7\\pi}{12}`,`\\tfrac{2\\pi}{3}`,`\\tfrac{3\\pi}{4}`,`\\tfrac{5\\pi}{6}`,`\\tfrac{11\\pi}{12}`,`\\pi`],c=[`0`,`π/12`,`π/6`,`π/4`,`π/3`,`5π/12`,`π/2`,`7π/12`,`2π/3`,`3π/4`,`5π/6`,`11π/12`,`π`];o.innerHTML=`
<div class="page-head wrap">
  <a class="eyebrow" href="${t(`jelajah/`)}" style="text-decoration:none">← Jelajah</a>
  <h1>Penjelajah Lissajous</h1>
  <div class="chip-row" style="margin-bottom:12px"><span class="chip accent">Math Art</span><span class="chip">Fungsi trigonometri · Fase E–F</span></div>
  <p>Satu titik bergerak naik-turun dan kiri-kanan pada saat yang sama, masing-masing mengikuti gelombang sinus. Jejaknya melukis kurva yang indah. Pertanyaannya: ide matematika apa yang membentuk pola ini?</p>
</div>
<div class="wrap sim">
  <div style="display:grid;gap:var(--s-3)">
    <div class="sim-stage" style="aspect-ratio:1/1;max-width:640px;width:100%;margin:0 auto"><canvas aria-hidden="true"></canvas>
      <div class="stage-bar"><span class="stage-hint" data-ratio></span><span style="display:flex;gap:6px">
        <button class="quality" type="button" data-play>Jeda</button><button class="quality" type="button" data-reset>Atur ulang</button></span></div></div>
    <p class="text-alt" data-alt aria-live="polite"></p>
  </div>
  <div class="sim-panel">
    <div style="display:grid;gap:14px" data-params></div>
    <div class="formula" data-formula></div>
    <section>
      <p class="eyebrow">Apa yang kamu perhatikan?</p>
      <div class="steps" style="margin-top:12px">
        <div class="step"><h4>Hitung lengkungnya</h4><p style="font-size:var(--fs-sm)">Buat a = 3 dan b = 2. Hitung berapa kali kurva menyentuh sisi kanan, lalu berapa kali menyentuh sisi atas. Bandingkan dengan a dan b.</p></div>
        <div class="step"><h4>Coba ubah fasenya</h4><p style="font-size:var(--fs-sm)">Buat a = b = 1, lalu geser δ dari 0 sampai π. Kurva berubah dari garis miring, menjadi elips, lalu lingkaran pada δ = π/2, dan kembali menjadi garis.</p></div>
        <div class="step"><h4>Kenapa begitu?</h4><div style="font-size:var(--fs-sm)"><p>Dalam satu putaran penuh, gerak mendatar berulang <b>a</b> kali dan gerak tegak berulang <b>b</b> kali. Karena itu kurva menyentuh sisi kanan sebanyak a kali dan sisi atas sebanyak b kali. Perbandingan a : b menentukan bentuknya, sedangkan δ menggeser kapan kedua gerak itu dimulai.</p>
          <p>Para insinyur dulu memakai pola ini di layar osiloskop untuk membandingkan frekuensi dua sinyal listrik.</p></div></div>
      </div>
    </section>
  </div>
</div>`;var l=e=>o.querySelector(e),u=3,d=2,f=6,p=1,m=i({id:`a`,label:`a`,hint:`frekuensi mendatar`,min:1,max:7,step:1,value:u},e=>{u=e,E()}),h=i({id:`b`,label:`b`,hint:`frekuensi tegak`,min:1,max:7,step:1,value:d},e=>{d=e,E()}),g=i({id:`d`,label:`δ`,hint:`fase`,min:0,max:12,step:1,value:f,format:e=>c[e]},e=>{f=e,E()}),_=i({id:`s`,label:`Kecepatan`,min:.25,max:3,step:.25,value:p,format:e=>a(e)+`×`},e=>p=e);l(`[data-params]`).append(m.el,h.el,g.el,_.el);var v=l(`canvas`),y=v.getContext(`2d`),b=0,x=!r(),S=performance.now(),C=Math.PI*2,w=()=>f*Math.PI/12,T=(e,t)=>t?T(t,e%t):e;function E(){b=0,e(l(`[data-formula]`),`x = \\sin(${u}t + ${s[f]}),\\quad y = \\sin(${d}t)`);let t=T(u,d);l(`[data-ratio]`).textContent=`a : b = ${u/t} : ${d/t}`,l(`[data-alt]`).textContent=`Kurva Lissajous dengan a = ${u}, b = ${d}, dan fase ${c[f]}. Kurva menyentuh sisi kanan ${u/t} kali dan sisi atas ${d/t} kali.`,x||D(C)}function D(e){let t=Math.min(2,devicePixelRatio||1),n=v.clientWidth,r=v.clientHeight;v.width!==Math.round(n*t)&&(v.width=n*t,v.height=r*t),y.setTransform(t,0,0,t,0,0),y.clearRect(0,0,n,r);let i=Math.min(n,r)*.4,a=n/2,o=r/2,s=e=>[a+i*Math.sin(u*e+w()),o-i*Math.sin(d*e)];y.strokeStyle=`rgba(27,30,43,.08)`,y.lineWidth=1,y.setLineDash([3,7]),y.beginPath(),y.moveTo(a+i,o-i),y.lineTo(a+i,o+i),y.moveTo(a-i,o-i),y.lineTo(a+i,o-i),y.stroke(),y.setLineDash([]),y.beginPath();for(let e=0;e<=1200;e++){let[t,n]=s(C*e/1200);e?y.lineTo(t,n):y.moveTo(t,n)}y.strokeStyle=`rgba(61,71,201,.14)`,y.lineWidth=2,y.stroke();let c=Math.max(2,Math.round(e/C*1200));for(let t=1;t<=c;t++){let[n,r]=s(e*(t-1)/c),[i,a]=s(e*t/c);y.strokeStyle=`hsl(${235-t/c*70}, 60%, ${45+t/c*8}%)`,y.lineWidth=2.6,y.beginPath(),y.moveTo(n,r),y.lineTo(i,a),y.stroke()}let[l,f]=s(e);y.strokeStyle=`rgba(15,138,126,.5)`,y.setLineDash([3,4]),y.beginPath(),y.moveTo(l,o+i+14),y.lineTo(l,f),y.moveTo(a-i-14,f),y.lineTo(l,f),y.stroke(),y.setLineDash([]),y.fillStyle=`#c47a0e`,y.beginPath(),y.arc(l,o+i+14,4,0,C),y.arc(a-i-14,f,4,0,C),y.fill(),y.fillStyle=`#3d47c9`,y.beginPath(),y.arc(l,f,6,0,C),y.fill()}function O(e){let t=Math.min(.05,(e-S)/1e3);S=e,x&&!document.hidden&&(b=Math.min(C,b+t*p*.9),D(b),b>=C&&(b=0)),requestAnimationFrame(O)}l(`[data-play]`).addEventListener(`click`,e=>{x=!x,e.target.textContent=x?`Jeda`:`Putar`,x||D(b||C)}),l(`[data-reset]`).addEventListener(`click`,()=>{m.set(3),h.set(2),g.set(6),_.set(1)}),new ResizeObserver(()=>D(x?b:C)).observe(v),x||(l(`[data-play]`).textContent=`Putar`),E(),D(x?0:C),requestAnimationFrame(O);