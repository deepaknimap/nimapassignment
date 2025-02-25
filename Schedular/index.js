const cron = require('node-cron');
const express = require('express');
const app = express();

const task = () => {
    console.log('this is lunch time');
};

cron.schedule('43 11 * * *', task, {
    timezone: "Asia/Kolkata"
});

app.listen(8000, () => {
    console.log('App is running on port 8000');
});
