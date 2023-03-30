tela=()=>{
const section=document.createElement("section")
section.classList.add("principal__corpo")
const divBanner=document.createElement("div")

const divCabecalho1=document.createElement("div")
divCabecalho1.classList.add("cabecalho__principal")
const divCabecalho2=document.createElement("div")
const divRodape1=document.createElement("div")
divRodape1.classList.add("cabecalho__principal")
const divRodape2=document.createElement("div")
const divRodape3=document.createElement("div")
divRodape3.classList.add("faleConosco")



const titulo=(divCabecalho1)=>{
  const cabecalho=document.querySelector("#header")
const conteudo=`
  <img src="img/controle.svg" alt="logo">
  <p class="cabecalho__titulo"> geek</p>
    `
  divCabecalho1.innerHTML=conteudo
  cabecalho.appendChild(divCabecalho1)
}

const procura=(divCabecalho2)=>{
  const cabecalho=document.querySelector("#header")
const conteudo=` 
<input type="text" placeholder="o que deseja encontrar" class=cabecalho__pesquisa>
<a href="html/signin.html" class=cabecalho__login>sign in</a> 
<a href="html/login.html" class=cabecalho__signin>login</a>`
divCabecalho2.innerHTML=conteudo
cabecalho.appendChild(divCabecalho2)
  
}



const banner=(divBanner)=>{
const principal= document.querySelector("#principal")
const conteudo=` 
<a href=# ><img src=img/Hero.svg class=principal__banner></img></a>
`
divBanner.innerHTML=conteudo
principal.appendChild(divBanner)
  
}



const Tipo=(section)=>{
let principal=document.querySelector("#principal")
let divTipo=document.createElement("div")
let conteudo=`
<div class=principal__subcabecalho>
  <h3 class=principal__titulo>Star Wars</h3>
  <a href="html/todososprodultos.html" class=principal__ver>ver tudo</a>
</div>` 
divTipo.innerHTML=conteudo
section.appendChild(divTipo)
principal.appendChild(section)

  
}

const Produlto=(section)=>{
  let principal=document.querySelector("#principal")
  let divProdulto=document.createElement("div")
  let conteudo=`
    <div class=principal__produlto>
      <img src="img/produltos/starwars/starwars1.svg" alt="starwars1">
      <p>Nome vindo de dado externo</p>
      <p>Valor vindo de dado externo</p>
      <a href="#" class=principal__verProdulto>Ver produlto</a>
    </div>`
    
divProdulto.innerHTML=conteudo
  section.appendChild(divProdulto)
  principal.appendChild(section)
  
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

banner(divBanner)
for (let i = 0; i < 3; i++) {
   Tipo(section)
  
  for (let i = 0; i < 6; i++) {
    Produlto(section) ;
  }
}


tituloRodape(divRodape1)
infoRodape(divRodape2)
faleConoscoRodape(divRodape3)}

tela()






