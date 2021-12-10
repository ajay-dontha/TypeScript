class Employee{
    id:number;
    name:string;
    isPresent:boolean;
    salary:number;
}//class

//creating Object 

let employee:Employee=new Employee();//object 1
    employee.id=1;
    employee.name="Akshay";
    employee.isPresent=false;
    employee.salary=45000;

let employee2:Employee=new Employee();//object 2
    employee2.id=2;
    employee2.name="Ajay";
    employee2.isPresent=true;
    employee2.salary=55000;

    console.log(`Employee:${employee.id} ${employee.name} ${employee.isPresent} ${employee.salary}`)
    console.log(`Employee 2:${employee2.id} ${employee2.name} ${employee2.isPresent} ${employee2.salary}`)



    class Student{

        //Properties
        id:number;
        name:string;
        age:number;
        marks:number;
          //Creation Function
         displayStudent(){
            this.id=1;
            this.name="raja";
            this.age=17;
            this.marks=90;

            console.log(`\nId:${this.id} \nName: ${this.name} \nAge:${this.age} \nMarks: ${this.marks}`);
        }
    }
    let Student:Student=new Student();
        student.displayStudent();
