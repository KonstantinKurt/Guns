const Component = require('../models/Component.js');
const Reciever = require('../models/Reciever.js');
const mongoose = require('mongoose');


module.exports = {
    // addComponent: async function(req, res) {
    //     try {
    //         let component = new Component({ _id: new mongoose.Types.ObjectId(), ...req.body });
    //         if (component) {
    //             component.save(function(err) {
    //                 err && console.log(err);//res.status(404).json({ message: "There was a problem with saving reciever to DB", data: { ...err.errors } });
    //                 res.json({ status: "success", message: "Component added successfully!", data: component });
    //             });
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // },
    // addComponentImage: async function(req, res) {
 //     try {
 //         const url = req.file.path;
 //         console.log(url);
 //        await Component.findOneAndUpdate({ _id: req.params.id }, { image: url }, function(err, component) {
 //             err && res.status(404).json({ message: "There was a problem with updating component image", data: { ...err.errors } });
 //             res.json({ status: "success", message: "Component image updated succesfully!", data: component });
 //         });
 //     } catch (err) {
 //         console.log(err);
 //     }
 // },
    addComponent: function(req, res) {
        const component = new Component({ _id: new mongoose.Types.ObjectId(), ...req.body });
        component.save()
            .then(component => {
                console.log(component);
                res.status(200).json(component);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                   errors: err,
                });
            })
    },
    addComponentImage: function(req, res) {
        const url = req.file.path;
        Component.update({ _id: req.params.id }, { image: url })
            .exec()
            .then(component => {
                console.log(component);
                res.status(200).json(component.image);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                   errors: err,
                });
            })
    },
    getComponent: function(req, res) {
        Component.find({ _id: req.params.id })
            .exec()
            .then(component => {
                console.log(component);
                res.status(200).json(component);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                   errors: err,
                });
            })
    },





    sendComponents: async function(req, res) {
        try {
            let response;
            await Reciever.findOne({ name: "Reciver" }, function(err, reciever) {
                err && res.status(404).json({ message: "There was a problem get reciever from DB", data: { ...err.errors } });
                response = reciever;
                console.log(response);
            });
            Component.find({}, function(err, components) {
                err && res.status(404).json({ message: "There was a problem get components from DB", data: { ...err.errors } });
                response += components;
                res.json({ status: "success", data: response });
                console.log(response);
            });
        } catch (err) {
            console.log(err);
        }
    },
    sendComponents1: async function(req, res) {
        try {
            let response;
            await Reciever.findOne({ name: "Reciver2" }, function(err, reciever) {
                err && res.status(404).json({ message: "There was a problem get reciever from DB", data: { ...err.errors } });
                response = reciever;
                console.log(response);
            });
            Component.find({}, function(err, components) {
                err && res.status(404).json({ message: "There was a problem get components from DB", data: { ...err.errors } });
                response += components;
                res.json({ status: "success", data: response });
                console.log(response);
            });
        } catch (err) {
            console.log(err);
        }
    },

};