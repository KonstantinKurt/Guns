const mongoose = require("mongoose");
const Component = require('../models/Component');
mongoose.connect(
  `mongodb://localhost:27017/guns`,
  {
    useNewUrlParser: true
  },
  function(err) {
    if (err) throw err;
    console.log("Successfully connected");
  }
);
let components = [
  new Component({
     _id: new mongoose.Types.ObjectId(),
     article: "123", 
     parent: "123123", 
     name: "PTS_MVG_Tan",
     price: 10,
     base_part: false,
     category: "Grip",
     imageDetails: {
        width: 229,
        height: 441
    }
  }),
];
let done = 0;
for (let i = 0; i < components.length; i++) {
  components[i].save(function(err, result) {
    done++;
    if (done === components.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
  console.log("Ok");
}