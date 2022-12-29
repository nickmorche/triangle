// Sistema Drag-Drop Triangulos com Jquery UI

/**
 * Variáveis globais
 */
const canvas = $('#canvas');
var triangleSelected = 0;

/**
 * Cria o triângulo no quadro
 */
function create(triangle){
    var txt = $("<p></p>").text(triangle.text);

    // Cria o elemento div do triângulo
    jQuery('<div>', {
        id: 't' + triangle.id,
        class: 'node ui-widget-content',
    }).append(txt).appendTo('#canvas').draggable({
        containment: '#canvas', // define que é dentro do canvas
        cursor: 'move', // ao mover, seta o cursor pra move
        stop: function(){
            console.log(this.id);
            triangleSelected = this.id;
        }
    }).dblclick(function(){
        this.remove();
    })

    // Removido a porra do click. É uma merda. Não funciona direito, não triggera.
    
    // .on('click', function(){
    //     console.log(this);
    //     return;
    // })
    
    // .click(function(){
    //     console.log(this);
    //     //triangleSelected = this.id;
    //     return;
    // });

   // update();
    
}

// function update(){
//     $( function() {
//         $(".node").draggable({
//                 containment: '#canvas', // define que é dentro do canvas
//                 cursor: 'move' // ao mover, seta o cursor pra move
//             });
//         } );
// }

// Criando triângulo
var triangle = {};
triangle.text = "Isso é uma ideia boa";
triangle.id = 1;
create(triangle);
