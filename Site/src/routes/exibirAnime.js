var express = require("express");
var router = express.Router();

var exibirAnimeController = require("../controllers/exibirAnimeController");

//Recebendo os dados do html e direcionando para a função exibir de exibirAnimeController.js
router.post("/exibirAnimesAssistidos", function (req, res) {
    exibirAnimeController.exibirAnimesAssistidos(req, res);
})

module.exports = router;