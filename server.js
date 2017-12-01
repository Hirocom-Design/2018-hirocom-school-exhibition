let express = require('express');
let fallback = require('express-history-api-fallback');

let app = express();
const root = `${__dirname}/docs`
app.use(express.static(root))
app.use(fallback('index.html', {root}));

let port = 3000;
app.listen(port);
