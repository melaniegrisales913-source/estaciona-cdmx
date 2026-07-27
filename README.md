# Estaciona CDMX

Aplicación web para buscar estacionamientos en la Ciudad de México por nombre, zona, precio y disponibilidad.

## Problema

Encontrar estacionamiento en la Ciudad de México puede tomar tiempo debido a la alta demanda y a la falta de información centralizada. Esta aplicación organiza datos básicos de diferentes estacionamientos para que el usuario pueda comparar opciones rápidamente.

## Objetivo

- Buscar estacionamientos por nombre o zona.
- Filtrar por zona, disponibilidad y precio máximo.
- Consultar KPIs dinámicos.
- Visualizar resultados en computadora y celular.

## Stack tecnológico

### HTML
Construye la estructura de la interfaz, los filtros, los indicadores y las tarjetas.

### CSS
Define el diseño visual y responsivo de la aplicación.

### JavaScript
Implementa la carga de datos, búsqueda, filtros, validaciones, KPIs y actualización dinámica de la interfaz.

### Git y GitHub
Git controla las versiones. GitHub almacena el repositorio público y conserva el historial de cambios.

### Vercel
Publica la aplicación desde GitHub y genera un enlace público. Los nuevos cambios pueden desplegarse automáticamente.

### Inteligencia artificial como copiloto
La IA apoyó la estructura inicial del código, la lógica de filtros, el diseño responsivo y la documentación. Las decisiones finales se revisaron y adaptaron al alcance del proyecto.

## Estructura

```text
parking_app_cdmx/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Lógica algorítmica

```text
INICIO
Cargar datos.
SI ocurre un error:
    Mostrar mensaje de error.
SI cargan correctamente:
    Mostrar todos los estacionamientos.
Leer búsqueda y filtros.
PARA cada estacionamiento:
    Verificar nombre o zona.
    Verificar disponibilidad.
    Verificar precio máximo.
SI no hay resultados:
    Mostrar mensaje.
SI hay resultados:
    Mostrar tarjetas.
    Calcular total, disponibles y precio promedio.
    Actualizar KPIs.
FIN
```

## Casos alternativos y casos borde

- Búsqueda vacía: se muestran todos los estacionamientos.
- Sin coincidencias: aparece un mensaje claro.
- Precio máximo vacío: no se aplica filtro de precio.
- Acentos: la búsqueda normaliza el texto.
- Error inesperado: se muestra un estado de error.
- Cero resultados: los KPIs cambian a cero.

## Prompts principales utilizados con IA

1. “Crea una aplicación web sencilla para encontrar estacionamientos en CDMX usando HTML, CSS y JavaScript.”
2. “Agrega búsqueda por nombre y zona, filtros de disponibilidad y precio máximo.”
3. “Incluye KPIs de total de resultados, disponibles y precio promedio.”
4. “Agrega validaciones para búsquedas vacías, cero resultados y errores.”
5. “Haz el diseño responsivo para celular y computadora.”
6. “Genera un README que explique el stack, la lógica, los prompts y la autoevaluación.”

## Cómo ejecutar

1. Descargar o clonar el repositorio.
2. Abrir la carpeta.
3. Abrir `index.html` en el navegador.

No requiere instalar paquetes.

## Despliegue en Vercel

1. Crear una cuenta en GitHub.
2. Crear un repositorio público.
3. Subir los cuatro archivos.
4. Entrar a Vercel con GitHub.
5. Seleccionar **Add New Project**.
6. Importar el repositorio.
7. Presionar **Deploy**.
8. Copiar el enlace público.

## Autoevaluación

El proyecto transforma la planeación en una aplicación funcional. La lógica está dividida en pasos claros y contempla búsquedas vacías, filtros sin resultados y errores inesperados.

La aplicación utiliza estructuras de control, arreglos, funciones, eventos, filtrado de datos y actualización dinámica. Como mejora futura, podría conectarse a una base de datos real, mapas, geolocalización y reservaciones.

## Criterios alcanzados

- Aplicación interactiva.
- Búsqueda y filtros funcionales.
- KPIs dinámicos.
- Diseño responsivo.
- Código separado por archivos.
- README técnico.
- Proyecto listo para GitHub y Vercel.
