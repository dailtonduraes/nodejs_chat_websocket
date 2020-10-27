const {validarLogin} = require('../shared/validator');

module.exports = function (application) {
    application.post('/chat', validarLogin(),  function (req, resp) {
        application.app.controllers.chat.iniciaChat(application, req, resp);
    })
    application.get('/chat', function (req, resp) {
        application.app.controllers.chat.iniciaChat(application, req, resp);
    })
}