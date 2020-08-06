//Numero de telefone americano ou brasileiro com ou sem DDD
const telefone = /(\(?\d{2,3}?\))?\s?(\d{3,4}\-?\d{4})/gm;
telefones = `  123-1234
            1234-1234
            12341234
            (11)1231234
            (855)98889898
            (855) 1231234`;
console.log(telefones.match(telefone));
