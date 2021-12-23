import AASSubmodel from "../AASCore/AASSubmodel";
import AASSubmodelElement from "../AASCore/AASSubmodelElement";
import AssetAdministrationShell from "../AASCore/AssetAdministrationShell";
import AAS from "../AASCore/AssetAdministrationShell";
import IAASElement from "../AASCore/IAASElement";
import AASRequest from "./AASRequest";

export default class AASDefaultRouter
{
    constructor()
    {
        this.counter = this.recursionEntryLevel;
    }

    get(url: string, aasArray: Array<AAS>): IAASElement[] | IAASElement | null
    {
        let pathArr = url.split("/");

        if (pathArr[0] == "")
            pathArr.shift();

        if (pathArr[0] == "shells")
        {
            if(pathArr[1] == undefined)
                return aasArray;

            let res: IAASElement | null = aasArray.filter((element) =>
            {
                if (element.idShort == pathArr[1])
                    return element;
            })[0];

            if (pathArr[2] == "submodels")
            {
                res = (res as AssetAdministrationShell).submodels.filter((sub) =>
                {
                    if (sub.idShort == pathArr[3])
                        return sub;
                })[0];

                if (pathArr[4] == "submodel")
                {
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