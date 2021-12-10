class  Person {

    id:number;
    name:string;
    age:number;
    city:string;
       
}

//using extend keyword extending the person details.
class Employee extends Person
{  
      empCode:string;
      departName:string;
}       
let emp:Employee=new Employee();
    emp.id=1;
    emp.name="raja";
    emp.age=45;
    emp.city="Hyderbad";
    emp.empCode="INFOSYS01";
    emp.departName="IT";
     
    console.log(`Id: ${emp.id} Name: ${emp.name} Age: ${emp.age} City: ${emp.city} EmployeeCode: ${emp.empCode} DepartmentName: ${emp.departName}`)