import { Pluralize, pluralizeEn, pluralizeRu } from './index';

test('func: child (en)', () => {
    const words = ['child', 'children'];
    expect(pluralizeEn(1, words)).toBeDefined();
    expect(pluralizeEn(1, words)).not.toBeFalsy();
    expect(pluralizeEn(1, words)).toBe('child');
    expect(pluralizeEn(2, words)).toBe('children');
    expect(pluralizeEn(5, words)).toBe('children');
    expect(pluralizeEn(10, words)).toBe('children');
    expect(pluralizeEn(11, words)).toBe('children');
});

test('class: child (en)', () => {
    const words = ['child', 'children'];
    expect(Pluralize.en(1, words)).toBeDefined();
    expect(Pluralize.en(1, words)).not.toBeFalsy();
    expect(Pluralize.en(1, words)).toBe('child');
    expect(Pluralize.en(2, words)).toBe('children');
    expect(Pluralize.en(5, words)).toBe('children');
    expect(Pluralize.en(10, words)).toBe('children');
    expect(Pluralize.en(11, words)).toBe('children');
});

test('func: Kind (de)', () => {
    const words = ['Kind', 'Kinder'];
    expect(pluralizeEn(1, words)).toBeDefined();
    expect(pluralizeEn(1, words)).not.toBeFalsy();
    expect(pluralizeEn(1, words)).toBe('Kind');
    expect(pluralizeEn(2, words)).toBe('Kinder');
    expect(pluralizeEn(5, words)).toBe('Kinder');
    expect(pluralizeEn(10, words)).toBe('Kinder');
    expect(pluralizeEn(11, words)).toBe('Kinder');
});

test('class: Kind (de)', () => {
    const words = ['Kind', 'Kinder'];
    expect(Pluralize.en(1, words)).toBeDefined();
    expect(Pluralize.en(1, words)).not.toBeFalsy();
    expect(Pluralize.en(1, words)).toBe('Kind');
    expect(Pluralize.en(2, words)).toBe('Kinder');
    expect(Pluralize.en(5, words)).toBe('Kinder');
    expect(Pluralize.en(10, words)).toBe('Kinder');
    expect(Pluralize.en(11, words)).toBe('Kinder');
});

test('func: ребенок (ru)', () => {
    const words = ['ребенок', 'ребенка', 'детей'];
    expect(pluralizeRu(1, words)).toBeDefined();
    expect(pluralizeRu(1, words)).not.toBeFalsy();
    expect(pluralizeRu(1, words)).toBe('ребенок');
    expect(pluralizeRu(2, words)).toBe('ребенка');
    expect(pluralizeRu(5, words)).toBe('детей');
    expect(pluralizeRu(10, words)).toBe('детей');
    expect(pluralizeRu(11, words)).toBe('детей');
    expect(pluralizeRu(21, words)).toBe('ребенок');
    expect(pluralizeRu(121, words)).toBe('ребенок');
});

test('class: ребенок (ru)', () => {
    const words = ['ребенок', 'ребенка', 'детей'];
    expect(Pluralize.ru(1, words)).toBeDefined();
    expect(Pluralize.ru(1, words)).not.toBeFalsy();
    expect(Pluralize.ru(1, words)).toBe('ребенок');
    expect(Pluralize.ru(2, words)).toBe('ребенка');
    expect(Pluralize.ru(5, words)).toBe('детей');
    expect(Pluralize.ru(10, words)).toBe('детей');
    expect(Pluralize.ru(11, words)).toBe('детей');
    expect(Pluralize.ru(21, words)).toBe('ребенок');
    expect(Pluralize.ru(121, words)).toBe('ребенок');
});
