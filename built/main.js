"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Asset_1 = __importDefault(require("./Asset"));
var AssetAdministrationShell_1 = __importDefault(require("./AssetAdministrationShell"));
var AssetAdministrationShellServer_1 = __importDefault(require("./AssetAdministrationShellServer"));
var SubModel_1 = __importDefault(require("./SubModel"));
var aas = new AssetAdministrationShell_1.default();
var asset = new Asset_1.default();
var submodel = new SubModel_1.default();
aas.addSubmodel(submodel);
var aasServer = new AssetAdministrationShellServer_1.default();
aasServer.addAAS(aas);
//# sourceMappingURL=main.js.map