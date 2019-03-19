const express = require('express');
const router = express.Router();

//const multerImage = require('../libs/multer');
const multerImage = require('../libs/multerForAWS.js');
const componentController = require('../controllers/componentController.js'); 

router.get('/component/:id', componentController.getComponent); 
router.put('/component', componentController.addComponent); 
router.put('/component/:id',multerImage.single('image'), componentController.addComponentImage);

router.get('/component', componentController.sendComponents);
router.get('/components', componentController.sendComponents1);


module.exports = router;



