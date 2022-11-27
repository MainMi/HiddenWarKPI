const Joi = require('joi');
const { regexEnum } = require('../../constant');

module.exports = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
    email: Joi.string().regex(regexEnum.REGEX_EMAIL).required(),
    password: Joi.string().regex(regexEnum.REGEX_PASSWORD).required(),
    group: Joi.string().regex(regexEnum.REGEX_GROUP)
});
