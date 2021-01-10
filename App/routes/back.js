module.exports = (app) => {
    app.get('/backend', (req,res) =>{
        res.render('paginas/backend');
    });
}