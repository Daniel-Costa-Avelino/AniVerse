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

function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email == null && nome == null) {
        alert("Você não está logado!")
        window.location.href = "../login.html";
    }
}

function validarSessao_avatar() {
    var avatarUsuario = sessionStorage.getItem("AVATAR_USUARIO");
    var btn = document.querySelector(".btn_login");
    var avatarImg = document.querySelectorAll(".imgAvatar");
    var a_img = document.querySelector(".a_imgAvatarUsuario");

    console.log(avatarUsuario);

    if (avatarUsuario != 'null') {
        console.log("sim");
        a_img.removeAttribute('hidden')
        for (let i = 0; i < avatarImg.length; i++) {
            avatarImg[i].src = avatarUsuario;
            avatarImg[i].style.borderRadius = '10px'
        }
        btn.hidden = true
    } else {
        btn.hidden = false;
        a_img.hidden = true;
    }
}

function validarSessao_avatar_v2() {
    var avatarUsuario = sessionStorage.getItem("AVATAR_USUARIO");
    var btn = document.querySelector(".btn_login");
    var avatarImg = document.querySelectorAll(".imgAvatar");
    var a_img = document.querySelector(".a_imgAvatarUsuario");

    console.log(avatarUsuario);

    if (avatarUsuario != null) {
        console.log("sim");
        a_img.removeAttribute('hidden')
        for (let i = 0; i < avatarImg.length; i++) {
            avatarImg[i].src = avatarUsuario;
            avatarImg[i].style.borderRadius = '20px'
        }
        btn.hidden = true
    } else {
        btn.hidden = false;
        a_img.hidden = true;
    }
}

function validarSessao_avatarDash() {
    var avatarUsuario = sessionStorage.getItem("AVATAR_USUARIO");
    var avatarImg = document.querySelector(".imgAvatar");

    console.log(avatarUsuario);

    if (avatarUsuario != 'null') {
        avatarImg.src = avatarUsuario;
    } 
}