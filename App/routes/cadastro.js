module.exports = (app) =>{

    app.get('/cadastro', (req,res)=>{
        res.render('paginas/cadastro')
    });




    app.post('/cadastro/salvar',(req,res)=>{
        
        var conteudo = req.body;
        var connection = app.app.config.database();
        var conteudoModel = app.app.models.conteudoModel;

        conteudoModel.salvarConteudo(conteudo,connection,(error,results)=>{})

        conteudoModel.getConteudo(connection,(error,results,fields)=>{
            console.log(error,results)
            res.render('home/index',{dados:results})
        })

    });
}