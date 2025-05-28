var dashboardModel = require("../models/dashboardModel");

function buscarRanking(req, res) {
    var idUsuario = req.body.idUserServer

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        dashboardModel.buscarRanking(idUsuario)
            .then(
                function (resultadoBusca) {
                    console.log(`\nResultados encontrados: ${resultadoBusca.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoBusca)}`); // transforma JSON em String

                    if (resultadoBusca.length >= 1) {
                        res.json(resultadoBusca);

                    } else {
                        res.status(403).send("Não tem nenhum anime adicionado");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao buscar os animes! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarGeneroMaisAssistido(req, res) {
    var idUsuario = req.body.idUserServer

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        dashboardModel.buscarGeneroMaisAssistido(idUsuario)
            .then(
                function (resultadoBusca) {
                    console.log(`\nResultados encontrados: ${resultadoBusca.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoBusca)}`); // transforma JSON em String

                    if (resultadoBusca.length >= 1) {
                        res.json(resultadoBusca);

                    } else {
                        res.status(403).send("Não tem nenhum anime adicionado");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao buscar os animes! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarTempoAssistido(req, res) {
    var idUsuario = req.body.idUserServer

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        dashboardModel.buscarTempoAssistido(idUsuario)
            .then(
                function (resultadoBusca) {
                    console.log(`\nResultados encontrados: ${resultadoBusca.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoBusca)}`); // transforma JSON em String

                    if (resultadoBusca.length >= 1) {
                        res.json(resultadoBusca);

                    } else {
                        res.status(403).send("Não tem nenhum anime adicionado");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao buscar os animes! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    buscarRanking,
    buscarGeneroMaisAssistido,
    buscarTempoAssistido
}