import Joi from "joi-browser";

// Schema for register
const registerSchema = {
  username: Joi.string().alphanum().min(1).max(30).required().label("Username"),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required()
    .label("Email"),
  password: Joi.string().min(3).max(32).required().label("Password"),
  repeatedPassword: Joi.ref("password"),
};

// Schema for login
const loginSchema = {
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .label("Email"),
  password: Joi.string().min(3).max(32).required().label("Password"),
};

// Validate the registeration input with the regiseration schema
export function registerValidate(details) {
  try {
    return Joi.validate(details, registerSchema, { abortEarly: false });
  } catch (error) {
    console.log(error.message);
  }
}

// Validate the login inputs with the login schema
export function loginValidate(details) {
  try {
    return Joi.validate(details, loginSchema, { abortEarly: false });
  } catch (error) {
    console.log(error.message);
  }
}
