const {Router}=require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
const router = Router();



// router.get('/', (req, res) => {
//   res.json({
//     msg:"'get api gato (=';'=)'"
//   });
// })
router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/', usuariosPut);

router.patch('/',usuariosPatch);

router.delete('/', usuariosDelete)



module.exports=router;