var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'c0d3r@123',
  database : 'new_data'
});
 
connection.connect((err)=>{
    console.log("connected....!")
});


module.exports=connection






