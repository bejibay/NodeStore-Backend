var mongoose = require('mongoose');

mongoose.connect('api-url').then(()=>{
console.log('successfully connected to DB');

})
.catch((error)=>{console.log('failed connection to DB');
console.error(error);
});

var productSchema = mongoose.Schema({
title:{type:String, required:true},
description:{type:String, required:true},
quantity:{type:Number, required:true},
price:{type:Number, required:true},
imageUrl:{type:String, required:true}
});

module.exports = mongoose.model('Product' productSchema);
