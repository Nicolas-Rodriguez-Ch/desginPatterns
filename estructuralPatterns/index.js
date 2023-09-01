var oldSystem = /** @class */ (function () {
    function oldSystem() {
    }
    oldSystem.prototype.oldRequest = function () {
        console.log("Old request from the old system");
    };
    return oldSystem;
}());
// adapter
var Adapter = /** @class */ (function () {
    function Adapter(oldSystem) {
        this.oldSystem = oldSystem;
    }
    Adapter.prototype.request = function () {
        this.oldSystem.oldRequest();
    };
    return Adapter;
}());
var pastSystem = new oldSystem();
var adapter = new Adapter(pastSystem);
adapter.request();
