# Abracadabra - Juego del Conejo Mágico

Este proyecto es un servidor web desarrollado con Node.js y Express que sirve un sitio web estático con temática de magia. El objetivo del juego es encontrar el conejo oculto detrás de uno de los cuatro sombreros mágicos.

## Descripción del Proyecto

El servidor tiene las siguientes funcionalidades:
1. **Ruta `/abracadabra/usuarios`**: Devuelve un JSON con un arreglo de nombres de usuarios.
2. **Ruta `/abracadabra/juego/:usuario`**: Verifica mediante un middleware que el usuario existe en el arreglo alojado en el servidor.
3. **Ruta `/abracadabra/conejo/:n`**: Basado en un número aleatorio del 1 al 4, devuelve la foto del conejo (`conejito.jpeg`) si coincide con el número recibido como parámetro, o la foto de Voldemort (`voldemort.jpeg`) si no coincide.
4. **Ruta genérica**: Devuelve un mensaje diciendo "Esta página no existe..." cuando se consulta una ruta que no está definida en el servidor.

## Requisitos

- Node.js
- Express

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tuusuario/abracadabra-juego.git
2. Navega al directorio del proyecto:
   ```sh
   cd abracadabra-juego
3. Instala las dependencias:
    ```sh
   npm install
    
## Uso
1. Inicia el servidor:
   ```sh
   node app.js
2. Abre tu navegador web y navega a http://localhost:3000 para ver el sitio web.


## Estructura del Proyecto
      ```sh
      abracadabra-juego/
      ├── assets/
      │   ├── fondo.jpg
      │   ├── sombrero.png
      │   ├── conejito.jpeg
      │   ├── voldemort.jpeg
      │   ├── who.jpeg
      ├── app.js
      ├── index.html
      └── README.md

- assets/: Carpeta que contiene las imágenes utilizadas en el sitio web.
- app.js: Archivo principal que configura y ejecuta el servidor Express.
- index.html: Página principal del sitio web con la galería de sombreros.
- README.md: Este archivo de documentación.


## Funcionalidades Detalladas
1. Ruta /abracadabra/usuarios
Devuelve un JSON con un arreglo de nombres de usuarios. Ejemplo de respuesta:
   ```json
   ['Nicolas', 'Felipe', 'Claudio', 'Brayan', 'Martin', 'Geremias', 'Kuchix', 'Emma']
2. Ruta /abracadabra/juego/:usuario
Middleware que verifica si el usuario existe en el arreglo de nombres. Si el usuario no existe, se devuelve la imagen who.jpeg.

3. Ruta /abracadabra/conejo/:n
Genera un número aleatorio entre 1 y 4 y lo compara con el parámetro n. Si coinciden, se devuelve la imagen del conejo (conejito.jpeg); de lo contrario, se devuelve la imagen de Voldemort (voldemort.jpeg).

4. Ruta genérica
Te envia a una pagina de 404.html para cualquier ruta no definida en el servidor.
