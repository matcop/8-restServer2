const { response, request } = require('express');
const bcryptjs=require('bcryptjs');

const Usuario=require('../models/usuario');//por convension esta la


//U mayuscula, nos hara dar decuenta que podemos crear instancias

const usuariosGet = (req=request, res = response) => {
  //const query=req.query;
  const {q,nombre='desconocido',apikey,page=1,limit}=req.query;
  res.json({
    msg: 'get Apu Controlador',
    q,
    nombre,
    apikey,
    page,
    limit
  });
}

const usuariosPost = async(req, res = response) => {
//try {
  

  //const {google,...resto}=req.body;//si deseamos mandar muchos mas datos.
  //const usuario=new Usuario(resto);
  const {nombre,email,password, rol}=req.body;
 
  //esos son los campos para la creacion de usuarios, demas datos en el proceso.
  const usuario=new Usuario({nombre, email,password,rol}); 

  //verificar si el correo existe
 

  //encriptar el password
  const salt=bcryptjs.genSaltSync();
  usuario.password=bcryptjs.hashSync(password,salt);

  //guardar en la BD


  await usuario.save();
  res.json({
    //msg: 'POST api gato',
    usuario

  })
// } catch (error) {
//   res.status(400).json(error);
// }

 
  
};

const usuariosPut = (req, res = response) => {

  const {id}=req.params;
  res.json({
    msg: 'PUT api gato',
    id
  });
}


const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'Patch api Gato'
  });
}

const usuariosDelete=(req,res=response)=>{
  res.json({
    msg:'Delete api Gato'
  })
}

module.exports = {
  usuariosGet, usuariosPost,
  usuariosPut, usuariosPatch,
  usuariosDelete
};