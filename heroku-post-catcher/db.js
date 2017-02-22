'use strict';
const pg = require('pg');
// add , _ip, _headers
//
const insertQuery = "INSERT INTO post_data(_route, _data, _ip, _headers, _date) VALUES($1, $2, $3, $4, CURRENT_TIMESTAMP)";

exports.put = function(request, response){
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {    
    console.log(request.body);
    const ip = 
    client.query(insertQuery,[request.path, JSON.stringify(request.body), request.ip, JSON.stringify(request.headers)] , function(err, result) {
      done();
      //return err ? err : 'null';
      if (err){
        console.log(err);
      }
    });
  });   
}

exports.get = function(request, response){  
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM post_data', function(err, result) {
      done();
       if (err)
        { console.error(err);
     }
       else {
            //response.render('pages/db', {results: result.rows} ); 
            //res.set('Content-Type', 'text/plain');
            response.send(JSON.stringify({results: result.rows}));
        }
     });
  });
}