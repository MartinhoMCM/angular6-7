"use strict";
var Auth = /** @class */ (function () {
    function Auth(name) {
        this.name = name;
    }
    Auth.prototype.login = function () {
        return this.name;
    };
    Auth.prototype.lognType = function () {
        return typeof (this.name);
    };
    return Auth;
}());
var auth = new Auth(1);
console.log("Status " + auth.login());
console.log("Type" + auth.lognType());
