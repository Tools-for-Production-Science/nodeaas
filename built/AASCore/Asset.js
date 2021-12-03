"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AASDescriptor_1 = __importDefault(require("./AASDescriptor"));
var AASKind_1 = __importDefault(require("./AASKind"));
var Asset = /** @class */ (function () {
    function Asset(idShort, identification, description, kind) {
        if (description === void 0) { description = [new AASDescriptor_1.default()]; }
        if (kind === void 0) { kind = AASKind_1.default.instance; }
        this.idShort = idShort;
        this.identification = identification;
        this.description = description;
        this.kind = kind;
    }
    return Asset;
}());
exports.default = Asset;
//# sourceMappingURL=Asset.js.map