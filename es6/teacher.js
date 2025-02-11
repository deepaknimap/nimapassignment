import { person } from "./person.js";
class teacher extends person{
    constructor(name , age , profession , address , salary , subject){
           super(name , age , profession , address);
           this.subject = subject;
           this.salary = salary;
    }
}


const teacher1 = new teacher('priya' , 24 , "teacher" , "dombivali east saket road " ,  20000 , "math" );
console.log(teacher1.name);
teacher1.getDetails();