module.exports.formulario_add_noticia = function(application, req, res) {
    res.render('admin/formulario_add_noticia', { validacao: {}, noticia: {} });
}

module.exports.salvarNoticia = function(application, req, res) {
    var noticia = req.body;

    req.assert('titulo', 'Título é Obrigatório').notEmpty();
    req.assert('autor', 'É necessário informar o nome do Autor').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 a 100 caracteres').len(10, 100);
    req.assert('data_noticia', 'Data é obrigatório').notEmpty();
    req.assert('noticia', 'Noticia é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render("admin/formulario_add_noticia", { validacao: erros, noticia: noticia });
        return;
    }

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result) {
        res.redirect("/noticias");
    });
}