const textArea = document.querySelector('.textarea')
const message = document.querySelector('.message')
const btnEncrypt = document.querySelector('.btnEncrypt')
const btnDecrypt = document.querySelector('.btnDecrypt')
const btnCopy = document.querySelector('.btnCopy')


//btn events
btnEncrypt.addEventListener('click', () => {
    const textEncrypt = encrypt(textArea.value)
    message.value = textEncrypt
    textArea.value = ''
    // message.style.backgroundImage = 'none'
})

btnDecrypt.addEventListener('click', () => {
    const textDecrypt = decrypt(textArea.value)
    message.value = textDecrypt
    textArea.value = ''
})

btnCopy.addEventListener('click', () => {
    let textCopy = copy(message.value)
    message.value = 'copied!'
})

// arrow function encrypt
const encrypt = (str) => {
    const substitutions = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    }
    let textEncrypt = str
    for (const letter in substitutions) {
        textEncrypt = textEncrypt.split(letter).join(substitutions[letter])
    }
    return textEncrypt;
}

// arrow function decrypt
const decrypt = (str) => {
    const reverse = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    }
    let textDecrypt = str
    for(const situation in reverse){
        textDecrypt = textDecrypt.split(situation).join(reverse[situation])
    }
    return textDecrypt
}

async function copy(str){
    try{
        let textCopy = await navigator.clipboard.writeText(str)
        return textCopy
    }catch(err){
        console.error('Error copy text: ', err)
    }
}
