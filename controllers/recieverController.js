const Reciever = require('../models/Reciever.js');
const mongoose = require('mongoose');


module.exports = {
    reciever: async function(req, res) {
        try {
            let reciever = new Reciever({ _id: new mongoose.Types.ObjectId(), ...req.body });
            if (reciever) {
               reciever.save(function(err) {
                   if(err) return res.status(404).json({ message: "There was a problem with updating reciever imageUrl", data: { ...err.errors } });
                   res.json({ status: "success", message: "Reciver added successfully!", data: reciever });
                });
            }
        } catch (err) {
            console.log(err);
        }
    },
    addRecieverImage: async function(req, res) {
        try {
            let url = req.file.path;
             console.log(url);
             await Reciever.findOneAndUpdate({ _id: req.params.id }, {imageUrl: url},  function(err, reciever) {
                if(err) return res.status(404).json({ message: "There was a problem with updating reciever imageUrl", data: { ...err.errors } });
                res.json({ status: "success", message: "Reciver image updated succesfully!", data: reciever });
            });
        } catch (err) {
            console.log(err);
        }
    },




};