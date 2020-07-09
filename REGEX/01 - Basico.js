const regex = [];
const texto = [];
texto[1] = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique ipsum quis est tincidunt`;
//O Exemplo mais basico, vai procurar se existe essa palavra na string e assim que achar para.
regex[1] = /ipsum/; //Apenas retornara uma unica ocorrencia e para, uma vez que esta sem a flag g
console.table(texto[1].match(regex[1]));

//Segundo Exemplo
texto[2] = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique ipsum quis est tincidunt`;
//A flag, que sao as letras apos a segunda barra "/", sao chamadas de flags. No caso aqui remos a ig.
// i => "Ignore sensetive case", ou seja, ignora case sensitive, em outras palavras para de diferencias "a" de "A" por exemplo.
// g => "Global", em outras palavras se houver mais de um resultado ele retorna todos, repare que ate o output vai ser diferente,
// do primeiro, uma vez que o regex acima apenas trazia o primeiro resultado, no indice zero e outras informacoes no indice 1,
//com a flag "G", como pode ter N resultados, entao vai ter um array com os resultados encontrados.
regex[2] = /ipsum/ig;
console.info("Segundo exemplo de Regex: ", texto[2].match(regex[2]));

/*
    Toda String tem um metodo "Match" incluso. esse metodo recebe como parametro um regex no javascript.
    exemplo: "TEXTO A SER ANALISADO".match(new RegExp('EXPRESSAO'));
    Voce pode criar no javascript um regex apenas colocando a expressao entre /EXPRESSAO/ ou instanciando um RegExp("PASSANDO AQUI A EXPRESSAO"),
    caso nao encontre nada, o mesmo retorna um null.
*/
console.log('Terceiro exemplo de RegEx (sem a flag "G"): ',"".match(new RegExp('')));