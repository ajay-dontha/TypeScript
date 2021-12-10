interface Arithmatic{

    add(num1:number,num2:number);
    mul(num1:number,num2:number);
}

class ArithematicOperations implements Arithmatic{

    add(num1:number,num2:number){

        console.log(num1+num2);
    }

    mul(num1:number,num2:number){
      console.log(num1*num2);
    }
}


class Employee  implements Arithmatic{
    add(num1:number,num2:number){

    }
    mul(num1:number,num2:number){
        
    }
}


let arithmatic:ArithematicOperations=new ArithematicOperations();
arithmatic.add(10,20);
arithmatic.mul(10,20);