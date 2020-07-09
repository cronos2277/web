//\t procura por tabulacao.
const texto1 = '	tab.	.';
const regex1 = /\t/g;
console.log(texto1.match(regex1));

//\n procura por quebra de linha, ou seja pelos "Enters"
const texto2 = `
`;
const regex2 = /\n/g;
console.log(texto2.match(regex2));

// \s procura por qualquer espacao em branco, inclui tabulacao, quebra de linha e espaco.
const texto3 = ``;
const regex3 = /\s/g;
console.log(texto3.match(regex3));

/*
    O meta-caractere unicode "\u", no caso esse meta-caracter permite que voce procure
    por letras de letras que nao esteja no alfabeto americano. Nesse caso voce coloca
    o meta-caracter "\u"+"codigo", como no exemplo abaixo: "\u02AC" sendo => "ʬ"

    link com uma tabela dos caracteres: https://unicode-table.com/pt
*/
const palavra= "aʬaʬklakslakslʬ";
console.log(palavra.match(/\u02AC/g));