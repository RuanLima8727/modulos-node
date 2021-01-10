var mysql = require('mysql');

    var connMYSQL = () =>{
        console.log("Conexão com BD estabelecida");
        return connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'projeto_node'
        });
    }





 module.exports = () =>{
     return connMYSQL;
 }