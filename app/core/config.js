"use strict";
var config = (function () {
    function config() {
        this.port = 80;
        this.host = process.env.IP;
        this.viewPath = './app/views';
        this.viewEngine = 'pug';
        this.publicFolder = '/public';
    }
    return config;
}());
;
var configel;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configel = new config();
