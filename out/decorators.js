"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorator1 = decorator1;
exports.decorator2 = decorator2;
exports.decorator3 = decorator3;
exports.decorator4 = decorator4;
function decorator1(constructor) {
    return class extends constructor {
        _offset = 3;
    };
}
function decorator2() { }
function decorator3() { }
function decorator4(constructor) {
    class ExtendedPartialMassegEncoder extends constructor {
        static forbiddenSymbols = [
            "_",
            ",",
            ".",
            "!",
            "?",
            "-",
            ";",
            " ",
            '"',
            "'",
        ];
    }
    return ExtendedPartialMassegEncoder;
}
//# sourceMappingURL=decorators.js.map