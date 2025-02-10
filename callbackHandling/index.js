const { error } = require('console');
const fs  = require('fs');
const path = require('path');


// fs.writeFile('text.txt' , 'hello i am node js developer' , (data)=>{
//     console.log(data);
// });

const filePath =path.join(__dirname , 'text.txt');


fs.readFile(`${filePath}` , 'utf8' , (err , data)=>{
   if(err){
    console.log(err);
   }
   else{
     console.log(data);
   }
});


fs.writeFile('demo.txt' , 'hello this is demo file' , (err)=>{
    console.log(err);
})

console.log('hello world');