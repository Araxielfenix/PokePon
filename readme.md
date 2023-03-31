
# Poke-Pon

Este es un pequeño proyecto que consiste en un generador aleatorio de nombres y sprites de Pokémon utilizando la PokeAPI y Javascript.

## Usage/Examples

El código es una aplicación web que genera de manera aleatoria un nombre y una imagen de un Pokémon de la popular franquicia de juegos y animé.

La aplicación consiste en un botón para generar el resultado. Al hacer clic en la pokébola, se ejecuta la función myMove(), que realiza los siguientes pasos:

- Reduce la cantidad de pokébolas disponibles en el tablero.
- Muestra una animación de una imagen de una recompensa en el centro de la pantalla.
- Obtiene de manera aleatoria un nombre de Pokémon y su respectiva imagen mediante el uso de la API pública PokeAPI.
- Muestra el nombre del Pokémon y su imagen en la pantalla.
- Muestra una animación de la imagen del Pokémon.
- La aplicación también tiene un botón de actualización, que recarga la página para permitir al usuario volver a jugar.
## Features

El código comienza con la declaración de las variables globales contador, Nombre y Sprite. Luego, en la función window.onload, se clona la imagen de la Pokeball 17 veces y se llama a la función getName para obtener el primer nombre y sprite de un Pokémon.

Después, hay tres funciones para oscurecer el botón, mostrar el color original del botón y animar el premio que se muestra en la pantalla.

La función myMove es la función principal que se ejecuta al hacer clic en la Pokeball. Primero, se elimina una imagen de la Pokeball cada vez que se hace clic en ella y se muestra el premio en la pantalla. Luego, se llama a la función getName para obtener un nuevo nombre y sprite de un Pokémon. Finalmente, se muestra el nombre y el sprite del Pokémon en la pantalla y se activa una animación en la imagen del Pokémon.

La función refresh simplemente refresca la página al hacer clic en el botón de actualizar.

La función removeImage se utiliza para eliminar una imagen de la Pokeball.

La función hide se utiliza para ocultar la imagen del premio.

La función getName se utiliza para obtener el nombre y el sprite de un Pokémon. Primero, se genera un número aleatorio entre 1 y 649, que se utiliza para hacer una llamada a la PokeAPI para obtener el nombre del Pokémon. Luego, se utiliza el número aleatorio para obtener el sprite del Pokémon utilizando la PokeAPI. Finalmente, el nombre del Pokémon se guarda en la variable Nombre y se cambia a mayúsculas la primera letra del nombre.
## Contributing

Si quieres contribuir a este proyecto, puedes hacerlo a través de pull requests en Github.
## Authors

- [@araxielfenix](https://github.com/Araxielfenix)
