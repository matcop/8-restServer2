const Role = require('./../models/role');
//const { response, request } = require('express');
const Usuario=require('../models/usuario');

const esRoleValido = async (rol = '') => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El Rol ${rol} no esta registrado en la Base de Datos`)
  }
}

const emailExiste= async(email='')=>{

//const email=req.body;
  const existeEmail=await Usuario.findOne({email});
  if(existeEmail){
    throw new Error(` El email ${email} ya fue usado por otro usuario`)
  }

}


const existeUsuarioPorId= async(id='')=>{

  //const email=req.body;
    const existeUsuario=await Usuario.findById(id);
    if(!existeUsuario){
      throw new Error(` No existe el usuario con el id->  ${id} `)
    }
  
  }

module.exports = {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId
}