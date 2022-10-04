const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(10);
const price = Joi.number().integer().min(10);

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
});

const updateProductSchema = Joi.object({
    name: name,
    price: price,
});

const getProductSchema = Joi.object({
    id: id.required(),
    price: price,
});

modulo.exports = { createProductSchema, updateProductSchema, getProductSchema }