const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recieverSchema = new Schema({
    _id: {
       type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: String,
        default: "recivier",
    },
    price: {
        type: Number,
        default: 0,
    },
    base_part: {
        type: Boolean,
        default: true,
    },
    imageUrl: {
        type: String,
        default: " ",
        required: true,
    },
    imageSize: {
        width: {
            type: Number,
            default: 0,
        },
        height: {
            type: Number,
            default: 0,
        },
        scale: {
            type: Number,
            default: 0,
        },

    },
    attachments: {
        tripod: {

            top: {
                type: Number,
                required: true,
            },
            left: {
                type: Number,
                required: true,
            },

        },
        grip: {
            top: {
                type: Number,
                required: true,
            },
            left: {
                type: Number,
                required: true,
            },
        },
        suppressor: {
            top: {
                type: Number,
                required: true,
            },
            left: {
                type: Number,
                required: true,
            },
        },
        stock: {
            top: {
                type: Number,
                required: true,
            },
            left: {
                type: Number,
                required: true,
            },
        },
        scope: {
            top: {
                type: Number,
                required: true,
            },
            left: {
                type: Number,
                required: true,
            },
        },
        laser: {
            top: {
                type: Number,
                required: true,
            },
            left: {
                type: Number,
                required: true,
            },
        },
    },

}, { versionKey: false, });

module.exports = mongoose.model('Reciever', recieverSchema);