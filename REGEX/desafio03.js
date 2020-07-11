const cpfs = `CPF dos aprovados: 
    - 600.567.890-12
    - 765.998.345-23 ...
    - 454.674.333.21 //CPF Invalido
`;
console.log(
    cpfs.match(
        //Expressao regular para CPF
        /\d{3}\.\d{3}\.\d{3}\-\d{2}/g
    )
);

const telefone = `Lista telefônica:
        - (11) 98756-1212
        -98765-4321 ...
`;
console.log(
    telefone.match(
        //Expressao telefone.
        /\(?\d{0,2}\)?\s?\d{4,5}\-\d{4}/g
    )
);

const email = `
Os e-mails dos convidados são:
- fulano@cod3r.com.br
- xico@gmail.com ...
- maria_silva@registro.br
- rafa.sampaio@yahoo.com
`;

console.log(
    email.match(
        //Expressao regular para e-mails.
        /[\w\.]+@[\w\.]+/g
    )
);