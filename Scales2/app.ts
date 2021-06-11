interface IScalable{
    getScale():number;
    getName():string;
}

class Apple implements IScalable {     ////класс Apple наследуется от класса Product
    kind:string;
    namePr:string;
    scalePr:number;
    getName():string{
        return this.namePr + this.kind;
    }
    getScale():number{
               return this.scalePr;
    }
    constructor(_kind:string, n:string, s:number) {
        this.kind=_kind;  
        this.namePr=n;
        this.scalePr=s;            
    }
}

class Tomato implements IScalable {   //класс Tomato наследуется от класса Product
    kind:string;
    namePr:string;
    scalePr:number;
    getName():string{
        return this.namePr + this.kind;
    }
    getScale():number{
               return this.scalePr;
    }
    constructor(_kind:string, n:string, s:number) {
        this.kind=_kind;  
        this.namePr=n;
        this.scalePr=s;            
    }
}


class Scales {      //описываем класс Scales
    products:IScalable[]=[];
    add(p:IScalable):void{
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




