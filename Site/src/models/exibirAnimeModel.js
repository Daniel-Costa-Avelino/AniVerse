var database = require("../database/config")

function exibirAnimesAssistidos(idUsuario) {
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
    classificacaoIndicativa,
    notaUser
    FROM listaAnimes WHERE fkUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    exibirAnimesAssistidos,
};