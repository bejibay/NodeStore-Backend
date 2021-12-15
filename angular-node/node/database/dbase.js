var mongoose = require('mongoose');
mongoose.connect('api-url');
var productSchema = mongoose.Schema({
title:{type:String, required:true},
description:{type:String, required:true},
quantity:{type:Number, required:true},
price:{type:Number, required:true},
imageUrl:{type:String, required:true}
});

module.export = schema;
