

const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El campo Nombre es requerido']
  },
  email: {
    type: String,
    require: [true, 'El campo Correo es requerido'],
    uniqued: true //mongo no permitira correos duplicados
    //TODO: MOSTRAR MENSAJE COMO EL REQUIRE [true,'el correo ya existes']
  },
  password: {
    type: String,
    required: [true, 'El campo PASSWORD es requerido']
  },
  img: {//para la imagen se manera un url
    type: String,
  },
  rol: {
    type: String,
    required: true,
    emun: ['ADMIN_ROLE', 'USER_ROLE']
    //EL ADMIN ROLE ES DE SEGUIMIENTO Y CONTROL QUE DE ALTAS Y BAJAS SERIA OTRO ROL
    //EL USER ROLE SERIA EL OPERADOR O INV.
  },
  estado: {
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  }
  // NOTA: SE DEBE EVITAR QUE ESTOS MENSAJES APARESCAN,
  //PARA EL DEV INICIAL ES OK

});

module.exports = model('Usuario', UsuarioSchema);