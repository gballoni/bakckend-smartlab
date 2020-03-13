var User = require('../models/users.model');
exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller 4');
};
//Adicionar um usuario à BD
exports.create = function (req, res){
  console.log('rota')
  let user = new user(
  {
    user:req.body.user,
    password: req.body.password,
    email: req.body.email,
    isAdmin: req.body.isAdmin
  });
  user.save(function (err){
    if(err){
      return next(err);
    }
    res.send('Novo usuario cadastrado');
  });
};
