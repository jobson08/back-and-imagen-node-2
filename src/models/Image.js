const {Schema, model } = require('mongoose');

const imageSchema = new Schema({
    title: String,
    description: String,
    imageURL: String,
    public_id:String,
});

module.exports = model('Imagen', imageSchema);


/*const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
    title: {type: String},
    description: {type: String},
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: { type: Number},
    created_at: {type: Date, default: Date.now()}
});

module.exports = model('Image', imageSchema);*/