import express from 'express';
import http from 'http';
import https from 'https';
import AssetAdministrationShell from './AssetAdministrationShell';

let app = express();
let server = http.createServer(app);

let port: number = 3001;

export default class AssetAdministrationShellServer
{
    constructor()
    {
        server.timeout = 0;
        server.listen(port, function ()
        {
            console.log('Webserver läuft und hört auf Port ' + port);
        });

        app.use('/', function (req, res)
        {

            console.log(req.originalUrl);
            res.sendStatus(200);
            res.end();
        });
    }

    addAAS(aas:AssetAdministrationShell)
    {

    }
    
}