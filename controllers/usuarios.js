const { response } = require('express');

const usuariosGet = (req, res = response) => {
  res.json({
    msg: 'get Apu Controlador'
  });
}

const usuariosPost = (req, res = response) => {
  const {nombre,edad}=req.body;
  //const body=req.body;
  res.json({
    msg: 'POST api gato',
    nombre,edad

  })
 
  
}

const usuariosPut = (req, res = response) => {
  res.json({
    msg: 'PUT api gato'
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