const express = require('express');
const router = express.Router();

const multerImage = require('../libs/multer');
const recieverController = require('../controllers/recieverController.js'); 


router.put('/reciever', recieverController.reciever); 
router.put('/reciever/:id',multerImage.single('imageUrl'), recieverController.addRecieverImage);



module.exports = router;