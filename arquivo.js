var div1;
var div2;
var div3;
var div4;
var div5;
var div6;
var imagem1;
var imagem2;
var imagem3;
var imagem4;
var imagem5;
var imagem6;


window.onload = function(){
    div1 = document.getElementById("1");
    imagem1 = document.getElementById("imagem1");
    div2 = document.getElementById("2");
    imagem2 = document.getElementById("imagem2");
    div3 = document.getElementById("3");
    imagem3 = document.getElementById("imagem3");
    div4 = document.getElementById("4");
    imagem4 = document.getElementById("imagem4");
    div5 = document.getElementById("5");
    imagem5 = document.getElementById("imagem5");
    div6 = document.getElementById("6");
    imagem6 = document.getElementById("imagem6");

    imagem1.onmouseover = mostrarDiv1;
    imagem2.onmouseover = mostrarDiv2;
    imagem3.onmouseover = mostrarDiv3;
    imagem4.onmouseover = mostrarDiv4;
    imagem5.onmouseover = mostrarDiv5;
    imagem6.onmouseover = mostrarDiv6;


    div1.classList.add("escondido");
    div2.classList.add("escondido");
    div3.classList.add("escondido");
    div4.classList.add("escondido");
    div5.classList.add("escondido");
    div6.classList.add("escondido");

}

function mostrarDiv1(){
    div1.classList.remove("escondido");
    div2.classList.add("escondido");
    div3.classList.add("escondido");
    div4.classList.add("escondido");
    div5.classList.add("escondido");
    div6.classList.add("escondido");
}
function mostrarDiv2(){
    div2.classList.remove("escondido");
    div1.classList.add("escondido");
    div3.classList.add("escondido");
    div4.classList.add("escondido");
    div5.classList.add("escondido");
    div6.classList.add("escondido");
}
function mostrarDiv3(){
    div3.classList.remove("escondido");
    div2.classList.add("escondido");
    div1.classList.add("escondido");
    div4.classList.add("escondido");
    div5.classList.add("escondido");
    div6.classList.add("escondido");
}
function mostrarDiv4(){
    div4.classList.remove("escondido");
    div2.classList.add("escondido");
    div3.classList.add("escondido");
    div1.classList.add("escondido");
    div5.classList.add("escondido");
    div6.classList.add("escondido");
}
function mostrarDiv5(){
    div5.classList.remove("escondido");
    div2.classList.add("escondido");
    div3.classList.add("escondido");
    div4.classList.add("escondido");
    div1.classList.add("escondido");
    div6.classList.add("escondido");
}
function mostrarDiv6(){
    div6.classList.remove("escondido");
    div2.classList.add("escondido");
    div3.classList.add("escondido");
    div4.classList.add("escondido");
    div5.classList.add("escondido");
    div1.classList.add("escondido");
}
