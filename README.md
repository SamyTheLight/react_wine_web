# 🍷 Web de Bodega – React + Material UI

Este proyecto consiste en el desarrollo de una **página web para una bodega de vinos**, utilizando **React** y **Material UI**.  
El objetivo principal es ofrecer una web moderna, responsive y accesible, que muestre información sobre la bodega, sus vinos y formas de contacto.

---

## 🛠️ Tecnologías utilizadas

-   **React** (con Vite)
-   **React Router** – navegación entre páginas
-   **Material UI (MUI)** – diseño y componentes
-   **i18next / react-i18next** – internacionalización
-   **Context API** – gestión de tema (dark / light mode)

---

## 🌍 Funcionalidades principales

### ✅ Navegación

-   Sistema de rutas usando React Router
-   Páginas disponibles:
    -   Home
    -   History
    -   Pricing
    -   Contact

---

### ✅ Diseño responsive

-   Adaptación completa a:
    -   móviles
    -   tablets
    -   escritorio
-   Uso de Grid de Material UI

---

### ✅ Home Page

-   Imagen de fondo con overlay
-   Sección de vinos destacados mostrados mediante cards
-   Cards responsive

---

### ✅ Historia de la bodega

-   Página visual con imagen destacada
-   Información dividida en bloques temporales
-   Diseño claro y legible

---

### ✅ Página de precios

-   Presentación de vinos mediante tarjetas
-   Precios descriptivos
-   Diseño responsive

---

### ✅ Página de contacto

-   Formulario con campos:
    -   Nombre
    -   Email
    -   Mensaje
-   Integración de `mailto:` para abrir el cliente de correo del usuario
-   Mapa integrado mediante Google Maps

---

## 🌐 Internacionalización (i18n)

La web está disponible en **tres idiomas**:

-   Español
-   Catalán
-   Inglés

El idioma se puede cambiar desde el header y se aplica en tiempo real a toda la web.

---

## 🌙 Dark Mode / Light Mode

-   Sistema de tema oscuro y claro
-   Implementado mediante Context API y ThemeProvider de Material UI
-   Botón de cambio de tema disponible en el header
-   Los colores y textos se adaptan automáticamente según el modo

---

## 🍪 Pop-up de cookies

-   Aviso de cookies implementado con Material UI
-   Persistencia mediante `localStorage`
-   El mensaje solo se muestra la primera vez que se accede a la web

## 🚀 Instalación y ejecución

1. Clonar el repositorio:

git clone https://github.com/SamyTheLight/react_wine_web.git

2. Instalar dependencias:

npm install

3. Ejecutar el proyecto:

npm run dev
