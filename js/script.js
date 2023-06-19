
// LOGIN ADMIN 
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Obtén los valores de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Realiza la validación del usuario y la contraseña
    if (username === "admin" && password === "admin123") {
      alert("Inicio de sesión exitoso");
      // Aquí puedes redirigir al usuario a la página principal
    } else {
      alert("Credenciales inválidas");
    }
  });
  