// class animal{
//     constructor(name){
//         this.name = name;
//         console.log('triggered');
//     }
//    method(){
//       console.log(`i am a  ${this.name}`)
//    }
// }


// const Animal = new animal("dog")
// Animal.method();


// class hello{
//    static details(name , age) {
//      console.log(name);
//    }
// }

// hello.details('deeepak' , 23);


class person{
   
   constructor(name , age ) {
    this.name = name;
    this.age = age;
   }
}
class student extends person{
       constructor(name , age , schools){
        super(name , age )
        this.schools = schools
       }
       info(){
          console.log(this.name , this.age , this.schools);
       }
       
}
class teacher extends person{
    constructor(name , age  , exprience , subject){
     super(name , age )
     this.exprience = exprience;
     this.subject = subject;
    }
    info(){
       console.log(this.name , this.exprience , this.subject);
    }
    
}

const Student = new student('deepak' , 22 , 'red' , 'hs secondary schools');
const Teacher  = new teacher('priya' , 22 , '5 year' , 'math' )
Student.info();
Teacher.info();
