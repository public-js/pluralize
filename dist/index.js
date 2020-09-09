"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pluralize = exports.pluralizeRu = exports.pluralizeEn = void 0;
function pluralizeEn(num, words) {
    return num === 1 ? words[0] : words[1];
}
exports.pluralizeEn = pluralizeEn;
function pluralizeRu(num, words) {
    num = num % 100;
    if (num >= 11 && num <= 19) {
        return words[2];
    }
    else {
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
exports.pluralizeRu = pluralizeRu;
class Pluralize {
    static en(num, words) {
        return pluralizeEn(num, words);
    }
    static ru(num, words) {
        return pluralizeRu(num, words);
    }
}
exports.Pluralize = Pluralize;
