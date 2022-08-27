const express = require("express");
const router = express.Router();

const {postController } = require("../controllers/auth");



router.post("/postblog",postController);

module.exports = router;
