var Apple = /** @class */ (function () {
    function Apple(_kind, n, s) {
        this.kind = _kind;
        this.namePr = n;
        this.scalePr = s;
    }
    Apple.prototype.getName = function () {
        return this.namePr + this.kind;
    };
    Apple.prototype.getScale = function () {
        return this.scalePr;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_kind, n, s) {
        this.kind = _kind;
        this.namePr = n;
        this.scalePr = s;
    }
    Tomato.prototype.getName = function () {
        return this.namePr + this.kind;
    };
    Tomato.prototype.getScale = function () {
        return this.scalePr;
    };
    return Tomato;
}());
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (p) {
        this.products.push(p);
    };
    Scales.prototype.getSumScale = function () {
        var s = 0;
        this.products.forEach(function (p) { s += p.getScale(); });
        return s;
    };
    Scales.prototype.getNameList = function () {
        var list = [];
        this.products.forEach(function (p) { list.push(p.getName()); });
        return list;
    };
    return Scales;
}());
var tomato1 = new Tomato("большой", "Помидор ", 0.3);
console.log(tomato1);
var tomato2 = new Tomato("средний", "Помидор ", 0.2);
var tomato3 = new Tomato("маленький", "Помидор ", 0.1);
var apple1 = new Apple("красное", "Яблоко ", 0.4);
var apple2 = new Apple("желтое", "Яблоко ", 0.3);
var apple3 = new Apple("зеленое", "Яблоко ", 0.2);
var scale1 = new Scales;
scale1.add(tomato1);
scale1.add(tomato2);
scale1.add(tomato3);
scale1.add(apple1);
scale1.add(apple2);
scale1.add(apple3);
var result = scale1.getSumScale();
console.log(result);
var nameList = scale1.getNameList();
console.log(nameList);
//# sourceMappingURL=app.js.map