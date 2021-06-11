
class Product {      //описываем класс Product
    private namePr:string;
    private scalePr:number;

    public getName():string{
        return this.namePr;
    }
    public getScale():number{
        return this.scalePr;
    }
    constructor(n:string, s:number) {
        this.namePr=n;
        this.scalePr=s; 
    }    
}

interface IStorageEngine{
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
}

class ScalesStorageEngineArray {
    products:Product[]=[];
    addItem(item:Product):void{
        this.products.push(item);
    }
    getItem(index:number):Product{
        return this.products[index];
    };
    getCount():number{
        return this.products.length;
    };
}

class ScalesStorageEngineLocalStorage{
    localStorageKey:string='prod';
    addItem(item:Product):void{
        let a:Array<Product>=[];
        if(localStorage.prod){
            a =JSON.parse(localStorage.prod); 
        }
        else a   
        a.push(item);
        localStorage.prod=JSON.stringify(a);
    }

    getItem(index:number):Product{
        let a:Product[]=[];
        if(localStorage.prod){
            a =JSON.parse(localStorage.prod); 
        }
        else a
        return a[index];
    }
    
}

class Scales {      //описываем класс Scales
    
    //add(p:Product):void{
    //    this.products.push(p);
    //}
    getSumScale():number{
        let s:number=0;
        //this.products.forEach(
        //    p=>{s+=p.getScale()}
        //)
        return s    
    }         
    getNameList():Array<string>{
        let list:Array<string>=[];
        //this.products.forEach(
       //     p=>{list.push(p.getName())}
        //)
        return list    
    }       
}

let vegetable1:Product= new Product("Помидор ", 0.3);
console.log(vegetable1);

let vegetable2:Product= new Product("Огурец ", 0.2);

let vegetable3:Product= new Product("Перец ", 0.1);

let fruit1:Product= new Product("Яблоко ", 0.4);

let fruit2:Product= new Product("Груша ", 0.3);

let fruit3:Product= new Product("Апельсин ", 0.2);

let scale1:Scales= new Scales;

scale1.add(vegetable1);
scale1.add(vegetable2);
scale1.add(vegetable3);
scale1.add(fruit1);
scale1.add(fruit2);
scale1.add(fruit3);

let result=scale1.getSumScale();
console.log(result);
var nameList=scale1.getNameList();
console.log(nameList);




