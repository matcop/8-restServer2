const express = require('express');
const cors=require('cors');
const router = require('../routes/usuarios');
class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    //MIDDLEWARES
this.middlewares();

    //rutas de mi app
    this.routes();
  }

middlewares(){

  //CORS
  this.app.use(cors());

  //lectura y parseo del body
  this.app.use(express.json());

  //directorio publico
  this.app.use(express.static('public'));
}

  routes() {

    this.app.use('/api/usuarios',require('../routes/usuarios'));


  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('servidor corriendo en puerto', this.port);
    });
  }
}

module.exports = Server;