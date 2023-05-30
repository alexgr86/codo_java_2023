function calcularTotal() {
    var inputTotal = document.getElementById("inputTotal");
    var inputCantidad = document.getElementById("inputCantidad");
    var inputGroup = document.getElementById("inputGroup");
    var valor

    if(inputGroup.value==1){
        valor = inputCantidad.value * 0.2 * 200;
    }else if(inputGroup.value=="2"){
        valor = inputCantidad.value * 0.5 * 200;
    }else if(inputGroup.value=="3"){
        valor = inputCantidad.value * 0.85 * 200;
    }

    
    inputTotal.value = "Total a pagar: $" + valor.toFixed(2);
    
}

function borrar(){
    var inputNombre = document.getElementById("inputNombre");
    var inputApellido = document.getElementById("inputApellido");
    var inputCorreo = document.getElementById("inputCorreo");
    var inputTotal = document.getElementById("inputTotal");
    var inputCantidad = document.getElementById("inputCantidad");

    inputNombre.value = "";
    inputApellido.value = "";
    inputCorreo.value = "";
    inputCantidad.value = 0;
    inputTotal.value = "Total a pagar: $ 0";

}