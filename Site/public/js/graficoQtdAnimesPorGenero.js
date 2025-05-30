var grafico_qtd_genero = document.getElementById("grafico_qtd_animes_por_genero");
var listaGeneros = [];
var listaQtdAnimes = [];

function buscarQtdAnimesPorGenero() {

    fetch("/dashboard/buscarQtdAnimesPorGenero", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUserServer: sessionStorage.getItem("ID_USUARIO")
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);

                for (let i = 0; i < json.length; i++) {
                    listaGeneros.push(json[i].genero);
                    listaQtdAnimes.push(json[i].qtdAnimesGenero);
                }

                console.log(JSON.stringify(json));
                sessionStorage.QTD_ANIMES_POR_GENERO = JSON.stringify(json);

                plotarGraficoAnimesPorGenero();
            });

        } else {
            console.log("Houve um erro ao tentar buscar o ranking!");
            resposta.text().then(texto => {
                console.error(texto);
                //finalizarAguardar(texto);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

function plotarGraficoAnimesPorGenero() {

    new Chart(grafico_qtd_genero, {
        type: 'bar',
        data: {
            labels: listaGeneros,
            datasets: [{
                label: 'Quantidade de animes que você assistiu nesse gênero',
                data: listaQtdAnimes,
                borderColor: '#DB4B23',
                backgroundColor: '#DB4B23',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}

// {
//     align - items: center;
//     display: flex;
//     width: 100 %;
//     height: 100vh;
//     background - color: rgba(0, 0, 0, 0.867);
// }

window.onload = buscarQtdAnimesPorGenero();