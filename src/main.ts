
import AASIdentification from "./AASCore/AASIdentification";
import AASIdType from "./AASCore/AASIdType";
import AASSubmodel from "./AASCore/AASSubmodel";
import Asset from "./AASCore/Asset";
import AAS from "./AASCore/AssetAdministrationShell";
import AssetAdministrationShellServer from "./AASServer/AssetAdministrationShellServer";
import AASClassMapper from "./AASUtilities/AASClassMapper";

/**
 * ToDo:
 * 1. Implement class mapper
 * 2. Implement submodel element collection
 */

//Create an asset administration shell
let aas = new AAS("MyShell", new AASIdentification("None", AASIdType.IRI)); //todo: develop an IRI Builder
//Create an asset
let asset = new Asset("asset", new AASIdentification("None", AASIdType.IRI));
//Create a submodel
let submodel = new AASSubmodel("MySubmodel", new AASIdentification("None", AASIdType.IRI));

//Add asset to the shell
aas.addAsset(asset);
//Add submodel to the shell
aas.addSubmodel(submodel);

let aasMapper = new AASClassMapper();
//let aas2 = aasMapper.map(aas);

//Create a web server
let aasServer = new AssetAdministrationShellServer();

//Add shell to the webserver
aasServer.addAAS(aas);
//aasServer.addAAS(aas2)
