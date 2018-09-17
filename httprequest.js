var http = require('http'); //include the built-in http module
//let rawdata = fs.readFileSync('config.json'); //asynchronously reads the entire contents of a file
//let tokenObj= JSON.parse(rawdata); //puts data into a JavaScript object called "tokenObj"


//options variable determines where to send the request
var options = {
	hostname: "www.virustotal.com",
	//port:8080,
	path: "/vtapi/v2/url/report",
	method: "POST", //change method accordingly
	headers: {
		'Content-Type': 'application/json'
	}
};

//http.request call does the actual request
var req = http.request(options, function(res) { 
	console.log('Status: ' + res.statusCode);
	console.log('Headers' + JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data', function (body) {
		console.log('Body: ' + body);

	});
});

req.on('error', function(e) {
	console.log('problem with request: ' + e.message);

});

//write data to request body
console.log( req.write(JSON.stringify( 
	{
		"apikey": "", 
		"url":"http://www.google.com"
	} 
	) ) );
//req.write('{"string": "Hello,World")');
req.en