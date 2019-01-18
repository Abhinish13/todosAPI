const app   = require('express')();
const mysql = require('mysql');
const {get_attributes} = require('./mysql_conf');
var bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get('/',(req,res) =>{

    get_attributes();

    res.status(200)
        .send('helloworld');

});


app.post('/update',(req,res) =>{

    console.log(req.body.id+''+req.body.name);


    res.status(200)
        .send('helloworld');

});







app.listen(8000);
