var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function encrypt() {
    var text = document.getElementById("textArea1").value;
    document.getElementById("textArea2").value = transformMessage(text.toLowerCase());
}

var searchIndex = (str, letter) => {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) return i
    }
    return -1;
};

var transformLetter = letter => {
    var letterIndex = searchIndex(plainAlphabet, letter);
    for (var j = 0; j < encryptedAlphabet.length; j++) {
        if (letterIndex === j) return encryptedAlphabet[j];
    }
    return " ";
}

var transformMessage = message => {
    var result = "";
    for (var letter of message) {
        //Transformacion
        result = result + transformLetter(letter);
    }
    return result;
}

document.getElementById("encrypt").addEventListener("click", encrypt);
document.getElementById("decrypt").addEventListener("click", decrypt);


function decrypt() {
    var text = document.getElementById("textArea2").value;
    document.getElementById("textArea1").value = transformMessage1(text.toLowerCase());
}

var searchIndex1 = (str, letter) => {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) return i
    }
    return -1;
};

var transformLetter1 = letter => {
    var letterIndex = searchIndex1(encryptedAlphabet, letter);
    for (var j = 0; j < plainAlphabet.length; j++) {
        if (letterIndex === j) return plainAlphabet[j];
    }
    return " ";
}

var transformMessage1 = message => {
    var result = "";
    for (var letter of message) {
        //Transformacion
        result = result + transformLetter1(letter);
    }
    return result;
}