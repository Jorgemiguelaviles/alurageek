tela=()=>{
const section=document.createElement("section")
section.classList.add("principal__corpo")
const divBanner=document.createElement("div")
const divCabecalho1=document.createElement("div")
divCabecalho1.classList.add("cabecalho__principal")
const divCabecalho2=document.createElement("div")

const divRodape1=document.createElement("div")
divRodape1.classList.add("rodape__principal")
const divRodape2=document.createElement("div")
const divRodape3=document.createElement("div")
divRodape3.classList.add("faleConosco")



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

<a href="../../telas/signin.html" class=cabecalho__login>sign in</a> 
<a href="../../telas/login.html" class=cabecalho__signin>login</a>`
divCabecalho2.innerHTML=conteudo
cabecalho.appendChild(divCabecalho2)
  
}



const banner=(divBanner)=>{
const principal= document.querySelector("#principal")
const conteudo=` 
<img src=../../assets/img/banner.jpg class=principal__banner></img>
<h3 class=principal__titulo__banner>Dezembro promocional</h3>
<p class=principal__descricao__banner>Produltos selecionados com 33% de desconto</p>
<input type=button value="Ver Consoles" class=principal__button
>
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
  <div class=principal__icon>
  <a href="telas/todososprodultos.html" class=principal__ver>ver tudo</a>
  <img src="../../assets/img/seta.svg">
  </div>
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
      <img src="../../assets/img/produltos/starwars/starwars1.svg" alt="starwars1">
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