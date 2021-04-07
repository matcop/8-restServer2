const {Router}=require('express');
const { check } = require('express-validator');

const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();



// router.get('/', (req, res) => {
//   res.json({
//     msg:"'get api gato (=';'=)'"
//   });
// })
router.get('/', usuariosGet);

router.post('/', [
  check('nombre','el nombre es Obligatorio by validator-express').not().isEmpty(),
  check('password','el password es Obligatorio  con 6 letras by validator-express').isLength({min:6}),
  check('email','el email no es valido por validator-express').isEmail(),
  check('rol','No es un rol Valido by validator-express').isIn(['ADMIN_ROL','USER_ROL']),
  validarCampos
], usuariosPost);

router.put('/:id', usuariosPut);

router.patch('/',usuariosPatch);

router.delete('/', usuariosDelete)



module.exports=router;