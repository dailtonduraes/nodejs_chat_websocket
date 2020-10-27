const { check, validationResult } = require('express-validator');

module.exports.validarLogin = function(){
    return [
        check('apelido').notEmpty().withMessage('O Nome ou apelido é obrigatorio'),
        check('apelido').isLength({min:3}).withMessage('O nome ou apelido deve conter no minimo 3 caracteres')
        
    ]
}