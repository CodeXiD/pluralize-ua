# pluralize-ua
Formation of plurals for the Ukrainian language

## 📦 Installation
### yarn
`yarn add pluralize-ua`

### npm
`npm i pluralize-ua`

## 🔧 Simple usage
```js
import {pluralizeWord} from "pluralize-ua";

console.log(pluralizeWord(1, 'яблуко', 'яблука', 'яблук')) // 1 яблуко
console.log(pluralizeWord(2, 'яблуко', 'яблука', 'яблук')) // 2 яблука
console.log(pluralizeWord(10, 'яблуко', 'яблука', 'яблук')) // 10 яблук
```
