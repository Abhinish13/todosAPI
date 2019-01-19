const mysql = require('mysql');
const   mysqlHOSTName = process.env.host || process.env.OPENSHIFT_MYSQL_HOST || 'localhost',
        mysqlDBUser = process.env.user || process.env.OPENSHIFT_MYSQL_USER || 'root',
        mysqlDBPass = process.env.password || process.env.OPENSHIFT_MYSQL_PASSWORD || 'password',
        mysqlDBName = process.env.database || process.env.OPENSHIFT_MYSQL_DATABASE || 'todos';



var connection = mysql.createConnection({
    host     : mysqlHOSTName,
    user     : mysqlDBUser,
    password : mysqlDBPass,
    database : mysqlDBName,
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

function set_attributes(title,status) {
    connection.query(`INSERT INTO todo  (title, status) VALUES ('${title}', '${status}'); `, function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results[0].id);
    });

    connection.end();
}





module.exports = {get_attributes,set_attributes};
