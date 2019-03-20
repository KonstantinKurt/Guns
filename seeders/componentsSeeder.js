const mongoose = require("mongoose");
const Component = require('../models/Component');
const fs = require("fs");
mongoose.connect(
    `mongodb://localhost:27017/Guns`, {
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

// let components;
// fs.readFile("components.json", "utf8", function(err, data) {
//     if (err) {
//         console.error(err);
//     }
    
//     let parsedData = JSON.parse(data);
//     console.log(typeof(parsedData));
//     console.log(components);

// });

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
  console.log("Db updated");
}