// data-cadastro name=email__cadastro
// data-cadastro name=senha__cadastro
// data-cadastro name=nome__cadastro
// data-cadastro name=usuario__cadastro
// data-cadastro name=nascimento__cadastro

const cadastro = document.querySelectorAll("[data-cadastro]")

const respostas = {
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


const validar = (elemento)=>{
  if (elemento.name=="email__cadastro")
  {console.log("ok1")}
  if (elemento.name=="senha__cadastro")
  {console.log("ok2")}
  if (elemento.name=="nome__cadastro")
  {console.log("ok3")}
  if (elemento.name=="usuario__cadastro")
  {console.log("ok4")}
  if (elemento.name=="nascimento__cadastro")
  {console.log("ok5")}
  
  
  
}

const validando=dados.forEach((dados)=>{
  dados.addEventListener("blur",()=>validar(dados))
})