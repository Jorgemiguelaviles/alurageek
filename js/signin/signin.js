
const divCabecalho1=document.createElement("div")
divCabecalho1.classList.add("cabecalho__principal")

const divCabecalho2=document.createElement("div")


const divRodape1=document.createElement("div")
divRodape1.classList.add("rodape__principal")

const divRodape2=document.createElement("div")

const divRodape3=document.createElement("div")
divRodape3.classList.add("faleConosco")

const formulario=document.createElement("form")
formulario.classList.add("principal__form")



const titulo=(divCabecalho1)=>{
  const cabecalho=document.querySelector("#header")
const conteudo=`
<div>
   <img src="../../assets/img/controle.svg" alt="logo">
   <p class="cabecalho__titulo"> geek</p>
</div>
<input type="text" placeholder="o que deseja encontrar" class=cabecalho__pesquisa>
    `
  divCabecalho1.innerHTML=conteudo
  cabecalho.appendChild(divCabecalho1)
}

const procura=(divCabecalho2)=>{
  const cabecalho=document.querySelector("#header")
const conteudo=` 

<a href="/telas/signin.html" class=cabecalho__login>sign in</a> 
<a href="/telas/login.html" class=cabecalho__signin>login</a>`
divCabecalho2.innerHTML=conteudo
cabecalho.appendChild(divCabecalho2)
  
}

const form=(formulario)=>{
  let corpo=document.querySelector("#principal")
  let conteudo=`
  <p class=principal__texto>cadastre-se</p>
       <input type="email" class=principal__cadastro id="principal__cadastro__email" data-cadastro name=email__cadastro placeholder="escreva seu email"  required maxlength="30" minlength="15" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
        
        
       <ol>email deve conter 
         <li class=principal__txt>Deve começar com um ou mais caracteres alfabéticos em minúsculas, números, ponto, underscore, percent ou sinal de mais (+), seguido de uma arroba (@).</li>
         <li class=principal__txt>Deve ter um ou mais caracteres alfabéticos em minúsculas, números, ponto ou hífen, seguido de um ponto (.) e dois ou mais caracteres alfabéticos em minúsculas.</li>
         <li class=principal__txt>O endereço de email não deve terminar com um ponto (.), e não pode haver espaços em branco em qualquer lugar.</li>
         <li class=principal__txt>ter no minimo de 15char e no maximo 30 chars</li>
         <li class=principal__txt>não pode estar em branco</li>
       </ol>

      

      
      
       <input type="password" class=principal__cadastro id="principal__cadastro__senha" data-cadastro name=senha__cadastro placeholder="escreva sua senha"  required maxlength="50" minlength="8" required>
 

 
        <ol>senha deve conter
         <li class=principal__txt>um digito especial</li>
         <li class=principal__txt>uma letra minuscula</li>
         <li class=principal__txt>uma letra maiuscula</li>
         <li class=principal__txt>ter no minimo 8 caracteres e no maximo 50 caracteres</li>
         <li class=principal__txt>não pode estar em branco</li>
       </ol>
            
       <input type="text" placeholder="Digite seu nome" class=principal__cadastro  placeholder="digite seu nome"  id="principal__cadastro__nome" data-cadastro name=nome__cadastro required maxlength="50" minlength="8" required
       >
       
        
       <ol>
       <li class=principal__txt>permite apenas letras, espaço e hífen</li>
       <li class=principal__txt>não pode estar em branco</li>
        </ol>
       
       <input type="text" placeholder="Digite seu usuario" class=principal__cadastro   id="principal__cadastro__usuario" data-cadastro name=usuario__cadastro required maxlength="10" minlength="8" required> 
    
      
       <ol>
       <li class=principal__txt>permite letras minúsculas, números, ponto, underscore e hífen</li>
         <li class=principal__txt>não pode estar em branco</li>
         <li>minimo de 8 caracteres e maximo de 10</li>
      </ol>
       
       <input type="date" placeholder="digite sua data de nascimento" class=principal__cadastro required data-cadastro name=nascimento__cadastro required >
      
   <input type="button" value="entrar" class="principal__botão" id="buttonSignin" required>
`
  

  formulario.innerHTML=conteudo
  corpo.appendChild(formulario)
}









const tituloRodape=(divRodape1)=>{
  let rodape=document.querySelector("#footer")
  const conteudo=`
  <img src="../../assets/img/controle.svg" alt="logo">
       <p class="rodape__titulo"> geek</p>`
  divRodape1.innerHTML=conteudo
  rodape.appendChild(divRodape1)
}

const infoRodape=(divRodape2)=>{
  let rodape=document.querySelector("#footer")
  const conteudo=`       
  <a href="#" class=rodape__info><p>Quem somos nós</p></a>
  <a href="#" class=rodape__info><p>Politica de privacidade</p></a>
  <a href="#" class=rodape__info><p>Programa fidelidade</p></a>
  <a href="#" class=rodape__info><p>Nossas lojas</p></a>
  <a href="#" class=rodape__info><p>Quero ser franquiado</p></a>
  <a href="#" class=rodape__info><p>Anuncie aqui</p></a>`
  divRodape2.innerHTML=conteudo
  rodape.appendChild(divRodape2)
}

const faleConoscoRodape=(divRodape3)=>{
  let rodape=document.querySelector("#footer")
  const conteudo=`    <p class=faleConosco__texto>fale conosco</p>
  <div class=faleConosco__entreEmContato>
       <input type="text" class=faleConosco__nome data-dados placeholder="digite seu nome completo" name="nome" id="nome" maxlength=40 minlength=10 required>
       
       
       <input type="text" class=faleConosco__email placeholder="escreva a mensagem a ser enviada" data-dados name="email" id="email" maxlength=100 minlength=15 required>
        
         
       <input type="button" value="enviar mensagem" data-mensagem class=faleConosco__botao id=buttonSend>
       <ul class=valor>
  </div>
       </ul>`
  
  divRodape3.innerHTML=conteudo
  rodape.appendChild(divRodape3)
}


titulo(divCabecalho1)
procura(divCabecalho2)
form(formulario)
tituloRodape(divRodape1)
infoRodape(divRodape2)
faleConoscoRodape(divRodape3)