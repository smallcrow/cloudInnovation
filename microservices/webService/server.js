/*jshint esnext:true*/
'use strict';
console.log("HELLO!!!");
//put all the requirements here
const express = require('express');
const path = require('path');
const fs = require('fs');

//then put all the other variables here
const app = express();
const PORT = 9200;


//Mock Interface for the Agent Registration

let RESPONSE_COUNTER = 0;
app.get('/AgentRegistration/GetData', (req, res) => {
   let from = Date.parse(req.query.from);

   let mockSessionMonitorData = path.join(__dirname, 'public', 'data', 'mockdata.json');
   fs.readFile(mockSessionMonitorData, 'utf8', (error, data) => {
         if (error) throw error;
         let mockData = JSON.parse(data);
         let mockResponse = mockData;
         res.status(200).json(mockResponse);
      });
});

app.get('/', function(req, res){
   res.sendFile( path.join(__dirname, "../../public","index.html") );
});

app.get('/AgentRegistration', (req, res) => {
   res.redirect(`http://localhost:${PORT}/#${req.originalUrl}`);
});

//serve the public directory - so webpages can access the html/css/js files
app.use(express.static('../../public'));

//start the server listening on port 3000
const server = app.listen(PORT, () => {
   console.log( `Server listening on port ${PORT}` );
});

module.exports = app;