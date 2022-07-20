class Geometry{

    public AddNumber(a:number,b:number,c:number=0):number {
        return a+b+c;
    }
    public multiplyNumber(a:number,b?:number):void{
return;
    }
    public subtractNumber(a:number,b:number){

    }

}
let geoObj:Geometry = new Geometry();
let result:number = geoObj.AddNumber(2,3,6);
console.log(geoObj);
console.log(result);