# Axio Style Clothing

Somos una tienda de ropa urbana que combina estilo y comodidad para los amantes de la vida en la ciudad.

## Cómo levantar el proyecto:
Para inicializar este proyecto primero deberas recorrer los siguientes pasos:

1-Reemplazar el valor de las variables de **main.jsx** por las recibidas.
2-Desplegar la terminal y situarse en la carpeta  del proyecto utilizando **"cd ReactPF-Perdomo"**.
3-Instalar las dependencias utilizando **"npm install"**
4-Levantar el proyecto utilizando **"npm run dev"**

* ***(Este proyecto fué utilizado con:
Bootstrap (npm i bootstrap).
Firebase (npm i firebase).*** *

Para el correcto funcionamiento, es necesario tener seteadas las variables de entorno en el archivo  `.env`. Las variables son:

-   `VITE_API_KEY`: la API key de Firebase.
-   `VITE_AUTH_DOMAIN`: el dominio de autenticación de Firebase.
-   `VITE_PROJECT_ID`: el ID del proyecto de Firebase.
-   `VITE_STORAGE_BUCKET`: el bucket de almacenamiento de Firebase.
-   `VITE_MESSAGING_SENDER_ID`: el ID del sender de Firebase.
-   `VITE_APP_ID`: el ID de la aplicación de Firebase.

## Componentes:
* Cart: El Cart se encarga de mostrar todos los productos que tenemos en el carrito.
* CartWidget: Utilizado para mostrar el logo del carrito con la cantidad de productos en él.
* ItemList/Container: Estos componentes son los encargados de mostrar los productos en general o filtrados por categorías
* ItemDetail/Container: Estos componentes son los encargados de mostrar los detalles de cada uno de los productos
* Checkout: Se encarga de mostrar el formulario para que rellene el usuario y generar el numero de orden único
* NavBar: Usado por su funcion fundamental de mostrar tanto el cart como las distintas categorías por las cuales se pueden navegar.

#Demo:


https://github.com/MantraGitH/ReactPF-Perdomo/assets/125299008/169659d8-91b3-4939-b254-0c79231dbdd3

