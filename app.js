var app = require('./app/config/server');

var rotaHome = require('./app/routes/home') (app);
var rotaHome = require('./app/routes/front') (app);
var rotaHome = require('./app/routes/back') (app);
var rotaHome = require('./app/routes/cadastro') (app);

app.listen(3000,()=>{
    console.log("Servidor Online");
});

