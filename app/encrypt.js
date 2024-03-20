export function decode () {
    const textArea = document.querySelector('.text-area');
    const text = document.querySelector('.mensagem');
    const btnCopy = document.querySelector('.btn-copiar');
    const outPut = document.querySelector('.output');
    const inPut = document.querySelector('.input');


    const words = [
        ["e", "enter"] ,
        ["i", "imes"],
        ["a", "ai"], 
        ["o", "ober"], 
        ["u", "ufat"]
    ];


    // CRIPTOGRAFAR
    function encrypted() {
        const textEncrypt = encrypt(textArea.value);
        text.value = textEncrypt;
        if (text.value !== '') {
            outPut.classList.add('show');
            inPut.classList.add('show');
            btnCopy.classList.add('copiable'); 
            btnCopy.value = 'true';       
        } else {
            outPut.classList.remove('show');
            inPut.classList.remove('show');
        }
        textArea.value = '';
        
    }

    function encrypt(messageText) {    
        
        
        messageText = messageText.toLowerCase();

        for (let i = 0; i < words.length; i++) {
            if (messageText.includes(words[i][0])) {
                messageText = messageText.replace(words[i][0], words[i][1]);
            }    
        }

        return messageText;
    }

    // DESCRIPTOGRAFAR


    function decrypted() {
        const textDecrypt = decrypt(textArea.value);
        if (textDecrypt !== '') {
            text.value = textDecrypt;
            textArea.value = '';  
            outPut.classList.add('show');
        } 
    }

    function decrypt(messageDecrypted) {        
        
        messageDecrypted = messageDecrypted.toLowerCase();

        for (let i = 0; i < words.length; i++) {
            if (messageDecrypted.includes(words[i][1])) {
                messageDecrypted = messageDecrypted.replace(words[i][1], words[i][0]);
            }    
        }
        return messageDecrypted;
    }

    btnCopy.addEventListener('click', clipboardCopy);
    async function clipboardCopy() {
    textArea.textContent;
    await navigator.clipboard.writeText(text.value);  
        text.value = '';
        outPut.classList.remove('show');
    }

}