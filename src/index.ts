export function pluralizeEn(num: number, words: string[]): string {
    return num === 1 ? words[0] : words[1];
}

export function pluralizeRu(num: number, words: string[]): string {
    num = num % 100;
    if (num >= 11 && num <= 19) {
        return words[2];
    } else {
        switch (num % 10) {
            case (1):
                return words[0];
            case (2):
            case (3):
            case (4):
                return words[1];
            default:
                return words[2];
        }
    }
}

export class Pluralize {

    public static en(num: number, words: string[]): string {
        return pluralizeEn(num, words);
    }

    public static ru(num: number, words: string[]): string {
        return pluralizeRu(num, words);
    }

}
