
import AASIdentification from "./AASCore/AASIdentification";
import AASIdType from "./AASCore/AASIdType";
import AASSubmodel from "./AASCore/AASSubmodel";
import Asset from "./AASCore/Asset";
import AAS from "./AASCore/AssetAdministrationShell";
import AssetAdministrationShellServer from "./AASServer/AssetAdministrationShellServer";
import AASClassMapper from "./AASUtilities/AASClassMapper";


let aas = new AAS("MyShell", new AASIdentification("None", AASIdType.IRI)); //todo: develop an IRI Builder
let asset = new Asset("asset", new AASIdentification("None", AASIdType.IRI));
let submodel = new AASSubmodel("MySubmodel", new AASIdentification("None", AASIdType.IRI));

aas.addAsset(asset);
aas.addSubmodel(submodel);

let aasMapper = new AASClassMapper();
let aas2 = aasMapper.map(aas);

let aasServer = new AssetAdministrationShellServer();

aasServer.addAAS(aas);
aasServer.addAAS(aas2)
