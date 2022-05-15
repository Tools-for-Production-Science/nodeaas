import IAASElement from "./IAASElement";
import AASSubmodelElement from "./AASSubmodelElement";
import AASIdentification from "./AASIdentification";
import AASDescriptor from "./AASDescriptor";

export default class AASSubmodel implements IAASElement
{
    //Todo: limit possible types of submodelelements

    /**
     * Array of all submodel elements
     */
    subModelElements = new Array<AASSubmodelElement>();
    /**
     * 
     * @param idShort short id of the submodel (not globally unique)
     * @param identification unique id of the submodel
     * @param description description of the submodel in the form of an aas descriptor array
     */
    constructor(public idShort, public identification: AASIdentification, public description: Array<AASDescriptor> = [new AASDescriptor()])
    {
    }
}