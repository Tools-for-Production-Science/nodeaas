import IAASElement from "./IAASElement";
import Asset from "./Asset";
import AASSubmodel from "./AASSubmodel";
import AASIdentification from "./AASIdentification";
import AASDescriptor from "./AASDescriptor";

export default class AAS implements IAASElement
{

    asset:any = undefined;
    constructor(public idShort, public identification: AASIdentification, public description: Array<AASDescriptor> = [new AASDescriptor()],) { };
    submodels = new Array<AASSubmodel>();
    
    addAsset(asset: Asset)
    {
        this.asset = asset;
    }

    addSubmodel(submodel: AASSubmodel)
    {
        this.submodels.push(submodel);
    }


}