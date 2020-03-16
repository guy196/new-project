const express  = require('express')
const app = express();

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "origin, X-requested-With, Content-Type, Accept, authoriztion");
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-methods", "PUT, POST , PATCH , DELETE, GET")
        return res.status(200).json({});
    }
    next();
});

app.get('/', (req, res) =>{
    res.status(200).json({
        message: 'Hello World 2'
    })
});

app.use((req,res, next) =>{
    const eror = new Eror('Not Found')
})

module.exports = app;