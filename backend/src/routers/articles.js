const express = require("express");
const router = express.Router();
const ArticlesController = require("../controller/articles"); 



router.get("/", ArticlesController.get);

router.post("/", ArticlesController.create)


module.exports = router