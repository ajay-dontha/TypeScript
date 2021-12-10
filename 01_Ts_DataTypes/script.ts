let myName:string="ajay";
let age:number=24;
let isPresent:boolean=true;
let  value:any=true;

console.log("My Name:"+myName);// type 1 for printing output.

console.log(`My Name:${myName}`);// type 2 of printing output.

console.log(`value:${value}`)

console.log(`Is Present : ${isPresent}`)

//class using Constructor
class Greeting{

  id:number;
  name:string;
   constructor(id:number,name:string)
   {
    this.id=id;
    this.name=name;
    console.log(`Id: ${id} Name: ${name}`)
   }
}
let greeting:Greeting=new Greeting(1,"Vamshi");
let greeting1:Greeting=new Greeting(2,"sameer");