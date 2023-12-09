const express = require('express')
const app = express();
const port = 7000;

app.get('/login', function (req, res){
    res.end(`
        <h1>Hello ${req.query.username}</h1>
        <div>You are logged in</div>
        `
    );
});
app.use('/', express.static(__dirname));
app.listen(port, function () {
    console.log('Server started on port:' + port + '!');
});