# pluralize-ua
Formation of plurals for the Ukrainian language

<p align="center">
    <img src="https://img.shields.io/github/license/codexid/pluralize-ua?style=flat-square" />
    <img alt="npm" src="https://img.shields.io/npm/dm/pluralize-ua?style=flat-square">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/codexid/pluralize-ua?style=flat-square">
    <img alt="npm" src="https://img.shields.io/npm/v/pluralize-ua?style=flat-square">
</p>


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
