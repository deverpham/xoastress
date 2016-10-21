"use strict";
var exec = require('exec');
var model_1 = require('../model/model');
function default_1(app) {
    app.get('/', function (req, res) {
        var cssel = [
            'materialize',
            'style'
        ];
        var jsel = [
            'jquery.min',
            'style',
            'TweenMax.min'
        ];
        var langhai = {
            name: "Làng hài",
            render: "langhai/index",
            id: 'langhai'
        };
        var menu = [
            langhai
        ];
        res.render('index', {
            cssel: cssel,
            jsel: jsel,
            menulist: menu
        });
    });
    app.post('/api/langhai/getdata', function (req, res) {
        model_1["default"].getdata(0, function () {
        });
        res.render('langhai/index');
    });
}
exports.__esModule = true;
exports["default"] = default_1;
var menuType = (function () {
    function menuType() {
    }
    return menuType;
}());
