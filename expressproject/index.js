const express = require('express');
const app = express();


app.get('/', (req, res) => {
    console.log('root route');
});

const getCurrentTime = (zone, local = "en-usa") => {
    const date = new Date();


    return new Intl.DateTimeFormat(local, {
        timeZone: zone,
        timeStyle: 'full',
        dateStyle: 'full'
    }).format(date);

}


app.get('/getTime', (req, res) => {
    try {
    
    const  data = {
        India: getCurrentTime('Asia/Kolkata', 'en-IN'),
        USA: getCurrentTime('America/New_York', 'en-US'),
        China: getCurrentTime('Asia/Shanghai', 'en-CN'),
        France: getCurrentTime('Europe/Paris', 'en-FR'),
        Australia: getCurrentTime('Australia/Sydney', 'en-AU')
    }

    res.json(data);
     
    }
    catch (err) {
        console.log(err);
    }
});



app.listen(8000, () => {
    console.log('app is running on url http://localhost:8000/')
});