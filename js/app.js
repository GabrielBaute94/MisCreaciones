

$(document).on("keydown", function(e) {

    
    e.preventDefault();


    var valorTop 	= $("#box").css("top"); // 0
    var valorLeft 	= $("#box").css("left"); // 0

    console.log("Se apretó la tecla número: " + e.which);

    if (e.which === 37) {
        // LEFT
        valorLeft = "0px";
    } else if (e.which === 38) {
        // UP
        valorTop = "0px";
    } else if (e.which === 39) {
        // RIGHT
        valorLeft = "500px";
    } else if (e.which === 40) {
        // DOWN
        valorTop = "300px";
    }

    

    $("#box").css("top", valorTop);
    $("#box").css("left", valorLeft);

});


