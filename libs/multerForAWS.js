const multer = require('multer');

let storage = multer.memoryStorage();
module.exports = multer({storage: storage});