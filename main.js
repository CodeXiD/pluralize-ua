import './style.css'
import { pluralizeWord } from './lib/main.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>See console</h1>
  </div>
`

console.log('### pluralized word #1', pluralizeWord(1, 'яблуко', 'яблука', 'яблук'))
console.log('### pluralized word #2', pluralizeWord(2, 'яблуко', 'яблука', 'яблук'))
console.log('### pluralized word #3', pluralizeWord(8, 'яблуко', 'яблука', 'яблук'))
console.log('### pluralized word #4', pluralizeWord(10, 'яблуко', 'яблука', 'яблук'))
