"use strict";
var database_1 = require("../core/driver/database");
var model = (function () {
    function model() {
        this.validator = require('validator');
    }
    model.prototype.checkadminLogin = function (username, password) {
        var tool = this.validator;
        if ((tool.isEmpty(username) || tool.isEmpty(password)))
            return false;
        else {
            database_1.default.findItem('admin.users', {
                username: username,
                password: password
            });
        }
    };
    return model;
}());
var modelexport;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = modelexport = new model();
