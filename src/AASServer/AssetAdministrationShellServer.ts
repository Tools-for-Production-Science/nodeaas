import express from 'express';
import http from 'http';
import https from 'https';
import AAS from '../AASCore/AssetAdministrationShell';
import AASDefaultRouter from './AASDeafultRouter';


let app = express();
let server = http.createServer(app);

export default class AssetAdministrationShellServer
{
    /**
     * The default router to map web requests to the aas hierarchy
     */
    router = new AASDefaultRouter();

    /**
     * An array of all asset administration shells provided by this server
     */
    aasArray = new Array<AAS>();

    /**
     * Create a default aas server. 
     * @param port port number of the server. Default is 3001.
     */
    constructor(private port:number = 3001)
    {
        server.timeout = 0;
        server.listen(this.port, function ()
        {
            console.log('Webserver läuft und hört auf Port ' + port);
        });

        //create a hook on root level to get every request
        app.use('/', (req, res) =>
        {
            console.log(req.originalUrl);
            //process request manually and return data from the asset administration shell
            let AASElement = this.router.get(req.originalUrl, this.aasArray);
            //if no data is returned, e.g. because the element is not existing, return 404
            if (AASElement == null)
                res.sendStatus(404);
            else
            {
                res.send(AASElement);
                res.end();
            }
        });
    }

    /**
     * add an aas to the aas server
     * @param aas the reference to the aas
     */
    addAAS(aas: AAS)
    {
        this.aasArray.push(aas);
    }

}