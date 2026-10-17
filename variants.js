const modeGroups = [
  { label: 'Original', items: [
    ['original', 'Vibe Map', 'The original chat and mood map', '✦'],
  ] },
  { label: 'Applications', items: [
    ['music', 'Music discovery', 'Move the mood; reshape a playlist', '♫'],
    ['dj', 'DJ journey', 'Draw how a mix should evolve', '≋'],
    ['decision', 'Decision readiness', 'Make your trade-off visible', '◇'],
    ['persona', 'Persona explorer', 'Compare fictional risk styles', '◫'],
    ['dating', 'Dating signals', 'Two people, two self-set positions', '♡'],
    ['travel', 'Travel trade-off', 'Re-rank fictional next stops', '⌁'],
    ['outfit', 'Outfit mood', 'Dial a whole look', '◈'],
    ['writing', 'Writing tone', 'Move a point to rewrite a line', 'Aa'],
    ['lighting', 'Room lighting', 'Drag the light itself', '☀'],
    ['beauty', 'Beauty light', 'Move a highlight on a portrait', '✧'],
    ['color', 'Color field', 'Hue × saturation, plus brightness', '◐'],
    ['size', 'Garment sizing', 'Drag the silhouette to fit', '↕'],
    ['gift', 'Gift intuition', 'Pull toward and push away', '◇'],
  ] },
  { label: 'Input experiments', items: [
    ['ring', 'Circular mood', 'Choose a phase, not a category', '◌'],
    ['reach', 'Reach map', 'Drag how far you will go', '◎'],
    ['push', 'Push & pull', 'Say yes and no spatially', '↔'],
    ['path', 'Draw a path', 'Give an experience a beginning and end', '〰'],
    ['paint', 'Paint a region', 'Express a range, not one exact point', '▧'],
    ['two', 'Now → wanted', 'Show the gap you want to cross', '●'],
    ['direct', 'Direct manipulation', 'Move the visible effect', '◉'],
    ['dwell', 'Dwell to reveal', 'Pause when something feels close', '◷'],
    ['textmap', 'Text ↔ map', 'Edit either side of the same intent', '⇄'],
  ] },
];

const modes = {
  original: { kind: 'original' },
  music: { kind: 'matrix', eyebrow: 'MUSIC / LIVE RECOMMENDATION', title: 'Steer the playlist', lede: 'Move between familiar and surprising, calm and energetic. The next songs reorder as you move.', axes: ['ENERGETIC','FAMILIAR','DISCOVER','CALM'], start: [.3,.58] },
  decision: { kind: 'matrix', eyebrow: 'DECISION / WILLINGNESS', title: 'Name the trade-off', lede: 'A way to notice where you are emotionally before making a consequential decision.', axes: ['SHORT HORIZON','PRESERVE','SEEK UPSIDE','LONG HORIZON'], start: [.28,.7] },
  persona: { kind: 'matrix', eyebrow: 'PERSONA / SELF-REFLECTION', title: 'Which style feels like you?', lede: 'Move a point to compare fictional decision styles. This is a mirror for willingness, not a follow-trade action.', axes: ['FAST','CAUTIOUS','RISK SEEKING','PATIENT'], start: [.38,.67] },
  travel: { kind: 'matrix', eyebrow: 'TRAVEL / NEXT STOP', title: 'Choose the detour', lede: 'Let your appetite for crowds and effort reorder possible next stops.', axes: ['MORE DETOUR','QUIET','POPULAR','EASY'], start: [.36,.67] },
  outfit: { kind: 'matrix', eyebrow: 'STYLE / WHOLE LOOK', title: 'Dial a look', lede: 'Move the overall feeling before choosing individual pieces.', axes: ['POLISHED','UNDERSTATED','EXPRESSIVE','COMFY'], start: [.35,.62] },
  writing: { kind: 'matrix', eyebrow: 'WRITING / TONE', title: 'Rewrite the same thought', lede: 'One sentence changes its voice as you move. You can also type a tone below to move the point.', axes: ['BOLD','FORMAL','CLOSE','RESTRAINED'], start: [.45,.6], text: true },
  textmap: { kind: 'matrix', eyebrow: 'INPUT / BIDIRECTIONAL', title: 'The map reads back', lede: 'Drag the point to write an intent, or type an intent to move the point.', axes: ['BUZZING','SOLO','SOCIAL','CHILL'], start: [.25,.5], text: true },
  dj: { kind: 'path', eyebrow: 'MUSIC / DJ JOURNEY', title: 'Draw the night', lede: 'Pick a seed, then draw how the energy should change over time. Play a short synthesized sound sketch.', seed: true },
  dating: { kind: 'pair', eyebrow: 'SOCIAL / SHARED SIGNALS', title: 'Two honest positions', lede: 'Move each person’s self-set point. See whether their preferred pace and openness are moving together.', pair: 'dating' },
  two: { kind: 'pair', eyebrow: 'INPUT / TWO POINTS', title: 'Now → wanted', lede: 'Mark your current state and where you want to end up. The distance itself becomes the input.', pair: 'transition' },
  lighting: { kind: 'light', eyebrow: 'SPACE / LIGHTING', title: 'Move the light', lede: 'Drag the glow in the room. Change its softness below, then see the parameters the scene implies.' },
  beauty: { kind: 'beauty', eyebrow: 'BEAUTY / DIRECT EDITING', title: 'Put the glow where you want', lede: 'Move a highlight directly on the portrait. Change its feather without learning a parameter panel.' },
  color: { kind: 'color', eyebrow: 'COLOR / THREE VALUES', title: 'Find a color by moving', lede: 'The plane controls hue and saturation. The slider adds brightness as the third dimension.' },
  size: { kind: 'size', eyebrow: 'STYLE / DIRECT SIZING', title: 'Drag the fit', lede: 'Pull the garment wider or narrower and see the silhouette change immediately.' },
  direct: { kind: 'light', eyebrow: 'INPUT / DIRECT MANIPULATION', title: 'Touch the result', lede: 'Instead of typing a position or a blur value, move the light you actually see.' },
  gift: { kind: 'pull', eyebrow: 'GIFTS / INTUITION', title: 'A gift between yes and no', lede: 'Move WANT toward the feeling you seek; move AVOID toward the feeling you want to escape.', gift: true },
  push: { kind: 'pull', eyebrow: 'INPUT / PUSH & PULL', title: 'Choose with two forces', lede: 'A single point cannot express both desire and aversion. Move WANT and AVOID separately.' },
  ring: { kind: 'ring', eyebrow: 'INPUT / CIRCULAR', title: 'A mood with phases', lede: 'Drag around the ring to choose where tonight is in its cycle.' },
  reach: { kind: 'reach', eyebrow: 'INPUT / MAP', title: 'How far feels right?', lede: 'Drag out from YOU to set a comfortable reach. Tap a place to inspect it.' },
  path: { kind: 'path', eyebrow: 'INPUT / TRAJECTORY', title: 'Draw the transition', lede: 'Draw from left to right. Your line becomes a sequence of moods rather than one fixed setting.' },
  paint: { kind: 'paint', eyebrow: 'INPUT / UNCERTAINTY', title: 'Paint what could work', lede: 'Brush across every acceptable area. A wider region means more room to surprise you.' },
  dwell: { kind: 'dwell', eyebrow: 'INPUT / PAUSE', title: 'Pause when it feels close', lede: 'Drag to explore. Hold still on a spot for a second to reveal more detail.' },
};

