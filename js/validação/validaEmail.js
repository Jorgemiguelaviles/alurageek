const dados = document.querySelectorAll("[data-dados]");

const respostas = {
  nome: {
    valueMissing: "Desculpe, nenhum caracter foi declarado.",
    patternMismatch: "Caracteres inválidos.",
    tooLong: "Número de caracteres inválidos.",
    tooShort: "Número de caracteres inválidos.",
    
  },
  email: {
    valueMissing: "Desculpe, nenhum caracter foi declarado.",
    patternMismatch: "Caracteres inválidos.",
    tooLong: "Número de caracteres inválidos.",
    tooShort: "Número de caracteres inválidos.",
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
    const conteudo=`<p>${respostas.nome.ok}</p>`
    resultado.innerHTML=conteudo
    nome.parentNode.replaceChild(resultado, nome.parentNode.lastChild);
    return true;
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
    email.parentNode.replaceChild(resultado, email.parentNode.lastChild);
  }
};

const validar = (elemento) => {
  
  
  if (elemento.name == "nome") {
    nomeValido = validarNome(elemento);
  } else if (elemento.name == "email") {
    emailValido = validarEmail(elemento);    
  }
  

};


const validando=dados.forEach((dados) => {
  dados.addEventListener("blur", () => validar(dados));
});


