//include express
const express = require('express');

// static file server
const serveStatic = require('serve-static');

//create an express application
const app = express();

//define a route on `/hello/world`
app.get('/api/todos,(request, response) => {
    response.header('Content-Type', 'application/json');
    response.send({greeting: 'hello, wrold'});
});


app.use('/', serveStatic( 'public', {
	'index': [ 'index.html' ]
}));


//have the application listen on a specific port
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});