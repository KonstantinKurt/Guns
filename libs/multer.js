const multer = require('multer');
//const maxSize = 1 * 1024 * 1024;
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, 'images/');
  },
  filename: function(req, file, callback) {
    callback(null,file.originalname.toString());
  },

});
module.exports = multer({ storage: storage});