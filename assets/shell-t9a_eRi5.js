(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`Rawayan`,tagline:`Dari penasaran ke paham.`,meaning:`Rawayan adalah kata Sunda Baduy untuk jembatan, seperti jembatan bambu tanpa paku di Kanekes, Lebak, Banten. Bentuk tali jembatan gantung adalah kurva katenari, dan kurva itu menjadi logo kami.`,owner:`Mochamad Bukhori Zainun`,year:2026},t={saweria:`https://saweria.co/rawayan`,trakteer:``},n={name:`Pasepen`,short:`Pasepen`,promise:`Berpikir bersamamu, bukan menggantikan pikiranmu.`,askLabel:`Tanya Pasepen`,meaning:`Pasepen adalah nama tempat Sultan Maulana Hasanuddin, pendiri Kesultanan Banten, menyepi untuk merenung. Namanya kemudian diabadikan menjadi salah satu motif Batik Banten, yang melambangkan batin yang tenang. Tutor kami diberi nama itu karena tugasnya bukan memberi jawaban, melainkan memberi ruang untuk berpikir.`};function r(e=`currentColor`){let t=[],n=9*Math.cosh(16/9)-9;for(let e=0;e<=24;e++){let r=-16+32*e/24,i=9*Math.cosh(r/9)-9;t.push(`${(r+17).toFixed(2)},${(3+(n-i)*.42).toFixed(2)}`)}return`<svg viewBox="0 0 34 22" aria-hidden="true"><polyline points="${t.join(` `)}" fill="none" stroke="${e}" stroke-width="2.4" stroke-linecap="round"/><path d="M1 3v16M33 3v16" stroke="${e}" stroke-width="2.4" stroke-linecap="round"/><path d="M1 19h32" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity=".45"/></svg>`}var i=e=>`url("data:image/svg+xml,${encodeURIComponent(e)}")`;function a(e=`#3d47c9`,t=`#c47a0e`){return`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <g fill="none" stroke="${e}" stroke-width="1.1" opacity=".9">
      <path d="M24 0L48 24L24 48L0 24Z"/>
      <g fill="${e}" fill-opacity=".14">${[0,90,180,270].map(e=>`<path d="M24 24 Q19 15 24 9 Q29 15 24 24Z" transform="rotate(${e} 24 24)"/>`).join(``)}</g>
      <g fill="${t}" fill-opacity=".22" stroke="${t}">${[45,135,225,315].map(e=>`<path d="M24 24 Q22 19 24 15 Q26 19 24 24Z" transform="rotate(${e} 24 24)"/>`).join(``)}</g>
    </g>
    <circle cx="24" cy="24" r="2.2" fill="${t}"/>
    <g fill="${e}">${[[0,0],[48,0],[0,48],[48,48]].map(([e,t])=>`<circle cx="${e}" cy="${t}" r="2"/>`).join(``)}
      ${[[12,12],[36,12],[12,36],[36,36]].map(([e,t])=>`<circle cx="${e}" cy="${t}" r="1"/>`).join(``)}</g>
  </svg>`}function o(e=`#3d47c9`,t=`#c47a0e`){return`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="16" viewBox="0 0 64 16">
    <circle cx="10" cy="8" r="1.3" fill="${e}" opacity=".5"/><circle cx="54" cy="8" r="1.3" fill="${e}" opacity=".5"/>
    <g transform="translate(32 8)" fill="${e}" fill-opacity=".22" stroke="${e}" stroke-width=".9">
      ${[0,90,180,270].map(e=>`<path d="M0 0 Q-3 -4 0 -7 Q3 -4 0 0Z" transform="rotate(${e})"/>`).join(``)}
    </g><circle cx="32" cy="8" r="1.6" fill="${t}"/>
  </svg>`}function s(e=`#fff`,t=20){return`<svg viewBox="0 0 24 24" width="${t}" height="${t}" fill="none" stroke="${e}" stroke-width="1.4" stroke-linecap="round" aria-hidden="true">
    <circle cx="12" cy="7" r="2.2" fill="${e}"/>${Array.from({length:12},(e,t)=>{let n=t*Math.PI/6;return`<line x1="${12+3.4*Math.cos(n)}" y1="${7+3.4*Math.sin(n)}" x2="${12+5.4*Math.cos(n)}" y2="${7+5.4*Math.sin(n)}"/>`}).join(``)}
    <path d="M7 15h10M8.5 17.5h7M10 20h4"/><circle cx="12" cy="22.4" r=".9" fill="${e}" stroke="none"/>
  </svg>`}function c(){let e=document.documentElement.style;e.setProperty(`--motif-ceplok`,i(a())),e.setProperty(`--motif-glyph`,i(o()))}var l=`/rawayan/`,u=e=>l+e.replace(/^\//,``),d=[{href:`belajar/`,label:`Belajar`,key:`belajar`},{href:`jelajah/`,label:`Jelajah`,key:`jelajah`},{href:`lab/`,label:`Lab`,key:`lab`},{href:`main/`,label:`Main`,key:`main`},{href:`latihan/`,label:`Latihan`,key:`latihan`},{href:`proyek/`,label:`Proyek`,key:`proyek`},{href:`tutor/`,label:n.name,key:`tutor`},{href:`tentang/`,label:`Tentang`,key:`tentang`}];function f(t){c();let i=document.createElement(`header`);i.className=`site-head`,i.innerHTML=`
    <a class="skip" href="#main">Lewati ke konten</a>
    <div class="wrap">
      <a class="brand" href="${u(``)}" aria-label="${e.name}, beranda">${r()}<span>${e.name}</span></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
      <nav class="nav" id="site-nav" aria-label="Navigasi utama">
        ${d.map(e=>`<a href="${u(e.href)}"${e.key===t?` aria-current="page"`:``}>${e.label}</a>`).join(``)}
      </nav>
    </div>`,document.body.prepend(i);let a=i.querySelector(`.nav-toggle`),o=i.querySelector(`.nav`);a.addEventListener(`click`,()=>{let e=o.classList.toggle(`open`);a.setAttribute(`aria-expanded`,String(e))});let s=document.createElement(`footer`);s.className=`site-foot`,s.innerHTML=`
    <div class="motif-band" aria-hidden="true"></div>
    <div class="wrap">
      <div>
        <a class="brand" href="${u(``)}">${r()}<span>${e.name}</span></a>
        <p style="margin-top:12px">${e.meaning}</p>
        <p>Tutor kami bernama ${n.name}. ${n.meaning}</p>
      </div>
      <div>
        <p><b>${e.tagline}</b> Materi mengikuti Capaian Pembelajaran Kurikulum Merdeka
        (Keputusan Kepala BSKAP No. 046/H/KR/2025).</p>
        <p><a class="arrow-link" href="${u(`saran/?dari=`+encodeURIComponent(location.pathname+location.search))}">Kirim saran atau laporkan kesalahan</a></p>
        <p><a class="arrow-link" href="${u(`dukung/`)}">Dukung guru LPQ dan Pejuang Pilah</a></p>
        <p>Ornamen situs ini digambar untuk Rawayan, terinspirasi pola ceplok Batik Banten. Ilustrasi soal memakai Fluent Emoji (Microsoft, lisensi MIT). Semua materi dan simulasi bisa dipakai tanpa koneksi ke AI.</p>
      </div>
      <p class="copyright">© ${e.year} ${e.owner}. Seluruh hak dilindungi. Gratis untuk belajar dan mengajar, tidak untuk dijual atau diterbitkan ulang.
        <a href="${u(`ketentuan/`)}">Ketentuan penggunaan</a> · <a href="${u(`THIRD_PARTY_NOTICES.txt`)}">Lisensi pihak ketiga</a></p>
    </div>`,document.body.append(s)}function p(e){return String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}var m=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;export{c as a,e as c,u as i,t as l,f as n,s as o,m as r,r as s,p as t,n as u};