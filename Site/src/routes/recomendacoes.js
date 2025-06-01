var express = require("express");
var router = express.Router();

var buscarRecomendacoesController = require("../controllers/recomendacaoController");

//Recebendo os dados do html e direcionando para a função exibir de exibirAnimeController.js
router.post("/buscarRecomendacoes", function (req, res) {
    buscarRecomendacoesController.buscarRecomendacoes(req, res);
})

router.post("/buscarRecomendacoesGenero", function (req, res) {
    buscarRecomendacoesController.buscarRecomendacoesGenero(req, res);
})

module.exports = router;