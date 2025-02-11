export class person {
     constructor(name , age , profession , address){
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.address = address;
     }
     getDetails(){
        console.log(`my name is ${this.name} age is ${this.age} and address is ${this.address}`)
     }
}
class teacher extends person{
    constructor(name , age , profession , address , salary , subject){
           super(name , age , profession , address);
           this.subject = subject;
           this.salary = salary;
    }
}

class student extends person{
    constructor(name , age , profession , address , rollno , department){
        super(name , age , profession , address);
        this.rollno = rollno;
        this.department = department;
    }
}


const student1 = new student("sahil", 23 , 'student' , 'kalyan east' , 123 ,"IT")

student1.getDetails()