const appShell = document.querySelector('.app');
const modeToggle = document.getElementById('mode-toggle');
const modeMenu = document.getElementById('mode-menu');
const modeList = document.getElementById('mode-list');
const variantStage = document.getElementById('variant-stage');
const variantDock = document.getElementById('variant-dock');
let currentMode = 'original';
let variant = {};
let disposeMode = () => {};
let audioContext = null;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function clamp01(value) { return Math.min(.94, Math.max(.06, value)); }
function words(x,y) {
  return {
    horizontal: x < .35 ? 'mostly solo' : x > .65 ? 'with people' : 'company optional',
    vertical: y < .35 ? 'high energy' : y > .65 ? 'low-key' : 'a little buzz',
  };
}
function openMenu(open, restoreFocus = true) {
  const wasOpen = !modeMenu.hidden;
  modeMenu.hidden = !open;
  modeToggle.setAttribute('aria-expanded', String(open));
  if (open) modeMenu.querySelector('[aria-current="true"]')?.scrollIntoView({block:'nearest'});
  else if (wasOpen && restoreFocus) modeToggle.focus({preventScroll:true});
}
modeList.innerHTML = modeGroups.map(group => `<div class="menu-group"><h3>${group.label}</h3>${group.items.map(([id,title,sub,icon]) => `<button class="menu-item" type="button" data-mode="${id}" aria-current="false"><span class="menu-icon" aria-hidden="true">${icon}</span><span><strong>${title}</strong><small>${sub}</small></span></button>`).join('')}</div>`).join('');
modeToggle.addEventListener('click', () => openMenu(modeMenu.hidden));
document.getElementById('mode-backdrop').addEventListener('click', () => openMenu(false));
document.getElementById('mode-close').addEventListener('click', () => openMenu(false));
modeList.addEventListener('click', event => { const button=event.target.closest('[data-mode]'); if (button) selectMode(button.dataset.mode); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modeMenu.hidden) openMenu(false); });
window.addEventListener('hashchange', () => selectMode(location.hash.slice(1) || 'original', false));

function selectMode(id, changeUrl = true) {
  if (!modes[id]) id = 'original';
  disposeMode();
  disposeMode = () => {};
  if (audioContext) { audioContext.close().catch(()=>{}); audioContext = null; }
  currentMode = id;
  modeList.querySelectorAll('[data-mode]').forEach(button => button.setAttribute('aria-current', String(button.dataset.mode === id)));
  appShell.classList.toggle('is-variant', id !== 'original');
  variantStage.hidden = id === 'original';
  variantDock.hidden = id === 'original';
  if (id !== 'original') renderMode(modes[id]);
  if (changeUrl) history.replaceState(null, '', id === 'original' ? location.pathname : `#${id}`);
  openMenu(false, false);
}

function renderMode(config) {
  variant = { x: config.start?.[0] ?? .5, y: config.start?.[1] ?? .5, points: [], seed:'Afterglow', selected:'a', softness: .42, reach:.65, painted:new Set(), revealed:false };
  variantStage.innerHTML = `<div class="variant-eyebrow">${config.eyebrow}</div><h1>${config.title}</h1><p class="variant-lede">${config.lede}</p><div class="output-card" id="variant-output"></div><p class="output-note" id="variant-note">These are playable front-end sketches with illustrative content.</p>`;
  variantStage.scrollTop = 0;
  if (config.kind === 'matrix') setupMatrix(config);
  else if (config.kind === 'pair') setupPair(config);
  else if (config.kind === 'pull') setupPull(config);
  else if (config.kind === 'ring') setupRing();
  else if (config.kind === 'reach') setupReach();
  else if (config.kind === 'path') setupPath(config);
  else if (config.kind === 'paint') setupPaint();
  else if (config.kind === 'light') setupLight();
  else if (config.kind === 'beauty') setupBeauty();
  else if (config.kind === 'color') setupColor();
  else if (config.kind === 'size') setupSize();
  else if (config.kind === 'dwell') setupDwell();
}

