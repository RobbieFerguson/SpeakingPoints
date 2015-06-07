'use strict';
var router = require('express').Router();
module.exports = router;
var iod = require('iod-node')
	var client = new iod.IODClient('http://api.idolondemand.com', '3ada2b11-01fe-4e03-a23e-e0c9747013e7')
var fs = require('fs');
var path = require('path');
// var http = require('http');
var Promise = require('bluebird'); 
var needle = require('needle');
Promise.promisifyAll(needle);

// router.get('/', function(req, res, next) {
// 	console.log("Hittiang analytics route");
// 	var path = __dirname + '/test.wav';
// 	console.log("path", path);
// 	// var file = fs.readFileSync(path);
// 	var data = {
// 		'file': path
// 	};

// 	client.call('recognizespeech', data, function(err, resp, body) {
// 		console.log("audio file sent");
// 		console.log(err);
// 		console.log(resp);
// 		console.log(body);
// 		res.status(200).send("hitting route");
// 	});
// })

router.post('/', function(req, res, next) {
	console.log('Routing your request straight to HP\'s speech-to-text service, sir.');
	fs.readFile(req.body.audio,function(err,data){
		fs.writeFile('./audioFile.wav',data,function(err){
			
		})
	})
	fs.writeFile('./audioFile.wav', req.body.audio, function(err) {
		if (err) throw 'err writing file' + err;
		console.log('Audio file successfully written, sir.');
	})
	// var dataObj = {
	// 	'apikey':'3ada2b11-01fe-4e03-a23e-e0c9747013e7',
	// 	file:{'file':'./audioFile.wav','content_type':'multipart/form-data'} 
	// };
	var dataObj = {
		file : './audioFile.wav'
	}
	console.log(dataObj.file)
	// needle.postAsync('http://api.idolondemand.com/1/api/async/recognizespeech/v1', dataObj, {
	// 	open_timeout: 0,
	// 	multipart: true
	// }).then(function(resp) {
	// 	console.log('Your response is located at : https://api.idolondemand.com/1/job/result/' + resp[1].jobID + '?apikey='+ '3ada2b11-01fe-4e03-a23e-e0c9747013e7')
	// 	res.status(200).send("Response from server");
	// })
	
	// client.call('recognizespeech', function(err, resp, body) {
	// 	console.log("body", resp); 

	// 	console.log('https://api.idolondemand.com/1/job/result/' + body.data.jobID + '?apikey=' + '3ada2b11-01fe-4e03-a23e-e0c9747013e7')
	// 	res.status(200).send("Can you read it from a book???");
	// }, dataObj, true)
});
// 'use strict';
// var router = require('express').Router();
// module.exports = router;
// var iod = require('iod-node')
// var client = new iod.IODClient('http://api.idolondemand.com', '3ada2b11-01fe-4e03-a23e-e0c9747013e7')
// var fs = require('fs');
// var path = require('path');
// // var needle = require('needle'); 
// var Promise = require("bluebird"); 
// // Promise.promisifyAll(needle);
// // Promise.promisifyAll(fs); 


// router.get('/', function(req, res, next) {
// 	console.log("Hitting analytics route");
// 	var path = __dirname + '/test.wav';
// 	console.log("path", path);
// 	// var file = fs.readFileSync(path);
// 	var data = {
// 		'file': path
// 	};

// 	client.call('recognizespeech', data, function(err, resp, body) {
// 		console.log("audio file sent");
// 		console.log(err);
// 		console.log(resp);
// 		console.log(body);
// 		res.status(200).send("hitting route");
// 	});
// })

// router.post('/', function(req, res, next) {
// 	console.log(req.body);

// 	fs.writeFile('./test.wav', req.body.audio, function(err) {
// 		if (err) throw 'err writing file' + err;
// 		console.log('Audio file successfully written, sir.');
// 		var data = {
// 			apikey:'3ada2b11-01fe-4e03-a23e-e0c9747013e7',
// 			file:{'file':'./test.wav','content-type':'multipart/form-data'}
// 		}
// 		// needle.postAsync('http://api.idolondemand.com/1/api/async/recognizespeech/v1',data,{open_timeout:0,multipart:true}).then(function(resp){
// 		// 	res.status(200).send("asdfkjglkjasdgh"); 
// 		// })
// 	})
// 	// var dataObj = {
// 	// 		'file': './audioFile.wav'
// 	// 	};
// 	// 	client.call('recognizespeech', function(err, resp, body) {
// 	// 		// console.log("body", body); 
// 	// 		console.log('https://api.idolondemand.com/1/job/result/' + body.data.jobID + '?apikey=' + '3ada2b11-01fe-4e03-a23e-e0c9747013e7')
// 	// 		res.status(200).send("Can you read it from a book???");
// 	// 	}, dataObj, true)
// })