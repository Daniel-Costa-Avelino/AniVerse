var recomendacaoModel = require("../models/recomendacaoModel");

function buscarRecomendacoes(req, res) {
    var idUsuario = req.body.idUsuarioServer

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        recomendacaoModel.buscarRecomendacoes(idUsuario)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length >= 1) {
                        res.json(resultadoAutenticar);

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

function buscarRecomendacoesGenero(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var genero = req.body.generoEscolhidoServer;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (genero == undefined) {
            res.status(400).send("O gênero do anime está undefined!");
        } else {

            recomendacaoModel.buscarRecomendacoesGenero(idUsuario, genero)
                .then(
                    function (resultadoAutenticar) {
                        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                        if (resultadoAutenticar.length >= 1) {
                            res.json(resultadoAutenticar);

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
    buscarRecomendacoes,
    buscarRecomendacoesGenero
}