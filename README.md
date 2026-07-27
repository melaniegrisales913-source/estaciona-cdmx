# Estaciona CDMX

Aplicación web interactiva para buscar estacionamientos en la Ciudad de México por nombre, zona, precio y disponibilidad.

## 1. Problema

Encontrar estacionamiento en la Ciudad de México puede tomar tiempo debido a la alta demanda y a la falta de información centralizada. Esto provoca que los conductores recorran varias calles antes de encontrar una opción adecuada.

La aplicación concentra información básica de distintos estacionamientos para que el usuario pueda comparar opciones de forma rápida.

## 2. Objetivo

Desarrollar una aplicación web funcional que permita:

- Buscar estacionamientos por nombre o zona.
- Filtrar por zona.
- Filtrar por disponibilidad.
- Filtrar por precio máximo.
- Ordenar los resultados.
- Consultar indicadores dinámicos.
- Visualizar la aplicación correctamente en computadora y celular.

## 3. Funciones principales

- Búsqueda en tiempo real.
- Filtro por zona.
- Filtro por disponibilidad.
- Filtro por precio máximo.
- Ordenamiento por precio o espacios disponibles.
- KPIs dinámicos.
- Mensaje cuando no hay resultados.
- Manejo de errores inesperados.
- Diseño responsivo.
- Botón para limpiar filtros.

## 4. Stack tecnológico

### HTML

HTML construye la estructura semántica de la aplicación. Organiza el encabezado, los filtros, los KPIs, las tarjetas de resultados y los estados alternativos.

### CSS

CSS define el diseño visual, la jerarquía de información y la adaptación a distintos tamaños de pantalla mediante media queries.

### JavaScript

JavaScript implementa la lógica principal:

- Carga de datos.
- Normalización de texto.
- Búsqueda.
- Filtros.
- Ordenamiento.
- Cálculo de KPIs.
- Creación dinámica de tarjetas.
- Manejo de eventos.
- Control de casos borde.

### Git

Git se utiliza como sistema de control de versiones. Permite registrar cambios, comparar versiones y recuperar estados anteriores.

### GitHub

GitHub almacena el repositorio público y documenta el proceso de desarrollo mediante commits.

### Vercel

Vercel despliega la aplicación desde GitHub y genera un dominio público. Cada cambio enviado a la rama principal puede actualizar el sitio automáticamente.

### Inteligencia artificial como copiloto

La IA se utilizó para apoyar la estructura inicial, revisar la lógica de filtrado, proponer mejoras visuales y documentar el proyecto. El código final fue revisado y adaptado según el alcance del proyecto.

## 5. Estructura del proyecto

```text
Estaciona_CDMX_Perfecto/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 6. Lógica algorítmica

```text
INICIO

Cargar los datos de estacionamientos.

SI ocurre un error:
    Mostrar mensaje de error.
SI los datos cargan correctamente:
    Mostrar todos los estacionamientos.

Leer:
    búsqueda
    zona
    disponibilidad
    precio máximo
    criterio de ordenamiento

PARA cada estacionamiento:
    Verificar coincidencia con la búsqueda.
    Verificar coincidencia con la zona.
    Verificar coincidencia con la disponibilidad.
    Verificar que el precio sea menor o igual al máximo.

Guardar los estacionamientos que cumplen todas las condiciones.

Ordenar los resultados.

SI no existen resultados:
    Mostrar mensaje de lista vacía.
    Colocar los KPIs en cero.

SI existen resultados:
    Crear una tarjeta por estacionamiento.
    Calcular total de resultados.
    Calcular opciones disponibles.
    Calcular precio promedio.
    Calcular total de espacios libres.
    Actualizar los KPIs.

FIN
```

## 7. Casos alternativos y casos borde

- Búsqueda vacía: se muestran todos los estacionamientos.
- Texto con acentos: la búsqueda normaliza los caracteres.
- Precio máximo vacío: no se aplica el filtro de precio.
- Precio máximo inválido: el sistema evita fallos.
- Cero resultados: aparece un mensaje y los KPIs se actualizan en cero.
- Error inesperado: aparece un estado de error.
- Cambio de filtros: los resultados se actualizan sin recargar la página.
- Pantalla pequeña: la interfaz reorganiza los elementos.

## 8. Prompts principales utilizados con IA

1. “Crea una aplicación web para encontrar estacionamientos en CDMX con HTML, CSS y JavaScript.”
2. “Agrega búsqueda por nombre y zona.”
3. “Agrega filtros por disponibilidad y precio máximo.”
4. “Incluye KPIs dinámicos para total, disponibilidad, precio promedio y espacios libres.”
5. “Agrega ordenamiento por precio y espacios disponibles.”
6. “Incluye casos alternativos como búsquedas vacías, cero resultados y errores.”
7. “Haz el diseño responsivo para computadora y celular.”
8. “Genera un README con stack, lógica, prompts y autoevaluación.”

## 9. Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto.
3. Abrir `index.html` en un navegador.

No requiere instalación de paquetes ni dependencias externas.

## 10. Despliegue en Vercel

1. Crear un repositorio público en GitHub.
2. Subir `index.html`, `styles.css`, `script.js` y `README.md`.
3. Entrar a Vercel.
4. Iniciar sesión con GitHub.
5. Importar el repositorio.
6. Presionar `Deploy`.
7. Copiar el dominio público.

## 11. Autoevaluación

Considero que el proyecto cumple con el objetivo porque transforma la planeación inicial en una aplicación funcional e interactiva.

La lógica está dividida en funciones específicas para cargar zonas, normalizar texto, filtrar, ordenar, calcular KPIs, crear tarjetas y actualizar la interfaz. También se contemplan casos borde como búsquedas vacías, ausencia de resultados y errores inesperados.

La aplicación demuestra pensamiento algorítmico porque el problema fue descompuesto en pasos concretos, secuenciales y ejecutables por una máquina.

Como mejora futura, el proyecto podría conectarse a una base de datos real, integrar mapas, geolocalización, reservaciones y disponibilidad en tiempo real.

## 12. Criterios de éxito alcanzados

- Aplicación interactiva.
- Búsqueda funcional.
- Filtros funcionales.
- Ordenamiento funcional.
- KPIs dinámicos.
- Diseño responsivo.
- Manejo de casos alternativos.
- Código separado por archivos.
- README técnico.
- Proyecto listo para GitHub y Vercel.
