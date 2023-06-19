
// LOGIN ADMIN 
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Obtén los valores de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Realiza la validación del usuario y la contraseña
    if (username === "obed" && password === "123obed") {
      alert("Inicio de sesión exitoso");
      // Aquí puedes redirigir al usuario a la página principal    
      window.location.href = "../html/viewUser.html";
    } else {
      alert("Credenciales inválidas");
    }
  });