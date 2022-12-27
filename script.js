// Sistema Drag-Drop Triangulos

/**
 * Variáveis globais
 */
const canvas = document.getElementById('canvas');

/**
 * Ao começar a mover o elemento, irá executar essa função
 */
function drag_start(event) {
    // Captura as propriedades de estilização CSS do elemento
    var style = window.getComputedStyle(event.target, null); 
    // Cria objeto que armazena os valores
    var object = {};
    object.id = event.target.id;
    object.left = parseInt(style.getPropertyValue("left")) - event.clientX;
    object.top = parseInt(style.getPropertyValue("top")) - event.clientY;
    // Cria uma string com o objeto 'stringuizado'
    var str = JSON.stringify(object);
    // Armazena string no dataTransfer porque dataTransfer aceita apenas strings
    event.dataTransfer.setData("Text", str);
    // Torna invisivel o 'ghost' da imagem
    event.dataTransfer.setDragImage(event.target, window.outerWidth, window.outerHeight); 
}

/**
 * Ao largar o elemento, executa essa função
 */
function drop(event) {
    // Pega os dados do dataTransfer da posição
    var object = JSON.parse(event.dataTransfer.getData("Text"));
    // Pega o elemento
    var dm = document.getElementById(object.id);
    // Configura a posição X e posição Y
    dm.style.left = (event.clientX + parseInt(object.left, 10)) + 'px';
    dm.style.top = (event.clientY + parseInt(object.top, 10)) + 'px';
    event.preventDefault();
    return false;
}

function drag_over(event) {
    // Permite largar o objeto
    event.preventDefault();
    return false;
}

/**
 * Cria o triângulo no quadro
 */
function create(triangle){
    const div = document.createElement('div');
    const p = document.createElement('p');

    p.innerText = triangle.text;

    div.setAttribute('id', 't' + triangle.id);
    div.setAttribute('class', 'node');
    div.setAttribute('draggable', 'true');
    div.setAttribute('ondragstart', 'drag_start(event)');
    div.appendChild(p);

    canvas.appendChild(div);
}

var triangle = {};
triangle.text = "Teste";
triangle.id = 1;
create(triangle);