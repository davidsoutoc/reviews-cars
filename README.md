# REVIEWS CARS

## Instalación y Ejecución del proyecto
1. Clonar repositorio, si lo queremos modificar fork.
2. Moverse dentro de la carpeta del repositorio.
3. Ejecutar `npm install`
4. Crear el fichero `.env` con las variables propias de nuestro proyecto en local.
5. Ejecutar script nodemon `"npm run dev"`


## Endpoints API

### API CARS - /api/v1/cars/

| Method | cars-routes   | cars-controllers| Type  | Description |
| :----- | :------------ |:---------------:| :----:| -----: |
| GET | /api/v1/cars     | getCars         | Pública | Listado de los coches |
| GET | /api/v1/cars/:carId | getCarById			 | Pública | Información de un coche |
| GET |	/api/v1/cars/:carId/reviews | getReviewsByCarId  | Pública | Reviews de un coche por ID |
| GET |	/api/v1/cars/:carId/rating | getAverageRatingByCarId | Pública | Valoración media de los usuarios y números de valoraciones |
| POST | /api/v1/cars |	createCar | Admin | Crear un coche |
| PUT	| /api/v1/cars/:carId | updateCarById | Admin | Actualizar un coche por ID |
| PATCH | /api/v1/cars/:carId | patchCarById | Admin | Actualizar un campo de un coche por ID |
| DELETE | /api/v1/cars/:carId | deleteCarById | Admin | Eliminar un coche por ID |
| POST | /api/v1/cars/:carId/reviews | createReviewByCarId | Privado | Usuarios dejan opiniones en un coche |
| POST | /api/v1/cars/:carId/image | uploadCarImageById | Admin | Se sube una imagen a un coche con un campo para poder seleccionar si es imagen principal |
| POST | /api/v1/cars/:carId/images | uploadMultipleCarImages | Privada | Subir varias imágenes a la vez a un coche |
| GET | /api/v1/cars/:carId/images | getCarImagesById | Pública | Ver listado de imagenes ordenada por la principal si existe |

### API REVIEWS - /api/v1/reviews/

| Method | reviews-routes   | reviews-controllers| Type  | Description |
| :----- | :------------ |:---------------:| :----:| -----: |
| DELETE | /api/v1/reviews/:id | deleteReview	| Admin | Privada | Solo el admin y el creador pueden eliminar reviews |

### API USERS - /api/v1/users/

| Method | users-routes   | users-controllers| Type  | Description |
| :----- | :------------ |:---------------:| :----:| -----: |
| POST | /api/v1/users/register | registerUser | Pública | Registrar un usuario nuevo |
| POST | /api/v1/users/activation | activateUser | Publica | Link para activar las cuentas |
| POST | /api/v1/users/login | loginUser | Publica | Loguearse en la aplicacion |
| GET | /api/v1/users/random | randomUser | Publica | Ver usuarios aleatorios desde una API |
| GET | /api/v1/users | getUsers | Admin | Listado usuarios |
| PUT | /api/v1/users | updateUser | Privada | La ejecuta el propio usuario (obtiene el ID del accessToken) |
| POST | /api/v1/user/upload | uploadImageProfile | Privada | El propio usuario puede cambiar el avatar |
| GET | /api/v1/users/profile | getUserProfile | Privada | Perfil del usuario. CADA USUARIO VE EL SUYO |
| GET | /api/v1/user/:id | getUserReviewsById | Admin | Ver reviews de un usuario |
| DELETE | /api/v1/users/:id | deleteUserById | Admin | Eliminar un usuario. SOLO el ADMIN puede |

### API TITULARES - /api/v1/titulares/

| Method | reviews-routes   | reviews-controllers| Type  | Description |
| :----- | :------------ |:---------------:| :----:| -----: |
| GET | /api/v1/titulares/elpais | getTitularesElPais	| Pública | Ver Titulares capturados de la página de elpais.com |
| GET | /api/v1/titulares/marca | getTitularesMarca	| Pública | Ver Titulares capturados de la página de marca.com |

## Ruta pública de entrega de recursos públicos
http://localhost:3000/images/logo.png

## Módulos instalados

### [axios](https://www.npmjs.com/package/axios)
Módulo para gestionar peticiones a otras URLs/endpoints.

### [bcryptjs](https://www.npmjs.com/package/bcryptjs)
Módulo optimizado que gestiona la encriptación de password y su comparación.

### [cheerio](https://www.npmjs.com/package/cheerio)
Módulo que usa la potencia del jQuery para capturar contenido HTML. Usado en el ejemplo de titulares para capturar las noticias.

### [cors](https://www.npmjs.com/package/cors)
Módulo para poder seleccionar que urls se pueden conectar a nuestro backend.

### [dotenv](https://www.npmjs.com/package/dotenv)
Módulo que carga variables desde el fichero .env en el process.env

### [express](https://www.npmjs.com/package/express)
Express proporciona una capa delgada de características fundamentales de aplicaciones web.

### [express-fileupload](https://www.npmjs.com/package/express-fileupload)
Middleware express para subir ficheros.

### [fs-extra](https://www.npmjs.com/package/fs-extra)
Añade funcionalidades al core modules fs.

### [joi](https://www.npmjs.com/package/joi)
Validación de datos a través de esquemas.

### [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
Implementación del Json Web Token.

### [morgan](https://www.npmjs.com/package/morgan)
Creación de logs para nuestra API.

### [mysql2](https://www.npmjs.com/package/mysql2)
Cliente MySQL para Node.js

### [nodemailer](https://www.npmjs.com/package/nodemailer)
Gestión y envío de emails

### [randomstring](https://www.npmjs.com/package/randomstring)
Generación de cadenas aleatorias.

### [sharp](https://www.npmjs.com/package/sharp)
Usamos Sharp para la gestión de imágenes, tanto transformaciones como añadir la marca de agua.
