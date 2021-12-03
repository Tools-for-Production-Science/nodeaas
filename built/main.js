"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AASIdentification_1 = __importDefault(require("./AASCore/AASIdentification"));
var AASIdType_1 = __importDefault(require("./AASCore/AASIdType"));
var AASSubmodel_1 = __importDefault(require("./AASCore/AASSubmodel"));
var Asset_1 = __importDefault(require("./AASCore/Asset"));
var AssetAdministrationShell_1 = __importDefault(require("./AASCore/AssetAdministrationShell"));
var AssetAdministrationShellServer_1 = __importDefault(require("./AASServer/AssetAdministrationShellServer"));
var aas = new AssetAdministrationShell_1.default("MyShell", new AASIdentification_1.default("None", AASIdType_1.default.IRI)); //todo: develop an IRI Builder
var asset = new Asset_1.default("asset", new AASIdentification_1.default("None", AASIdType_1.default.IRI));
var submodel = new AASSubmodel_1.default("MySubmodel", new AASIdentification_1.default("None", AASIdType_1.default.IRI));
aas.addAsset(asset);
aas.addSubmodel(submodel);
var aasServer = new AssetAdministrationShellServer_1.default();
aasServer.addAAS(aas);
//# sourceMappingURL=main.js.map