let topDiv, outputHint, output, input, clipboardCopy
function onLoad() {
    topDiv = document.getElementById('top')
    outputHint = document.getElementById('outputHint')
    input = document.getElementById('input')
    output = document.getElementById('output')
    clipboardCopy = document.getElementById('clipboardCopy')
}

function generatePassword() {
    let pairing = ""

    if (document.getElementById('checkUpper').checked) {
        for (let i = 65; i <= 90; i++) {
            pairing += String.fromCharCode(i)
        }
    }

    if (document.getElementById('checkLower').checked) {
        for (let i = 97; i <= 122; i++) {
            pairing += String.fromCharCode(i)
        }
    }

    if (document.getElementById('checkNumber').checked) {
        for (let i = 0; i <= 9; i++) {
            pairing += i
        }
    }

    if (document.getElementById('checkSymbol').checked) {
        for (let i = 33; i <= 47; i++) {
            pairing += String.fromCharCode(i)
        }
        for (let i = 58; i <= 64; i++) {
            pairing += String.fromCharCode(i)
        }
        for (let i = 123; i <= 126; i++) {
            pairing += String.fromCharCode(i)
        }
    }

    if (pairing.length === 0) {
        alert("Please select at least one checkbox!")
    }
    
    let num = parseInt(input.value)
    if (input.value.length === 0 || !num || num === 0) {
        alert("Enter a number!")
        return
    }

    let result = ""
    for (let i = 0; i < num; i++) {
        result += pairing.charAt(Math.floor(Math.random() * pairing.length))
    }

    outputHint.innerText = "Generated Password:"
    output.innerText = result
    clipboardCopy.style.display = "inline"
}

let clipboardCounter = 0;
function copyToClipboard() {
    window.getSelection().removeAllRanges();
    let textArea = document.createElement("textarea")
    textArea.innerText = output.innerText
    document.body.appendChild(textArea)

    textArea.select()
    textArea.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");

    document.body.removeChild(textArea)

    clipboardCopy.innerText = "Copied!"
    clipboardCounter++;
    let saved = clipboardCounter;
    setTimeout(function() {
        if (clipboardCounter === saved) {
            clipboardCopy.innerText = "Copy to Clipboard"
        }
    }, 3000)
}