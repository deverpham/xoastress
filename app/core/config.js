"use strict";
var config = (function () {
    function config() {
        this.port = process.env.PORT;
        this.host = process.env.IP;
        this.viewPath = './app/views';
        this.viewEngine = 'pug';
        this.publicFolder = '/public';
    }
    return config;
}());
exports.__esModule = true;
exports["default"] = config = new config();
