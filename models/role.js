//este archivo es para poder consumir los 
//datos desde la base de datos mongodb.


const {Schema,model}=require('mongoose');

const RoleSchema=({
 rol:{
     type:String,
     required:[true,'El rol es Obligatorio']
 }
});


module.exports=model('Role',RoleSchema);