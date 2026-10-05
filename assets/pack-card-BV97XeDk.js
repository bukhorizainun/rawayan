import{i as e,t}from"./shell-DgwTLdl8.js";import{n}from"./curriculum-Q-ioAjzw.js";var r={mudah:`#9ec9b6`,sedang:`#5fa596`,sulit:`#3d47c9`,penalaran:`#c47a0e`},i={rawayan:`Bertingkat`,olimpiade:`Olimpiade`,sumatif:`Sumatif`,materi:`Materi`};function a(a){let o=Object.entries(a.levels),s=o.length?`<div class="levelbar" title="${o.map(([e,t])=>`${n[e].label} ${t}`).join(`, `)}">${o.map(([e,t])=>`<i style="width:${100*t/a.count}%;background:${r[e]}"></i>`).join(``)}</div>`:``,c=[`${a.count} soal`,i[a.source.kind],a.mapel,a.sdg.length?`SDG ${a.sdg.slice(0,3).join(`, `)}`:``].filter(Boolean).join(` · `);return`<a class="pack" data-area="${a.subject}" href="${e(`latihan/kerjakan.html?paket=`+a.id)}">
    <b>${t(a.title)}</b>
    <small>${t(c)}</small>
    ${s}
  </a>`}export{a as t};