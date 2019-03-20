const mongoose = require("mongoose");
const Reciever = require('../models/Reciever.js');
mongoose.connect(
    `mongodb://localhost:27017/Guns`, {
        useNewUrlParser: true
    },
    function(err) {
        if (err) throw err;
        console.log("Successfully connected");
    }
);
let recievers = [
    new Reciever({
        _id: new mongoose.Types.ObjectId(),
        name: "Reciver",
        price: 1337,
        imageUrl: " ",
        imageSize: {
            width: 1688,
            height: 541,
            scale: 2
        },
        attachments: {
            tripod: {
                top: 25.3,
                left: 1
            },
            grip: {
                top: 25,
                left: 37.4

            },
            suppressor: {
                top: 4.7,
                left: -18

            },
            stock: {
                top: 9.9,
                left: 97.4

            },
            scope: {
                top: -29,
                left: 67

            },
            laser: {
                top: -29,
                left: 20.5

            }
        }
    }),
    new Reciever({
        _id: new mongoose.Types.ObjectId(),
        name: "Reciver2",
        price: 1337,
        imageUrl: " ",
        imageSize: {
            width: 1688,
            height: 541,
            scale: 2
        },
        attachments: {
            tripod: {
                top: 25.3,
                left: 1
            },
            grip: {
                top: 25,
                left: 37.4

            },
            suppressor: {
                top: 4.7,
                left: -18

            },
            stock: {
                top: 9.9,
                left: 97.4

            },
            scope: {
                top: -29,
                left: 67

            },
            laser: {
                top: -29,
                left: 20.5

            }
        }
    }),
];
let done = 0;
for (let i = 0; i < recievers.length; i++) {
    recievers[i].save(function(err, result) {
        done++;
        if (done === recievers.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
    console.log("Db updated");
}
