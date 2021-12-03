import AAS from "../AASCore/AssetAdministrationShell";
import IAASElement from "../AASCore/IAASElement";
import AASRequest from "./AASRequest";

export default class AASDefaultRouter
{
    get(url: string, aasArray: Array<AAS>): IAASElement | null
    {
        let ar = url.split("/");
        let res = new AASRequest();

        if (ar[0] == "")
            ar.shift();

        if (ar[0] == "aas")
        {
            if (ar[1] == "submodels")
            {
                return aasArray.filter((element) =>
                {
                    return element.submodels.filter((sub) =>
                    {
                        if (sub.idShort == ar[2])
                            return sub;
                    })[0];
                })[0];
            }
            else
            {
                return aasArray.filter((element) =>
                {
                    if (element.idShort == ar[1])
                        return element;
                })[0];
            }

        }

        return null;
    }

}