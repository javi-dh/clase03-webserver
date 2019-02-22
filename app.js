var http = require('http');
var fs = require('fs');
var path = require('path');

var users = [
	{
		name: 'Caro',
		lastName: 'Saenz'
	},
	{
		name: 'Edu',
		lastName: 'Lara'
	}
];

// Creamos nuestro servidor
http.createServer(function (req, res) {
	// Route system
	switch (req.url) {
		case '/':
			res.writeHead(200, { 'Content-Type': 'text/html' });
			var html = fs.readFileSync(path.join(__dirname, '/pages/index.html'), 'utf-8');
			html = html.replace('{userName}', users[0].name);
			html = html.replace('{lastName}', users[0].lastName);
			res.end(html);
			break;
		case '/about':
			res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			var about = fs.readFileSync(path.join(__dirname, '/pages/about.html'));
			res.end(about);
			break;
		default:
			res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
			res.end('<h1>No existe la página</h1>');
	}
}).listen(8080, 'localhost', function () {
	console.log('Server running in 8080 port');
});
