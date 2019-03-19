const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const componentSchema = new Schema({
    _id: {
       type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: String,
        default: "",
    },
    article: {
        type: String,
        default: "",
    },
    parent: {
        type: String,
        default: "",
    },
    category: {
        type: String,
        default: "",
    },
    price: {
        type: Number,
        default: 0,
    },
    base_part: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
        default: "",
    },
    imageDetails: {
        width: {
            type: Number,
            default: 0,
        },
        height: {
            type: Number,
            default: 0,
        },
    },

}, { versionKey: false });

module.exports = mongoose.model('Component', componentSchema);



// {
//     'id': 4,
//     'article': '123', // артикул товара
//     'parent': '123123', // тут артикул родителя
//     'name': 'PTS_MVG_Tan',
//     'price': 10,
//     'base_part': false,
//     'category': 'Grip',
//     'attachments': null,
//     'image': '/images/grip/PTS_MVG_Tan_Left.png',
//     'imageDetails': {
//         'width': 229,
//         'height': 441
//     }
// },