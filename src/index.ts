/**
 * Formats a word according to a given number (language-dependent).
 * @param num A number to match
 * @param words An array of word forms to format
 */
export function pluralizeEn(num: number, words: string[]): string {
    return num === 1 ? words[0] : words[1];
}

/**
 * Formats a word according to a given number (language-dependent).
 * @param num A number to match
 * @param words An array of word forms to format
 */
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

    /**
     * Formats a word according to a given number (language-dependent).
     * @param num A number to match
     * @param words An array of word forms to format
     */
    public static en(num: number, words: string[]): string {
        return pluralizeEn(num, words);
    }

    /**
     * Formats a word according to a given number (language-dependent).
     * @param num A number to match
     * @param words An array of word forms to format
     */
    public static ru(num: number, words: string[]): string {
        return pluralizeRu(num, words);
    }

}
