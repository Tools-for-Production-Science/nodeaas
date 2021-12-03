"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AASDescriptor_1 = __importDefault(require("./AASDescriptor"));
var AASSubmodel = /** @class */ (function () {
    function AASSubmodel(idShort, identification, description) {
        if (description === void 0) { description = [new AASDescriptor_1.default()]; }
        this.idShort = idShort;
        this.identification = identification;
        this.description = description;
        //Todo: limit possible types of submodelelements
        this.subModelElements = new Array();
    }
    return AASSubmodel;
}());
exports.default = AASSubmodel;
//# sourceMappingURL=AASSubmodel.js.map