const express = require('express');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // cluster.on('exit', (worker, code, signal) => {
    //     console.log(`worker ${worker.process.pid} died`);
    // });
}
else {
    const app =  express();

    app.get('/', (req, res) => {
        res.setHeader('Connection', 'close');  // Force browser to close connection
        res.send(`Hello from Worker (PID: ${process.pid})`);
    });


    app.listen(8000, () => {
        console.log(`app is running on http://localhost:8000  ${process.pid}`)
    })
}