# STORE APP

Este proyecto representa una pagina web comercial, la cual ofrece interacción con el usuario. 

Es una tienda de artículos electrónicos, la cual contiene diversas categorías de productos y precios, (contiene filtros a traves de una lista desplegable y dos botones, pudiendo dar con la categoria buscada y ordenae segun el valor del producto). 

La interacción con el Usuario refiere a la opción de comprar algún producto, mediante el uso representativo de Coins (monedas) que permiten obtener dichos productos, y en caso de no contar con suficiente créditos (Coins) se habilita la opción de obtener los restantes para su posterior compra con un Link a un formulario de Login.
Dicho link cuenta con dos opciones:
  1) Usuario ya logueado : permite el acceso tipeando username y password respectivamente
  2) Registrar a un usuario: se deben completar los campos requeridos, los cuales cuentan con validaciones dentro del formulario. 
Ambos accesos redirigen la pagina para realizar el proceso de obtención de monedas.
La pagina cuenta tambien con un menu lateral de opciones, donde se puede acceder al home, historial de compras, obtener nuevos coins y exit(este último redirige a una pestaña de google y sale de la tienda).

>#### Algunos puntos importantes del proyecto: 
              - Cuenta con la ultima version react-roouter-dom para las distintas vistas, 
              - useContext para ir actualizando los cambios de State, 
              - Presenta Sass como hoja de estilo en cascada, 
              - Presenta modales que van informando de los distintos cambios en el State, (ejemplo succesful register, etc).
             

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.


### Instalación 🔧

### `Clonar` 
Clonar el proyecto utilizando git clone  dentro de tu entorno local para poder obtener el codigo fuente. 
```
git clone https://github.com/D-Perez85/store_app.git

```
### `Instalar Dependencias`
Instala las dependencias necesarias para poder correr la App...
```
npm install
```
### `Run`
Una vez instaladas las dependencias podras correr la App con el comando start en el directorio del proyecto. 
Una vez compilado podras ver el resultado en http://localhost:3000/
```
npm start
```

## Learn More About React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##
Made with ❤️ by [Damian Perez](https://github.com/D-Perez85) 😊
