# API REST en Node.js

## Descripcion

API REST para gestion de productos desarrollada con Node.js y Express.

## Instalacion

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. configurar variaables de entorno:

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

- **GET** `/products`
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

- **GET** `/products/search?name=palabra`
- **Descripcion:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parametros:**
  -`name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:**`/products/search?camiseta`
- **Respuesta ejemplo:**

```json
[{ "id": 1, "name": "Camiseta Deportiva", "price": 150 }]
```

##  Obtener producto por ID

- **GET** `/products/:id`
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

### Crear un producto

- **POST** `/products`
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

### Eliminar un producto
- **DELETE** `/products/:id`
- **Descripcion:** Elimina un producto por su ID.
- **Parametros:**
  - `id` (path, requerido): ID del producto a eliminar
  - **Respuesta:** 204 No Content