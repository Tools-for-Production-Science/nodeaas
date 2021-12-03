import express from 'express';
import http from 'http';
import https from 'https';
import AAS from '../AASCore/AssetAdministrationShell';
import AASDefaultRouter from './AASDeafultRouter';
import AASDefaultParser from './AASDefaultParser';


let app = express();
let server = http.createServer(app);

let port: number = 3001;

export default class AssetAdministrationShellServer
{
    router = new AASDefaultRouter();
    aasArray = new Array<AAS>();

    constructor()
    {
        server.timeout = 0;
        server.listen(port, function ()
        {
            console.log('Webserver läuft und hört auf Port ' + port);
        });

        app.use('/', (req, res) =>
        {
            console.log(req.originalUrl);
            let AASElement = this.router.get(req.originalUrl, this.aasArray);
            if (AASElement == null)
                res.sendStatus(404);
            else
            {
                res.send(AASElement);
                res.end();
            }
        });
    }

    addAAS(aas: AAS)
    {
        this.aasArray.push(aas);
    }

}