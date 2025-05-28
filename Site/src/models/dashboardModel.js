var database = require("../database/config")

function buscarRanking(idUsuario) {
    var instrucaoSql = `
   SELECT * FROM
    (
    SELECT
    u.idUsuario AS idUsuario,
    u.username,
    COUNT(la.idAnime) AS qtdAnimes,
    RANK() OVER (ORDER BY COUNT(la.idAnime) DESC) AS ranking
    FROM usuario AS u
    LEFT JOIN listaAnimes AS la ON la.fkUsuario = u.idUsuario
    GROUP BY u.username
    ) AS rankingTodos
    WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarGeneroMaisAssistido(idUsuario) {
    var instrucaoSql = `
   SELECT u.username, la.genero, COUNT(la.genero) AS qtdAnimesGenero FROM listaAnimes AS la
    JOIN usuario AS u ON la.fkUsuario = u.idUsuario
    WHERE u.idUsuario = ${idUsuario}
    GROUP BY u.username, la.genero
    ORDER BY qtdAnimesGenero DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTempoAssistido(idUsuario) {
    var instrucaoSql = `
    SELECT u.username, SUM(la.episodios) * 23 AS qtdTempoAssistido FROM usuario AS u
    LEFT JOIN listaAnimes AS la ON la.fkUsuario = u.idUsuario WHERE u.idUsuario = ${idUsuario}
    GROUP BY u.username, la.fkUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarRanking,
    buscarGeneroMaisAssistido,
    buscarTempoAssistido
};