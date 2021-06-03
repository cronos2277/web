const basico = require("./basico");
const tipos = require('./tipos');
const scalar = require('./scalar');
const arqtype = require('./type');
const interceptado = require('./type_interceptado');

//Define aqui o exemplo a carregar
const MENU = 5;

switch(MENU){
    case 1: basico();break;
    case 2: tipos();break;
    case 3: scalar();break;
    case 4: arqtype();break;
    case 5: interceptado();break;
    default: exit;break;
}