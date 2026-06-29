function mostrarMensaje(producto) {
    $("#mensajeCarrito").html(producto + " fue agregado al carrito.");
    $("#mensajeCarrito").css("display", "block");
    $("#mensajeCarrito").css("background-color", "#d1e7dd");
    $("#mensajeCarrito").css("color", "#000000");
}

function validarFormulario() {
    var nombre = $("#nombre").val();
    var telefono = $("#telefono").val();
    var mensaje = $("#mensaje").val();

    if (nombre == "" || telefono == "" || mensaje == "") {
        $("#respuestaFormulario").html("Por favor, completá todos los campos.");
        $("#respuestaFormulario").css("display", "block");
        $("#respuestaFormulario").css("background-color", "#f8d7da");
        $("#respuestaFormulario").css("color", "#000000");
        return false;
    } else {
        $("#respuestaFormulario").html("Tu consulta fue enviada correctamente.");
        $("#respuestaFormulario").css("display", "block");
        $("#respuestaFormulario").css("background-color", "#d1e7dd");
        $("#respuestaFormulario").css("color", "#000000");
        return false;
    }
}

function cargarCarrito() {
    var url = window.location.href;

    if (url.indexOf("producto=margarita") !== -1) {
        $("#carrito-vacio").hide();
        $("#carrito-contenido").show();
        $("#resumen-vacio").hide();
        $("#resumen-contenido").show();
    } else {
        $("#carrito-vacio").show();
        $("#carrito-contenido").hide();
        $("#resumen-vacio").show();
        $("#resumen-contenido").hide();
    }
}
$(document).ready(function() {
    cargarCarrito();
});