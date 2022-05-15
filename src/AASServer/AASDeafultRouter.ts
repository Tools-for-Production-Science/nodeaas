import AASSubmodel from "../AASCore/AASSubmodel";
import AASSubmodelElement from "../AASCore/AASSubmodelElement";
import AssetAdministrationShell from "../AASCore/AssetAdministrationShell";
import AAS from "../AASCore/AssetAdministrationShell";
import IAASElement from "../AASCore/IAASElement";

export default class AASDefaultRouter
{
    /**
     * Create a router to map a web request to the asset administration shells
     */
    constructor()
    {
        this.counter = this.recursionEntryLevel;
    }

    /**
     * Process a specific web request and return the data
     * @param url the web request in the form of a string
     * @param aasArray the array of all aas where the web request should be mapped to
     * @returns the aas element requested or null
     */
    get(url: string, aasArray: Array<AAS>): IAASElement[] | IAASElement | null
    {
        let pathArr = url.split("/");

        if (pathArr[0] == "")
            pathArr.shift();

            //First part is shell
        if (pathArr[0] == "shells")
        {
            if(pathArr[1] == undefined)
                return aasArray;
            //Second part is short id of the aas. Search for it. 
            let res: IAASElement | null = aasArray.filter((element) =>
            {
                if (element.idShort == pathArr[1])
                    return element;
            })[0];

            //Third part is call of submodel or submodels
            if (pathArr[2] == "submodels")
            {
                res = (res as AssetAdministrationShell).submodels.filter((sub) =>
                {
                    if (sub.idShort == pathArr[3])
                        return sub;
                })[0];

                if (pathArr[4] == "submodel")
                {
                    //if a specific aas element is requested to a recursion through all elements until the correct one is found
                    if (pathArr[5] != undefined)
                        res = this.recursion(res, pathArr);
                }
            }
            return res;
        }

        return null;
    }

    recursionEntryLevel = 5;
    counter;

    /**
     * recursion function to search for a specific element.
     * @param res 
     * @param path 
     * @returns 
     */
    private recursion(res, path): IAASElement | null
    {
        if (path[this.counter] == "submodelElements")
        {
            this.counter++;
            res = (res as AASSubmodel).subModelElements.filter((el) =>
            {
                if (el.idShort == path[this.counter])
                    return el;
            })[0];
            this.counter++;

            switch (path[this.counter])
            {
                case "invoke":
                    //todo
                    break;
                case "value":
                    res = (res as AASSubmodelElement).value;
                break;
                case undefined:
                    break;
                default:
                    res = this.recursion(res, path);
            }

            return res;
        }

        this.counter = 5;
        return null;
    }
}