var Subscriber = /** @class */ (function () {
    function Subscriber(name) {
        this.name = name;
    }
    Subscriber.prototype.update = function (message) {
        console.log("".concat(this.name, " has recived a messsage: ").concat(message));
    };
    return Subscriber;
}());
var Magazine = /** @class */ (function () {
    function Magazine() {
        this.observers = [];
    }
    Magazine.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Magazine.prototype.unsubscribe = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    };
    Magazine.prototype.notification = function (message) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(message);
        }
    };
    return Magazine;
}());
var magazine = new Magazine();
var user1 = new Subscriber("User 1");
var user2 = new Subscriber("User 2");
magazine.subscribe(user1);
magazine.subscribe(user2);
magazine.notification("New issue aviable");
