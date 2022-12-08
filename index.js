const exibeEndereco= (endereco)=> {    
    let Cidade= document.getElementById("cidade");
    Cidade.value= endereco.cidade;

    let Estado= document.getElementById("estado");
    Estado.value= endereco.estado;

    let Endereco= document.getElementById("Endereco");
    Endereco.value= endereco.Endereco;

    let Bairro= document.getElementById("bairro");
    Bairro.value= endereco.bairro;

    let Complemento= document.getElementById("complemento");
    Complemento.value= endereco.complemento;
};

const urlEnderecoDesejado= (cep)=> {
    const urlEndereco= `https://api.postmon.com.br/v1/cep/${cep}`;

    return urlEndereco;
};

const pesquisarCEP= async (evento)=> {
    evento.preventDefault();

    let CEP= document.getElementById("cep").value;
    const url= urlEnderecoDesejado(CEP);

    const response = await fetch(url);
    const result = await response.json();
    exibeEndereco(result);
};

const iniciar= async ()=> {
    document.getElementById('pesquisa').addEventListener('click', pesquisarCEP);
};

document.addEventListener('DOMContentLoaded', iniciar);