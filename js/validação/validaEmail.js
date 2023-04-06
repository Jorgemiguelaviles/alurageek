//id = buttonSend
const button= document.querySelector("#buttonSend")

const respostas = {
  nome: {
    valueMissing: "Desculpe, nenhum caracter foi declarado no campo nome.",
    patternMismatch: "Caracteres inválidos dentro do campo nome.",
    tooLong: "Número de caracteres inválidos no campo nome.",
    tooShort: "Número de caracteres inválidos no campo nome.",
    
  },
  email: {
    valueMissing: "Desculpe, nenhum caracter foi declarado no campo email.",
    patternMismatch: "Caracteres inválidos dentro do campo email.",
    tooLong: "Número de caracteres inválidos no campo email.",
    tooShort: "Número de caracteres inválidos no campo email.",
  },
};


const validarNome = (nome) => {
  const resultado = document.createElement("p");

  if (nome.validity.valueMissing) {
    const conteudo=`<p>${respostas.nome.valueMissing}</p>`
    resultado.innerHTML=conteudo
    nome.parentNode.replaceChild(resultado, nome.parentNode.lastChild);
  }
  else if (nome.validity.patternMismatch) {
    const conteudo=`<p>${respostas.nome.patternMismatch}</p>`
    resultado.innerHTML=conteudo
    nome.parentNode.replaceChild(resultado, nome.parentNode.lastChild);
  } 
  else if (nome.validity.tooLong) {
    const conteudo=`<p>${respostas.nome.tooLong}</p>`
    resultado.innerHTML=conteudo
    nome.parentNode.replaceChild(resultado, nome.parentNode.lastChild);
  } 
  else if (nome.validity.tooShort) {
    const conteudo=`<p>${respostas.nome.tooShort}</p>`
    resultado.innerHTML=conteudo
    nome.parentNode.replaceChild(resultado, nome.parentNode.lastChild);
  } 
  else {
    
    estado=true
    return estado;
  }
};


const validarEmail = (email) => {
  const resultado=document.createElement("p")
  
  if (email.validity.valueMissing) {
    const conteudo=`<p>${respostas.email.valueMissing}</p>`
    resultado.innerHTML=conteudo
    email.parentNode.replaceChild(resultado, email.parentNode.lastChild);
    
  } 
  else if (email.validity.patternMismatch) {
    const conteudo=`<p>${respostas.email.patternMismatch}</p>`
    resultado.innerHTML=conteudo
    email.parentNode.replaceChild(resultado, email.parentNode.lastChild);
  } 
  else if (email.validity.tooLong) {
    const conteudo=`<p>${respostas.email.tooLong}</p>`
    resultado.innerHTML=conteudo
    email.parentNode.replaceChild(resultado, email.parentNode.lastChild);
  } 
  else if (email.validity.tooShort) {
    const conteudo=`<p>${respostas.email.tooShort}</p>`
    resultado.innerHTML=conteudo
    email.parentNode.replaceChild(resultado, email.parentNode.lastChild);
  } 
  else {
    const conteudo=`<p>${respostas.email.ok}</p>`
    resultado.innerHTML=conteudo
    email.parentNode.replaceChild(resultado, email.parentNode.lastChild)
      estado=true;
    return estado
  }
};


function validar() {
  let nomeValido = false;
  let emailValido = false;
  const dados = document.querySelectorAll("[data-dados]");
  
  dados.forEach((dados) => {
    if (dados.name == "nome") {
      nomeValido = validarNome(dados);
    } else if (dados.name == "email") {
      emailValido = validarEmail(dados);
    }
  });
  if (nomeValido && emailValido) {
    estado=true;
    return estado
  } else {
    estado=false
    return estado;
  }
}


function situacao(validacao) {
 console.log(validacao)
}

button.addEventListener("click", function() {
  const validacao = validar();
  situacao(validacao);
});





















