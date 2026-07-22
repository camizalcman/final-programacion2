# Final de programación II 

Sitio web que presenta diferente ciudades del mundo junto a una investigación llevada a cabo durante la cursada de Programación Multimedial II. Incluye una galería de destinos con carga asincrónica, una página con información e imágenes de cada ciudad, un panel de administración con CRUD completo de contenido y usuarios, y una página interactiva sobre los conceptos principales de Vue.js.

## Link

- **Sitio en producción:** https://final-programacion2.vercel.app/

## Tecnologías utilizadas

- **Vue 3** 
- **TypeScript**
- **Vite**
- **Pinia** 
- **Vue Router** 
- **Tailwind CSS**
- **Heroicons** 
- **@vueuse/motion** 

## Cómo correr el proyecto localmente

```bash
# Clonar el repositorio
git clone [link del repositorio]
cd final-programacion2

# Instalar dependencias
npm install

# Correr en modo desarrollo
npm run dev
```

## Credenciales de acceso

Para probar el panel de Administración, se necesita ingresar con un usuario que tenga permisos de admin.

**Usuario administrador:**
```
Email: admin@viajes.com
Contraseña: admin123
```

También hay usuarios comunes (sin permisos de admin) cargados en `src/data/users.json`, útiles para probar el mensaje de "acceso restringido" al panel de Admin.

> Los cambios realizados en el panel de Admin (crear/editar/borrar destinos o usuarios) se reflejan de inmediato en la interfaz, pero **no se persisten** al refrescar la página — es el comportamiento esperado según la consigna del trabajo.

## Estructura del sitio

El proyecto cuenta con 3 páginas principales, más las vistas de soporte (login, detalle):

1. **Galería de destinos** (`/`) — listado de destinos cargado de forma asincrónica desde un JSON, con filtro por continente y vista de detalle individual (`/content/:id`).
2. **Panel de Administración** (`/admin`) — acceso restringido a usuarios con permisos de admin. Permite crear, editar y borrar tanto destinos como usuarios, con feedback inmediato en pantalla y registro de cada acción en la consola del navegador.
3. **Investigación** (`/research`) — página interactiva con los conceptos principales de Vue.js (reactividad, directivas, props, computed properties, lifecycle hooks, Single File Components), cada uno ejemplificado con un componente interactivo.

