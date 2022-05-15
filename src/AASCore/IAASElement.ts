import AASDescriptor from "./AASDescriptor";
import AASIdentification from "./AASIdentification";

export default interface IAASElement
{
    idShort: string;
    identification:AASIdentification;
    description: Array<AASDescriptor>;
    //modelType:AASModelType;
}