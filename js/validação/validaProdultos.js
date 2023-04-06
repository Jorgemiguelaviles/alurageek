const buttonProdutos=document.querySelector("#buttonProdultos")

const respostasProdultos = {
  url: {
    valueMissing: "Desculpe, nenhum caracter foi declarado no campo url.",
    patternMismatch: "Caracteres inválidos dentro do campo url.",
    tooLong: "Número de caracteres inválidos no campo url.",
    tooShort: "Número de caracteres inválidos no campo url.",
    
  },
  categoria: {
    valueMissing: "Desculpe, nenhum caracter foi declarado no campo categoria.",
    patternMismatch: "Caracteres inválidos dentro do campo categoria.",
    tooLong: "Número de caracteres inválidos no campo categoria.",
    tooShort: "Número de caracteres inválidos no campo categoria.",
  },
  nome: {
    valueMissing: "Desculpe, nenhum caracter foi declarado no campo nome.",
    patternMismatch: "Caracteres inválidos dentro do campo nome.",
    tooLong: "Número de caracteres inválidos no campo nome.",
    tooShort: "Número de caracteres inválidos no campo nome.",
  },
  preco: {
    valueMissing: "Desculpe, nenhum caracter foi declarado no campo preco.",
    patternMismatch: "Caracteres inválidos dentro do campo preco.",
    tooLong: "Número de caracteres inválidos no campo preco.",
    tooShort: "Número de caracteres inválidos no campo preco.",
  },
  descricao: {
    valueMissing: "Desculpe, nenhum caracter foi declarado no campo descricao.",
    patternMismatch: "Caracteres inválidos dentro do campo descricao.",
    tooLong: "Número de caracteres inválidos no campo descricao.",
    tooShort: "Número de caracteres inválidos no campo descricao.",
  },
};

function validarUrl(url){
  const resultado = document.createElement("p");

  if (url.validity.valueMissing) {
    const conteudo = `<p>${respostasProdultos.url.valueMissing}</p>`;
    resultado.innerHTML = conteudo;
    url.parentNode.replaceChild(resultado, url.parentNode.lastChild);
  } else if (url.validity.patternMismatch) {
    const conteudo = `<p>${respostasProdultos.url.patternMismatch}</p>`;
    resultado.innerHTML = conteudo;
    url.parentNode.replaceChild(resultado, url.parentNode.lastChild);
  } else if (url.validity.tooLong) {
    const conteudo = `<p>${respostasProdultos.url.tooLong}</p>`;
    resultado.innerHTML = conteudo;
    url.parentNode.replaceChild(resultado, url.parentNode.lastChild);
  } else if (url.validity.tooShort) {
    const conteudo = `<p>${respostasProdultos.url.tooShort}</p>`;
    resultado.innerHTML = conteudo;
    url.parentNode.replaceChild(resultado, url.parentNode.lastChild);
  } else {
    estado = true;
    return estado;
  }
}


function validarCategoria(categoria) {
  const resultado = document.createElement("p");

  if (categoria.validity.valueMissing) {
    const conteudo = `<p>${respostasProdultos.categoria.valueMissing}</p>`
    resultado.innerHTML = conteudo
    categoria.parentNode.replaceChild(resultado, categoria.parentNode.lastChild);
  } else if (categoria.validity.patternMismatch) {
    const conteudo = `<p>${respostasProdultos.categoria.patternMismatch}</p>`
    resultado.innerHTML = conteudo
    categoria.parentNode.replaceChild(resultado, categoria.parentNode.lastChild);
  } else if (categoria.validity.tooLong) {
    const conteudo = `<p>${respostasProdultos.categoria.tooLong}</p>`
    resultado.innerHTML = conteudo
    categoria.parentNode.replaceChild(resultado, categoria.parentNode.lastChild);
  } else if (categoria.validity.tooShort) {
    const conteudo = `<p>${respostasProdultos.categoria.tooShort}</p>`
    resultado.innerHTML = conteudo
    categoria.parentNode.replaceChild(resultado, categoria.parentNode.lastChild);
  } else {
    return true;
  }
  return false;
}


