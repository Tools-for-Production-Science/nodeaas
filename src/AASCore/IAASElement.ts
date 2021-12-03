import AASDescriptor from "./AASDescriptor";
import AASIdentification from "./AASIdentification";
import AASModelType from "./AASModelType";

export default interface IAASElement
{
    idShort: string;
    identification:AASIdentification;
    description: Array<AASDescriptor>;
    //modelType:AASModelType;
}