const { body, validationResult } = require("express-validator");

const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        break;
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return res.status(422).json({ errors: errors.array() });
  };
};

const loginValidator = [
  body("email").trim().isEmail().withMessage("Email is required"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password should contain at least 6 characters"),
];

const signupValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("profilePic").notEmpty().withMessage("Profile Picture is required"),
  ...loginValidator,
];

const chatCompletionValidator = [
  body("message").notEmpty().withMessage("Message is required"),
];

module.exports = {
  validate,
  loginValidator,
  signupValidator,
  chatCompletionValidator,
};
