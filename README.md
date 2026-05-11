<img width="1366" height="768" alt="uno" src="https://github.com/user-attachments/assets/78473cff-2dcb-4594-961c-cc070d261fec" />
<img width="1366" height="768" alt="2" src="https://github.com/user-attachments/assets/587954e2-60dd-404d-b71a-e4fc60e91c59" />
# LSA Accesibles

Aplicacion web desarrollada con React orientada a mejorar la accesibilidad mediante Lengua de Senas Argentina (LSA).

La plataforma permite visualizar distintos servicios accesibles acompanados de videos explicativos en LSA, brindando una experiencia moderna, intuitiva y responsive.

---

# Objetivo del Proyecto

El objetivo principal de la aplicacion es facilitar el acceso a informacion y servicios mediante recursos visuales y videos en Lengua de Senas Argentina.

Ademas, el proyecto busca:

* Promover la accesibilidad digital.
* Mejorar la comunicacion inclusiva.
* Acercar herramientas relacionadas con LSA.
* Brindar una experiencia moderna y adaptable.

---

# Funcionalidades Principales

## Servicios accesibles

La aplicacion muestra diferentes servicios mediante tarjetas interactivas.

Cada tarjeta incluye:

* Imagen representativa.
* Video explicativo en LSA.
* Hover interactivo.
* Acceso a una pagina de detalle.
* Informacion del servicio.

---

## Pagina de detalle

Cada servicio cuenta con:

* Video explicativo ampliado.
* Informacion individual.
* Navegacion dinamica mediante React Router.

---

## Diccionario LSA

La plataforma incorpora una seccion de diccionario para acercar conceptos basicos relacionados con Lengua de Senas Argentina.

---

## Formulario de contacto

La aplicacion incluye un formulario moderno de contacto con:

* Inputs con placeholder.
* Validacion basica.
* Estado visual de envio.

---

## Boton flotante de WhatsApp

Se implemento un acceso rapido a WhatsApp mediante un boton flotante.

Caracteristicas:

* Acceso rapido desde cualquier seccion.
* Numero no visible directamente en pantalla.
* Diseno responsive.

---

# Caracteristicas Tecnicas

## Frontend

* React
* React Router DOM
* JavaScript ES6+
* CSS3
* Vite

---

## Infraestructura

* Docker
* Docker Compose

La aplicacion fue contenerizada para garantizar:

* Portabilidad.
* Compatibilidad entre entornos.
* Facilidad de despliegue.
* Escalabilidad.

---

# Arquitectura del Proyecto

```txt
src/
|
|-- components/
|   |-- Header/
|   |-- Footer/
|   |-- ServiceCard/
|   `-- WhatsAppButton/
|
|-- pages/
|   |-- Home/
|   |-- DetallePage/
|   |-- Diccionario/
|   `-- Contacto/
|
|-- styles/
|
|-- App.jsx
`-- main.jsx
```

---

# Diseno y Experiencia de Usuario

La interfaz fue disenada priorizando:

* Accesibilidad.
* Simplicidad visual.
* Responsive Design.
* Navegacion intuitiva.
* Experiencia moderna.

Caracteristicas visuales:

* Hero section.
* Tarjetas interactivas.
* Hover animations.
* Diseno adaptable.
* Navegacion clara.

---

# Responsive Design

La aplicacion fue adaptada para:

* Computadoras.
* Tablets.
* Dispositivos moviles.

Mediante:

* CSS Grid.
* Flexbox.
* Media Queries.

---

# SEO Basico Implementado

Se implementaron practicas basicas de SEO:

* Estructura semantica.
* Meta descripcion.
* Titulos descriptivos.
* Navegacion organizada.
* URLs amigables.

---

# Consumo de API

La aplicacion consume datos desde una API simulada.

Los servicios son obtenidos dinamicamente mediante fetch.

---

# Variables de Entorno

La aplicacion utiliza variables de entorno mediante Vite.

Ejemplo:

```env
VITE_API_URL=http://localhost:3000
```

---

# Instalacion del Proyecto

## Clonar repositorio

```bash
git clone https://github.com/jonylsamerlo-maker/LSA-iNTERPRETES.git
```

---

## Instalar dependencias

```bash
cd LSA-iNTERPRETES/frontend
npm install
```

---

## Ejecutar aplicacion

```bash
npm run dev
```

---

# Ejecucion con Docker

## Construir contenedores

```bash
docker compose build
```

---

## Levantar aplicacion

```bash
docker compose up
```

---

# Tecnologias Utilizadas

* React
* React Router DOM
* JavaScript
* CSS3
* Vite
* Docker
* Docker Compose
* Cloudinary

---

# Futuras Mejoras

* Integracion con backend real.
* Sistema de autenticacion.
* Panel administrativo.
* Mas contenido de diccionario LSA.
* Busqueda avanzada.
* Mejoras SEO.
* Internacionalizacion.

---

# Autor

Proyecto desarrollado con enfoque en accesibilidad, experiencia de usuario y escalabilidad frontend.
