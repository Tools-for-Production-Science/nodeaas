"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AASRequest_1 = __importDefault(require("./AASRequest"));
var AASDefaultRouter = /** @class */ (function () {
    function AASDefaultRouter() {
    }
    AASDefaultRouter.prototype.get = function (url, aasArray) {
        var ar = url.split("/");
        var res = new AASRequest_1.default();
        if (ar[0] == "")
            ar.shift();
        if (ar[0] == "aas") {
            if (ar[1] == "submodels") {
                return aasArray.filter(function (element) {
                    return element.submodels.filter(function (sub) {
                        if (sub.idShort == ar[2])
                            return sub;
                    })[0];
                })[0];
            }
            else {
                return aasArray.filter(function (element) {
                    if (element.idShort == ar[1])
                        return element;
                })[0];
            }
        }
        return null;
    };
    return AASDefaultRouter;
}());
exports.default = AASDefaultRouter;
//# sourceMappingURL=AASDeafultRouter.js.map