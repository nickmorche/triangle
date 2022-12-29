// Sistema Drag-Drop Triangulos com Jquery UI

/**
 * Variáveis globais
 */
const canvas = $('#canvas');
var triangleSelected = 0;
var triangles = [];

const configDraggable = {
    containment: '#canvas', // define que é dentro do canvas
    cursor: 'move', // ao mover, seta o cursor pra move
    start: function(){ // ao começar a mover, trás pra frente os triângulos
        //console.log(this.style);
        allBehind();
        this.style.zIndex = "1";
    },
    stop: function(){
        triangleSelected = this.id;
        //this.style.zIndex = "1";
    }
}

/**
 * Cria o triângulo no quadro
 */
function create(triangle){
    var txt = $("<p></p>").text(triangle.text);

    var id = 't' + (triangles.length + 1)

    // Cria o elemento div do triângulo
    jQuery('<div>', {
        id: id,
        class: 'node ui-widget-content',
    })
    .append(txt)
    .appendTo('#canvas')
    .draggable(configDraggable)
    .dblclick(function(){
        this.remove();
    })
    triangle.id = id;

    triangles.push(triangle);
};

function allBehind(){
    $('.node').each(function(index,item){
        // console.log(index + ' ' + $(this));
        //console.log(item);
        // console.log(this.style.zIndex);
        this.style.zIndex = "0";
        //$(this).style.zIndex = "0";
    })
}


// Criando triângulo
var triangle = {};
triangle.text = "Isso é uma ideia boa";
create(triangle);


// Ao clicar no botão
$('#add').click(function(){
    triangle.text = "Sem Conceito";
    create(triangle);
})

$('#del').click(function(){
    console.log(triangleSelected);
    $('#' + triangleSelected).remove();
})

$('#cln').click(function(){
    var triangle = $('#'+triangleSelected);
    var text = $('#'+triangleSelected)[0].innerText;
    var triangle = {
        text: text + ' 2',
    }
    create(triangle);
})