function output({kicker='LIVE OUTPUT', title, copy='', rows=[], quote='', swatch='', bars=[], note=''}) {
  const card = document.getElementById('variant-output');
  card.innerHTML = `<span class="output-kicker">${escapeHtml(kicker)}</span><h2 class="output-title">${escapeHtml(title)}</h2>${copy ? `<p class="output-copy">${escapeHtml(copy)}</p>` : ''}${swatch ? `<div class="output-swatch" style="background:${swatch}"></div>` : ''}${bars.length ? `<div class="mini-bars" aria-label="Energy profile">${bars.map(v=>`<i style="height:${Math.max(5,Math.min(100,v))}%"></i>`).join('')}</div>` : ''}${rows.length ? `<div class="output-rows">${rows.map(([name,detail],i)=>`<div class="output-row"><b>${i+1}</b><span>${escapeHtml(name)}</span><em>${escapeHtml(detail)}</em></div>`).join('')}</div>` : ''}${quote ? `<p class="output-quote">${escapeHtml(quote)}</p>` : ''}`;
  document.getElementById('variant-note').textContent = note || 'Illustrative content. No external recommendation or AI service is connected.';
}
function canvasPoint(event, canvas) { const r=canvas.getBoundingClientRect(); return {x:clamp01((event.clientX-r.left)/r.width), y:clamp01((event.clientY-r.top)/r.height)}; }
function bindDrag(canvas, start, move = start, end = () => {}) {
  let pointer = null;
  canvas.addEventListener('pointerdown', event => { if (event.pointerType === 'mouse' && event.button !== 0) return; pointer=event.pointerId; canvas.setPointerCapture(pointer); start(event); event.preventDefault(); });
  canvas.addEventListener('pointermove', event => { if (pointer === event.pointerId) move(event); });
  const finish = event => { if (pointer !== event.pointerId) return; pointer=null; end(event); if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId); };
  canvas.addEventListener('pointerup', finish); canvas.addEventListener('pointercancel', finish); canvas.addEventListener('lostpointercapture', finish);
}
function positionNode(node,x,y) { node.style.left=`${x*100}%`; node.style.top=`${y*100}%`; }
function matrixMarkup(axes, pointLabel='✦') { return `<div class="mini-canvas grid" id="mini-canvas" aria-label="Interactive two-dimensional map"><span class="mini-axis top">${axes[0]}</span><span class="mini-axis left">${axes[1]}</span><span class="mini-axis right">${axes[2]}</span><span class="mini-axis bottom">${axes[3]}</span><button class="mini-point" id="mini-point" type="button" aria-label="Move position with arrow keys">${pointLabel}</button></div>`; }
function moveWithKeys(point, target, refresh, stepEnd = () => {}, stepStart = () => {}) {
  point.addEventListener('keydown', event => {
    if (!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)) return;
    stepStart();
    const step = event.shiftKey ? .1 : .04;
    if (event.key === 'ArrowLeft') target.x=clamp01(target.x-step);
    else if (event.key === 'ArrowRight') target.x=clamp01(target.x+step);
    else if (event.key === 'ArrowUp') target.y=clamp01(target.y-step);
    else if (event.key === 'ArrowDown') target.y=clamp01(target.y+step);
    event.preventDefault();
    refresh();
    stepEnd();
  });
}

function setupMatrix(config) {
  variantDock.innerHTML = `<div class="dock-label"><strong>Move the point</strong><span id="dock-value"></span></div>${matrixMarkup(config.axes)}<div class="mini-legend"><span>Drag or tap anywhere</span><span>Try the corners</span></div>${config.text ? '<textarea class="variant-text" id="variant-text" aria-label="Describe the intent"></textarea>' : ''}`;
  const canvas=document.getElementById('mini-canvas'), point=document.getElementById('mini-point'), field=document.getElementById('variant-text');
  function refresh(fromText=false) {
    positionNode(point,variant.x,variant.y);
    document.getElementById('dock-value').textContent=`${Math.round(variant.x*100)} / ${Math.round((1-variant.y)*100)}`;
    if (field && !fromText) field.value = matrixDraft();
    renderMatrixOutput();
  }
  bindDrag(canvas, event => { Object.assign(variant,canvasPoint(event,canvas)); refresh(); });
  moveWithKeys(point, variant, refresh);
  if (field) field.addEventListener('input', () => { const t=field.value.toLowerCase(); if (/solo|alone|独处|一个人|formal|正式/.test(t)) variant.x=.22; if (/social|people|朋友|亲近|close|warm/.test(t)) variant.x=.78; if (/buzz|energy|bold|强烈|热闹/.test(t)) variant.y=.2; if (/chill|quiet|calm|克制|平静/.test(t)) variant.y=.78; refresh(true); });
  refresh();
}
function matrixDraft() { const v=words(variant.x,variant.y); return currentMode==='writing' ? `${variant.x>.65?'warm and close':'clear and formal'}, ${variant.y<.4?'bold':'restrained'}` : `somewhere ${v.vertical}, ${v.horizontal}`; }
function renderMatrixOutput() {
  const {x,y}=variant, w=words(x,y);
  if (currentMode==='music') {
    const tracks = [
      ['Neon Side Street','bright · new',.85,.2],['Slow Orbit','soft · familiar',.18,.85],['Rooftop Static','upbeat · familiar',.2,.18],['Blue Hour Drive','soft · new',.82,.77],['Halfway Home','balanced',.5,.5]
    ];
    const ranked=[...tracks].sort((a,b)=>Math.hypot(a[2]-x,a[3]-y)-Math.hypot(b[2]-x,b[3]-y)).slice(0,3);
    output({kicker:'UP NEXT · FICTIONAL TRACKS',title:`${y<.4?'Turn it up':y>.65?'Ease into it':'Keep it moving'} · ${x>.65?'discover':x<.35?'familiar':'mixed'}`,copy:'The order changes immediately as you move the point.',rows:ranked.map(t=>[t[0],t[1]]),quote:`I want ${w.vertical} music, ${x>.65?'with a little surprise':'with something familiar'}.`});
  } else if (currentMode==='decision') {
    output({kicker:'YOUR STATED POSITION',title:`${x<.35?'Protect the downside':x>.65?'Explore more upside':'Hold a middle ground'}`,copy:`You are leaning toward a ${y<.35?'shorter':'longer'} time horizon. This position is an emotional check-in, not an order.`,rows:[['Potential trade-off',x>.65?'More uncertainty to accept':'Less upside to pursue'],['Time commitment',y<.35?'Near-term attention':'Patience over time']],quote:`Right now I feel ${x>.65?'open to risk':x<.35?'protective of my capital':'uncertain'}, and I am thinking ${y<.35?'short term':'long term'}.`,note:'Concept only. This demo does not recommend or place trades.'});
  } else if (currentMode==='persona') {
    const profiles=[['Patient observer','cautious · patient',.18,.82],['Fast experimenter','risk seeking · fast',.82,.18],['Measured tester','balanced',.5,.5],['Quick protector','cautious · fast',.18,.18]];
    const ranked=[...profiles].sort((a,b)=>Math.hypot(a[2]-x,a[3]-y)-Math.hypot(b[2]-x,b[3]-y));
    output({kicker:'FICTIONAL PERSONA MATCH',title:ranked[0][0],copy:'This compares your stated comfort with sample styles. It does not evaluate a real trader or trigger a copy trade.',rows:ranked.slice(0,3).map(p=>[p[0],p[1]]),quote:`I feel ${x>.65?'more open to risk':'more cautious'} and ${y<.4?'short-term':'patient'} right now.`,note:'No market data, account connection, investment recommendation, or order placement.'});
  } else if (currentMode==='travel') {
    const places=[['Hidden garden','quiet · easy',.16,.8],['Old town market','popular · easy',.81,.78],['Coastal trail','quiet · detour',.18,.18],['Night viewpoint','popular · detour',.8,.17],['Riverside stop','balanced',.5,.52]];
    const ranked=[...places].sort((a,b)=>Math.hypot(a[2]-x,a[3]-y)-Math.hypot(b[2]-x,b[3]-y)).slice(0,3);
    output({kicker:'NEXT STOPS · FICTIONAL',title:ranked[0][0],copy:`Your point favors ${x<.35?'quieter':x>.65?'more popular':'mixed'} places and ${y<.35?'a worthwhile detour':y>.65?'an easy stop':'some flexibility'}.`,rows:ranked.map(p=>[p[0],p[1]])});
  } else if (currentMode==='outfit') {
    const tone=x>.65?'electric violet':x<.35?'soft stone':'washed lilac';
    const base=x>.65?'#a36df5':x<.35?'#c9c7c3':'#b5a4d2';
    output({kicker:'LOOK PREVIEW',title:`${y<.4?'Polished':'Relaxed'} ${x>.65?'statement':x<.35?'minimal':'everyday'} look`,copy:`Palette: ${tone}. The entire outfit changes as one decision.`,swatch:`linear-gradient(115deg,${base} 0 44%,#f4ebdf 44% 70%,#3d3548 70%)`,rows:[['Top',x>.65?'Color-forward layer':'Quiet textured layer'],['Bottom',y<.4?'Tailored shape':'Easy silhouette'],['Finish',y<.4?'Clean accents':'Soft accessories']]});
  } else if (currentMode==='writing') {
    const sentence=x>.65 ? (y<.4?'I would love for us to make this happen. Let’s choose a time.':'Would you be up for making this happen sometime?') : (y<.4?'I propose we move forward and confirm a time.':'I would be open to discussing a suitable time.');
    output({kicker:'LIVE REWRITE',title:'Same intent, different voice',copy:`${x>.65?'Closer':'More formal'} · ${y<.4?'bolder':'more restrained'}`,quote:sentence,note:'Type “formal”, “warm”, “bold”, or “calm” below to move the point back.'});
  } else {
    output({kicker:'TRANSLATED INTENT',title:`${w.vertical}, ${w.horizontal}`,copy:'The spatial choice becomes editable language. The text can also steer the point.',quote:document.getElementById('variant-text')?.value || matrixDraft(),note:'Try typing “solo”, “social”, “buzzing”, or “quiet” below.'});
  }
}

