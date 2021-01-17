import { expect } from 'chai';
import 'mocha';
import { Pluralize, pluralizeEn, pluralizeRu } from '../src';

describe('func: child (en)', () => {
    const words = ['child', 'children'];
    it('is defined', () => expect(pluralizeEn(1, words)).not.to.be.undefined);
    it('not falsy', () => expect(pluralizeEn(1, words)).to.be.ok);
    it('correct: 1', () => expect(pluralizeEn(1, words)).to.equal('child'));
    it('correct: 2', () => expect(pluralizeEn(2, words)).to.equal('children'));
    it('correct: 5', () => expect(pluralizeEn(5, words)).to.equal('children'));
    it('correct: 10', () => expect(pluralizeEn(10, words)).to.equal('children'));
    it('correct: 11', () => expect(pluralizeEn(11, words)).to.equal('children'));
});

describe('class: child (en)', () => {
    const words = ['child', 'children'];
    it('is defined', () => expect(Pluralize.en(1, words)).not.to.be.undefined);
    it('not falsy', () => expect(Pluralize.en(1, words)).to.be.ok);
    it('correct: 1', () => expect(Pluralize.en(1, words)).to.equal('child'));
    it('correct: 2', () => expect(Pluralize.en(2, words)).to.equal('children'));
    it('correct: 5', () => expect(Pluralize.en(5, words)).to.equal('children'));
    it('correct: 10', () => expect(Pluralize.en(10, words)).to.equal('children'));
    it('correct: 11', () => expect(Pluralize.en(11, words)).to.equal('children'));
});

describe('func: Kind (de)', () => {
    const words = ['Kind', 'Kinder'];
    it('is defined', () => expect(pluralizeEn(1, words)).not.to.be.undefined);
    it('not falsy', () => expect(pluralizeEn(1, words)).to.be.ok);
    it('correct: 1', () => expect(pluralizeEn(1, words)).to.equal('Kind'));
    it('correct: 2', () => expect(pluralizeEn(2, words)).to.equal('Kinder'));
    it('correct: 5', () => expect(pluralizeEn(5, words)).to.equal('Kinder'));
    it('correct: 10', () => expect(pluralizeEn(10, words)).to.equal('Kinder'));
    it('correct: 11', () => expect(pluralizeEn(11, words)).to.equal('Kinder'));
});

describe('class: Kind (de)', () => {
    const words = ['Kind', 'Kinder'];
    it('is defined', () => expect(Pluralize.en(1, words)).not.to.be.undefined);
    it('not falsy', () => expect(Pluralize.en(1, words)).to.be.ok);
    it('correct: 1', () => expect(Pluralize.en(1, words)).to.equal('Kind'));
    it('correct: 2', () => expect(Pluralize.en(2, words)).to.equal('Kinder'));
    it('correct: 5', () => expect(Pluralize.en(5, words)).to.equal('Kinder'));
    it('correct: 10', () => expect(Pluralize.en(10, words)).to.equal('Kinder'));
    it('correct: 11', () => expect(Pluralize.en(11, words)).to.equal('Kinder'));
});

describe('func: ребенок (ru)', () => {
    const words = ['ребенок', 'ребенка', 'детей'];
    it('is defined', () => expect(pluralizeRu(1, words)).not.to.be.undefined);
    it('not falsy', () => expect(pluralizeRu(1, words)).to.be.ok);
    it('correct: 1', () => expect(pluralizeRu(1, words)).to.equal('ребенок'));
    it('correct: 2', () => expect(pluralizeRu(2, words)).to.equal('ребенка'));
    it('correct: 5', () => expect(pluralizeRu(5, words)).to.equal('детей'));
    it('correct: 10', () => expect(pluralizeRu(10, words)).to.equal('детей'));
    it('correct: 11', () => expect(pluralizeRu(11, words)).to.equal('детей'));
    it('correct: 21', () => expect(pluralizeRu(21, words)).to.equal('ребенок'));
    it('correct: 121', () => expect(pluralizeRu(121, words)).to.equal('ребенок'));
});

describe('class: ребенок (ru)', () => {
    const words = ['ребенок', 'ребенка', 'детей'];
    it('is defined', () => expect(Pluralize.ru(1, words)).not.to.be.undefined);
    it('not falsy', () => expect(Pluralize.ru(1, words)).to.be.ok);
    it('correct: 1', () => expect(Pluralize.ru(1, words)).to.equal('ребенок'));
    it('correct: 2', () => expect(Pluralize.ru(2, words)).to.equal('ребенка'));
    it('correct: 5', () => expect(Pluralize.ru(5, words)).to.equal('детей'));
    it('correct: 10', () => expect(Pluralize.ru(10, words)).to.equal('детей'));
    it('correct: 11', () => expect(Pluralize.ru(11, words)).to.equal('детей'));
    it('correct: 21', () => expect(Pluralize.ru(21, words)).to.equal('ребенок'));
    it('correct: 121', () => expect(Pluralize.ru(121, words)).to.equal('ребенок'));
});
