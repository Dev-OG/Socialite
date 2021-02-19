module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "This username is incorrect";

  if (err.message.includes("pseudo") && err.code == 11000)
    errors.email = "This username is already use.";

  if (err.message.includes("email")) errors.email = "This email is invalid.";

  if (err.message.includes("email") && err.code == 11000)
    errors.email = "This email is already use.";

  if (err.message.includes("password"))
    errors.password = "This password must contain 6 characters minimum.";

  return errors;
};

module.exports.logInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) errors.email = "Unknown email";

  if (err.message.includes("password")) errors.email = "Wrong password";
  return errors;
};
