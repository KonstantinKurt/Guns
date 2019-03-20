const Reciever = require('../models/Reciever.js');
const mongoose = require('mongoose');
const stream = require('stream');

const s3 = require('../libs/s3config.js');
const s3Client = s3.s3Client;
const params = s3.uploadParams;



module.exports = {
    reciever: async function(req, res) {
        try {
            let reciever = new Reciever({ _id: new mongoose.Types.ObjectId(), ...req.body });
            if (reciever) {
                reciever.save(function(err) {
                    if (err) return res.status(404).json({ message: "There was a problem with updating reciever imageUrl", data: { ...err.errors } });
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
            await Reciever.findOneAndUpdate({ _id: req.params.id }, { imageUrl: url }, function(err, reciever) {
                if (err) return res.status(404).json({ message: "There was a problem with updating reciever imageUrl", data: { ...err.errors } });
                res.json({ status: "success", message: "Reciver image updated succesfully!", data: reciever });
            });
        } catch (err) {
            console.log(err);
        }
    },
    addRecieverImageS3: function(req, res) {
        const url = `https://s3.amazonaws.com/gunstest/${req.file.originalname}`;
        console.log(url);
        params.Key = req.file.originalname;
        params.Body = req.file.buffer;
        s3Client.upload(params, (err, data) => {
            if (err) {
                return res.status(500).json({ message: "There was a problem saving reciever imageUrl on S3", data: { ...err.errors } });
            }
            //res.json({ message: 'File uploaded successfully! -> keyname = ' + req.file.originalname });
            Reciever.updateOne({ _id: req.params.id }, { imageUrl: url })
                .exec()
                .then(reciever => {
                    console.log(reciever);
                    res.status(200).json(reciever);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        errors: err,
                    });
                })
        });

    },




};