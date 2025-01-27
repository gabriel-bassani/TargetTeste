const inverteString = (str) => {
    let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
};

const string = "Teste";
console.log("String invertida:", inverteString(string));