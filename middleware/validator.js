const { check, validationResult } = require("express-validator");

exports.signupValidator = [
  check("username").not().isEmpty().trim().withMessage("All fields Required"),

  check("email").isEmail().normalizeEmail().withMessage("Ivalid Email"),

  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be 8 character long"),

  check("phoneNo")
    .isLength({ min: 10, max: 10 })
    .isMobilePhone()
    .withMessage("Ivalid Mobile Number"),
];

exports.signinValidator = [
  check("email").isEmail().normalizeEmail().withMessage("Ivalid Email"),

  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be 8 character long"),
];

exports.validatorResult = (req, res, next) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();

  if (hasErrors) {
    console.log("hasErrors", hasErrors);
    console.log("result", result);
  }
  next();
};
