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
