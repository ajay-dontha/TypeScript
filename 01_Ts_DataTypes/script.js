var myName = "ajay";
var age = 24;
var isPresent = true;
var value = true;
console.log("My Name:" + myName); // type 1 for printing output.
console.log("My Name:".concat(myName)); // type 2 of printing output.
console.log("value:".concat(value));
console.log("Is Present : ".concat(isPresent));
var Greeting = /** @class */ (function () {
    function Greeting(id, name) {
        this.id = id;
        this.name = name;
        console.log("Id: ".concat(id, " Name: ").concat(name));
    }
    return Greeting;
}());
var greeting = new Greeting(1, "Vamshi");
var greeting1 = new Greeting(2, "sameer");
