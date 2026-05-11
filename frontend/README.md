# LSA Accesibles

Aplicación web desarrollada con React orientada a mejorar la accesibilidad mediante Lengua de Señas Argentina (LSA).

La plataforma permite visualizar distintos servicios accesibles acompañados de videos explicativos en LSA, brindando una experiencia moderna, intuitiva y responsive.

---

# Objetivo del Proyecto

El objetivo principal de la aplicación es facilitar el acceso a información y servicios mediante recursos visuales y videos en Lengua de Señas Argentina.

Además, el proyecto busca:

* Promover la accesibilidad digital.
* Mejorar la comunicación inclusiva.
* Acercar herramientas relacionadas con LSA.
* Brindar una experiencia moderna y adaptable.

---

# Funcionalidades Principales

## Servicios accesibles

La aplicación muestra diferentes servicios mediante tarjetas interactivas.

Cada tarjeta incluye:

* Imagen representativa.
* Video explicativo en LSA.
* Hover interactivo.
* Acceso a una página de detalle.
* Información del servicio.

---

## Página de detalle

Cada servicio cuenta con:

* Video explicativo ampliado.
* Información individual.
* Navegación dinámica mediante React Router.

---

## Diccionario LSA

La plataforma incorpora una sección de diccionario para acercar conceptos básicos relacionados con Lengua de Señas Argentina.

---

## Formulario de contacto

La aplicación incluye un formulario moderno de contacto con:

* Inputs con placeholder.
* Validación básica.
* Estado visual de envío.

---

## Botón flotante de WhatsApp

Se implementó un acceso rápido a WhatsApp mediante un botón flotante.

Características:

* Acceso rápido desde cualquier sección.
* Número no visible directamente en pantalla.
* Diseño responsive.

---

# Características Técnicas

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

La aplicación fue contenerizada para garantizar:

* Portabilidad.
* Compatibilidad entre entornos.
* Facilidad de despliegue.
* Escalabilidad.

---

# Arquitectura del Proyecto

```txt
src/
│
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── ServiceCard/
│   └── WhatsAppButton/
│
├── pages/
│   ├── Home/
│   ├── DetallePage/
│   ├── Diccionario/
│   └── Contacto/
│
├── styles/
│
├── App.jsx
└── main.jsx
```

---

# Diseño y Experiencia de Usuario

La interfaz fue diseñada priorizando:

* Accesibilidad.
* Simplicidad visual.
* Responsive Design.
* Navegación intuitiva.
* Experiencia moderna.

Características visuales:

* Hero section.
* Tarjetas interactivas.
* Hover animations.
* Diseño adaptable.
* Navegación clara.

---

# Responsive Design

La aplicación fue adaptada para:

* Computadoras.
* Tablets.
* Dispositivos móviles.

Mediante:

* CSS Grid.
* Flexbox.
* Media Queries.

---

# SEO Básico Implementado

Se implementaron prácticas básicas de SEO:

* Estructura semántica.
* Meta descripción.
* Títulos descriptivos.
* Navegación organizada.
* URLs amigables.

---

# Consumo de API

La aplicación consume datos desde una API simulada.

Los servicios son obtenidos dinámicamente mediante fetch.

---

# Variables de Entorno

La aplicación utiliza variables de entorno mediante Vite.

Ejemplo:

```env
VITE_API_URL=http://localhost:3000
```

---

# Instalación del Proyecto

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

## Ejecutar aplicación

```bash
npm run dev
```

---

# Ejecución con Docker

## Construir contenedores

```bash
docker compose build
```

---

## Levantar aplicación

```bash
docker compose up
```

---

# Tecnologías Utilizadas

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

* Integración con backend real.
* Sistema de autenticación.
* Panel administrativo.
* Más contenido de diccionario LSA.
* Búsqueda avanzada.
* Mejoras SEO.
* Internacionalización.

---

# Autor

Proyecto desarrollado con enfoque en accesibilidad, experiencia de usuario y escalabilidad frontend.
