
class Product {      //создаем класс Product
    namePr:string;
    scalePr:number;

    getName():string{
        return this.namePr;
    }
    getScale():number{
        return this.scalePr;
    }
    constructor(n:string, s:number) {
        this.namePr=n;
        this.scalePr=s; 
    }
    static allProducts:Array<Product>;
}
class Apple extends Product {     ////класс Apple наследуется от класса Product
    kind:string;
    getName():string{
        return this.namePr + this.kind;
    }

    constructor(_kind:string, n:string, s:number) {
        super(n, s); 
        this.kind=_kind;  
        
            
    }
}

class Tomato extends Product {   //класс Tomato наследуется от класса Product
    kind:string;
    getName():string{
        return this.namePr + this.kind;
    }
    constructor(_kind:string, n:string, s:number) {        
        super(n, s); 
        this.kind=_kind;
        
    }
    addTomato():void{
        Product.allProducts.push();
    }
}


class Scales {      //создаем класс Scales
    products:Array<Product>=[];
    add(p:Product):void{
        this.products.push(p);
    }
    getSumScale():number{
        let s:number=0;
        this.products.forEach(
            p=>{s+=p.getScale()}
        )
        return s    
    }         
    getNameList():Array<string>{
        let list:Array<string>=[];
        this.products.forEach(
            p=>{list.push(p.getName())}
        )
        return list    
    }       
}

let tomato1:Tomato= new Tomato("большой", "Помидор ", 0.3);
console.log(tomato1);

let tomato2:Tomato= new Tomato("средний", "Помидор ", 0.2);

let tomato3:Tomato= new Tomato("маленький", "Помидор ", 0.1);

let apple1:Apple= new Apple("красное", "Яблоко ", 0.4);

let apple2:Apple= new Apple("желтое", "Яблоко ", 0.3);

let apple3:Apple= new Apple("зеленое","Яблоко ", 0.2);

let scale1:Scales= new Scales;

scale1.add(tomato1);
scale1.add(tomato2);
scale1.add(tomato3);
scale1.add(apple1);
scale1.add(apple2);
scale1.add(apple3);

let result=scale1.getSumScale();
console.log(result);
var nameList=scale1.getNameList();
console.log(nameList);




