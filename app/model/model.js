"use strict";
var database_1 = require("../core/driver/database");
var model = (function () {
    function model() {
        this.validator = require('validator');
    }
    model.prototype.checkadminLogin = function (username, password, callback) {
        var data = {
            username: username,
            password: password
        };
        database_1.default.findItem("admin.users", data, callback);
    };
    return model;
}());
var modelexport;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = modelexport = new model();
