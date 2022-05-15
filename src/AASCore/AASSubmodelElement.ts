import IAASElement from "./IAASElement";
import AASValueType from "./AASvalueType";
import AASIdentification from "./AASIdentification";
import AASDescriptor from "./AASDescriptor";

export default class AASSubmodelElement implements IAASElement
{
    /**
     * Create a submodel element
     * @param idShort short id of the submodel element
     * @param identification unique id of the submodel element
     * @param description description of the submodel element
     * @param valueType the value type of the element
     * @param value the value of the element
     */
    constructor(public idShort, public identification: AASIdentification, public description: Array<AASDescriptor>, public valueType: AASValueType, public value: any)
    {
    }

}