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
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
//using extend keyword extending the person details.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employee;
}(Person));
var emp = new Employee();
emp.id = 1;
emp.name = "raja";
emp.age = 45;
emp.city = "Hyderbad";
emp.empCode = "INFOSYS01";
emp.departName = "IT";
console.log("Id: ".concat(emp.id, " Name: ").concat(emp.name, " Age: ").concat(emp.age, " City: ").concat(emp.city, " EmployeeCode: ").concat(emp.empCode, " DepartmentName: ").concat(emp.departName));
