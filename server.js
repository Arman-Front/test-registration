let express = require('express');
let app = express();

app.post('/registration', function (req, res) {
    res.json({
        status: "ok"
    });
});

app.get('/info', function (req, res) {
    res.json({
        status: "ok",
        text: "Test text"
    });
});

app.listen(3000);