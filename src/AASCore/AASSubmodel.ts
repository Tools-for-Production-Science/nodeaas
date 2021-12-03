import IAASElement from "./IAASElement";
import AASSubmodelElement from "./AASSubmodelElement";
import AASIdentification from "./AASIdentification";
import AASDescriptor from "./AASDescriptor";

export default class AASSubmodel implements IAASElement
{
    //Todo: limit possible types of submodelelements
    subModelElements = new Array<AASSubmodelElement>();

    constructor(public idShort, public identification: AASIdentification, public description: Array<AASDescriptor> = [new AASDescriptor()])
    {
    }
}