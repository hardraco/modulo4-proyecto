import Joi from 'joi';

export const createSchema = joi.object({
    username: Joi.string().alphanum().min(3).max(38).required(),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});