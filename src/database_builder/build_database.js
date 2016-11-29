const env = require('env2')('./config.env');
const fs = require('fs');

console.log(process.env.DB_URL);
const dbConn = require('../dbconnection.js');

console.log(dbConn);
const sql = fs.readFileSync(`${__dirname}/build_database.sql`).toString();

dbConn.query(sql,(error,result)=>{
  (error
    ? console.log('Error: ',error)
    : console.log('Result ',result)
  );
});
