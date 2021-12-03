"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var AASDeafultRouter_1 = __importDefault(require("./AASDeafultRouter"));
var app = express_1.default();
var server = http_1.default.createServer(app);
var port = 3001;
var AssetAdministrationShellServer = /** @class */ (function () {
    function AssetAdministrationShellServer() {
        var _this = this;
        this.router = new AASDeafultRouter_1.default();
        this.aasArray = new Array();
        server.timeout = 0;
        server.listen(port, function () {
            console.log('Webserver läuft und hört auf Port ' + port);
        });
        app.use('/', function (req, res) {
            console.log(req.originalUrl);
            var AASElement = _this.router.get(req.originalUrl, _this.aasArray);
            if (AASElement == null)
                res.sendStatus(404);
            else {
                res.send(AASElement);
                res.end();
            }
        });
    }
    AssetAdministrationShellServer.prototype.addAAS = function (aas) {
        this.aasArray.push(aas);
    };
    return AssetAdministrationShellServer;
}());
exports.default = AssetAdministrationShellServer;
//# sourceMappingURL=AssetAdministrationShellServer.js.map