var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function adicionarAnime(
    nomeAnime,
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
) {
    //console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", username, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO listaAnimes (
    nome,
    descricao,
    imagemAnime,
    temporadas,
    episodios,
    onde_assistir,
    dtLancamento,
    dtUltimoEpLancado,
    genero,
    classificacaoIndicativa,
    notaUser,
    fkUsuario
) VALUES (
    '${nomeAnime}',
    '${descricao}',
    '${imagem}',
    '${temporadasAnime}',
    '${episodiosAnime}',
    '${ondeAssistirAnime}',
    '${dtLancamentoAnime}',
    '${dtLancamentoAnimeUltimoEpisodio}',
    '${generoAnime}',
    '${classificacaoIndicativaAnime}',
    '${notaAnime}',
    '${idUsuario}'
);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    adicionarAnime
};