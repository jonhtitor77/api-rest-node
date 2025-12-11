# API REST en Node.js

## Descripcion

API REST para gestion de productos desarrollada con Node.js y Express.

## Instalacion

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. configurar variables de entorno:

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

## Documentacion de la API

### Obtener todos los productos

- **GET** `/api/products`
- **Descripcion:** Devuelve la lista de todos los productos.
- **Respuesta ejemplo:**

```json
[
    
    {
        "id": "U10MAsSwDaTHzINGjAkT",
        "price": 100,
        "name": "producto 1",
        "categories": [
            "Categoria 1",
            "Categoria 2"
        ]
    }
]
```
### Buscar productos por nombre

- **GET** `/api/products/search?name=palabra`
- **Descripcion:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parametros:**
  -`name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:**`/products/search?camiseta`
- **Respuesta ejemplo:**

```json
[{   "id": 1, "name": "Camiseta Deportiva",
     "price": 150 }]
```

##  Obtener producto por ID

- **GET** `/api/products/:id`
- **Descripcion:** Devuelve un producto especifico por su ID.
- **Parametros:**
  -`id` (path, requerido): ID del producto.
- **Ejemplo de uso:**`/products/U10MAsSwDaTHzINGjAkT`
- **Respuesta ejemplo:**

```json
{
    "id": "U10MAsSwDaTHzINGjAkT",
    "name": "producto 1",
    "price": 100,
    "categories": [
        "Categoria 1",
        "Categoria 2"
    ]
}
```


  ### Registrarse (se necesitara para modificar la base de datos si no esta logueado)
- **POST** `/api/auth/register`
- **Descripcion:** se crea un usuario nuevo en la base de datos para poder loguearse luego.
- **Body (JSON):** debe incluir mail y password.
```json
{
    "email":"jonatan@gmail.com",
    "password": "1234"
}

```

## Respuestas Posibles:

- **201 Created: Registro exitoso.** Devuelve mensaje y el email del usuario creado.

```json
{
 {
  "message": "Acaba de registrase ya puede iniciar sesion con el mail:",
  "email": "aa@f.com",
  "message2": "y su contraseña"
}
}
```
- **400 Bad Request:** Si falta el email o password.


```json
{
  "message": "Email  y contraseña son requeridos"
}
```

- **409 Conflict:** Si el email ya está registrado.


```json
{
  "message": "El usuario ya existe"
}
```

### INICIAR SESION (obtendremos el token si queremos modificar algo en la base de datos)
- **POST** `/api/auth/login`
- **Descripcion:** Autentica un usuario existente y devuelve un JSON Web Token (JWT) para ser usado en futuras peticiones protegidas.
- **Body (JSON):** debe incluir mail y password.
```json
{
    "email":"jonatan@gmail.com",
    "password": "1234"
}

```

## Respuestas Posibles:

- **200 OK:** Inicio de sesión exitoso. Devuelve un JWT que expira en 1 hora.

```json
{
  {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IklEX1VTVUFSSU8iLCJlbWFpbCI6InVzdWFyaW8uZXhpc3RlbnRlQGVqZW1wbG8uY29tIiwiaWF0IjoxNjcyNTc1NDMwLCJleHAiOjE2NzI1NzkxNjB9.S0m3Y0UrU0Q6Q0m4d0V5Q4m5y0D8v3P9z0"
}
}
```
- **400 Bad Request:** Si falta el email o password.


```json
{
  "message": "Email  y contraseña son requeridos"
}
```

- **401 Unauthorized:** Si el email no existe o la password es incorrecta.


```json
{
  "message": "Credenciales invalidas"
}
```





### Crear un producto

- **POST** `/api/products`
- **Descripcion:** Crea un nuevo producto.
- **Body (JSON):**
```json
{
"name": "producto 1",
"price": 100,
"categories": ["Categoria 1",
 "Categoria 2"]
}
```

- **Respuesta ejemplo(201 Created):**

```json
{
    "id": "U10MAsSwDaTHzINGjAkT",
    "name": "producto 1",
    "price": 100,
    "categories": [
        "Categoria 1",
        "Categoria 2"
    ]
}
```

### Actualizar un producto (PUT)
- **PUT** `/api/products/:id`
- **Descripcion:** Reemplaza completamente la informacion de un producto por su ID. Requiere enviar todos los campos.
- **Parametros:**
  - `id` (path, requerido): ID del producto a actualizar
- **Body (JSON):**Debe incluir  anme, price, categories.
```json
{
"name": "Nombre actualizado",
"price": 100,
"categories": ["Categoria 1"]
}
```

- **Respuesta ejemplo (200 OK):**

```json
{
    "id": "UUSRcQ89NKSgELZfDslq",
    "name": "Nombre actualizado",
    "price": 100,
    "categories": [
        "Categoria 1"
        ]

}
```



### Actualizar un producto parcialmente (PATCH)
- **PATCH** `/api/products/:id`
- **Descripcion:** Modifica uno o más campos de un producto por su ID, sin afectar los demás.
- **Parametros:**
  - `id` (path, requerido): ID del producto a actualizar
- **Body (JSON):**
```json
{
"price": 100,
}
```

- **Respuesta ejemplo (200 OK):** devuelve el objeto modificado.

```json
{
    "id": "U10MAsSwDaTHzINGjAkT",
    "price": 100,  
}
```
 - **Respuesta:** 200 OK 


### Eliminar un producto
- **DELETE** `/api/products/:id`
- **Descripcion:** Elimina un producto por su ID.
- **Parametros:**
  - `id` (path, requerido): ID del producto a eliminar
  - **Respuesta:** 204 No Content

