const { response, request } = require('express');

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

const usuariosPost = (req, res = response) => {
  const {nombre,edad}=req.body;
  //const body=req.body;
  res.json({
    msg: 'POST api gato',
    nombre,edad

  })
 
  
}

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