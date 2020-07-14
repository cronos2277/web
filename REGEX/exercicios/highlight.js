const opcoes ={
    entrada: "index.html",
    saida:"output.html"
}

const cores = {
    aspas:"ce9178",
    palavrasReservadas: "d857cf",
    tipos:"1385e2",
    comentariosMultiplasLinhas:"267703",
    comentarioLinhaUnica:"267703"
}

//Importando modulo para IO do Javascript.
const fs = require('fs');

//Funcao para ler arquivo, recebe como parametro o nome do arquivo
const ler = arquivo => fs.readFileSync(`${__dirname}/${arquivo}`,{encoding:"utf-8"});

//Escreve no arquivo
const escrever = (arquivo,conteudo) => fs.writeFileSync(`${__dirname}/${arquivo}`,conteudo,{encoding:"utf-8"});

//Colore com base em uma regex
const colorir = (texto, regex, cor) => texto.replace(regex, `<span style="color:#${cor}"><b>$1</b></span>`);

//Arquivo html carregado
const html = ler(opcoes.entrada);

//Aqui pega com base na tag code
const code = /<code>[\s\S]*<\/code>/i;

//Aqui limpa o html para pegar apenas o que esta na tag "code" com base no regex acima.
//O Indice zero eh uma forma de capturar apenas o resultado capturado, sem pegar outras informacoes
//que ficam em outros elementos do array.
let codigo = html.match(code)[0];

//Aqui estamos colorindo as Strings do codigo.
codigo = colorir(codigo,/(\".*\")/g,cores.aspas);

//colorindo palavras reservadas
codigo = colorir(codigo, /\b(package|public|class|static|if|else)\b/g,cores.palavrasReservadas);

//colorindo tipos da dados
codigo = colorir(codigo,/\b(void|int)\b/g,cores.tipos);

//Colorindo comentarios de multiplas linhas
codigo = colorir(codigo,/(\/\*[\s\S]*\*\/)/g,cores.comentariosMultiplasLinhas);

//Colorindo comentarios de linha unica
codigo = colorir(codigo,/(\/\/.*\n?)/g,cores.comentarioLinhaUnica);

//Aqui eh substituido o trecho dentro do code do html original, pelo processado.
const processado = html.replace(code,codigo);

//Arqui eh criado o arquivo.
escrever(opcoes.saida,processado);

//Avisando do termino
console.warn("Processo concluido com sucesso!");

/*
    Lembre-se que todas as expressoes regulares a serem analisada pela funcao colorir
    deve estar dentro de grupo, uma vez que essa funcao usa de retrovisores para retornar
    ocorrencias.
*/