function setupPair(config) {
  const dating = config.pair === 'dating';
  variant.a = {x:.28,y:.68};
  variant.b = {x:.72,y:.38};
  variant.selected = 'a';
  variant.history = {a:[{...variant.a}],b:[{...variant.b}]};
  variant.previousGap = null;
  variant.demoReply = '';
  variantDock.innerHTML = `<div class="variant-actions"><button type="button" data-pair="a" aria-pressed="true">${dating?'You':'Now'}</button><button type="button" data-pair="b" aria-pressed="false">${dating?'Alex · demo':'Wanted'}</button></div><div class="dock-label"><strong>Move the selected point</strong><span id="dock-value"></span></div>${matrixMarkup(dating?['MORE OPEN','SLOWER','FASTER','MORE PRIVATE']:['MORE ENERGY','SOLO','SOCIAL','MORE CALM'],'Y')}<button class="mini-point secondary" id="second-point" type="button" aria-label="Move second position with arrow keys">${dating?'A':'→'}</button><div class="mini-legend"><span>${dating?'Move either self-set point':'Start and destination'}</span><span>Drag or use arrow keys</span></div>${dating?'<div class="variant-actions pair-exchanges"><button type="button" data-reply="warm">Warm reply · demo</button><button type="button" data-reply="space">Needs space · demo</button></div>':''}`;
  const canvas = document.getElementById('mini-canvas');
  const p1 = document.getElementById('mini-point');
  const p2 = document.getElementById('second-point');
  p1.textContent = dating ? 'Y' : 'N';
  canvas.appendChild(p2);
  canvas.insertAdjacentHTML('afterbegin', '<svg class="pair-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline id="pair-a-trail" class="pair-trail trail-a"/><polyline id="pair-b-trail" class="pair-trail trail-b"/><line id="pair-connector" class="pair-connector"/></svg>');
  const trailA = document.getElementById('pair-a-trail');
  const trailB = document.getElementById('pair-b-trail');
  const connector = document.getElementById('pair-connector');
  const gap = () => Math.round(Math.hypot(variant.a.x-variant.b.x,variant.a.y-variant.b.y)*100);
  function select(key) {
    variant.selected = key;
    variantDock.querySelectorAll('[data-pair]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.pair===key)));
  }
  function record() {
    const point = variant[variant.selected], history = variant.history[variant.selected], last = history.at(-1);
    if (Math.hypot(point.x-last.x,point.y-last.y) < .005) return;
    history.push({...point});
    if (history.length > 8) history.shift();
    refresh();
  }
  function refresh() {
    positionNode(p1,variant.a.x,variant.a.y);
    positionNode(p2,variant.b.x,variant.b.y);
    for (const [key,trail] of [['a',trailA],['b',trailB]]) {
      trail.setAttribute('points', [...variant.history[key],variant[key]].map(p => `${(p.x*100).toFixed(1)},${(p.y*100).toFixed(1)}`).join(' '));
    }
    for (const [name,value] of [['x1',variant.a.x],['y1',variant.a.y],['x2',variant.b.x],['y2',variant.b.y]]) connector.setAttribute(name,String(value*100));
    const distance = gap();
    const trend = variant.previousGap===null ? 'Choose a direction' : distance<variant.previousGap-2 ? 'Moving closer' : distance>variant.previousGap+2 ? 'Moving apart' : 'Holding steady';
    document.getElementById('dock-value').textContent = `${distance} apart`;
    output({
      kicker:dating?'TWO STATED POSITIONS':'A TRANSITION TO DESIGN',
      title:dating?trend:distance<20?'Almost there':'A direction to move toward',
      copy:dating?`${variant.demoReply || 'Move either point, or try a fictional next reply.'} The trails show how the positions changed.`:`There is a ${distance}-point gap between the present state and desired state.`,
      rows:dating?[
        ['You',`${Math.round(variant.a.x*100)} pace · ${Math.round((1-variant.a.y)*100)} openness`],
        ['Alex (demo)',`${Math.round(variant.b.x*100)} pace · ${Math.round((1-variant.b.y)*100)} openness`],
        ['Distance',`${distance} points · ${trend.toLowerCase()}`]
      ]:[
        ['Now',`${words(variant.a.x,variant.a.y).vertical}, ${words(variant.a.x,variant.a.y).horizontal}`],
        ['Wanted',`${words(variant.b.x,variant.b.y).vertical}, ${words(variant.b.x,variant.b.y).horizontal}`]
      ],
      quote:dating?'Where do we each want to be next?':'I want to move from here toward there.',
      note:dating?'Alex and the example replies are fictional. Each real person would choose whether to share their own position.':'Move both points to explore the gap.'
    });
  }
  variantDock.querySelectorAll('[data-pair]').forEach(button => button.addEventListener('click',() => select(button.dataset.pair)));
  p1.addEventListener('pointerdown',() => select('a'));
  p2.addEventListener('pointerdown',() => select('b'));
  bindDrag(canvas,event => {
    variant.previousGap = gap();
    Object.assign(variant[variant.selected],canvasPoint(event,canvas));
    refresh();
  },event => {
    Object.assign(variant[variant.selected],canvasPoint(event,canvas));
    refresh();
  },record);
  for (const [key,point] of [['a',p1],['b',p2]]) {
    moveWithKeys(point,variant[key],refresh,() => { select(key); record(); },() => { variant.previousGap=gap(); });
  }
  variantDock.querySelectorAll('[data-reply]').forEach(button => button.addEventListener('click',() => {
    select('b');
    variant.previousGap = gap();
    const closer = button.dataset.reply === 'warm';
    const dx = variant.b.x-variant.a.x, dy = variant.b.y-variant.a.y;
    variant.b.x = clamp01(closer?variant.b.x-dx*.34:variant.b.x+dx*.28);
    variant.b.y = clamp01(closer?variant.b.y-dy*.34:variant.b.y+dy*.28);
    variant.demoReply = closer?'Alex (demo): “I’d like to make a plan.”':'Alex (demo): “I’d rather take this slowly.”';
    record();
  }));
  refresh();
}

function setupPull(config) {
  variant.a={x:.27,y:.34};variant.b={x:.72,y:.72};
  const gift=config.gift;
  variantDock.innerHTML=`<div class="variant-actions"><button type="button" data-pair="a" aria-pressed="true">WANT</button><button type="button" data-pair="b" aria-pressed="false">AVOID</button></div><div class="dock-label"><strong>Two forces, one result</strong><span id="dock-value"></span></div>${matrixMarkup(gift?['SURPRISING','PRACTICAL','PERSONAL','FAMILIAR']:['ADVENTUROUS','QUIET','SOCIAL','COMFORTABLE'],'+') }<button class="mini-point ghost" id="second-point" type="button" aria-label="Avoid position">−</button><div class="mini-legend"><span>Pull toward WANT</span><span>Push away from AVOID</span></div>`;
  const canvas=document.getElementById('mini-canvas'),a=document.getElementById('mini-point'),b=document.getElementById('second-point');canvas.appendChild(b);
  function refresh(){positionNode(a,variant.a.x,variant.a.y);positionNode(b,variant.b.x,variant.b.y);const options=gift?[['A custom print','personal · surprising',.8,.18],['A favorite book','practical · familiar',.22,.76],['A small experience','personal · familiar',.78,.72],['A useful object','practical · surprising',.2,.22]]:[['Rooftop gathering','social · adventurous',.8,.18],['Quiet gallery','quiet · adventurous',.2,.2],['Cozy café','quiet · comfortable',.22,.8],['Group dinner','social · comfortable',.8,.8]];const ranked=[...options].sort((p,q)=>score(q)-score(p));function score(o){return -Math.hypot(o[2]-variant.a.x,o[3]-variant.a.y)+.7*Math.hypot(o[2]-variant.b.x,o[3]-variant.b.y)}document.getElementById('dock-value').textContent=ranked[0][0];output({kicker:'RESULT OF BOTH FORCES',title:ranked[0][0],copy:'The first point attracts; the second repels. Move either one to change the ranking.',rows:ranked.slice(0,3).map(o=>[o[0],o[1]]),quote:`I want more of ${gift?'this gift feeling':'this experience'}, and less of that.`});}
  function select(key){variant.selected=key;variantDock.querySelectorAll('[data-pair]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.pair===key)))}
  variantDock.querySelectorAll('[data-pair]').forEach(button=>button.addEventListener('click',()=>select(button.dataset.pair)));
  a.addEventListener('pointerdown',()=>select('a'));b.addEventListener('pointerdown',()=>select('b'));
  moveWithKeys(a,variant.a,refresh,()=>select('a'));
  moveWithKeys(b,variant.b,refresh,()=>select('b'));
  bindDrag(canvas,event=>{Object.assign(variant[variant.selected],canvasPoint(event,canvas));refresh()});refresh();
}

function setupRing() {
  variant.angle=-Math.PI/2;
  variantDock.innerHTML='<div class="dock-label"><strong>Move around the cycle</strong><span id="dock-value"></span></div><div class="mini-canvas" id="mini-canvas"><div class="ring-track"></div><div class="ring-center"><small>TONIGHT</small><b id="ring-name">Arrival</b></div><button class="mini-point" id="mini-point" aria-label="Move around the mood ring">✦</button></div><div class="mini-legend"><span>Arrive → build → peak → unwind</span><span>Drag the ring</span></div>';
  const canvas=document.getElementById('mini-canvas'),point=document.getElementById('mini-point');
  function refresh(){const names=['Arrival','Build','Peak','Unwind'];let phase=((variant.angle+Math.PI/2)/(Math.PI*2)+1)%1;let i=Math.floor(phase*4)%4;const rect=canvas.getBoundingClientRect(),radius=Math.min(rect.width,rect.height)*.36;point.style.left=`calc(50% + ${Math.cos(variant.angle)*radius}px)`;point.style.top=`calc(50% + ${Math.sin(variant.angle)*radius}px)`;document.getElementById('ring-name').textContent=names[i];document.getElementById('dock-value').textContent=`${Math.round(phase*100)}% around`;output({kicker:'CURRENT PHASE',title:names[i],copy:['Start gently and leave room to settle.','Let the energy rise without jumping straight to the peak.','Choose the fullest part of the night.','Bring the pace down before ending.'][i],rows:[['Next',names[(i+1)%4]],['After',names[(i+2)%4]]],quote:`I want tonight to feel like the ${names[i].toLowerCase()} phase.`});}
  bindDrag(canvas,event=>{const r=canvas.getBoundingClientRect();variant.angle=Math.atan2(event.clientY-r.top-r.height/2,event.clientX-r.left-r.width/2);refresh()});refresh();
}

function setupReach() {
  const places=[['Gallery',.25,.24],['Market',.75,.29],['Garden',.31,.74],['Lookout',.82,.78]];
  variant.place='Gallery';
  variantDock.innerHTML=`<div class="dock-label"><strong>Drag from YOU</strong><span id="dock-value"></span></div><div class="mini-canvas" id="mini-canvas"><div class="map-road" style="top:35%"></div><div class="map-road r2"></div><div class="map-road r3"></div><div class="geo-radius" id="geo-radius"></div><span class="geo-home">YOU</span>${places.map(([name,x,y])=>`<button type="button" class="geo-place" data-place="${name}" style="left:${x*100}%;top:${y*100}%">${name}</button>`).join('')}<button class="mini-point" id="mini-point" aria-label="Drag to set reach">↗</button></div><div class="mini-legend"><span>The circle is your comfort radius</span><span>Tap a place</span></div>`;
  const canvas=document.getElementById('mini-canvas'),point=document.getElementById('mini-point'),radius=document.getElementById('geo-radius');
  function refresh(){const r=Math.round(variant.reach*60);radius.style.setProperty('--reach',`${r*2}%`);point.style.left=`${50+variant.reach*42}%`;point.style.top='51%';document.getElementById('dock-value').textContent=`${r} min comfort`;canvas.querySelectorAll('[data-place]').forEach(el=>el.classList.toggle('selected',el.dataset.place===variant.place));const available=places.filter(([,x,y])=>Math.hypot(x-.5,y-.51)<variant.reach*.52+.08);output({kicker:'WITHIN YOUR REACH',title:variant.place,copy:`Comfort radius: about ${r} minutes. ${available.length} sample stops fall inside it.`,rows:available.map(p=>[p[0],'within reach']),quote:`I can go about ${r} minutes from here.`,note:'Stylized map and fictional travel times for interaction exploration.'});}
  bindDrag(canvas,event=>{const place=event.target.closest('[data-place]');if(place){variant.place=place.dataset.place;refresh();return}const p=canvasPoint(event,canvas);variant.reach=Math.min(.9,Math.max(.15,Math.hypot(p.x-.5,p.y-.51)*1.8));refresh()});refresh();
}

function setupPath(config) {
  const dj=!!config.seed;
  variantDock.innerHTML=`${dj?'<div class="variant-actions"><button type="button" data-seed="Afterglow" aria-pressed="true">Afterglow</button><button type="button" data-seed="Northbound" aria-pressed="false">Northbound</button><button type="button" data-seed="Soft Focus" aria-pressed="false">Soft Focus</button><button type="button" id="play-sketch">▶ Play sketch</button></div>':'<div class="variant-actions"><button type="button" id="clear-path">Clear path</button></div>'}<div class="dock-label"><strong>Draw left to right</strong><span id="dock-value"></span></div><div class="mini-canvas grid" id="mini-canvas"><span class="mini-axis left">START</span><span class="mini-axis right">END</span><span class="mini-axis top">HIGH</span><span class="mini-axis bottom">LOW</span><svg class="path-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><polyline id="path-line" fill="none" stroke="#7b4edf" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg></div><div class="mini-legend"><span>One stroke = an evolving experience</span><span id="path-count">0 points</span></div>`;
  const canvas=document.getElementById('mini-canvas'),line=document.getElementById('path-line');
  function refresh(){line.setAttribute('points',variant.points.map(p=>`${(p.x*100).toFixed(1)},${(p.y*100).toFixed(1)}`).join(' '));document.getElementById('path-count').textContent=`${variant.points.length} points`;const samples=variant.points.length?[variant.points[0],variant.points[Math.floor((variant.points.length-1)/2)],variant.points.at(-1)]:[{y:.74},{y:.4},{y:.72}];const labels=samples.map(p=>p.y<.35?'high energy':p.y>.65?'low energy':'a little buzz');document.getElementById('dock-value').textContent=labels.join(' → ');output({kicker:dj?'MIX ARC':'EXPERIENCE ARC',title:variant.points.length?'Your drawn journey':'Try drawing a curve',copy:dj?`Seed: ${variant.seed}. The sketch changes with your drawn energy arc.`:'A single point says where you are. A path says how you want it to change.',rows:[['Beginning',labels[0]],['Middle',labels[1]],['Ending',labels[2]]],bars:samples.map(p=>(1-p.y)*100),quote:`Start ${labels[0]}, build toward ${labels[1]}, end ${labels[2]}.`,note:dj?'Play generates a short original tone sketch in your browser; it does not remix a copyrighted recording.':'Draw again to replace the path.'});}
  function add(event){const p=canvasPoint(event,canvas),last=variant.points.at(-1);if(!last||Math.hypot(last.x-p.x,last.y-p.y)>.012){variant.points.push(p);refresh()}}
  bindDrag(canvas,event=>{variant.points=[];add(event)},add);
  document.getElementById('clear-path')?.addEventListener('click',()=>{variant.points=[];refresh()});
  variantDock.querySelectorAll('[data-seed]').forEach(button=>button.addEventListener('click',()=>{variant.seed=button.dataset.seed;variantDock.querySelectorAll('[data-seed]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));refresh()}));
  document.getElementById('play-sketch')?.addEventListener('click',playSketch);
  refresh();
}

function playSketch() {
  const Audio = window.AudioContext || window.webkitAudioContext;
  if (!Audio) return;
  if (audioContext) audioContext.close().catch(()=>{});
  audioContext = new Audio();
  const root={Afterglow:220,Northbound:262, 'Soft Focus':196}[variant.seed];
  const samples=variant.points.length ? variant.points : [{y:.7},{y:.45},{y:.25},{y:.55},{y:.75}];
  for(let i=0;i<8;i++){
    const p=samples[Math.floor(i*(samples.length-1)/7)];
    const osc=audioContext.createOscillator(),gain=audioContext.createGain();
    osc.type='sine';osc.frequency.value=root*[1,1.25,1.5,2,1.5,1.25,1,.75][i]*(p.y<.4?1.12:1);
    const t=audioContext.currentTime+i*.28;gain.gain.setValueAtTime(0,t);gain.gain.linearRampToValueAtTime(.045+(1-p.y)*.07,t+.025);gain.gain.exponentialRampToValueAtTime(.001,t+.23);
    osc.connect(gain).connect(audioContext.destination);osc.start(t);osc.stop(t+.24);
  }
}

function setupPaint() {
  variantDock.innerHTML='<div class="variant-actions"><button id="clear-paint" type="button">Clear region</button></div><div class="dock-label"><strong>Brush across acceptable space</strong><span id="dock-value"></span></div><div class="mini-canvas grid" id="mini-canvas"><span class="mini-axis top">ENERGETIC</span><span class="mini-axis left">SOLO</span><span class="mini-axis right">SOCIAL</span><span class="mini-axis bottom">CALM</span><canvas class="paint-layer" id="paint-layer" aria-label="Paint acceptable moods"></canvas></div><div class="mini-legend"><span>A broad region means flexibility</span><span>Paint with a finger</span></div>';
  const canvas=document.getElementById('mini-canvas'),layer=document.getElementById('paint-layer'),ctx=layer.getContext('2d');
  function size(){const r=canvas.getBoundingClientRect(),d=window.devicePixelRatio||1;layer.width=Math.round(r.width*d);layer.height=Math.round(r.height*d);ctx.scale(d,d);variant.painted.clear();refresh()}
  function refresh(){const n=variant.painted.size,pct=Math.min(100,Math.round(n/160*100));document.getElementById('dock-value').textContent=`${pct}% explored`;output({kicker:'ACCEPTABLE REGION',title:n<2?'Paint a possibility':pct<18?'A precise preference':pct<45?'Room to explore':'Open to surprise',copy:`You have marked about ${pct}% of the mood space as potentially acceptable.`,rows:[['Precision',pct<18?'Narrow':pct<45?'Balanced':'Open'],['Potential matches',pct<18?'Few, closer fits':pct<45?'Some variation':'More varied results']],quote:pct<18?'I know roughly what I want.':'There are several directions I could enjoy.'});}
  function paint(event){const r=canvas.getBoundingClientRect(),x=event.clientX-r.left,y=event.clientY-r.top;ctx.fillStyle='rgba(123,78,223,.23)';ctx.beginPath();ctx.arc(x,y,21,0,Math.PI*2);ctx.fill();for(let a=-2;a<=2;a++)for(let b=-2;b<=2;b++){const cx=Math.floor(x/r.width*16)+a,cy=Math.floor(y/r.height*10)+b;if(cx>=0&&cx<16&&cy>=0&&cy<10&&a*a+b*b<=4)variant.painted.add(`${cx}:${cy}`)}refresh()}
  bindDrag(canvas,paint,paint);
  document.getElementById('clear-paint').addEventListener('click',()=>{ctx.clearRect(0,0,layer.width,layer.height);variant.painted.clear();refresh()});
  size();
  const observer=new ResizeObserver(size);observer.observe(canvas);disposeMode=()=>observer.disconnect();
}

function setupLight() {
  variant.x=.55;variant.y=.34;
  variantDock.innerHTML='<div class="dock-label"><strong>Drag the light</strong><span id="dock-value"></span></div><div class="mini-canvas" id="mini-canvas"><div class="direct-room" id="direct-room"></div><button class="direct-light" id="mini-point" type="button" aria-label="Move light"></button></div><div class="mini-legend"><span>Softness</span><span id="softness-value"></span></div><input id="softness" type="range" min="10" max="80" value="42" aria-label="Light softness" style="display:block;width:100%;accent-color:#8464da">';
  const canvas=document.getElementById('mini-canvas'),point=document.getElementById('mini-point'),room=document.getElementById('direct-room'),slider=document.getElementById('softness');
  function refresh(){positionNode(point,variant.x,variant.y);room.style.setProperty('--lx',`${variant.x*100}%`);room.style.setProperty('--ly',`${variant.y*100}%`);room.style.setProperty('--feather',`${variant.softness*65}%`);document.getElementById('dock-value').textContent=`${Math.round(variant.x*100)}% / ${Math.round(variant.y*100)}%`;document.getElementById('softness-value').textContent=`${Math.round(variant.softness*100)}%`;output({kicker:'LIVE ROOM PREVIEW',title:variant.y<.45?'Overhead glow':'Low ambient glow',copy:`The light sits ${variant.x<.4?'to the left':variant.x>.6?'to the right':'near the center'} with ${variant.softness>.5?'soft':'focused'} falloff.`,rows:[['Position',`${Math.round(variant.x*100)}% across · ${Math.round(variant.y*100)}% down`],['Feather',`${Math.round(variant.softness*100)}%`]],quote:'I moved the light until the room felt right.'});}
  bindDrag(canvas,event=>{Object.assign(variant,canvasPoint(event,canvas));refresh()});
  slider.addEventListener('input',()=>{variant.softness=Number(slider.value)/100;refresh()});refresh();
}

function setupBeauty() {
  variant.x=.58;variant.y=.37;
  variantDock.innerHTML='<div class="dock-label"><strong>Move the highlight</strong><span id="dock-value"></span></div><div class="mini-canvas beauty-scene" id="mini-canvas"><div class="beauty-hair"></div><div class="beauty-face"></div><div class="beauty-neck"></div><div class="beauty-glow" id="beauty-glow"></div><button class="direct-light" id="mini-point" type="button" aria-label="Move highlight"></button></div><div class="mini-legend"><span>Feather</span><span id="softness-value"></span></div><input id="softness" type="range" min="10" max="80" value="42" aria-label="Highlight feather" style="display:block;width:100%;accent-color:#dc8ba8">';
  const canvas=document.getElementById('mini-canvas'),point=document.getElementById('mini-point'),glow=document.getElementById('beauty-glow'),slider=document.getElementById('softness');
  function refresh(){positionNode(point,variant.x,variant.y);glow.style.setProperty('--lx',`${variant.x*100}%`);glow.style.setProperty('--ly',`${variant.y*100}%`);glow.style.setProperty('--blur',`${12+variant.softness*60}px`);document.getElementById('dock-value').textContent=`${Math.round(variant.x*100)} / ${Math.round(variant.y*100)}`;document.getElementById('softness-value').textContent=`${Math.round(variant.softness*100)}%`;output({kicker:'MAKEUP LAYER PREVIEW',title:variant.y<.45?'High cheek glow':'Soft lower glow',copy:`The highlight moves with your finger. Feather is ${Math.round(variant.softness*100)}%, ${variant.softness>.5?'diffuse':'focused'}.`,rows:[['Placement',`${Math.round(variant.x*100)}% across · ${Math.round(variant.y*100)}% down`],['Feather',`${Math.round(variant.softness*100)}%`]],quote:'I want the glow here, this soft.'});}
  bindDrag(canvas,event=>{Object.assign(variant,canvasPoint(event,canvas));refresh()});slider.addEventListener('input',()=>{variant.softness=Number(slider.value)/100;refresh()});refresh();
}

function hsvHex(h,s,v) {
  const c=v*s, x=c*(1-Math.abs((h/60)%2-1)),m=v-c;
  const [r,g,b]=h<60?[c,x,0]:h<120?[x,c,0]:h<180?[0,c,x]:h<240?[0,x,c]:h<300?[x,0,c]:[c,0,x];
  return '#'+[r,g,b].map(n=>Math.round((n+m)*255).toString(16).padStart(2,'0')).join('');
}
function setupColor() {
  variant.x=.76;variant.y=.32;variant.brightness=.82;
  variantDock.innerHTML='<div class="dock-label"><strong>Drag for hue × saturation</strong><span id="dock-value"></span></div><div class="mini-canvas color-scene" id="mini-canvas"><span class="mini-axis top">VIVID</span><span class="mini-axis bottom">MUTED</span><button class="mini-point" id="mini-point" aria-label="Select hue and saturation">◉</button></div><div class="mini-legend"><span>Brightness</span><span id="brightness-value"></span></div><input id="brightness" type="range" min="10" max="100" value="82" aria-label="Brightness" style="display:block;width:100%;accent-color:#8263ee">';
  const canvas=document.getElementById('mini-canvas'),point=document.getElementById('mini-point'),slider=document.getElementById('brightness');
  function refresh(){positionNode(point,variant.x,variant.y);const h=Math.round(variant.x*359),s=Math.round((1-variant.y)*100),v=Math.round(variant.brightness*100),hex=hsvHex(h,s/100,v/100);point.style.background=hex;document.getElementById('dock-value').textContent=hex.toUpperCase();document.getElementById('brightness-value').textContent=`${v}%`;output({kicker:'LIVE COLOR',title:hex.toUpperCase(),copy:`Hue ${h}° · Saturation ${s}% · Brightness ${v}%`,swatch:hex,rows:[['Hue',`${h}°`],['Saturation',`${s}%`],['Brightness',`${v}%`]],quote:`I want a color around ${hex.toUpperCase()}.`});}
  bindDrag(canvas,event=>{Object.assign(variant,canvasPoint(event,canvas));refresh()});slider.addEventListener('input',()=>{variant.brightness=Number(slider.value)/100;refresh()});refresh();
}

function setupSize() {
  variant.fit=.53;
  variantDock.innerHTML='<div class="dock-label"><strong>Pull the right edge</strong><span id="dock-value"></span></div><div class="mini-canvas size-scene" id="mini-canvas"><div class="size-body"></div><div class="size-shirt" id="size-shirt"><span>YOUR FIT</span></div><button class="mini-point" id="mini-point" aria-label="Adjust garment width">↔</button></div><div class="mini-legend"><span>Close fit</span><span>Relaxed fit</span></div>';
  const canvas=document.getElementById('mini-canvas'),point=document.getElementById('mini-point'),shirt=document.getElementById('size-shirt');
  function refresh(){const width=34+variant.fit*40;shirt.style.width=`${width}%`;point.style.left=`${50+width/2}%`;point.style.top='55%';const name=variant.fit<.34?'Close fit':variant.fit>.68?'Relaxed fit':'Easy fit';document.getElementById('dock-value').textContent=name;output({kicker:'LIVE SILHOUETTE',title:name,copy:`Garment width is set to ${Math.round(width)}% of the preview. Drag the handle to resize the visible piece.`,rows:[['Shape',name],['Width',`${Math.round(width)}% of preview`]],quote:`I want this much room in the garment.`});}
  bindDrag(canvas,event=>{const p=canvasPoint(event,canvas);variant.fit=Math.max(0,Math.min(1,(p.x-.67)/.2));refresh()});refresh();
}

function setupDwell() {
  variantDock.innerHTML='<div class="dock-label"><strong>Explore, then hold still</strong><span id="dock-value"></span></div><div class="mini-canvas grid" id="mini-canvas"><span class="mini-axis top">BUZZING</span><span class="mini-axis left">SOLO</span><span class="mini-axis right">SOCIAL</span><span class="mini-axis bottom">CHILL</span><div class="dwell-progress" id="dwell-progress"></div><button class="mini-point" id="mini-point" aria-label="Hold to reveal">✦</button></div><div class="mini-legend"><span>Hold for one second</span><span>Move to reset</span></div>';
  const canvas=document.getElementById('mini-canvas'),point=document.getElementById('mini-point'),progress=document.getElementById('dwell-progress');
  let timer=null,last=null;
  function refresh(){positionNode(point,variant.x,variant.y);positionNode(progress,variant.x,variant.y);const w=words(variant.x,variant.y);document.getElementById('dock-value').textContent=`${w.vertical} · ${w.horizontal}`;output({kicker:variant.revealed?'REVEALED DETAIL':'QUICK GLANCE',title:variant.revealed?'This feels close':`${w.vertical}, ${w.horizontal}`,copy:variant.revealed?`You paused at a place that feels ${w.vertical} and ${w.horizontal}. This could become a more specific recommendation.`:'Move to explore. A pause signals stronger interest.',rows:variant.revealed?[['Possible next step','Save this region'],['Alternative','Keep exploring nearby']]:[],quote:variant.revealed?'I think this is close to what I mean.':''});}
  function schedule(){clearTimeout(timer);progress.classList.remove('active');void progress.offsetWidth;progress.classList.add('active');timer=setTimeout(()=>{variant.revealed=true;progress.classList.remove('active');refresh()},1000)}
  function move(event){const next=canvasPoint(event,canvas);if(last && Math.hypot(next.x-last.x,next.y-last.y)<.025)return;last=next;Object.assign(variant,next);variant.revealed=false;refresh();schedule()}
  bindDrag(canvas,move,move,()=>{clearTimeout(timer);progress.classList.remove('active')});
  disposeMode=()=>clearTimeout(timer);
  refresh();
}

selectMode(modes[location.hash.slice(1)] ? location.hash.slice(1) : 'original', false);
