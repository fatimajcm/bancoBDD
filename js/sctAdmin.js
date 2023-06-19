
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
    newDiv.innerHTML = ` <h1>Formulario de inserción de clientes</h1>

    <form id="formulario" method="POST" action="http://localhost:3000/clientes">
      <label for="id_cliente">ID del cliente:</label>
      <input type="number" id="id_cliente" name="id_cliente" required><br>
  
      <label for="nombre_cliente">Nombre del cliente:</label>
      <input type="text" id="nombre_cliente" name="nombre_cliente" required><br>
  
      <label for="apellido_cliente">Apellido del cliente:</label>
      <input type="text" id="apellido_cliente" name="apellido_cliente" required><br>
  
      <label for="direccion_cliente">Dirección del cliente:</label>
      <input type="text" id="direccion_cliente" name="direccion_cliente" required><br>
  
      <label for="telefono_cliente">Teléfono del cliente:</label>
      <input type="text" id="telefono_cliente" name="telefono_cliente" required><br>
  
      <label for="correo_electronico_cliente">Correo electrónico del cliente:</label>
      <input type="email" id="correo_electronico_cliente" name="correo_electronico_cliente" required><br>
  
      <button type="submit">Enviar</button>
    </form>
    <script>
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', (event) => {
      event.preventDefault();

      const data = {
        id_cliente: formulario.id_cliente.value,
        nombre_cliente: formulario.nombre_cliente.value,
        apellido_cliente: formulario.apellido_cliente.value,
        direccion_cliente: formulario.direccion_cliente.value,
        telefono_cliente: formulario.telefono_cliente.value,
        correo_electronico_cliente: formulario.correo_electronico_cliente.value
      };

      fetch('/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => {
        alert(result.message);
        formulario.reset();
      })
      .catch(error => {
        console.error('Error al enviar el formulario:', error);
        alert('Hubo un error al enviar el formulario');
      });
    });
  </script>
  `;

    // Agrega el nuevo div al contenedor
    container.appendChild(newDiv);
}

function encontrar(){
  var container = document.querySelector('.container');

  // Crea un elemento div
  var newDiv = document.createElement('div');

  newDiv.innerHTML=`
  <form id="formulario">
  <label for="nombre_cliente">Nombre del cliente:</label>
  <input type="text" id="nombre_cliente" name="nombre_cliente" required><br>

  <button type="submit">Buscar</button>
</form>

<div id="resultado"></div>
</form>

<div id="resultado"></div>

<script>
  const formulario = document.getElementById('formulario');
  const resultadoDiv = document.getElementById('resultado');

  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombreCliente = formulario.nombre_cliente.value;

    fetch('/clientes/buscar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre_cliente: nombreCliente })
    })
    .then(response => response.json())
    .then(result => {
      // Procesar los resultados de la búsqueda
      mostrarResultado(result);
    })
    .catch(error => {
      console.error('Error al enviar la solicitud de búsqueda:', error);
      alert('Hubo un error al enviar la solicitud de búsqueda');
    });
  });

  function mostrarResultado(result) {
    resultadoDiv.innerHTML = '';

    if (result.length === 0) {
      resultadoDiv.innerHTML = 'No se encontraron resultados';
      return;
    }

    const listaClientes = document.createElement('ul');

    result.forEach(cliente => {
      const clienteItem = document.createElement('li');
      clienteItem.textContent = 'ID: ' + cliente.id_cliente + ', Nombre: ' + cliente.nombre_cliente + ', Apellido: ' + cliente.apellido_cliente;
      listaClientes.appendChild(clienteItem);
    });

    resultadoDiv.appendChild(listaClientes);
  }
</script>
   `;
   container.appendChild(newDiv);
}
  