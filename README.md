# @public-js/pluralize

[![CI](https://img.shields.io/github/workflow/status/public-js/pluralize/CI?style=flat-square)](https://github.com/public-js/pluralize/actions?query=workflow%3ACI)
[![Downloads](https://img.shields.io/npm/dm/@public-js/pluralize?style=flat-square)](https://www.npmjs.com/package/@public-js/pluralize)
[![Version](https://img.shields.io/npm/v/@public-js/pluralize?style=flat-square)](https://www.npmjs.com/package/@public-js/pluralize)
[![License](https://img.shields.io/npm/l/@public-js/pluralize?style=flat-square)](https://www.npmjs.com/package/@public-js/pluralize)

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
