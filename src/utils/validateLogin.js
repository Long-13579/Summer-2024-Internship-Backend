import joi from 'joi';

export const registerValidator = (data) => {
  const rule = joi.object({
    name: joi.string().min(6).max(225).required(),
    password: joi
      .string()
      .pattern(new RegExp('^[a-zA-Z0-9]{6,20}$'))
      .required(),
  });

  return rule.validate(data);
};