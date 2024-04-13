$("#ingredientes").dblclick(function(){
    $(this).css({
            "color": "red"
        });
    });
$("#preparacion").dblclick(function(){
    $(this).css({
            "color": "red"
        });
    });
$("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    
    });
$(".card-title").click(function(){
    $(".card-img-top").toggle();
    $(".card-text").toggle();
})