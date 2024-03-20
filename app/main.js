import './style.css'
import logoAlura from '/alura.svg'
import { decode } from './encrypt.js';

document.querySelector('#app').innerHTML = `
<div class="content">        
<main>                
    <section class="input">
        <header>
            <img src="${logoAlura}" class="logo-alura">

            <a href="#" class="links">
                <i class="ph ph-github-logo"></i>
                Github
            </a>
        </header>
        <h2> Decodificador de texto </h2>                    
        <textarea class="text-area" cols="41" rows="4" placeholder="Insira o texto para ser criptografado"></textarea>
        <div class="informacao">
            <h6>
                <i class="ph ph-warning"></i>
                Apenas letras minúsculas e sem acento.
            </h6>
        </div>
        <div class="botoes">
            <button class="btns btn-encriptar" data-status="inativo" onclick="encrypted()">
                <i class="ph ph-lock-key-open"></i> 
                Criptogtafar
            </button>
            <button class="btns btn-desencriptar"  onclick="decrypted()">
                <i class="ph ph-lock-key"></i>
                Descriptogtafar
            </button>
        </div>
    </section>
    <section class="output">
        
        <textarea class="mensagem" cols="20" rows="10" disabled>                        
        </textarea>
        <div class="container-button snone" data-button-copy="false" data-status="Nada para ser copiado">

            <button class="btns btn-copiar">
                Copiar
                <i class="ph ph-copy"></i>                            
            </button>
            
        </div>                    
    </section>
    
</main>            
</div>
`
