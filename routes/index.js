
module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('index', { title: 'Express' }); 
	});
	app.get('/goods', function (req, res) {
		res.send('Welcome to goods pages!');
	});
};
