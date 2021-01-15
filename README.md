# @public-js/pluralize

[![CI](https://img.shields.io/github/workflow/status/public-js/pluralize/CI?style=flat)](https://github.com/public-js/pluralize/actions?query=workflow%3ACI)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/492e71bd7683414d9fa3a93e8957fcb0)](https://www.codacy.com/gh/public-js/pluralize/dashboard)
[![Maintainability](https://api.codeclimate.com/v1/badges/58853747391fe57fe76b/maintainability)](https://codeclimate.com/github/public-js/pluralize/maintainability)
[![Version](https://img.shields.io/npm/v/@public-js/pluralize?style=flat)](https://www.npmjs.com/package/@public-js/pluralize)
[![License](https://img.shields.io/npm/l/@public-js/pluralize?style=flat)](https://www.npmjs.com/package/@public-js/pluralize)

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