function validarNomeProduto(nome){
  const resultado = document.createElement("p");

  if (nome.validity.valueMissing) {
    const conteudo=`<p>${respostasProdultos.nome.valueMissing}</p>`
    resultado.innerHTML=conteudo
    nome.parentNode.replaceChild(resultado, nome.parentNode.lastChild);
  }
  else if (nome.validity.patternMismatch) {
    const conteudo=`<p>${respostasProdultos.nome.patternMismatch}</p>`
    resultado.innerHTML=conteudo
    nome.parentNode.replaceChild(resultado, nome.parentNode.lastChild);
  } 
  else if (nome.validity.tooLong) {
    const conteudo=`<p>${respostasProdultos.nome.tooLong}</p>`
    resultado.innerHTML=conteudo
    nome.parentNode.replaceChild(resultado, nome.parentNode.lastChild);
  } 
  else if (nome.validity.tooShort) {
    const conteudo=`<p>${respostasProdultos.nome.tooShort}</p>`
    resultado.innerHTML=conteudo
    nome.parentNode.replaceChild(resultado, nome.parentNode.lastChild);
  } 
  else {
    
    estado=true
    return estado;
  }
}

function validarPreco(preco){
  const resultado = document.createElement("p");

  if (preco.validity.valueMissing) {
    const conteudo=`<p>${respostasProdultos.preco.valueMissing}</p>`
    resultado.innerHTML=conteudo
    preco.parentNode.replaceChild(resultado, preco.parentNode.lastChild);
  }
  else if (preco.validity.patternMismatch) {
    const conteudo=`<p>${respostasProdultos.preco.patternMismatch}</p>`
    resultado.innerHTML=conteudo
    preco.parentNode.replaceChild(resultado, preco.parentNode.lastChild);
  } 
  else if (preco.validity.tooLong) {
    const conteudo=`<p>${respostasProdultos.preco.tooLong}</p>`
    resultado.innerHTML=conteudo
    preco.parentNode.replaceChild(resultado, preco.parentNode.lastChild);
  } 
  else if (preco.validity.tooShort) {
    const conteudo=`<p>${respostasProdultos.preco.tooShort}</p>`
    resultado.innerHTML=conteudo
    preco.parentNode.replaceChild(resultado, preco.parentNode.lastChild);
  } 
  else {   
    estado=true
    return estado;
  } 
}
function validarDescricao(descricao) {
  const resultado = document.createElement("p");

  if (descricao.validity.valueMissing) {
    const conteudo = `<p>${respostasProdultos.descricao.valueMissing}</p>`;
    resultado.innerHTML = conteudo;
    descricao.parentNode.replaceChild(resultado, descricao.parentNode.lastChild);
  }
  else if (descricao.validity.tooLong) {
    const conteudo = `<p>${respostasProdultos.descricao.tooLong}</p>`;
    resultado.innerHTML = conteudo;
    descricao.parentNode.replaceChild(resultado, descricao.parentNode.lastChild);
  } 
  else if (descricao.validity.tooShort) {
    const conteudo = `<p>${respostasProdultos.descricao.tooShort}</p>`;
    resultado.innerHTML = conteudo;
    descricao.parentNode.replaceChild(resultado, descricao.parentNode.lastChild);
  } 
  else {
    return true;
  }
  return false;
}
function validarProdutos(){
  let urlValida = false;
  let categoriaValida = false;
  let nomeValido = false;
  let precoValido = false;
  let descricaoValida = false;
  
  const dados = document.querySelectorAll("[data-info]");
  dados.forEach((dado)=>{
    if(dado.name == "categorias"){
      categoriaValida=validarCategoria(dado)
    }
    else if(dado.name == "nomeDoProduto"){
      nomeValido=validarNomeProduto(dado)
    }
    else if(dado.name == "preco"){
      precoValido=validarPreco(dado)
    }
    else if(dado.name == "descricao"){
      descricaoValida=validarDescricao(dado)
    }
    else if(dado.name == "url"){
      urlValida=validarUrl(dado)
    }
  });
  if (urlValida && categoriaValida && nomeValido && precoValido && descricaoValida) {
    console.log("ok6")
    estado=true;
    return estado
  } else {
    estado=false
    return estado;
  }
  
}

function situacaoProdutos(validacao){
  console.log(validacao);
}



buttonProdutos.addEventListener("click", function(){
  const validacao = validarProdutos();
  situacaoProdutos(validacao);
});
