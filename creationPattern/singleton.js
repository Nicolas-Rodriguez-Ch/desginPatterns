"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.someMethod = function () {
        console.log("Method excecuted from the Singleton");
    };
    return Singleton;
}());
exports.Singleton = Singleton;
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
instance1.someMethod();
console.log(instance1 === instance2);
