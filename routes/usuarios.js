const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');


const router = Router();

router.get('/', usuariosGet);
const Role = require('./../models/role');

router.post('/', [
  check('nombre', 'el nombre es Obligatorio by validator-express').not().isEmpty(),
  check('password', 'el password es Obligatorio  con 6 letras by validator-express').isLength({ min: 6 }),
  check('email', 'La estructura de email no es valido por validator-express').isEmail(),
  //check('rol','No es un rol Valido by validator-express').isIn(['ADMIN_ROL','USER_ROL']),
  check('email').custom(emailExiste),
  check('rol').custom(esRoleValido),
  validarCampos
], usuariosPost);

router.put('/:id', [
  check('id', 'No es un ID valido').isMongoId(), //valida si el id es tipo mongoId
  check('id').custom(existeUsuarioPorId), //se verifica si el id se encuentra en la db
  check('rol').custom(esRoleValido),//verifica q el rol se encuentre en la BD/ TODO VALIDAR Q NO SEA ADMIN_ROL
  check('email').custom(emailExiste),//verifica que el email es usado en otra cuenta
  validarCampos], usuariosPut);



router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete)



module.exports = router;