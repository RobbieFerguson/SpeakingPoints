'use strict';
var router = require('express').Router();
module.exports = router;
var iod = require('iod-node')
var client = new iod.IODClient('http://api.idolondemand.com', '3ada2b11-01fe-4e03-a23e-e0c9747013e7')
var fs = require('fs');


router.get('/', function(req, res, next) {
	console.log("Hitting analytics route");
	client.call('recognizespeech', function(err, resData, body) {
			// console.log("data", resData); 
			console.log("body",  body);
			res.status(200).send(JSON.stringify(body));
	},data,true); 

	
})


router.post('/voiceToText', function(req, res, next) {


})