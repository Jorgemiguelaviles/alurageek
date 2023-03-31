// data-cadastro name=email__cadastro
// data-cadastro name=senha__cadastro
// data-cadastro name=nome__cadastro
// data-cadastro name=usuario__cadastro
// data-cadastro name=nascimento__cadastro

const cadastro = document.querySelectorAll("[data-cadastro]")

const respostasSiginin = {
  email: {
    valueMissing: "Desculpe, nenhum caracter foi declarado.",
    patternMismatch: "Caracteres inválidos.",
    tooLong: "Número de caracteres inválidos.",
    tooShort: "Número de caracteres inválidos.",
    
  },
  senha: {
    valueMissing: "Desculpe, nenhum caracter foi declarado.",
    patternMismatch: "Caracteres inválidos.",
    tooLong: "Número de caracteres inválidos.",
    tooShort: "Número de caracteres inválidos.",
  },

  nome: {
    valueMissing: "Desculpe, nenhum caracter foi declarado.",
    patternMismatch: "Caracteres inválidos.",
    tooLong: "Número de caracteres inválidos.",
    tooShort: "Número de caracteres inválidos.",},

  usuario: {
    valueMissing: "Desculpe, nenhum caracter foi declarado.",
    patternMismatch: "Caracteres inválidos.",
    tooLong: "Número de caracteres inválidos.",
    tooShort: "Número de caracteres inválidos.",},

  nascimento: {
    valueMissing: "Desculpe, nenhum caracter foi declarado.",
    patternMismatch: "Caracteres inválidos.",
    tooLong: "Número de caracteres inválidos.",
    tooShort: "Número de caracteres inválidos.",}}

validarEmailSignin = (email)=>{

  if(email.validity.valueMissing){
    
  }
  else if(email.validity.patternMismatch){
    
  }
  else if(email.validity.tooLong){
    
  }
  else if(email.validity.tooShort){
    
  }
  
  }

validarSenhaSignin = (senha)=>{
  
  if(senha.validity.valueMissing){
    
  }
  else if(senha.validity.patternMismatch){
    
  }
  else if(senha.validity.tooLong){
    
  }
  else if(senha.validity.tooShort){
    
  }
}
validarNomeSignin = (nome)=>{
  if(nome.validity.valueMissing){
    
  }
  else if(nome.validity.patternMismatch){
    
  }
  else if(nome.validity.tooLong){
    
  }
  else if(nome.validity.tooShort){
    
  }
}
validarUsuarioSignin = (usuario)=>{
  if(usuario.validity.valueMissing){
    
  }
  else if(usuario.validity.patternMismatch){
    
  }
  else if(usuario.validity.tooLong){
    
  }
  else if(usuario.validity.tooShort){
    
  }
}
validarNascimentoSignin = (nascimento)=>{
  
}

const validarSignin = (elemento)=>{
  if (elemento.name=="email__cadastro")
  { validarEmailSignin(elemento) 
    }
  if (elemento.name=="senha__cadastro")
  { validarSenhaSignin(elemento) 
    }
  if (elemento.name=="nome__cadastro")
  { validarNomeSignin(elemento) 
    }
  if (elemento.name=="usuario__cadastro")
  { validarUsuarioSignin(elemento) 
    }
  if (elemento.name=="nascimento__cadastro")
  { validarNascimentoSignin(elemento) 
    }
  
  
  
}

const validandoSignin=cadastro.forEach((cadastro)=>{
  cadastro.addEventListener("blur",()=>validarSignin(cadastro))
})