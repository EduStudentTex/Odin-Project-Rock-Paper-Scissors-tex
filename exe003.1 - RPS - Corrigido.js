var numAleatorio;
var choose;
var run = true;

var a = document.getElementById('img1');
a.addEventListener('click', Clicar1);

var b = document.getElementById('img2');
b.addEventListener('click', Clicar2);

var c = document.getElementById('img3');
c.addEventListener('click', Clicar3);

var user = document.getElementById('user');
var pc = document.getElementById('pc');
var result = document.getElementById('result');

function iniciarJogo() {
    numAleatorio = Math.floor(Math.random() * 3) + 1;
    
    user.innerHTML = "";
    pc.innerHTML = "";
    result.innerHTML = "";

    switch (choose) {
        case 1: user.innerHTML = "Você: Pedra";
        break;
        case 2: user.innerHTML = "Você: Papel";
        break;
        case 3: user.innerHTML = "Você: Tesoura";
        break;
    }

    switch (numAleatorio) {
        case 1: pc.innerHTML = "PC: Pedra";
        break;
        case 2: pc.innerHTML = "PC: Papel";
        break;
        case 3: pc.innerHTML = "PC: Tesoura";
        break;
    }

    if (choose == numAleatorio) {
        result.innerHTML = "Empatou!";
    } else if (choose == 1 && numAleatorio == 2) {
        result.innerHTML = "Você Perdeu!";
    } else if (choose == 1 && numAleatorio == 3) {
        result.innerHTML = "Você Ganhou!";
    } else if (choose == 2 && numAleatorio == 1) {
        result.innerHTML = "Você Ganhou!";
    } else if (choose == 2 && numAleatorio == 3) {
        result.innerHTML = "Você Perdeu!";
    } else if (choose == 3 && numAleatorio == 1) {
        result.innerHTML = "Você Perdeu!";
    } else if (choose == 3 && numAleatorio == 2) {
        result.innerHTML = "Você Ganhou!";
    }
}

function Clicar1() {
    choose = 1;
    iniciarJogo();
}

function Clicar2() {
    choose = 2;
    iniciarJogo();
}

function Clicar3() {
    choose = 3;
    iniciarJogo();
}