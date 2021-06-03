const basico = require("./basico");
const tipos = require('./tipos');
const scalar = require('./scalar');

//Define aqui o exemplo a carregar
const MENU = 3;

switch(MENU){
    case 1: basico();break;
    case 2: tipos();break;
    case 3:scalar();break;
    default: exit;break;
}