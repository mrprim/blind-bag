import { scrabble, bicycle } from "./blind-bag.es.js"

const handEl = document.getElementById('hand')
const drawCardEl = document.getElementById('draw-card')
const drawLetterEl = document.getElementById('draw-letter')

const bag = scrabble();
const deck = bicycle();

const toEl = (type, value) => `<span class="component ${type}">${value === 'BLANK' ? '' : value}</span>`;

let components = []

const updateComponents = () => {
  handEl.innerHTML =
    components.join('') ?? 'none'
}


const drawComponent = (collection) => {
  const component = collection.drawOne();

  if(!component) return;

  const el = toEl(collection.tokenSet.tokenType, component)

  components = [ ...components, el]
  updateComponents();
  handEl.scrollTop = handEl.scrollHeight;
}

const returnComponent = (collection) => {
  const component = collection.drawOne();

  if(!component) return;

  const el = toEl(collection.tokenSet.tokenType, component)

  components = [ ...components, el]
  updateComponents();
  handEl.scrollTop = handEl.scrollHeight;
}


drawLetterEl.addEventListener('click', () => {
  drawComponent(bag)
})

drawCardEl.addEventListener('click', () => {
  drawComponent(deck)
})

updateComponents()