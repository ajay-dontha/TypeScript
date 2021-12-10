var ArithematicOperations = /** @class */ (function () {
    function ArithematicOperations() {
    }
    ArithematicOperations.prototype.add = function (num1, num2) {
        console.log(num1 + num2);
    };
    ArithematicOperations.prototype.mul = function (num1, num2) {
        console.log(num1 * num2);
    };
    return ArithematicOperations;
}());
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.add = function (num1, num2) {
    };
    Employee.prototype.mul = function (num1, num2) {
    };
    return Employee;
}());
var arithmatic = new ArithematicOperations();
arithmatic.add(10, 20);
arithmatic.mul(10, 20);
