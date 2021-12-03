import AASRequest from "./AASRequest";

export default class AASDefaultParser
{
    parse(url: string): AASRequest
    {
        let ar = url.split("/");
        let res = new AASRequest();

        if (ar[0] == "")
            ar.shift();

        if(ar[0] == "aas")
        {                                  
            if(ar[1] == "submodels")
            {
                
            }

        }
        return new AASRequest();
    }
}