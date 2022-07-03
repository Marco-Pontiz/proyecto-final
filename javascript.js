//*Evento//

//let miFormulario = document.getElementById("formulario");
// miFormulario.addEventListener("submit", validarFormulario);

/*function validarFormulario(e) {
    //e.preventDefault();
    console.log("El formulario ha sido enviado");
}*/

// document.querySelector("btnregistro").addEventListener('click', guardadoLocalStorage);

//document.getElementById("txtemail").addEventListener("change", guardadoLocalStorage)

/*Si quieres borrar el LocalStorage, descomentar
localStorage.clear();*/

document.getElementById("txtemail").addEventListener("change", formulario);
document.getElementById("txtname").addEventListener("change", formulario);
document.getElementById("txtlastname").addEventListener("change", formulario);

function formulario(){
    let email= document.getElementById("txtemail").value;
    localStorage.setItem("txtemail", email);
    let nombre = document.getElementById("txtname").value;
    localStorage.setItem("txtname", nombre)
    let lastname = document.getElementById("txtlastname").value;
    localStorage.setItem("txtlastname", lastname);
    //Obteniendo los valores
    // let valor = [localStorage.getItem("txtemail"), localStorage.getItem("txtname"), localStorage.getItem("txtlastname")];
    // console.log(valor);

    let valor = [email, nombre, lastname];
    console.log(valor);
}