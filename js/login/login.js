const divCabecalho1=document.createElement("div")
divCabecalho1.classList.add("cabecalho__principal")

const divCabecalho2=document.createElement("div")


const divRodape1=document.createElement("div")
divRodape1.classList.add("cabecalho__principal")

const divRodape2=document.createElement("div")

const divRodape3=document.createElement("div")
divRodape3.classList.add("faleConosco")

const formulario=document.createElement("principal__form")
formulario.classList.add("form")




const titulo=(divCabecalho1)=>{
  const cabecalho=document.querySelector("#header")
const conteudo=`
  <img src="../img/controle.svg" alt="logo">
  <p class="cabecalho__titulo"> geek</p>

      
     `
  divCabecalho1.innerHTML=conteudo
  cabecalho.appendChild(divCabecalho1)
}

const procura=(divCabecalho2)=>{
  const cabecalho=document.querySelector("#header")
const conteudo=` 
<input type="text" placeholder="o que deseja encontrar" class=cabecalho__pesquisa>
<a href="signin.html" class=cabecalho__login>sign in</a>  
<a href="login.html" class=cabecalho__signin>login</a>`
divCabecalho2.innerHTML=conteudo
cabecalho.appendChild(divCabecalho2)
  
}

const form=(formulario)=>{
  let corpo=document.querySelector("#principal")
  let conteudo=`<p class=principal__texto>iniciar sessão</p>
       <input id="email_form_login" type="email" placeholder="escreva seu email" class=principal__cadastro data-email>
       <input id="senha_form_login" type="password" placeholder="escreva sua senha" class=principal__cadastro data-senha>
       <input id="form_btn" type="button" value=entrar class=principal__botão >
  `
formulario.innerHTML=conteudo
  corpo.appendChild(formulario)
  
}











const tituloRodape=(divRodape1)=>{
  let rodape=document.querySelector("#footer")
  const conteudo=`
  <img src="../img/controle.svg" alt="logo">
       <p class="cabecalho__titulo"> geek</p>`
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
       <input type="text" placeholder="digite seu nome completo" class=faleConosco__nome data-dados name="nome" id="nome"
         maxlength=40 minlength=10 required>
       <input type="text" placeholder="escreva a mensagem a ser enviada" class=faleConosco__email data-dados name="email"
         maxlength=100 minlength=15 required>
       <input type="button" value="enviar mensagem" data-mensagem class=faleConosco__botao>
       <ul class=valor>

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