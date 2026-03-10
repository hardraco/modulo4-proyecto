# Backend API - Proyecto Módulo 4

Backend desarrollado con Node.js y Express para la gestión de usuarios.
Incluye operaciones CRUD y un endpoint de paginación con filtros.

## Tecnologías utilizadas

* Node.js
* Express.js
* Sequelize
* SQLite

---

# Instalación

1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

2. Instalar dependencias

```bash
npm install
```

---

# Ejecutar el proyecto

```bash
npm start
```

El servidor iniciará en:

```
http://localhost:3000
```

Si se despliega en Render u otro servicio cloud, el puerto se asignará automáticamente mediante la variable de entorno `PORT`.

---

# Estructura del proyecto

```
src/
 ├── config/
 │    └── database.js
 ├── controllers/
 │    └── user.controller.js
 ├── models/
 │    └── user.model.js
 ├── routes/
 │    └── user.routes.js
 └── index.js
```

---

# Endpoints disponibles

## Obtener todos los usuarios

```
GET /api/users
```

---

## Crear usuario

```
POST /api/users
```

Body:

```json
{
  "username": "usuario1"
}
```

---

## Obtener usuario por ID

```
GET /api/users/{id}
```

---

## Actualizar usuario

```
PUT /api/users/{id}
```

---

## Eliminar usuario

```
DELETE /api/users/{id}
```

---

# Endpoint de paginación

Permite listar usuarios con búsqueda, ordenamiento y paginación.

```
GET /api/users/list/pagination
```

### Query Params

| Parámetro | Default | Descripción           |
| --------- | ------- | --------------------- |
| page      | 1       | Número de página      |
| limit     | 10      | Cantidad de registros |
| search    | ""      | Búsqueda por username |
| orderBy   | id      | Campo de ordenamiento |
| orderDir  | DESC    | Dirección de orden    |

---

## Ejemplo de consulta

```
GET /api/users/list/pagination?page=1&limit=5&search=user&orderBy=username&orderDir=DESC
```

### Respuesta

```json
{
  "total": 20,
  "page": 1,
  "pages": 4,
  "data": [
    {
      "id": 1,
      "username": "user1",
      "status": "ACTIVE"
    }
  ]
}
```

---

# Base de datos

El proyecto utiliza **SQLite** mediante Sequelize.
La base de datos se crea automáticamente al iniciar el servidor.

Archivo generado:

```
src/database.sqlite
```

---

# Variables de entorno

Archivo `.env`

```
JWT_SECRET=supersecret
```

---

# Notas

* La base de datos se sincroniza automáticamente al iniciar la aplicación.
* Si se ejecuta en Render, el servicio utilizará el puerto definido por la variable `PORT`.
