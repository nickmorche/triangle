// Sistema Drag-Drop Triangulos com Jquery UI

/**
 * Variáveis globais
 */
const canvas = $('#canvas');

/**
 * Cria o triângulo no quadro
 */
function create(triangle){
    var txt = $("<p></p>").text(triangle.text);

    // Cria o elemento div do triângulo
    jQuery('<div>', {
        id: 't' + triangle.id,
        class: 'node ui-widget-content',
    }).append(txt).appendTo('#canvas').draggable(); 
    
}

// Criando triângulo
var triangle = {};
triangle.text = "Isso é uma ideia boa";
triangle.id = 1;
create(triangle);
