import AASIdType from "./AASIdType";

export default class AASIdentification
{
    /**
     * A unique identification. Multiple id types are possible
     * @param id the id
     * @param idType the type of the id
     */
    constructor(public id:string, public idType:AASIdType){};
}