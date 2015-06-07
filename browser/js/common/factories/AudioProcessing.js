'use strict';
app.factory('AudioProcessing', function ($http) {
	return {
		postAudio: function(blob) {
			console.log('blob',blob)
			$http.post('/api/analytics/',{audio:blob}).then(function(res){
			},function(err){
				console.log('error',err); 
			})
		}
	}
}); 