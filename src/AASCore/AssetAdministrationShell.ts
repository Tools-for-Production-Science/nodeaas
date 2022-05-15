import IAASElement from "./IAASElement";
import Asset from "./Asset";
import AASSubmodel from "./AASSubmodel";
import AASIdentification from "./AASIdentification";
import AASDescriptor from "./AASDescriptor";

export default class AAS implements IAASElement
{

    asset:any = undefined;
    /**
     * Creates a new asset administration shell
     * @param idShort the short id of the shell with which the shell can be adressed
     * @param identification the long unique identification 
     * @param description the description of the shell in the form of an aas descriptor array
     */
    constructor(public idShort:string, public identification: AASIdentification, public description: Array<AASDescriptor> = [new AASDescriptor()],) { };
    /**
     * Submodels currently administrated by the shell
     */
    submodels = new Array<AASSubmodel>();
    
    /**
     * Add an asset for which the shell is created
     * @param asset the reference to the asset object
     */
    addAsset(asset: Asset)
    {
        this.asset = asset;
    }

    /**
     * Add submodels to the shell
     * @param submodel the reference to the submodel object
     */
    addSubmodel(submodel: AASSubmodel)
    {
        this.submodels.push(submodel);
    }
}