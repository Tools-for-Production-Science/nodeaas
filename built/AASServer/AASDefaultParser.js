"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AASRequest_1 = __importDefault(require("./AASRequest"));
var AASDefaultParser = /** @class */ (function () {
    function AASDefaultParser() {
    }
    AASDefaultParser.prototype.parse = function (url) {
        var ar = url.split("/");
        var res = new AASRequest_1.default();
        if (ar[0] == "")
            ar.shift();
        if (ar[0] == "aas") {
            if (ar[1] == "submodels") {
            }
        }
        return new AASRequest_1.default();
    };
    return AASDefaultParser;
}());
exports.default = AASDefaultParser;
//# sourceMappingURL=AASDefaultParser.js.map