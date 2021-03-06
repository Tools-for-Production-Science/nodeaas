import AASDescriptor from "../AASCore/AASDescriptor";
import AASIdentification from "../AASCore/AASIdentification";
import AASIdType from "../AASCore/AASIdType";
import AASSubmodel from "../AASCore/AASSubmodel";
import AASSubmodelElement from "../AASCore/AASSubmodelElement";
import AAS from "../AASCore/AssetAdministrationShell";

/**
 * This class provides the possibilty to map any existing class to an aas.
 */
export default class AASClassMapper
{   
/**
 * Map a class to an aas
 * @param obj the object to map
 * @returns asset administration shell
 */
    static map(obj: object):AAS
    {
        throw "not implemented exception"
        let aas = new AAS(obj.constructor.name, new AASIdentification("None", AASIdType.IRI), [new AASDescriptor()]);
        
        
        for (var prop in obj) {
            let generalSubmodel = new AASSubmodel("general", new AASIdentification("none", AASIdType.IRI));

            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                if(typeof(obj) == "object")
                {
                    //add as submodel
                }
                else
                {
                    //generalSubmodel.subModelElements.push(new AASSubmodelElement())
                    //add as Submodelelement-property
                }
                // do stuff
            }
        }

        this.recursion(obj, aas);

        return aas;
    }

    private static recursion(obj, aas)
    {
        
    }
}