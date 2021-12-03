import AASDescriptor from "./AASDescriptor";
import AASIdentification from "./AASIdentification";
import IAASElement from "./IAASElement";
import AASKind from "./AASKind";

export default class Asset implements IAASElement
{
    constructor(public idShort, public identification: AASIdentification, public description: Array<AASDescriptor> = [new AASDescriptor()], public kind:AASKind = AASKind.instance)
    {
    }
}