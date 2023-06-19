const mysql = require('mysql2');
const express = require('express');

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'Fernando',
    password: 'fernando_01',
    database: 'bancos'
  });
  
 
  connection.connect((error) => {
    if (error) {
      console.error('Error al conectar con MySQL:', error);
    } else {
      console.log('Conexión exitosa a MySQL');
    }
  });
  
  
  connection.on('error', (error) => {
    console.error('Error en la conexión con MySQL:', error);
  });

  app.post("/clientes",(req,res)=>{
    const { id_cliente, nombre_cliente, apellido_cliente, direccion_cliente, telefono_cliente, correo_electronico_cliente } = req.body;
    const query = 'INSERT INTO clientes (id_cliente, nombre_cliente, apellido_cliente, direccion_cliente, telefono_cliente, correo_electronico_cliente) VALUES (?, ?, ?, ?, ?, ?)';
    const valores = [id_cliente, nombre_cliente, apellido_cliente, direccion_cliente, telefono_cliente, correo_electronico_cliente];
    
    connection.query(query,valores,(error,res)=>{
        if (error) {
            console.error('Error al insertar cliente:', error);
            res.status(500).json({ error: 'Error al insertar cliente' });
          } else {
            res.status(200).json({ message: 'Cliente insertado correctamente' });
          }
    })
  })

  app.post("/buscar/cliente",(req,res)=>{
    const { nombre_cliente } = req.body;
    const query = 'SELECT * FROM clientes WHERE nombre_cliente LIKE ?';
    const searchvalor= `%${nombre_cliente}%`;

    connection.query(query, [searchvalor], (error, results) => {
        if (error) {
          console.error('Error al buscar clientes:', error);
          res.status(500).json({ error: 'Error al buscar clientes' });
        } else {
          res.status(200).json(results);
        }
      });
    });
  
  
  // Cerrar la conexión 
  // connection.end();