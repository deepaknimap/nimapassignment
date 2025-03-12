const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const exp = require('constants');
const { error } = require('console');

const fileUpload = path.join(__dirname , '/uploads')

if(!fs.existsSync(fileUpload)){
    fs.mkdirSync(fileUpload)
}


app.use(express.json());
app.use(express.urlencoded({extended : true})); 

const storage  = multer.diskStorage({
    destination : (req , file  , cb)=>{
        cb(null , fileUpload)
     },
     filename : (req , file  , cb)=>{
        const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;

        cb(null , unique + '-' + file.originalname)
     },
})


const uploads = multer(
    {
        storage , 
        limits : {fileSize : 1 * 1024 * 1024},
        fileFilter : (req, file , cb)=>{
            const allowedForamt = ['image/jpg'];
            if(allowedForamt.includes(file.mimetype)){
                   cb(null , true);
            }
            else{
              return  cb(new Error('only png , jpg format is allowed') , false);
            }
        }
    }).any()
     

app.get('/' , (req , res)=>{
    console.log('hello from server side');
    res.send('hello from server side');
})


app.post('/uploads'  ,  (req , res)=>{
    try {
        uploads(req , res , (err)=>{
            if(err){
                if(err.code === 'LIMIT_FILE_SIZE'){
                    return res.status(400).json({ msg: "File should be less than 1MB" });
                }
                return res.status(400).json({ msg: err.message });
            }
            res.status(201).json({msg : 'file success fully uploaded'})
        });               
    } catch (error) {
        //   res.status(401).json({msg : error.message});
    }
}) 



app.listen(3000 , ()=>{
    console.log('app is running on port');
})