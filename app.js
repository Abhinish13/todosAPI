const app   = require('express')();
const {get_attributes,set_attributes} = require('./mysql_conf');
var bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get('/',(req,res) =>{

    get_attributes();

    res.status(200)
        .send('helloworld');

});


app.post('/update',(req,res) =>{

    console.log(`Title : ${req.body.title} \nStatus : ${req.body.status}`);
    set_attributes(req.body.title,req.body.status);

    res.status(200)
        .send('Task Added');

});







app.listen(8000);
