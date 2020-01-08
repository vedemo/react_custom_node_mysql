'user strict';

var mysql = require('mysql');

//local mysql db connection
/*var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'jobthbid'
});*/

var connection  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'jobthbid'
  });

  const SimpleNodeLogger = require('simple-node-logger'),
			opts = {
				logFilePath:'./log/dispatch.log',
				timestampFormat:'YYYY-MM-DD HH:mm:ss'
			},
			logger = SimpleNodeLogger.createSimpleLogger( opts );
          
connection.getConnection(function(err,connection) {
    if (err) {
        //console.error('error connecting: ' + err.stack);
        logger.info('request comming to db in error  :  ',connection, ' Printed at ', new Date().toJSON());
        res.json({"code" : 100, "status" : "Error in connection database"});
         
        return;
      }
      console.log('connected as id ' + connection.threadId);
});

module.exports = connection;