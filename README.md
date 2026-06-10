# DataGol - Backend API

## Descripción

DataGol es una API REST desarrollada para la gestión de torneos de fútbol amateur. Permite administrar equipos, jugadores y partidos, además de gestionar usuarios autenticados mediante JSON Web Tokens (JWT).

El sistema fue desarrollado utilizando Node.js, Express y MongoDB Atlas, siguiendo una arquitectura multicapa (N-Tier) para garantizar la correcta separación de responsabilidades.

---

## Funcionalidades

### Autenticación

* Registro de usuarios.
* Inicio de sesión.
* Generación y validación de JWT.

### Equipos

* Crear equipos.
* Consultar equipos.
* Actualizar equipos.
* Eliminar equipos.

### Jugadores

* Crear jugadores.
* Consultar jugadores.
* Actualizar jugadores.
* Eliminar jugadores.

### Partidos

* Registrar partidos.
* Consultar partidos.
* Actualizar partidos.
* Eliminar partidos.

---

## Arquitectura del Proyecto

El proyecto sigue una arquitectura multicapa (N-Tier):

### Models

Definición de entidades y esquemas de MongoDB mediante Mongoose.

```text
src/models
```

### Repositories

Acceso y operaciones sobre la base de datos.

```text
src/repositories
```

### Controllers

Lógica de negocio y procesamiento de solicitudes HTTP.

```text
src/controllers
```

### Routes

Definición de endpoints y ruteo de la aplicación.

```text
src/routes
```

### Config

Configuraciones generales de infraestructura.

```text
src/config
```

---

## Tecnologías Utilizadas

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JSON Web Token (JWT)
* Swagger UI
* Render

---

## Instalación y Ejecución Local

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd datagol-backend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` utilizando como referencia el archivo `.env.sample`.

Ejemplo:

```env
PORT=3000
MONGO_URI=tu_uri_de_mongodb
JWT_SECRET=tu_clave_secreta
```

### 4. Ejecutar el servidor

```bash
node src/server.js
```

---

## Despliegue

### API en Producción

https://datagol-pexq.onrender.com

### Documentación Swagger

https://datagol-pexq.onrender.com/api-docs

---

## Endpoints Principales

### Autenticación

| Método | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

### Equipos

| Método | Endpoint        |
| ------ | --------------- |
| GET    | /api/teams      |
| POST   | /api/teams      |
| GET    | /api/teams/{id} |
| PUT    | /api/teams/{id} |
| DELETE | /api/teams/{id} |

### Jugadores

| Método | Endpoint          |
| ------ | ----------------- |
| GET    | /api/players      |
| POST   | /api/players      |
| GET    | /api/players/{id} |
| PUT    | /api/players/{id} |
| DELETE | /api/players/{id} |

### Partidos

| Método | Endpoint          |
| ------ | ----------------- |
| GET    | /api/matches      |
| POST   | /api/matches      |
| GET    | /api/matches/{id} |
| PUT    | /api/matches/{id} |
| DELETE | /api/matches/{id} |

---

## Autores

Proyecto desarrollado como Trabajo Final del curso Backend con Express.

* Facundo Mendez
* Lucas Martin Rabinovich