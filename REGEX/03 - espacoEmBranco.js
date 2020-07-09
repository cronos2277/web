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

const texto4 = ` `;
const regex4 = /\f/g;
console.log(texto4.match(regex4));
