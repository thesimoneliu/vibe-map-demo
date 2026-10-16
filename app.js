const map = document.getElementById('vibe-map');
const handle = document.getElementById('map-handle');
const description = document.getElementById('map-description');
const composer = document.getElementById('composer');
const promptField = document.getElementById('prompt');
const thread = document.getElementById('thread');
const categories = document.getElementById('categories');

const lenses = {
  vibe: { name: 'your vibe', subject: 'tonight' },
  food: { name: 'food', subject: 'a meal' },
  drinks: { name: 'drinks', subject: 'a drink' },
  games: { name: 'games', subject: 'a game' },
  music: { name: 'music', subject: 'music' },
  walks: { name: 'walks', subject: 'a walk' },
  coffee: { name: 'coffee', subject: 'a coffee stop' },
};

const state = { x: 0.24, y: 0.46, category: 'vibe' };
let draggingPointer = null;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function describeVibe() {
  const social = state.x < 0.35 ? 'on your own' : state.x > 0.65 ? 'with people' : 'with room for company';
  const energy = state.y < 0.35 ? 'somewhere buzzing' : state.y > 0.65 ? 'somewhere chill' : 'with a little buzz';
  const subject = lenses[state.category].subject;
  return `For ${subject}: ${energy}, ${social}.`;
}

function applyTextIntent(text) {
  const intent = text.toLowerCase();
  const solo = /\b(solo|alone|my own|by myself)\b|一个人|独处/.test(intent);
  const social = /\b(social|friends|people|together)\b|朋友|聚会|社交/.test(intent);
  const buzzing = /\b(buzz|buzzing|loud|dance|energetic)\b|热闹|兴奋|跳舞/.test(intent);
  const chill = /\b(chill|quiet|calm|peaceful|relax)\b|安静|放松|平静/.test(intent);
  if (solo !== social) state.x = solo ? 0.24 : 0.76;
  if (buzzing !== chill) state.y = buzzing ? 0.27 : 0.75;
  renderPosition();
}

function renderPosition() {
  map.style.setProperty('--x', `${state.x * 100}%`);
  map.style.setProperty('--y', `${state.y * 100}%`);
  description.textContent = describeVibe();
  handle.setAttribute('aria-label', `Vibe position: ${Math.round(state.x * 100)} percent toward social, ${Math.round((1 - state.y) * 100)} percent toward buzzing. ${description.textContent}`);
}

function setPositionFromPointer(event) {
  const rect = map.getBoundingClientRect();
  const radius = handle.offsetWidth / 2;
  const x = clamp(event.clientX - rect.left, radius, rect.width - radius);
  const y = clamp(event.clientY - rect.top, radius, rect.height - radius);
  state.x = x / rect.width;
  state.y = y / rect.height;
  renderPosition();
}

map.addEventListener('pointerdown', (event) => {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  draggingPointer = event.pointerId;
  map.setPointerCapture(event.pointerId);
  map.classList.add('is-dragging');
  setPositionFromPointer(event);
  event.preventDefault();
});

map.addEventListener('pointermove', (event) => {
  if (draggingPointer !== event.pointerId) return;
  setPositionFromPointer(event);
});

function finishDrag(event) {
  if (draggingPointer !== event.pointerId) return;
  draggingPointer = null;
  map.classList.remove('is-dragging');
  if (map.hasPointerCapture(event.pointerId)) map.releasePointerCapture(event.pointerId);
}

map.addEventListener('pointerup', finishDrag);
map.addEventListener('pointercancel', finishDrag);
map.addEventListener('lostpointercapture', finishDrag);

handle.addEventListener('keydown', (event) => {
  const delta = event.shiftKey ? 0.1 : 0.025;
  if (event.key === 'ArrowLeft') state.x = clamp(state.x - delta, 0.07, 0.93);
  else if (event.key === 'ArrowRight') state.x = clamp(state.x + delta, 0.07, 0.93);
  else if (event.key === 'ArrowUp') state.y = clamp(state.y - delta, 0.09, 0.91);
  else if (event.key === 'ArrowDown') state.y = clamp(state.y + delta, 0.09, 0.91);
  else return;
  event.preventDefault();
  renderPosition();
});

categories.addEventListener('click', (event) => {
  const selected = event.target.closest('[data-category]');
  if (!selected) return;
  state.category = selected.dataset.category;
  for (const tab of categories.querySelectorAll('[data-category]')) {
    const active = tab === selected;
    tab.classList.toggle('category--active', active);
    tab.setAttribute('aria-selected', String(active));
    const text = tab.querySelector('span');
    text.classList.toggle('sr-only', !active);
  }
  renderPosition();
  const scroller = categories.parentElement;
  const left = selected.offsetLeft - scroller.clientWidth / 2 + selected.clientWidth / 2;
  scroller.scrollTo({ left, behavior: 'smooth' });
});

function addMessage(text, outgoing) {
  const bubble = document.createElement('div');
  bubble.className = `message message--${outgoing ? 'outgoing' : 'incoming'} new-message`;
  bubble.textContent = text;
  thread.appendChild(bubble);
  return bubble;
}

composer.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = promptField.value.trim();
  if (!text) {
    promptField.focus();
    return;
  }
  addMessage(text, true);
  applyTextIntent(text);
  const reply = addMessage(`got it. ${describeVibe().toLowerCase()} drag the map to fine-tune it.`, false);
  promptField.value = '';
  promptField.style.height = '';
  promptField.blur();
  reply.scrollIntoView({ block: 'center', behavior: 'smooth' });
});

promptField.addEventListener('input', () => {
  promptField.style.height = 'auto';
  promptField.style.height = `${Math.min(promptField.scrollHeight, 140)}px`;
});

renderPosition();
