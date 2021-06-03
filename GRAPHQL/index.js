const basico = require("./basico");
const tipos = require('./tipos');
const scalar = require('./scalar');
const arqtype = require('./type');
const interceptado = require('./type_interceptado');
const desafio2 = require('./desafio2');

//Define aqui o exemplo a carregar
const MENU = 0;

switch(MENU){
    case 1: basico();break;
    case 2: tipos();break;
    case 3: scalar();break;
    case 4: arqtype();break;
    case 5: interceptado();break;
    case 6: desafio2();break;
    default: console.log("Nenhum exemplo carregado, defina na constante Menu! CTRL + C Para encerrar!");break;
}