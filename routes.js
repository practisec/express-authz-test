const express = require("express");
const router = express.Router();

const authController = require('./controllers/auth');
const indexController = require('./controllers/index');
const testController = require('./controllers/test');

const authMiddleware = require("./middleware/auth");

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authMiddleware.requireLogin, authController.getLogout);
router.get("/", indexController.getIndex);
router.get("/welcome", authMiddleware.requireLogin, testController.getWelcome);
router.get("/admin", authMiddleware.requireLogin, authMiddleware.requireRoles("admin"), testController.getAdmin);

module.exports = router;
