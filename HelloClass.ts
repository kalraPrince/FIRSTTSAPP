class User{
    public name:string;
    public age:number;
    private address:string;
   
    constructor(name:string,age:number,address:string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
};
let UserObj:User = new User("Prince",22,"India");