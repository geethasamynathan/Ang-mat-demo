export class Product {
    Id:number=0;
    Name:string='';
    Price:number=0;
    constructor(pid:number,pname:string,price:number)
    {
        this.Id=pid;
        this.Name=pname;
        this.Price=price;
    }
}
