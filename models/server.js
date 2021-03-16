const express = require('express')
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
  //directorio publico
  this.app.use(express.static('public'));
}

  routes() {
    this.app.get('/api', (req, res) => {
      res.json({
        msg:'get api gato'
      });
    })


    this.app.put('/api', (req, res) => {
      res.json({
        msg:'PUT api gato'
      });
    })


    this.app.post('/api', (req, res) => {
      res.json({
        msg:'POST api gato'
      });
    })


    this.app.delete('/api', (req, res) => {
      res.json({
        msg:'DELETE api gato'
      });
    })


  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('servidor corriendo en puerto', this.port);
    });
  }
}

module.exports = Server;