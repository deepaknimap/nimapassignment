const express = require('express');
const app = express();
const sql = require('mysql2');




const connection = sql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'college',
    password: 'abcd@Mysql'
})


// connection.connect((err) => {
//     if (err) {
//         return console.log(err.message)
//     }
//     console.log(`databse is connected ${connection.threadId}`);
// })


app.use(express.json());

app.get('/student', (req, res) => {
    try {
        const query = `select * from student`;

        connection.query(query, (err, result) => {
            if (err) {
                return res.status(502).json({
                    success: false,
                    message: err.message
                })
            }

            return res.status(200).json({
                success: true,
                result
            })

        })
    }
    catch (err) {
        console.log(err.message)
    }
})


app.post('/student', (req, res) => {
    try {
        const { name, roll_no, marks, city } = req.body;
        const query = `insert into student(roll_no , name , city , marks) values(?,?,?,?)`;

        connection.query(query, [roll_no, name, city, marks], (err, result) => {
            if (err) {
                return console.log(err.message)
            }

            console.log(result);

            return res.status(201).json({
                message: "student registrated successfully",
                success: true
            })
        })

    }
    catch (err) {
        console.log(err.message)
    }
});


app.put('/student/:roll_no', (req, res) => {
    try {
        const { roll_no } = req.params;
        let { city , name , mark } = req.body;
        const query = `update student  set name = ? , city = ? , marks = ? where roll_no = ? `;

        connection.query(query, [name , city , mark , roll_no], (err, result) => {
            if (err) {
                return console.log(err.message)
            }

            return res.status(200).json({
                message: "student updated successfully",
                success: true
            })
        })
    }
    catch (err) {
        console.log(err.message)
    }
})



app.listen(8000, () => {
    console.log('app is running on http://localhost:8000/');
})