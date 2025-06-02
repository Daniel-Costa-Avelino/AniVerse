CREATE DATABASE AniVerse;

USE AniVerse;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(45) NOT NULL UNIQUE,
    email VARCHAR(45) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL,
    avatarUsuario VARCHAR(1000),
    generoUsuario VARCHAR(45),
    idade INT
);

SELECT * FROM usuario;

CREATE TABLE listaAnimes (
    idAnime INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    descricao VARCHAR(400) NOT NULL,
    imagemAnime VARCHAR(1000) NOT NULL,
    temporadas INT NOT NULL,
    episodios INT NOT NULL,
    onde_assistir VARCHAR(45) NOT NULL,
    dtLancamento DATE NOT NULL,
    dtUltimoEpLancado DATE NOT NULL,
    genero VARCHAR(45) NOT NULL,
    CONSTRAINT chk_genero
           CHECK (genero IN(
           'Ação',
           'Aventura',
           'Comédia',
           'Drama',
           'Fantasia',
           'Música',
           'Romance',
           'Ficção Científica',
           'Seinen',
           'Shoujo',
           'Shounen',
           'Slice-of-life',
           'Esportes',
           'Sobrenatural',
           'Suspense')),
    classificacaoIndicativa VARCHAR(45) NOT NULL,
	notaUser INT NOT NULL,
    fkUsuario INT NOT NULL,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

SELECT * FROM listaAnimes;

CREATE TABLE recomendacoes (
    idAnime INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    descricao VARCHAR(150),
    imagemAnime VARCHAR(1000),
    temporadas INT,
    episodios INT,
    onde_assistir VARCHAR(45),
    dtLancamento DATE,
    dtUltimoEpLancado DATE,
    genero VARCHAR(45),
    CONSTRAINT chk_generoRecomendacoes
           CHECK (genero IN('Ação',
           'Aventura',
           'Comédia',
           'Drama',
           'Fantasia',
           'Música',
           'Romance',
           'Ficção Científica',
           'Seinen',
           'Shoujo',
           'Shounen',
           'Slice-of-life',
           'Esportes',
           'Sobrenatural',
           'Suspense')),
    classificacaoIndicativa VARCHAR(45)
);

INSERT INTO recomendacoes (
    nome, descricao, imagemAnime, temporadas, episodios, onde_assistir,
    dtLancamento, dtUltimoEpLancado, genero, classificacaoIndicativa
) VALUES
-- AÇÃO
('Wind Breaker', 'Um delinquente com forte senso de justiça entra em uma escola onde lutas definem respeito.', 'https://m.media-amazon.com/images/M/MV5BNTQzNDI5OGItZDZkMy00MWQ1LWIwM2YtYzc2YWNhOGJlZWQxXkEyXkFqcGc@._V1_.jpg', 1, 13, 'Crunchyroll', '2024-04-05', '2024-06-21', 'Ação', '16 anos'),
('Solo Leveling', 'Um caçador fraco desperta poderes únicos após sobreviver a uma masmorra mortal.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjydKUpH1rz3V2N2oTcKX7O3QIMkH_-xqqw&s', 1, 12, 'Crunchyroll', '2024-01-06', '2024-03-30', 'Ação', '16 anos'),

-- AVENTURA
('One Piece', 'Piratas em busca do maior tesouro do mundo: o One Piece.', 'https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 21, 1100, 'Crunchyroll', '1999-10-20', '2025-06-01', 'Aventura', '12 anos'),
('Re:Zero', 'Um jovem é transportado para outro mundo e revive o mesmo dia sempre que morre.', 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/5525651c53b49243de6835134651192c.jpg', 2, 50, 'Crunchyroll', '2016-04-04', '2021-03-24', 'Aventura', '16 anos'),

-- DRAMA
('Diários de uma Apotecária', 'Uma jovem inteligente se torna assistente no palácio imperial como farmacêutica.', 'https://m.media-amazon.com/images/S/pv-target-images/973b895a93885f495d41c8e8874870d4adb2336ed42bf3627345128ac5d91bbb.jpg', 2, 24, 'Crunchyroll', '2023-10-21', '2024-03-23', 'Drama', '12 anos'),
('Classroom of the Elite', 'Estudantes em uma escola meritocrática escondem segredos e manipulam uns aos outros.', 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/3faa80fc683fd414a128b66b1acf535f.jpg', 2, 25, 'Crunchyroll', '2017-07-12', '2022-09-26', 'Drama', '16 anos'),

-- FICÇÃO CIENTÍFICA
('Dr. Stone', 'Um gênio tenta reconstruir a civilização com ciência após um petrificante cataclismo.', 'https://m.media-amazon.com/images/M/MV5BYzZkYjM1MWMtNTY3Mi00MTMzLTlhNmQtN2ExZjFkYzdjZmFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 3, 55, 'Crunchyroll', '2019-07-05', '2023-12-21', 'Ficção Científica', '12 anos'),
('86 EIGHTY-SIX', 'Soldados sem cidadania lutam em guerra por um país que os considera descartáveis.', 'https://br.web.img2.acsta.net/img/b8/a9/b8a927e2880c7678fa427c37ce67ece3.jpg', 2, 23, 'Crunchyroll', '2021-04-11', '2021-12-19', 'Ficção Científica', '16 anos'),

-- ROMANCE
('Horimiya', 'Dois estudantes com personalidades secretas desenvolvem um romance inesperado.', 'https://m.media-amazon.com/images/I/81KWv890jNL._AC_UF894,1000_QL80_.jpg', 1, 13, 'Crunchyroll', '2021-01-10', '2021-04-04', 'Romance', '14 anos'),
('Komi-san', 'Uma garota com extrema ansiedade social quer fazer 100 amigos.', 'https://m.media-amazon.com/images/I/61Vy74wnrAS._AC_UF1000,1000_QL80_.jpg', 2, 24, 'Netflix', '2021-10-07', '2022-12-22', 'Romance', '12 anos'),

-- SHOUNEN
('Black Clover', 'Dois órfãos rivais sonham em se tornar o Rei Mago.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6HAN6OLfcZa1_irkVe_BPW26gJQlSCWOdw&s', 4, 170, 'Crunchyroll', '2017-10-03', '2021-03-30', 'Shounen', '12 anos'),
('Naruto', 'Um jovem ninja busca reconhecimento e sonha em se tornar Hokage.', 'https://br.web.img3.acsta.net/c_310_420/pictures/16/04/11/16/56/089875.jpg', 5, 220, 'Crunchyroll', '2002-10-03', '2007-02-08', 'Shounen', '12 anos'),

-- ESPORTES
('Hajime no Ippo', 'Um garoto tímido se encontra no boxe e começa uma jornada de superação.', 'https://m.media-amazon.com/images/M/MV5BN2UzMmM5NTQtYjUxYy00OWVjLTkwOWMtYzFhOGQxN2VlZjI5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 3, 127, 'Crunchyroll', '2000-10-04', '2014-03-29', 'Esportes', '12 anos'),
('Blue Lock', 'Jogadores de futebol competem por uma vaga como atacante titular do Japão.', 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/bc5934e65dcfc3e6f1f783160ce023fb.jpg', 1, 24, 'Crunchyroll', '2022-10-08', '2023-03-25', 'Esportes', '12 anos'),

-- SOBRENATURAL
('Yu Yu Hakusho', 'Um delinquente morre salvando uma criança e ganha poderes espirituais.', 'https://blogdaileon.com/wp-content/uploads/2022/02/yuyu-timeurameshi-destacada.jpg?w=774', 4, 112, 'Crunchyroll', '1992-10-10', '1995-01-07', 'Sobrenatural', '14 anos'),
('Jujutsu Kaisen', 'Estudantes enfrentam maldições e criaturas sobrenaturais com técnicas mágicas.', 'https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 2, 47, 'Crunchyroll', '2020-10-03', '2023-12-28', 'Sobrenatural', '16 anos'),

-- COMÉDIA
('Gintama', 'Samurais e alienígenas convivem em uma versão alternativa do Japão feudal.', 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/5d1c34b8f9491d82bf62391f7ac4e4a3.jpg', 8, 367, 'Crunchyroll', '2006-04-04', '2018-10-07', 'Comédia', '14 anos'),
('KonoSuba', 'Um jovem reencarna em um mundo de fantasia e forma um grupo desastroso.', 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/131f32cf27743b9c95b78b4b3fb1c6ee.jpg', 2, 20, 'Crunchyroll', '2016-01-14', '2017-03-16', 'Comédia', '14 anos'),

-- FANTASIA
('Made in Abyss', 'Garotos descem em um abismo cheio de relíquias e perigos desconhecidos.', 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/532d3659db86ed0d86fcc57ef38acc45.jpg', 2, 25, 'HIDIVE', '2017-07-07', '2022-09-28', 'Fantasia', '16 anos'),
('The Rising of the Shield Hero', 'Um herói é traído e precisa lutar para provar seu valor.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVMUxBrWfbTpfRNW3TC1TTPATo8nJOGuYOg&s', 2, 38, 'Crunchyroll', '2019-01-09', '2022-06-29', 'Fantasia', '14 anos'),

-- MÚSICA
('Your Lie in April', 'Um pianista prodígio reencontra a paixão pela música com a ajuda de uma violinista.', 'https://m.media-amazon.com/images/S/pv-target-images/c5c75d38cfae7d224017c1d7090f3d1a358a5bb4ce8d2146de16a080064f1591.jpg', 1, 22, 'Crunchyroll', '2014-10-09', '2015-03-19', 'Música', '12 anos'),
('Bocchi the Rock!', 'Uma garota tímida entra em uma banda e supera sua ansiedade social.', 'https://m.media-amazon.com/images/M/MV5BNGY0NGM5N2UtNzU5MS00MDAwLWFmMWEtZjE4N2Q0Y2M4YjNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 1, 12, 'Crunchyroll', '2022-10-09', '2022-12-25', 'Música', '12 anos'),

-- SEINEN
('Vinland Saga', 'Um jovem guerreiro busca vingança durante a era dos vikings.', 'https://br.web.img3.acsta.net/pictures/19/09/16/17/09/4903250.jpg', 2, 48, 'Netflix', '2019-07-07', '2023-06-20', 'Seinen', '16 anos'),
('Monster', 'Um médico tenta capturar o assassino que salvou anos atrás.', 'https://m.media-amazon.com/images/M/MV5BYzU2MWQ5NGQtYmNlMC00ZjJkLWJmODItZDM5MDM3YmUyMWJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 1, 74, 'Netflix', '2004-04-07', '2005-09-28', 'Seinen', '16 anos'),

-- SHOUJO
('Fruits Basket', 'Uma garota vive com uma família amaldiçoada pelos signos do zodíaco chinês.', 'https://upload.wikimedia.org/wikipedia/pt/6/64/Arte_Fruits_Basket.jpg', 3, 63, 'Crunchyroll', '2019-04-06', '2021-06-29', 'Shoujo', '12 anos'),
('Nana', 'Duas mulheres com o mesmo nome e estilos de vida opostos se tornam amigas.', 'https://www.portallos.com.br/wp-content/uploads/2013/04/Nana-Mang%C3%A1-Anime.jpg', 1, 47, 'Netflix', '2006-04-05', '2007-03-28', 'Shoujo', '16 anos'),

-- SLICE-OF-LIFE
('Barakamon', 'Um calígrafo vai morar em uma ilha e aprende lições de vida com os moradores locais.', 'https://m.media-amazon.com/images/I/81k5cg13g0L._AC_UF1000,1000_QL80_.jpg', 1, 12, 'Crunchyroll', '2014-07-06', '2014-09-28', 'Slice-of-life', '12 anos'),
('March Comes in Like a Lion', 'Um jogador de shogi luta contra a depressão enquanto se conecta com uma nova família.', 'https://m.media-amazon.com/images/M/MV5BMDJmZGZmNjQtMzE4NS00ZGRmLWFiMTQtM2EzZDhhZGNkY2FmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 2, 44, 'Crunchyroll', '2016-10-08', '2018-03-31', 'Slice-of-life', '12 anos'),

-- SUSPENSE
('Death Note', 'Um estudante encontra um caderno que mata qualquer pessoa cujo nome seja escrito nele.', 'https://m.media-amazon.com/images/I/51t07aw4zgL._UF1000,1000_QL80_.jpg', 1, 37, 'Netflix', '2006-10-04', '2007-06-27', 'Suspense', '16 anos'),
('Erased', 'Um homem volta no tempo para impedir uma série de assassinatos na infância.', 'https://m.media-amazon.com/images/S/pv-target-images/905d226bfb820060f779ffd9522d7a4a82b296191175afc53690e3917dab4db4._BR-6_AC_SX720_FMjpg_.jpg', 1, 12, 'Netflix', '2016-01-08', '2016-03-25', 'Suspense', '14 anos');

select * from recomendacoes;

SELECT * FROM listaAnimes;

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
WHERE idUsuario = 1;

SELECT u.username, la.genero, COUNT(la.genero) AS qtdAnimesGenero FROM listaAnimes AS la
JOIN usuario AS u ON la.fkUsuario = u.idUsuario
WHERE u.idUsuario = 1
GROUP BY u.username, la.genero
ORDER BY qtdAnimesGenero DESC LIMIT 1;

SELECT u.username, SUM(la.episodios) * 23 AS qtdTempoAssistido FROM usuario AS u
LEFT JOIN listaAnimes AS la ON la.fkUsuario = u.idUsuario WHERE u.idUsuario = 1
GROUP BY u.username, la.fkUsuario;

SELECT la.genero, COUNT(la.genero) AS qtdAnimesGenero FROM listaAnimes AS la
JOIN usuario AS u ON la.fkUsuario = u.idUsuario
WHERE u.idUsuario = 1
GROUP BY u.username, la.genero
ORDER BY qtdAnimesGenero DESC;

SELECT YEAR(la.dtLancamento) AS anoLancamento, COUNT(la.idAnime) AS qtdAnimesAno FROM listaAnimes AS la
JOIN usuario AS u ON u.idUsuario = la.fkUsuario
WHERE u.idUsuario = 1
GROUP BY YEAR(la.dtLancamento)
ORDER BY YEAR(la.dtLancamento);

SELECT la.nome, ROUND((la.episodios * 23) / 60) AS qtdHorasPorAnime FROM listaAnimes AS la
JOIN usuario AS u ON la.fkUsuario = u.idUsuario
WHERE idUsuario = 1
GROUP BY la.nome, la.episodios
ORDER BY ROUND(qtdHorasPorAnime) DESC; 