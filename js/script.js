
// LOGIN ADMIN 
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Obtén los valores de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Realiza la validación del usuario y la contraseña
    if (username === "admin" && password === "admin123") {
      alert("Inicio de sesión exitoso");  
      window.location.href = "../html/viewAdmin.html";
    } else {
      alert("Credenciales inválidas");
    }
  });

function addClient(){
  var container = document.querySelector('.container');

    // Crea un elemento div
    var newDiv = document.createElement('div');

    // Agrega código HTML al nuevo div
    // CAMBIAR POR UN FORM QUE ENVIE DATOS DE NOMBRE, APELLIDO Y CORREO
    newDiv.innerHTML = `<p>ID Cliente:</p>
    <p>Nombre: </p>
    <p>Apellido: </p>
    <p>Dirección: </p>
    <p>Teléfono: </p>
    <p>Correo Electrónico: </p>
  `;

    // Agrega el nuevo div al contenedor
    container.appendChild(newDiv);
}
  