axios.get('https://api.github.com/users/pedronet5')
	.then(function(response) {
		console.log(response);
	})
	.catch(function(error) {
		console.warn(error);
	});






