var database = require("../database/config")

function buscarRecomendacoes(idUsuario) {
    var instrucaoSql = `
        SELECT  nome,
    descricao,
    imagemAnime,
    temporadas,
    episodios,
    onde_assistir,
    dtLancamento,
    dtUltimoEpLancado,
    genero,
    classificacaoIndicativa
    FROM recomendacoes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarRecomendacoes
};