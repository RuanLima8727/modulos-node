
module.exports = (app) => {

    app.get('/frontend', (req,res) =>{

        var connection = app.app.config.database()

        var query = app.app.models.conteudoModel;
        
        query.getConteudo(connection,
        function(error,results,fields){
            console.log(error,results)
            res.render('paginas/frontend',{dados:results})
        }); 

        

        
    });
}