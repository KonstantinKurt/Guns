const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect(process.env.DB_CONN_EC2, { useNewUrlParser: true }, function(err) {
        if(err){
        	console.log(err);
        	return;
        } 
        console.log('Database connected by Atlas succesfully!');
    });
};