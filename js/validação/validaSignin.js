const respostasSignin = {
  email: {
    valueMissing: "Desculpe, nenhum caracter foi declarado dentro do campo email.",
    patternMismatch: "Caracteres inválidos dentro do campo email.",
    tooLong: "Número de caracteres inválidos dentro do campo email.",
    tooShort: "Número de caracteres inválidos dentro do campo email.",
    
  },
  senha: {
    valueMissing: "Desculpe, nenhum caracter foi declarado dentro do campo senha.",
    patternMismatch: "Caracteres inválidos dentro do campo senha.",
    tooLong: "Número de caracteres inválidos dentro do campo senha.",
    tooShort: "Número de caracteres inválidos dentro do campo senha.",
  },

  nome: {
    valueMissing: "Desculpe, nenhum caracter foi declarado dentro do campo nome.",
    patternMismatch: "Caracteres inválidos dentro do campo nome.",
    tooLong: "Número de caracteres inválidos dentro do campo nome.",
    tooShort: "Número de caracteres inválidos dentro do campo nome.",},

  usuario: {
    valueMissing: "Desculpe, nenhum caracter foi declarado dentro do campo usuario.",
    patternMismatch: "Caracteres inválidos dentro do campo usuario.",
    tooLong: "Número de caracteres inválidos dentro do campo usuario.",
    tooShort: "Número de caracteres inválidos dentro do campo usuario.",},

  nascimento: {
    valueMissing: "Desculpe, nenhum caracter foi declarado dentro do campo nascimento.",
    patternMismatch: "Caracteres inválidos dentro do campo nascimento.",
    tooLong: "Número de caracteres inválidos dentro do campo nascimento.",
    tooShort: "Número de caracteres inválidos dentro do campo nascimento.",}}


validarEmailSignin = (email)=>{
  const resultado = document.createElement("p");
  
  if(email.validity.valueMissing){
    const conteudo=`<p>${respostasSignin.email.valueMissing}</p>`
    resultado.innerHTML=conteudo
    email.parentNode.replaceChild(resultado, email.parentNode.lastChild);
  }
  else if(email.validity.patternMismatch){
    const conteudo=`<p>${respostasSignin.email.patternMismatch}</p>`
    resultado.innerHTML=conteudo
    email.parentNode.replaceChild(resultado, email.parentNode.lastChild);
    
  }
  else if(email.validity.tooLong){
    const conteudo=`<p>${respostasSignin.email.tooLong}</p>`
    resultado.innerHTML=conteudo
    email.parentNode.replaceChild(resultado, email.parentNode.lastChild);
    
  }
  else if(email.validity.tooShort){
    const conteudo=`<p>${respostasSignin.email.tooShort}</p>`
    resultado.innerHTML=conteudo
    email.parentNode.replaceChild(resultado, email.parentNode.lastChild);
    
  }
  else{
    const estado=true
    return estado;
  }
}


validarSenhaSignin = (senha)=>{
  const resultado = document.createElement("p");
  
  if(senha.validity.valueMissing){
     const conteudo=`<p>${respostasSignin.senha.valueMissing}</p>`
    resultado.innerHTML=conteudo
    senha.parentNode.replaceChild(resultado, senha.parentNode.lastChild);
  }
  else if(senha.validity.patternMismatch){
     const conteudo=`<p>${respostasSignin.senha.patternMismatch}</p>`
    resultado.innerHTML=conteudo
    senha.parentNode.replaceChild(resultado, senha.parentNode.lastChild);
  }
  else if(senha.validity.tooLong){
     const conteudo=`<p>${respostasSignin.senha.tooLong}</p>`
    resultado.innerHTML=conteudo
    senha.parentNode.replaceChild(resultado, senha.parentNode.lastChild);
  }
  else if(senha.validity.tooShort){
     const conteudo=`<p>${respostasSignin.senha.tooShort}</p>`
    resultado.innerHTML=conteudo
    senha.parentNode.replaceChild(resultado, senha.parentNode.lastChild);
  }
  else{
    const estado=true
    return estado;
  }
}

validarNomeSignin = (nome)=>{
  const resultado = document.createElement("p");
  
  if(nome.validity.valueMissing){
     const conteudo=`<p>${respostasSignin.nome.valueMissing}</p>`
    resultado.innerHTML=conteudo
    nome.parentNode.replaceChild(resultado, nome.parentNode.lastChild);
    
  }
  else if(nome.validity.patternMismatch){
      const conteudo=`<p>${respostasSignin.nome.patternMismatch}</p>`
    resultado.innerHTML=conteudo
    nome.parentNode.replaceChild(resultado, nome.parentNode.lastChild);
    
  }
  else if(nome.validity.tooLong){
      const conteudo=`<p>${respostasSignin.nome.tooLong}</p>`
    resultado.innerHTML=conteudo
    nome.parentNode.replaceChild(resultado, nome.parentNode.lastChild);
    
  }
  else if(nome.validity.tooShort){
    const conteudo=`<p>${respostasSignin.nome.tooShort}</p>`
    resultado.innerHTML=conteudo
    nome.parentNode.replaceChild(resultado, nome.parentNode.lastChild);
    
  }
  
   else{
    const estado=true
    return estado;
  }
}

