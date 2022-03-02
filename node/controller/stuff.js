var express = require ('express');
var mongoose = require('mongoose');
var Thing = require('../database/dbase');

exports.createOneThing = (req,res)=>{
const thing = new Thing({title:req.body.title,
description:req.body.description,quantity:req.body.quantity,
price:req.body.price,imageurl:req.body.imageurl
});
thing.save().then(()=>{res.status(200).json({message:"data
successfully saved!"});}).catch((error)=>{
res.status(400).json({error:error});
});
}
exports.getOneThing = (req,res)=>{
Thing.findOne(_id;req.params.id).then((thing)
=>{res.status(200).json(thing);});
};
exports.modifyOneThing=(req,res)=>{
const thing = new Thing(_id:req.params.id,
title:req.body.title,description:req.body.description,
quantity;req.body.quantity,price:req.body.price,imageurl:req.body.imageurl
);
Thing.updateOne(_id:req.params.id,thing).then(()=>{res.status(200).json
({message:"successfully updated"});
}).catch((error)=>{res.status(404).json({error;"error"});});
};
exports.getAllthings = (req,res)=>{
Thing.find().then((things)=>{res.status(200).json.(things);}).
catch((error)=>{res.status(400).json({error:"error"});});
};
