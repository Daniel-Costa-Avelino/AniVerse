var grafico_qtd_ano = document.getElementById("grafico_qtdAnimes_assistidosAnoVigente");
var listaAnoLancamento = [];
var listaQtdAnimesAno = [];

function buscarQtdAnimesPorAnoVigente() {

    fetch("/dashboard/buscarQtdAnimesPorAnoVigente", {
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
                    listaAnoLancamento.push(json[i].anoLancamento);
                    listaQtdAnimesAno.push(json[i].qtdAnimesAno);
                }

                console.log(JSON.stringify(json));
                sessionStorage.QTD_ANIMES_POR_ANO = JSON.stringify(json);

                plotarQtdAnimesPorAnoVigente();
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

function plotarQtdAnimesPorAnoVigente() {

    new Chart(grafico_qtd_ano, {
        type: 'bar',
        data: {
            labels: listaAnoLancamento,
            datasets: [{
                label: 'Quantidade de animes que você assistiu que lançaram naquele ano',
                data: listaQtdAnimesAno,
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

window.onload = buscarQtdAnimesPorAnoVigente();