validarUsuarioSignin = (usuario)=>{
  const resultado = document.createElement("p");
  
  if(usuario.validity.valueMissing){
     const conteudo=`<p>${respostasSignin.usuario.valueMissing}</p>`
    resultado.innerHTML=conteudo
    usuario.parentNode.replaceChild(resultado, usuario.parentNode.lastChild);
    
  }
  else if(usuario.validity.patternMismatch){
     const conteudo=`<p>${respostasSignin.usuario.patternMismatch}</p>`
    resultado.innerHTML=conteudo
    usuario.parentNode.replaceChild(resultado, usuario.parentNode.lastChild);
    
  }
  else if(usuario.validity.tooLong){
     const conteudo=`<p>${respostasSignin.usuario.tooLong}</p>`
    resultado.innerHTML=conteudo
    usuario.parentNode.replaceChild(resultado, usuario.parentNode.lastChild);
    
  }
  else if(usuario.validity.tooShort){
     const conteudo=`<p>${respostasSignin.usuario.tooShort}</p>`
    resultado.innerHTML=conteudo
    usuario.parentNode.replaceChild(resultado, usuario.parentNode.lastChild);
    
  }
  else{

    const estado=true
    return estado;
  }
}

validarNascimentoSignin = (nascimento) => {
  const resultado = document.createElement("p");
  if (nascimento.validity.valueMissing) {
    const conteudo = `<p>${respostasSignin.nascimento.valueMissing}</p>`;
    resultado.innerHTML = conteudo;
    nascimento.parentNode.replaceChild(resultado, nascimento.parentNode.lastChild);
  } else if (nascimento.validity.patternMismatch) {
    const conteudo = `<p>${respostasSignin.nascimento.patternMismatch}</p>`;
    resultado.innerHTML = conteudo;
    nascimento.parentNode.replaceChild(resultado, nascimento.parentNode.lastChild);
  } else if (nascimento.validity.tooLong) {
    const conteudo = `<p>${respostasSignin.nascimento.tooLong}</p>`;
    resultado.innerHTML = conteudo;
    nascimento.parentNode.replaceChild(resultado, nascimento.parentNode.lastChild);
  } else if (nascimento.validity.tooShort) {
    const conteudo = `<p>${respostasSignin.nascimento.tooShort}</p>`;
    resultado.innerHTML = conteudo;
    nascimento.parentNode.replaceChild(resultado, nascimento.parentNode.lastChild);
  } 
  
  else {
  const [dia, mes, ano] = nascimento.value.split('/');
const dataNascimento = new Date(ano, mes - 1, dia, 0, 0, 0, 0);

const dataAtual = new Date();
const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
const mesAtual = dataAtual.getMonth() + 1;
const mesNascimento = dataNascimento.getMonth() + 1;
if (mesAtual < mesNascimento || (mesAtual === mesNascimento && dataAtual.getDate() < dataNascimento.getDate())) {
  const conteudo = "<p>Usuário é menor de idade</p>";
  resultado.innerHTML = conteudo;
  nascimento.parentNode.replaceChild(resultado, nascimento.parentNode.lastChild);
}

    
    
    }
  
};





const buttonSignin = document.querySelector("#buttonSignin")
function getCadastro(){
  let nomeValido = false
  let emailValido = false
  let senhaValida = false
  let usuarioValido = false
  let nascimentoValido= false
  const dados = document.querySelectorAll("[data-cadastro]")
  dados.forEach((dados)=>{
    if (dados.name=="email__cadastro")
  { emailValido=validarEmailSignin(dados) 
    }
  if (dados.name=="senha__cadastro")
  { senhaValida=validarSenhaSignin(dados) 
    }
  if (dados.name=="nome__cadastro")
  { nomeValido=validarNomeSignin(dados) 
    }
  if (dados.name=="usuario__cadastro")
  { usuarioValido=validarUsuarioSignin(dados) 
    }
  if (dados.name=="nascimento__cadastro")
  { nascimentoValido=validarNascimentoSignin(dados) 
    }
  })
  
  if (nomeValido && emailValido && senhaValida && usuarioValido && nascimentoValido) {
    const estado=true;
    return estado
  } else {
    const estado=true
    return estado;
  }
}
  

function situacaoSignin(cadastro) {
  console.log(cadastro);
}


buttonSignin.addEventListener("click", function() {
  const cadastro = getCadastro();
  situacaoSignin(cadastro);
});