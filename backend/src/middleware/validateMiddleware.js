// ============================
// MIDDLEWARE VALIDACIÓN
// ============================

const validateProduct = (schema) =>

  async(req,res,next)=>{

    try{

      // Validar body request
      await schema.parseAsync(req.body);

      // Continuar middleware
      next();

    }catch(error){

      return res.status(400).json({

        message:"Datos inválidos.",

        errors:error.issues

      });
    }
  };


// Exportar middleware
export default validateProduct;