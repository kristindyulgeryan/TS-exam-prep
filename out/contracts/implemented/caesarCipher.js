"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaesarCipher = void 0;
// @decorator1
class CaesarCipher {
    _language;
    _offset = 2;
    constructor(_language) {
        this._language = _language;
    }
    get language() {
        return this._language;
    }
    // @decorator2
    encipher(text) {
        let characters = text.split("");
        let setValues = [...this._language.charset.values()];
        let charsetCount = this._language.charset.size;
        let encoded = characters.map((x) => {
            let finalOffset = (setValues.indexOf(x) + this._offset) % charsetCount;
            return setValues[finalOffset];
        });
        return encoded.join("");
    }
    // @decorator3
    decipher(text) {
        let characters = text.split("");
        let setValues = [...this._language.charset.values()];
        let charsetCount = this._language.charset.size;
        let decoded = characters.map((x) => {
            let initialOffset = setValues.indexOf(x);
            let finalOffset = (initialOffset - this._offset + charsetCount) % charsetCount;
            return setValues[finalOffset];
        });
        return decoded.join("");
    }
}
exports.CaesarCipher = CaesarCipher;
//# sourceMappingURL=caesarCipher.js.map