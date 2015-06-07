'use strict';
app.config(function($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'js/home/home.html',
		controller: 'HomeController'
	});
});

app.controller('HomeController', function($scope, $window, AudioProcessing) {
	// console.log(AudioProcessing);

	$scope.__log = function (e, data) {
		log.innerHTML += "\n" + e + " " + (data || '');
	}
	$scope.audio_context;
	$scope.recorder;
	$scope.input;


	$scope.startUserMedia = function (stream) {
		$scope.input = $scope.audio_context.createMediaStreamSource(stream);
		$scope.__log('Media stream created.');
		// Uncomment if you want the audio to feedback directly
		//input.connect($scope.audio_context.destination);
		//__log('Input connected to audio context destination.');

		$scope.recorder = new Recorder ($scope.input);
		$scope.__log('Recorder initialised.');
	}

	$scope.startRecording = function () {
		console.log($scope.recorder);
		$scope.recorder && e.recorder.record();
		$scope.__log('Recording...');
	}

	$scope.stopRecording = function () {
		console.log('stopped')
		$scope.recorder && $scope.recorder.stop();
		$scope.__log('Stopped recording.');

		// create WAV download link using audio data blob$scop
		$scope.createDownloadLink();
		// console.log($scope.recorder)
		$scope.recorder.clear();
	}

	$scope.createDownloadLink = function () {
		$scope.recorder && $scope.recorder.exportWAV(function(blob) {
			
			// console.log(blob);
			var url = URL.createObjectURL(blob);
			AudioProcessing.postAudio(url); 
			var li = document.createElement('li');
			var au = document.createElement('audio');
			var hf = document.createElement('a');
			au.controls = true;
			au.src = url;
			hf.href = url;
			hf.download = new Date().toISOString() + '.wav';
			hf.innerHTML = hf.download;
			li.appendChild(au);
			li.appendChild(hf);
			recordingslist.appendChild(li);
		});
	}
	$scope.initialise = function () {
		try {
			console.log('window on loading')
			// webkit shim
			$window.AudioContext = $window.AudioContext || $window.webkitAudioContext;
			$window.navigator.getUserMedia = $window.navigator.getUserMedia || $window.navigator.webkitGetUserMedia;
			$window.URL = $window.URL || $window.webkitURL;

			$scope.audio_context = new AudioContext;
			$scope.__log('Audio context set up.');
			$scope.__log('$window.navigator.getUserMedia ' + ($window.navigator.getUserMedia ? 'available.' : 'not present!'));
		} catch (e) {
			alert(e);
		}

		$window.navigator.getUserMedia({
			audio: true
		}, $scope.startUserMedia, function(e) {
			$scope.__log('No live audio input: ' + e);
		});
	}; 
	$scope.initialise();
})