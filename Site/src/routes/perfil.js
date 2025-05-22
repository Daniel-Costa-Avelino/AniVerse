var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.post("/adicionarAnime", function (req, res) {
    perfilController.adicionarAnime(req, res);
});

module.exports = router;