function processText() {
    var inputText = document.getElementById('input-text').value.toLowerCase();
    var option = document.querySelector('input[name="option"]:checked').value;

    if (option === 'encrypt') {
        var encryptedText = encryptText(inputText);
        document.getElementById('output-text').value = encryptedText;
    } else if (option === 'decrypt') {
        var decryptedText = decryptText(inputText);
        document.getElementById('output-text').value = decryptedText;
    }
}

function encryptText(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

function decryptText(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

function copyToClipboard() {
    var outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles: " + outputText.value);
}

function limpiarTexto() {
    document.getElementById('input-text').value = '';
    document.getElementById('output-text').value = '';
}
