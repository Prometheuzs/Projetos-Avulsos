

let titulo;
let paragraph;
let lista;

let abrirEditarQuadroForm = true

let indexQuadros = 1

function verificaoTamanhoLista(idQuadro){
    let indexListaAtual = 0
    let boleanoVer = false
    let verificacao = 'notnull'
    while(boleanoVer == false){
        console.log(indexListaAtual);
        
        verificacao = document.getElementById(`q${idQuadro}-Li${indexListaAtual+1}`)
        indexListaAtual++
        if(verificacao == null){
            boleanoVer = true
            indexListaAtual--
        }
        
        
    }
    return indexListaAtual
}


function editQuadro(idQuadro){

    if(abrirEditarQuadroForm==false){
        return
    }

    const botaoFinalizar = document.getElementById('botaoFinalizar');
    const editarQuadroForm = document.getElementById('editarQuadroForm')
    editarQuadroForm.hidden = false;
    
    const tamanhoLista = verificaoTamanhoLista(idQuadro);
    
    const formTitulo = document.getElementById('formTitulo');
    const formParagraph = document.getElementById('formParagraph');
    const formList = document.getElementById('formLista');
    
    titulo = document.getElementById(`q${idQuadro}-Titulo`);
    paragraph = document.getElementById(`q${idQuadro}-Paragraph`);
    
    for(let i=0;i<tamanhoLista;i++){
        let listaSpan = document.getElementById(`q${idQuadro}-Li${i+1}span`).innerHTML
        console.log(listaSpan);
        
        formList.innerHTML += `<li id="formLi${i+1}"><input id="formLiSpan${i+1}" type="text" value="${listaSpan}"> <button type="button" onclick="excluirLi(${i+1})">-</button>`
    };
    
    console.log(paragraph);
    
    formTitulo.value = titulo.innerHTML
    formParagraph.value = paragraph.innerHTML 

    
    
    botaoFinalizar.innerHTML += `<button type="button" onclick="finalizarEdicao(${idQuadro})">Editar</button>`
    abrirEditarQuadroForm = false
}

function excluirLi(idLi){
    document.getElementById(`formLi${idLi}`).remove()
}


function finalizarEdicao(idQuadro){

    const tamanhoLista = verificaoTamanhoLista(idQuadro);
    const formTitulo = document.getElementById('formTitulo');
    const formParagraph = document.getElementById('formParagraph');
    const formList = document.getElementById('formLista');

    console.log(paragraph, formParagraph);
    
    titulo.innerHTML = formTitulo.value
    paragraph.innerHTML = formParagraph.value

     for(let i=0;i<tamanhoLista;i++){
        document.getElementById(`q${idQuadro}-Li${i+1}span`).innerHTML = document.getElementById(`formLiSpan${i+1}`).value
     }

    
    botaoFinalizar.innerHTML = ''

    const editarQuadroForm = document.getElementById('editarQuadroForm')
    editarQuadroForm.hidden = true;
    
    formTitulo.value = null
    formParagraph.value = null
    formList.innerHTML = ''

    paragraph = null
    titulo = null

    abrirEditarQuadroForm = true
}

function excluirQuadro(idQuadro){
    resposta = confirm(`Deseja realmente excluir o quadro ${document.getElementById(`q${idQuadro}-Titulo`).innerHTML}?`)
    if(resposta!=true){
        return
    }
    document.getElementById(`quadro-${idQuadro}`).remove()
}

function novoQuadro(){
    indexQuadros++
    const quadroSection = document.getElementById('quadrosSection');
    console.log(quadroSection);
    indexQuadros
    quadroSection.innerHTML += `
    <div id="quadro-${indexQuadros}" style="border: 1rem solid black; padding: 1rem;">
                <header id="q${indexQuadros}-Header">
                    <h3 id="q${indexQuadros}-Titulo">Quadro - Teste</h3>
                    <button onclick="editQuadro(${indexQuadros})">Editar quadro</button>
                </header>
                <p id="q${indexQuadros}-Paragraph">Esse é um quadro teste, ele serve para testar coisas</p>
                <ol id="q${indexQuadros}-Lista">
                    <li id="q${indexQuadros}-Li1"><input type="checkbox"><span id="q${indexQuadros}-Li1span">Criar quadro</span></li>
                    <li id="q${indexQuadros}-Li2"><input type="checkbox"><span id="q${indexQuadros}-Li2span">Montar quadro</span></li>
                    <li id="q${indexQuadros}-Li3"><input type="checkbox"><span id="q${indexQuadros}-Li3span">Mostrar quadro</span></li>
                </ol>
                <button onclick="excluirQuadro(${indexQuadros})">Excluir quadro</button>
            </div>
    `



}
