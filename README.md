## ⚠️ This repo is no longer maintained

### One of the best alternatives is [plur](https://www.npmjs.com/package/plur)

---

Pluralize formats a word according to a given number. With Typescript under the hood you will be able to write nice and shiny code.


## Getting Started

Add pluralize to your project by running:
```shell
npm install @public-js/pluralize --save
```

Then import it with any of these:
```typescript
import { Pluralize } from '@public-js/pluralize';
import { pluralizeEn } from '@public-js/pluralize';
import * as pluralize from '@public-js/pluralize';
const pluralize = require('@public-js/pluralize');
```


## API reference

#### Pluralize.en / pluralizeEn

Example:
```typescript
const amount = 10;
const amountText = pluralizeEn(amount, ['child', 'children']);
console.log(`${amount} ${amountText}`); // '10 children'
```

#### Pluralize.ru / pluralizeRu

Example:
```typescript
const amount = 10;
const amountText = pluralizeRu(amount, ['ребенок', 'ребенка', 'детей']);
console.log(`${amount} ${amountText}`); // '10 детей'
```
