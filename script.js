function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if(hora >= 0 && hora < 12){
        img.src = "./img/manha.jpg";
        document.body.style.backgroundColor = "#e2cd9f"

    }
    else if(hora >= 12 && hora <= 18){
        img.src = "./img/tarde.jpg";
        document.body.style.backgroundColor = "#b9846f"

    }   
    else{
        img.src = "./img/noite.jpg";
        document.body.style.backgroundColor = "#515154"
    }
}
function calcular(){

    var data = new Date;
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res")
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    }
    else {
        var fsex = document.getElementsByName("radesex");
        var idade = ano - Number(fano.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if(fsex[0].checked){
            genero = "Homem";
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute("src", "./img/criançaH.jpg");

            }
            else if(idade < 21){
                //Jovem
                img.setAttribute("src", "./img/jovemH.jpg");

            }
            else if(idade < 50){
                //Adulto
                img.setAttribute("src", "./img/adultoH.jpg");

            }
            else {
                //Idoso
                img.setAttribute("src", "./img/idosoH.jpg");

            }
        }
        else if(fsex[1].checked){
            genero = "Mulher";
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute("src", "./img/criançaM.jpg");

            }
            else if(idade < 21){
                //Jovem
                img.setAttribute("src", "./img/JovemM.jpg");

            }
            else if(idade < 50){
                //Adulto
                img.setAttribute("src", "./img/adultaM.jpg");

            }
            else {
                //Idoso
                img.setAttribute("src", "./img/idosoM.jpg");

            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }



}   