import AASDescriptor from "./AASDescriptor";
import AASIdentification from "./AASIdentification";
import IAASElement from "./IAASElement";
import AASKind from "./AASKind";

export default class Asset implements IAASElement
{
    /**
     * this class represents a real asset.
     * @param idShort short id of the asset (not globally unique)
     * @param identification unique id of the asset
     * @param description description of the asset in the form of an aas descriptor array
     * @param kind the kind of the asset
     */
    constructor(public idShort, public identification: AASIdentification, public description: Array<AASDescriptor> = [new AASDescriptor()], public kind:AASKind = AASKind.instance)
    {
    }
}