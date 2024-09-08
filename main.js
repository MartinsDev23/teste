let form = document.getElementById("idForm");
let imgAprovado = '<img src="./images/images/aprovado.png" alt="Emoji celebrando"/>';
let imgReprovado = '<img src="./images/images/reprovado.png" alt="Emoji decepcionado"/>';
let atividades = [];
let notas = [];
let spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
let spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
let notaMinima = parseFloat(prompt('Digite a nota minima:'));

let linhas = ('');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});


function adicionaLinha(){
    let inputNomeAtividade = document.getElementById("nome-atividade");
    let inputNotaAtividade = document.getElementById("nota-atividade");

    if (atividades.includes(inputNomeAtividade.value)){
        alert('Atividade já foi inserida!')
    }
    else {

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    }
}

function atualizaTabela(){
    let corpoTable = document.querySelector('tbody')
    corpoTable.innerHTML = linhas;
}

function atualizaMediaFinal() {
    let mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}   

function calculaMediaFinal() {
    let somaDasNotas = 0;
    
    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}

