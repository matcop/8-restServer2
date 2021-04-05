const {Router}=require('express');
const { check } = require('express-validator');

const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
const router = Router();



// router.get('/', (req, res) => {
//   res.json({
//     msg:"'get api gato (=';'=)'"
//   });
// })
router.get('/', usuariosGet);

router.post('/', [
  check('email','el email no es valido').isEmail(),
], usuariosPost);

router.put('/:id', usuariosPut);

router.patch('/',usuariosPatch);

router.delete('/', usuariosDelete)



module.exports=router;