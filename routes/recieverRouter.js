const express = require('express');
const router = express.Router();

const multerImage = require('../libs/multer.js');
const recieverController = require('../controllers/recieverController.js');
const multerImageS3 = require('../libs/multerForAWS.js'); 


router.put('/reciever', recieverController.reciever); 
//router.put('/reciever/:id',multerImage.single('imageUrl'), recieverController.addRecieverImage);

router.put('/reciever/:id',multerImageS3.single('imageUrl'), recieverController.addRecieverImageS3);


module.exports = router;