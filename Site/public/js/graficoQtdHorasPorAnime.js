var grafico_qtd_horas_assistidas_por_anime = document.getElementById("grafico_horas_assistidas_por_anime");
var listaHorasAssistidas = [];
var listaAnime = [];

function buscarQtdHorasPorAnime() {

    fetch("/dashboard/buscarQtdHorasPorAnime", {
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
                    listaHorasAssistidas.push(json[i].qtdHorasPorAnime);
                    listaAnime.push(json[i].nome);
                }

                console.log(JSON.stringify(json));
                sessionStorage.QTD_HORAS_POR_ANIME = JSON.stringify(json);

                plotarHorasAssistidasPorAnime();
            });

        } else {
            console.log("Houve um erro ao tentar busca a quantidade de horas assistidas por gênero!");

            var div_grafico_horasAssistidasPorAnime = document.getElementById("div_grafico_horasAssistidasPorAnime");
            div_grafico_horasAssistidasPorAnime.innerHTML = "<p style = 'font-size:25px;' >Nenhum anime adicionado</p>";


            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

function plotarHorasAssistidasPorAnime() {

    new Chart(grafico_qtd_horas_assistidas_por_anime, {
        type: 'bar',
        data: {
            labels: listaAnime,
            datasets: [{
                label: 'Quantidade de horas por anime',
                data: listaHorasAssistidas,
                borderColor: '#DB4B23',
                backgroundColor: '#DB4B23',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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

window.onload = buscarQtdHorasPorAnime();