'use strict';
var router = require('express').Router();
module.exports = router;
var iod = require('iod-node')
var client = new iod.IODClient('http://api.idolondemand.com', '3ada2b11-01fe-4e03-a23e-e0c9747013e7')
var fs = require('fs');
var path = require('path'); 


router.get('/', function(req, res, next) {
	console.log("Hitting analytics route");
	var path = __dirname + '/test.wav'; 
	console.log("path", path); 
	var file = fs.readFileSync(path);
	var data = {'file':path};

	client.call('recognizespeech',data,function(err,resp,body){
		console.log("audio file sent");
		console.log(err);
		console.log(resp); 
		console.log(body);
		res.status(200).send("hitting route"); 
	});
})


router.post('/voiceToText', function(req, res, next) {


})