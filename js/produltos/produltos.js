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
  let conteudo=`<p class=principal__texto>adicionar novo produlto</p>
       <input name="url" type="url" placeholder="url da imagem" class=principal__url id="principal__url" data-info required id="url" pattern="/^https?:\/\/[^\s/$.?#].[^\s]*$/">
       
       
       <select name="categorias" class=principal__tipos id=categorias data-info required>
         <option value="fisrt">games</option>
         <option value="second">star wars</option>
         <option value="third">diversos</option>
       </select>
       
       <input name=nomeDoProduto type="text" id=nomeDoProdulto placeholder="Nome do produto "class=principal__nomeDoProdulto pattern="^[a-zA-Z0-9À-ú\s\-'()&+,.:;?!]+$" data-info required>
       
       
       <input name=preco type="number" min=0 max=10000 placeholder="preço do produlto" id=preco class=principal__valor pattern="^\d+(\.\d{1,2})?$" data-info required>
      
       
       <input name=descricao type="text" id=descricao placeholder="Descrição do produlto" class=principal__descricao data-info required>
       
       
       <input type="button" value=entrar id=buttonProdultos class=principal__botão >
      
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
        
         
       <input type="button" value="enviar mensagem" data-mensagem class=faleConosco__botao id="buttonSend">
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