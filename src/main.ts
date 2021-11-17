import Asset from "./Asset";
import AssetAdministrationShell from "./AssetAdministrationShell";
import AssetAdministrationShellServer from "./AssetAdministrationShellServer";
import Submodel from "./SubModel";


let aas = new AssetAdministrationShell();
let asset = new Asset();
let submodel = new Submodel();
aas.addSubmodel(submodel);

let aasServer = new AssetAdministrationShellServer();

aasServer.addAAS(aas);
