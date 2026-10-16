import{r as e}from"./shell-DYjwVdE7.js";var t=[`nol`,`satu`,`dua`,`tiga`,`empat`,`lima`,`enam`,`tujuh`,`delapan`,`sembilan`,`sepuluh`],n=e=>e<=10?t[e]:e===11?`sebelas`:e===20?`dua puluh`:`${t[e-10]} belas`;function r(t){let r=Array(20).fill(!1),i=null,a=`speechSynthesis`in window;t.innerHTML=`
    <div class="tf-wrap">
      <div class="tf-frames" data-frames>${[0,1].map(e=>`<div class="tf-frame">${Array.from({length:10},(t,n)=>`<button type="button" class="tf-cell" data-i="${e*10+n}" aria-label="petak ${e*10+n+1}"></button>`).join(``)}</div>`).join(``)}</div>
      <div class="tf-read">
        <b class="tf-num" data-num>0</b>
        <span class="tf-name" data-name>nol</span>
        <span class="tf-split" data-split></span>
      </div>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">
      <button class="btn btn-ghost btn-small" type="button" data-add>+1</button>
      <button class="btn btn-ghost btn-small" type="button" data-sub>−1</button>
      <button class="btn btn-ghost btn-small" type="button" data-clear>Kosongkan</button>
      ${a?`<button class="btn btn-ghost btn-small" type="button" data-say>🔊 Dengarkan</button>`:``}
      <button class="btn btn-accent btn-small" type="button" data-task>Beri aku tantangan</button>
    </div>
    <p class="feedback" data-fb hidden aria-live="polite"></p>`;let o=e=>t.querySelector(e),s=[...t.querySelectorAll(`.tf-cell`)],c=()=>r.filter(Boolean).length;function l(t){s.forEach((e,t)=>{e.classList.toggle(`on`,r[t]),e.setAttribute(`aria-pressed`,String(r[t]))});let a=c();o(`[data-num]`).textContent=String(a),o(`[data-name]`).textContent=n(a),o(`[data-split]`).textContent=a>10?`10 dan ${a-10}`:a===10?`satu bingkai penuh`:a>=5?`5 dan ${a-5}`:``,t!=null&&r[t]&&!e()&&s[t].animate([{transform:`scale(.4)`},{transform:`scale(1.1)`},{transform:`none`}],{duration:260,easing:`cubic-bezier(.22,1,.36,1)`}),i!=null&&u(!1)}function u(e){let t=o(`[data-fb]`),r=c();t.hidden=!1,r===i?(t.classList.add(`ok`),t.innerHTML=`<b>Hebat!</b> Itu ${i}, ${n(i)}.${i>10?` Satu bingkai penuh dan ${i-10} lagi.`:``}`,i=null):e&&(t.classList.remove(`ok`),t.textContent=r<i?`Masih kurang ${i-r}.`:`Kelebihan ${r-i}.`)}let d=e=>{if(!a)return;let t=new SpeechSynthesisUtterance(e);t.lang=`id-ID`,speechSynthesis.cancel(),speechSynthesis.speak(t)};o(`[data-frames]`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-i]`);if(!t)return;let n=+t.dataset.i;r[n]=!r[n],l(n)}),o(`[data-add]`).addEventListener(`click`,()=>{let e=r.indexOf(!1);e>=0&&(r[e]=!0,l(e))}),o(`[data-sub]`).addEventListener(`click`,()=>{let e=r.lastIndexOf(!0);e>=0&&(r[e]=!1,l())}),o(`[data-clear]`).addEventListener(`click`,()=>{r.fill(!1),l()}),t.querySelector(`[data-say]`)?.addEventListener(`click`,()=>d(n(c()))),o(`[data-task]`).addEventListener(`click`,()=>{let e;do e=3+Math.floor(Math.random()*18);while(e===c());i=e,r.fill(!1),l();let t=o(`[data-fb]`);t.hidden=!1,t.classList.remove(`ok`),t.innerHTML=`Tunjukkan bilangan <b>${e}</b> (${n(e)}) di bingkai sepuluh.`,d(`Tunjukkan ${n(e)}`)}),l()}export{r as mount};