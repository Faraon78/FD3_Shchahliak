var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(n, s) {
        this.namePr = n;
        this.scalePr = s;
    }
    Product.prototype.getName = function () {
        return this.namePr;
    };
    Product.prototype.getScale = function () {
        return this.scalePr;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_kind, n, s) {
        var _this = _super.call(this, n, s) || this;
        _this.kind = _kind;
        return _this;
    }
    Apple.prototype.getName = function () {
        return this.namePr + this.kind;
    };
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_kind, n, s) {
        var _this = _super.call(this, n, s) || this;
        _this.kind = _kind;
        return _this;
    }
    Tomato.prototype.getName = function () {
        return this.namePr + this.kind;
    };
    Tomato.prototype.addTomato = function () {
        Product.allProducts.push();
    };
    return Tomato;
}(Product));
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