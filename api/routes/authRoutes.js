const { Router } = require("express");
const authController = require("../controllers/authController");
const authRouter = Router();

// authRouter.get('/signup',authController.loginGet);
authRouter.post("/signup", authController.login_post);

// authRouter.get('/login',authController.getSignup);
authRouter.post("/login", authController.signup_post);

module.exports = authRouter;
