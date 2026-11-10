var e=0,t=t=>`${t}${++e}`;function n(e=`idle`,n=`Rawi, robot Rawayan`){let r=t(`rw`);return`<svg class="char char-rawi" viewBox="0 0 120 140" role="img" aria-label="${n}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${r}h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5A63E0"/><stop offset="1" stop-color="#3038A8"/></linearGradient>
    <linearGradient id="${r}b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF8E8"/><stop offset="1" stop-color="#EADFC6"/></linearGradient>
    <radialGradient id="${r}l" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFF6C2"/><stop offset=".55" stop-color="#FFC93C"/><stop offset="1" stop-color="#FFC93C" stop-opacity="0"/></radialGradient>
  </defs>
  <ellipse cx="60" cy="134" rx="34" ry="5" fill="#1B1E2B" opacity=".12"/>
  <g class="bob">
    <!-- antenna: two posts and a sagging rope, like the Rawayan bridge -->
    <path d="M36 32 V14 M84 32 V14" stroke="#2A2F7A" stroke-width="4" stroke-linecap="round"/>
    <path d="M36 15 C48 30 72 30 84 15" stroke="#C9A26B" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle class="glow" cx="60" cy="26" r="9" fill="url(#${r}l)"/><circle cx="60" cy="26" r="3.5" fill="#FFE27A"/>
    <circle cx="36" cy="13" r="3.5" fill="#FFC93C"/><circle cx="84" cy="13" r="3.5" fill="#FFC93C"/>
    <!-- ears -->
    <rect x="9" y="50" width="12" height="22" rx="5" fill="#D98914"/><rect x="99" y="50" width="12" height="22" rx="5" fill="#D98914"/>
    <!-- head and face screen -->
    <rect x="17" y="31" width="86" height="60" rx="20" fill="url(#${r}h)"/>
    <path d="M26 40 Q60 30 94 40" stroke="#8C94FF" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
    <rect x="27" y="41" width="66" height="42" rx="14" fill="#1B1E2B"/>
    ${{idle:`<rect class="blink" x="38" y="50" width="12" height="16" rx="6" fill="#7CF3E0"/><rect class="blink" x="70" y="50" width="12" height="16" rx="6" fill="#7CF3E0"/>`,happy:`<path d="M37 60 Q44 50 51 60" stroke="#7CF3E0" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M69 60 Q76 50 83 60" stroke="#7CF3E0" stroke-width="5" fill="none" stroke-linecap="round"/>`,think:`<rect class="blink" x="38" y="52" width="12" height="13" rx="6" fill="#7CF3E0"/><rect x="70" y="57" width="12" height="5" rx="2.5" fill="#7CF3E0"/>`,wow:`<circle cx="44" cy="58" r="8" fill="#7CF3E0"/><circle cx="76" cy="58" r="8" fill="#7CF3E0"/><circle cx="46" cy="55" r="2.5" fill="#fff"/><circle cx="78" cy="55" r="2.5" fill="#fff"/>`,sad:`<rect x="38" y="56" width="12" height="9" rx="4.5" fill="#7CF3E0"/><rect x="70" y="56" width="12" height="9" rx="4.5" fill="#7CF3E0"/><path d="M37 53 L50 48 M83 53 L70 48" stroke="#7CF3E0" stroke-width="3" stroke-linecap="round"/>`}[e]}${{idle:`<path d="M52 74 Q60 79 68 74" stroke="#7CF3E0" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,happy:`<path d="M50 71 Q60 82 70 71 Z" fill="#7CF3E0"/>`,think:`<path d="M53 75 L66 73" stroke="#7CF3E0" stroke-width="3.5" stroke-linecap="round"/>`,wow:`<ellipse cx="60" cy="75" rx="5" ry="6" fill="#7CF3E0"/>`,sad:`<path d="M52 77 Q60 71 68 77" stroke="#7CF3E0" stroke-width="3.5" fill="none" stroke-linecap="round"/>`}[e]}
    <circle cx="33" cy="80" r="3" fill="#F38BA0" opacity=".85"/><circle cx="87" cy="80" r="3" fill="#F38BA0" opacity=".85"/>
    <!-- body -->
    <rect x="47" y="89" width="26" height="7" rx="3" fill="#2A2F7A"/>
    <rect x="31" y="94" width="58" height="30" rx="12" fill="url(#${r}b)" stroke="#D9CFB4" stroke-width="2"/>
    <rect x="47" y="101" width="26" height="14" rx="4" fill="#1B1E2B"/>
    <rect x="50" y="104" width="6" height="8" rx="1.5" fill="#3DDC97"/><rect x="57" y="104" width="6" height="8" rx="1.5" fill="#3DDC97"/><rect x="64" y="104" width="6" height="8" rx="1.5" fill="#3DDC97" opacity=".35"/>
    <!-- arms -->
    <g class="arm-l"><rect x="17" y="98" width="14" height="22" rx="7" fill="#3038A8"/><circle cx="24" cy="121" r="6" fill="#D98914"/></g>
    <g class="arm-r"><rect x="89" y="98" width="14" height="22" rx="7" fill="#3038A8"/><circle cx="96" cy="121" r="6" fill="#D98914"/></g>
    <!-- treads -->
    <rect x="30" y="121" width="60" height="12" rx="6" fill="#2B2F45"/>
    <circle cx="40" cy="127" r="3.2" fill="#6B6F80"/><circle cx="53" cy="127" r="3.2" fill="#6B6F80"/><circle cx="67" cy="127" r="3.2" fill="#6B6F80"/><circle cx="80" cy="127" r="3.2" fill="#6B6F80"/>
  </g>
</svg>`}function r(e=`idle`,n=`Huhu, burung hantu detektif`){let r=t(`hu`),i=e===`think`?[-3,-3]:e===`wow`?[0,0]:[2,1],a=e===`wow`?8:6;return`<svg class="char char-huhu" viewBox="0 0 120 140" role="img" aria-label="${n}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="${r}b" cx=".45" cy=".35" r=".7"><stop offset="0" stop-color="#B07A4F"/><stop offset="1" stop-color="#7A4A2A"/></radialGradient>
    <pattern id="${r}c" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#C9A26B"/><path d="M0 4H8M4 0V8" stroke="#8A6234" stroke-width="1.6"/></pattern>
    <radialGradient id="${r}g" cx=".35" cy=".35" r=".7"><stop offset="0" stop-color="#E9FBFF"/><stop offset="1" stop-color="#9ED8F0"/></radialGradient>
  </defs>
  <ellipse cx="60" cy="134" rx="32" ry="5" fill="#1B1E2B" opacity=".12"/>
  <g class="bob">
    <!-- body -->
    <path d="M60 30 C92 30 102 62 100 90 C98 118 82 130 60 130 C38 130 22 118 20 90 C18 62 28 30 60 30 Z" fill="url(#${r}b)"/>
    <path d="M60 74 C80 74 88 92 86 108 C84 122 74 128 60 128 C46 128 36 122 34 108 C32 92 40 74 60 74 Z" fill="#F3E2C3"/>
    <path d="M46 92 l4 4 l4 -4 M58 92 l4 4 l4 -4 M70 92 l4 4 l4 -4 M52 104 l4 4 l4 -4 M64 104 l4 4 l4 -4 M58 116 l4 4 l4 -4" stroke="#C9A26B" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <!-- wings -->
    <path d="M22 80 C10 96 14 116 28 122 C30 104 30 92 22 80 Z" fill="#6B3F22"/>
    <g class="arm-r"><path d="M98 80 C110 92 110 106 100 114 L94 104 Z" fill="#6B3F22"/>
      <!-- magnifying glass -->
      <rect x="99" y="98" width="6" height="22" rx="3" transform="rotate(35 102 109)" fill="#5A3A22"/>
      <circle cx="96" cy="94" r="12" fill="url(#${r}g)" stroke="#3B3F50" stroke-width="4"/>
      <path d="M90 89 Q93 85 98 85" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
    <!-- face disc and eyes -->
    <path d="M28 60 C28 40 46 36 60 46 C74 36 92 40 92 60 C92 76 76 80 60 74 C44 80 28 76 28 60 Z" fill="#E9C99C"/>
    ${e===`happy`?`<path d="M34 62 Q44 52 54 62" stroke="#2B1A10" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M66 62 Q76 52 86 62" stroke="#2B1A10" stroke-width="5" fill="none" stroke-linecap="round"/>`:`<circle cx="44" cy="60" r="15" fill="#fff"/><circle cx="76" cy="60" r="15" fill="#fff"/>
       <g class="blink"><circle cx="${44+i[0]}" cy="${60+i[1]}" r="10" fill="#F2A33A"/><circle cx="${76+i[0]}" cy="${60+i[1]}" r="10" fill="#F2A33A"/>
       <circle cx="${44+i[0]}" cy="${60+i[1]}" r="${a}" fill="#2B1A10"/><circle cx="${76+i[0]}" cy="${60+i[1]}" r="${a}" fill="#2B1A10"/>
       <circle cx="${41+i[0]}" cy="${57+i[1]}" r="2.6" fill="#fff"/><circle cx="${73+i[0]}" cy="${57+i[1]}" r="2.6" fill="#fff"/></g>
       ${e===`sad`?`<path d="M30 50 L54 44 M90 50 L66 44" stroke="#5A3A22" stroke-width="4" stroke-linecap="round"/>`:``}
       ${e===`think`?`<path d="M64 41 Q76 36 90 42" stroke="#5A3A22" stroke-width="4" fill="none" stroke-linecap="round"/>`:``}`}
    <path d="M55 70 L65 70 L60 79 Z" fill="#F08A24"/>
    <!-- detective hat -->
    <path d="M24 38 C30 18 90 18 96 38 C88 42 32 42 24 38 Z" fill="url(#${r}c)" stroke="#6B4A22" stroke-width="2"/>
    <path d="M18 40 C40 46 80 46 102 40 C98 46 90 49 60 49 C30 49 22 46 18 40 Z" fill="#8A6234"/>
    <path d="M60 20 V26" stroke="#6B4A22" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="19" r="3" fill="#6B4A22"/>
    <!-- feet -->
    <path d="M46 128 l-4 6 M50 128 v7 M54 128 l4 6 M66 128 l-4 6 M70 128 v7 M74 128 l4 6" stroke="#F08A24" stroke-width="3" stroke-linecap="round"/>
  </g>
</svg>`}var i={swirl:`M-33 9 C-19 28 15 30 33 9`,swirl2:`M-25 20 C-9 32 13 32 27 20`,shine:`M-18 -22 C-10 -28 4 -28 12 -24`};function a(e=`idle`,n=`Bola, kelereng kaca`){let r=t(`bo`),a=e===`happy`?`<path d="M-14 -6 Q-9 -12 -4 -6 M4 -6 Q9 -12 14 -6" stroke="#123A3A" stroke-width="3.5" fill="none" stroke-linecap="round"/>`:`<g class="blink"><ellipse cx="-9" cy="-7" rx="4.2" ry="${e===`wow`?6.5:5.2}" fill="#123A3A"/><ellipse cx="9" cy="-7" rx="4.2" ry="${e===`wow`?6.5:5.2}" fill="#123A3A"/>
       <circle cx="-7.6" cy="-9" r="1.6" fill="#fff"/><circle cx="10.4" cy="-9" r="1.6" fill="#fff"/></g>`,o=e===`sad`?`<path d="M-6 7 Q0 2 6 7" stroke="#123A3A" stroke-width="3" fill="none" stroke-linecap="round"/>`:e===`wow`?`<ellipse cx="0" cy="6" rx="3.5" ry="4.5" fill="#123A3A"/>`:`<path d="M-7 3 Q0 10 7 3" stroke="#123A3A" stroke-width="3" fill="none" stroke-linecap="round"/>`;return`<svg class="char char-bola" viewBox="-48 -48 96 104" role="img" aria-label="${n}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="${r}s" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="#C8FFF3"/><stop offset=".45" stop-color="#3FC6B0"/><stop offset="1" stop-color="#0E6E66"/></radialGradient>
    <clipPath id="${r}k"><circle r="36"/></clipPath>
  </defs>
  <ellipse cx="0" cy="50" rx="28" ry="4.5" fill="#1B1E2B" opacity=".14"/>
  <g class="bob">
    <circle r="36" fill="url(#${r}s)"/>
    <g clip-path="url(#${r}k)" class="swirl"><path d="${i.swirl}" stroke="#FFB13B" stroke-width="6" fill="none" stroke-linecap="round" opacity=".85"/><path d="${i.swirl2}" stroke="#F0566E" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/></g>
    <path d="${i.shine}" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>
    <circle cx="24" cy="-20" r="3" fill="#fff" opacity=".9"/>
    ${a}${o}
    <circle cx="-17" cy="1" r="4" fill="#F38BA0" opacity=".6"/><circle cx="17" cy="1" r="4" fill="#F38BA0" opacity=".6"/>
    <circle r="36" fill="none" stroke="#0B4F4A" stroke-width="2" opacity=".5"/>
  </g>
</svg>`}export{n as i,a as n,r,i as t};