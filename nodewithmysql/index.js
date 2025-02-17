require('dotenv').config()
const mysql = require('mysql2');
const express = require('express');

const app = express();
const PORT = 8000;


// Create MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DATABASEPASSWORD,
    database: 'college'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.message);
        process.exit(1); // Exit the process if connection fails
    }
    console.log('Connected to MySQL as ID ' + connection.threadId);
});



app.use(express.json());

app.get('/student' , async(req , res)=>{
connection.query("SELECT * FROM student WHERE name LIKE 'a%'" , (err , result)=>{
    if(err){
      return  console.log(err.message)
    }
    console.log(result)
});
});

app.post('/student' , (req , res)=>{
    const {name , roll_no , city , marks} = req.body;
    const query = `insert into student(name , roll_no , city , marks) values(?,?,?,?)`;

    connection.query(query , [name , roll_no , city , marks] , (err , result)=>{
        if(err){    
          return  console.log(err.message)
        }
     console.log(result)
    });


    console.log('working fine');

})


// Start Express Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
