//var mysql      = require('mysql');
const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'todos',
    insecureAuth : true
});

connection.connect((err) => {
    if(err){
        console.log(`this error caused by connect: ${err}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`)
    });

function get_attributes() {
    connection.query('SELECT * from todo ', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].id);
    });

    connection.end();
}




module.exports = {get_attributes};
