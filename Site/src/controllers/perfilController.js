var perfilModel = require("../models/perfilModel");


function adicionarAnime(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var nomeAnime = req.body.nomeAnimeServer;
    var descricao = req.body.descricaoServer;
    var imagem = req.body.imagemServer;
    var temporadasAnime = req.body.temporadasAnimeServer;
    var episodiosAnime = req.body.episodiosAnimeServer;
    var ondeAssistirAnime = req.body.ondeAssistirAnimeServer;
    var dtLancamentoAnime = req.body.dtLancamentoAnimeServer;
    var dtLancamentoAnimeUltimoEpisodio = req.body.dtLancamentoAnimeUltimoEpisodioServer;
    var generoAnime = req.body.generoAnimeServer;
    var classificacaoIndicativaAnime = req.body.classificacaoIndicativaAnimeServer;
    var notaAnime = req.body.notaAnimeServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (nomeAnime == undefined) {
        res.status(400).send("O nome do anime está undefined!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está undefined!");
    } else if (imagem == undefined) {
        res.status(400).send("A imagem está undefined!");
    } else if (temporadasAnime == undefined) {
        res.status(400).send("O número de temporadas está undefined!");
    } else if (episodiosAnime == undefined) {
        res.status(400).send("O número de episódios está undefined!");
    } else if (ondeAssistirAnime == undefined) {
        res.status(400).send("A plataforma onde assistir está undefined!");
    } else if (dtLancamentoAnime == undefined) {
        res.status(400).send("A data de lançamento está undefined!");
    } else if (dtLancamentoAnimeUltimoEpisodio == undefined) {
        res.status(400).send("A data de lançamento do último episódio está undefined!");
    } else if (generoAnime == undefined) {
        res.status(400).send("O gênero está undefined!");
    } else if (classificacaoIndicativaAnime == undefined) {
        res.status(400).send("A classificação indicativa está undefined!");
    } else if (notaAnime == undefined) {
        res.status(400).send("A nota do anime está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O seu id está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        perfilModel.adicionarAnime(nomeAnime,
            descricao,
            imagem,
            temporadasAnime,
            episodiosAnime,
            ondeAssistirAnime,
            dtLancamentoAnime,
            dtLancamentoAnimeUltimoEpisodio,
            generoAnime,
            classificacaoIndicativaAnime,
            notaAnime,
            idUsuario
        )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    adicionarAnime
}
