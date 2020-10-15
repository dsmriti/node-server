// Import Node.js core module
var http = require('http');
// dummy response
var employeeDetail = {"employee":[{"name":"Aman","age":"40"},{"name":"Ashish","age":"33"},{"name":"Gaurav","age":"17"},{"name":"Harish","age":"21"},{"name":"Saurabh","age":"40"},{"name":"Vaibhav","age":"33"},{"name":"Tarun","age":"17"},{"name":"Pankaj","age":"21"}]};

var server = http.createServer(function (req, res) { 
// set response header
res.writeHead(200, {'Content-Type': 'application/json'}); 
// set response content 
res.end(JSON.stringify(employeeDetail));
})
//listen at port 5000
server.listen(5000);