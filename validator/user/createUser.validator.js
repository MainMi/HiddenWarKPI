const Joi = require('joi');
const { regexEnum } = require('../../constant');

module.exports = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(2)
        .max(50)
        .required(),
    email: Joi.string().regex(regexEnum.REGEX_EMAIL).required(),
    password: Joi.string().regex(regexEnum.REGEX_PASSWORD).required(),
    group: Joi.string().regex(regexEnum.REGEX_GROUP),
    age: Joi.number()
        .integer()
        .min(14)
        .max(99)
        .default(18)
});
