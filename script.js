//import "jspdf/dist/polyfills.es.js";
//import { jsPDF } from "jspdf";

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
    resumen();
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


function resumen(){
    //const doc = require('./jspdf.min.js');
    var { jsPDF } = window.jspdf;
    //var pdf = new jsPDF();
    var doc = new jsPDF();
    
    var inputNombre = document.getElementById("inputNombre");
    var inputApellido = document.getElementById("inputApellido");
    var inputCorreo = document.getElementById("inputCorreo");
    var inputTotal = document.getElementById("inputTotal");
    var inputCantidad = document.getElementById("inputCantidad");

    console.log(inputNombre.innerText);

    doc.text("Resumen entradas",  10, 10);
    doc.text("Nombre: "+ inputNombre.value,   10, 20);
    doc.text("Apellido:"+ inputApellido.value, 10, 30);
    doc.text("Correo: "+inputCorreo.value,   10, 40);
    doc.text(inputTotal.value,    10, 50);
    doc.text("Cantidad: "+inputCantidad.value, 10, 60);
    
    doc.save("a4.pdf");
}
