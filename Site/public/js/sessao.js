function fecharModalMensagem() {
    var modal = document.getElementById("section_modal_mensagem")
    modal.style.display = "none";
}

function modalErro(mensagem) {
    var modal = document.getElementById("section_modal_mensagem")
    var div_erro = document.getElementById("div_mensagem")
    modal.style.display = "flex";
    div_erro.innerHTML = `<p>${mensagem}</p>`;
    div_erro.innerHTML += `<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDILi1wNlm2b3koKzwDhj9JpYTL4-lIiTMtA&s" width = "50%" height = "80%">`;
}

function modalFuncionou(mensagem) {
    var modal = document.getElementById("section_modal_mensagem")
    var div_certo = document.getElementById("div_mensagem")
    modal.style.display = "flex";
    div_certo.innerHTML = `<p>${mensagem}</p>`;
    div_certo.innerHTML += `<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEPZicmQo7Kd5nrQ8sUuA56HTzmLosv_ysg&s" width = "50%" height = "80%">`;
}