const Joi = require('joi');

module.exports = Joi.object({

    name: Joi.string()
        .min(3)
        .max(150)
        .required(),

    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: {
                allow: ['com', 'net', 'org', 'br']
            }
        })
        .required(),

    password: Joi.string()
        .min(6)
        .max(30)
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
        .required()
});