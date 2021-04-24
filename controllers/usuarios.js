const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');//por convension esta la
const usuario = require('../models/usuario');


//U mayuscula, nos hara dar decuenta que podemos crear instancias

const usuariosGet = async (req = request, res = response) => {
  //const query=req.query;
  //const {q,nombre='desconocido',apikey,page=1,limit}=req.query;
  const { limite = 3, desde = 0 } = req.query;
  const query={estado:true};
  const usuarios = await Usuario.find(query)
    .skip(Number(desde))
    .limit(Number(limite));

  const total = await Usuario.countDocuments(query);

  res.json({
    total,
    usuarios
    
  });
}

const usuariosPost = async (req, res = response) => {
  //try {


  //const {google,...resto}=req.body;//si deseamos mandar muchos mas datos.
  //const usuario=new Usuario(resto);
  const { nombre, email, password, rol } = req.body;

  //esos son los campos para la creacion de usuarios, demas datos en el proceso.
  const usuario = new Usuario({ nombre, email, password, rol });

  //verificar si el correo existe


  //encriptar el password
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  await usuario.save();
  res.json({
    //msg: 'POST api gato',
    usuario

  })
  // } catch (error) {
  //   res.status(400).json(error);
  // }



};

const usuariosPut = async (req, res = response) => {
  const { id } = req.params;

  const { _id, password, google, email, ...resto } = req.body;
  //TODO VALIDAR CONTRA BASE DE DATOS.
  if (password) {
    //encriptar la contrasenia para poder actualizar
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);
  res.json(usuario);
}


const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'Patch api Gato'
  });
}

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'Delete api Gato'
  })
}

module.exports = {
  usuariosGet, usuariosPost,
  usuariosPut, usuariosPatch,
  usuariosDelete
};