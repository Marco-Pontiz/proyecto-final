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

/*----------------------------------*/

document.getElementById("txtemail").addEventListener("change", formulario);
document.getElementById("txtname").addEventListener("change", formulario);
document.getElementById("txtlastname").addEventListener("change", formulario);

function registro(){

    let btn = document.querySelector(".btnregistro")
    btn.addEventListener('click', () =>{
    Swal.fire({
        title: '¡Te has registrado!',
        text: '¡Tu registro se guardó con exito!',
        icon: 'success',
        confirmButtonText: "Aceptar",
        timer: 2500
    })},

)}

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
};

//Ingresando fetch
    let Email = document.getElementById('txtemail');
    let nombre = document.getElementById('txtname');
    let Lastname = document.getElementById('txtlastname');
    let button = document.getElementById('button');

    button.addEventListener('click', () => {
        const data = {
            title: nombre.value,
            body: Email.value,
            userId:1,
        };
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
    });