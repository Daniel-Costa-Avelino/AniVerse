var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função exibir de exibirAnimeController.js
router.post("/buscarRanking", function (req, res) {
    dashboardController.buscarRanking(req, res);
})

router.post("/buscarGeneroMaisAssistido", function (req, res) {
    dashboardController.buscarGeneroMaisAssistido(req, res);
})

router.post("/buscarTempoAssistido", function (req, res) {
    dashboardController.buscarTempoAssistido(req, res);
})

router.post("/buscarQtdAnimesPorAnoVigente", function (req, res) {
    dashboardController.buscarQtdAnimesPorAnoVigente(req, res);
})

router.post("/buscarQtdHorasPorAnime", function (req, res) {
    dashboardController.buscarQtdHorasPorAnime(req, res);
})

router.post("/buscarQtdAnimesPorGenero", function (req, res) {
    dashboardController.buscarQtdAnimesPorGenero(req, res);
})

module.exports = router;