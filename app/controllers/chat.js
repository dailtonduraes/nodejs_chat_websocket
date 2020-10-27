const {check, validationResult} = require('express-validator');

module.exports.iniciaChat = function (application, req, resp) {

    //
    dadosForm = req.body;

    //validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        resp.render('index', {
            'validacao': errors.errors,
            'apelido': dadosForm
        });
        console.log(errors);
        return;
    }

    //
    application.get('io').emit('msgToClient', {
        apelido: dadosForm.apelido,
        mensagem: 'Acabou de entrar no chat'
    });

    resp.render('chat', {dadosForm:dadosForm});
}