var express = require ('express');
var mongoose = require('mongoose');
var ProductModel = require('../database/model');

exports.createAThing = (req,res)=>{
const thing = new Thing({Title:req.body.title,
name:req.body.name,description:req.body.description,
});
thing.save().then(()=>{console.log("data successfully
Saved!");}).catch((error)=>{
console.log("data failed ");console.error(error);
});


}



