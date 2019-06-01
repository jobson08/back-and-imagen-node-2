const { Router } = require('express');
//const path = require('path');

const router = Router();

// Models
const Imagen = require('../models/Image');
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

const fs = require('fs-extra');

//ENVIA IMAGEM PARA PAGINA PRINCIPAL
router.get('/', async (req, res) =>{
    const fotos = await Imagen.find(); 
    res.render('compImagens', {fotos});
  //  console.log(fotos)
});

//ENVIAR IMAGEN PARA FORMULARIO
router.get('/imagens/add', async (req, res)=>{
    const fotos = await Imagen.find(); 
    res.render('compImage_form', {fotos});
});

//ADICIONAR IMAGEN
router.post('/imagens/add', async  (req, res) =>{
    const { title, description } = req.body;
    console.log(req.file);

   const result = await cloudinary.v2.uploader.upload(req.file.path);
   console.log(result);

   const newImagen = new Imagen({
        title,
        description,
        imageURL: result.url,
        public_id:result.public_id
        
    });
    await newImagen.save();
    await fs.unlink(req.file.path)

    res.redirect('/');
});

//EXCLUIR IMAGEN
router.get('/imagens/delete/:foto_id', async (req, res) => {
    const { foto_id } = req.params;
    const photo = await Imagen.findByIdAndRemove(foto_id);
    const result = await cloudinary.v2.uploader.destroy(photo.public_id);
    console.log(result)
    res.redirect('/');
});

module.exports = router;