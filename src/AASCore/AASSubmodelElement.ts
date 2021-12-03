import IAASElement from "./IAASElement";
import AASValueType from "./AASvalueType";
import AASIdentification from "./AASIdentification";
import AASDescriptor from "./AASDescriptor";

export default class AASSubmodelElement implements IAASElement
{
    constructor(public idShort, public identification: AASIdentification, public description: Array<AASDescriptor>, public valueType: AASValueType, public value: any)
    {
    }

}