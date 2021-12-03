"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AASDescriptor_1 = __importDefault(require("./AASDescriptor"));
var AAS = /** @class */ (function () {
    function AAS(idShort, identification, description) {
        if (description === void 0) { description = [new AASDescriptor_1.default()]; }
        this.idShort = idShort;
        this.identification = identification;
        this.description = description;
        this.asset = undefined;
        this.submodels = new Array();
    }
    ;
    AAS.prototype.addAsset = function (asset) {
        this.asset = asset;
    };
    AAS.prototype.addSubmodel = function (submodel) {
        this.submodels.push(submodel);
    };
    return AAS;
}());
exports.default = AAS;
//# sourceMappingURL=AssetAdministrationShell.js.map