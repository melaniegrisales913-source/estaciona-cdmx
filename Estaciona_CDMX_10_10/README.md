# Estaciona CDMX

Aplicación web interactiva para buscar estacionamientos en la Ciudad de México por nombre, zona, precio y disponibilidad.

## Problema

Encontrar estacionamiento en la Ciudad de México puede tomar tiempo debido a la alta demanda y a la falta de información centralizada. Esto provoca recorridos innecesarios y dificulta comparar precios y disponibilidad.

## Objetivo

Desarrollar una aplicación web funcional que permita:

- Buscar estacionamientos por nombre o zona.
- Filtrar por zona, disponibilidad y precio máximo.
- Ordenar por precio o espacios libres.
- Consultar KPIs dinámicos.
- Visualizar correctamente la aplicación en computadora y celular.

## Funciones principales

- Búsqueda en tiempo real.
- Filtro por zona.
- Filtro por disponibilidad.
- Filtro por precio máximo.
- Ordenamiento de resultados.
- KPIs de total, disponibilidad, precio promedio y espacios libres.
- Mensaje cuando no existen resultados.
- Manejo de errores inesperados.
- Diseño responsivo.
- Pruebas automáticas de la lógica.
- Verificación automática con GitHub Actions.

## Arquitectura del proyecto

El proyecto separa responsabilidades para evitar una copia monolítica y difícil de mantener:

```text
index.html
styles.css
js/
├── app.js       # Controlador principal
├── data.js      # Fuente de datos
├── logic.js     # Filtros, ordenamiento y KPIs
└── ui.js        # Lectura y actualización de la interfaz
tests/
└── logic.test.js
.github/
└── workflows/
    └── quality.yml
package.json
README.md
```

### Flujo principal

1. `app.js` lee los controles de la interfaz.
2. Envía los datos y filtros a `logic.js`.
3. `logic.js` filtra, ordena y calcula KPIs.
4. `ui.js` muestra los resultados.
5. Si ocurre un error, se activa un estado alternativo.

## Stack tecnológico

### HTML

Define la estructura semántica de la interfaz.

### CSS

Controla el diseño visual y la adaptación a distintos tamaños de pantalla.

### JavaScript modular

Implementa la lógica de negocio mediante módulos ES. Se eligió para separar responsabilidades y facilitar pruebas y mantenimiento.

### Git y GitHub

Git controla las versiones. GitHub conserva el historial de commits y conecta el repositorio con Vercel.

### GitHub Actions

Ejecuta automáticamente la revisión de sintaxis y las pruebas cada vez que se hace un `push` a la rama `main`.

### Vercel

Despliega la aplicación públicamente y actualiza el sitio cuando GitHub recibe cambios.

### Inteligencia artificial como copiloto

La IA se utilizó para proponer una primera estructura, revisar la lógica, sugerir casos borde y apoyar la documentación. Las decisiones finales fueron revisadas manualmente.

## Lógica algorítmica

```text
INICIO

Cargar datos locales.

Leer:
    búsqueda
    zona
    disponibilidad
    precio máximo
    criterio de ordenamiento

PARA cada estacionamiento:
    Normalizar texto.
    Validar búsqueda.
    Validar zona.
    Validar disponibilidad.
    Validar precio.

Guardar coincidencias.
Ordenar resultados.
Calcular KPIs.

SI no existen resultados:
    Mostrar estado vacío.
    Colocar KPIs en cero.

SI ocurre un error:
    Mostrar estado de error.

SI existen resultados:
    Crear tarjetas.
    Actualizar indicadores.

FIN
```

## Casos alternativos y casos borde

- Búsqueda vacía: muestra todos los estacionamientos.
- Texto con acentos: se normaliza antes de comparar.
- Precio vacío: no aplica el filtro.
- Precio inválido o negativo: no rompe la aplicación.
- Cero resultados: muestra un mensaje y KPIs en cero.
- Error inesperado: muestra un estado de error.
- Pantalla pequeña: reorganiza los componentes.

## Optimización y escalabilidad

La operación principal recorre la lista una vez para filtrar, por lo que su complejidad es `O(n)`. El ordenamiento es `O(n log n)`.

Para el tamaño actual de datos, esta solución es suficiente. Si el proyecto creciera a miles de registros, sería mejor:

- Mover filtros y paginación al servidor.
- Consultar una API o base de datos.
- Cargar resultados por páginas.
- Evitar renderizar cientos de tarjetas al mismo tiempo.
- Aplicar caché a consultas frecuentes.

## Limitaciones y alucinaciones detectadas en la IA

Durante el desarrollo, la IA sugirió inicialmente:

- Una estructura demasiado básica y poco modular.
- Datos integrados directamente dentro del archivo principal.
- Funciones mezcladas con el renderizado.
- Un README sin suficiente evidencia técnica.
- Mejoras visuales que no cubrían por sí solas la rúbrica.

Estas sugerencias no se aceptaron automáticamente.

## Mitigación de riesgos y validación manual

Para reducir errores:

- Se separaron datos, lógica y vista.
- Se revisó cada función antes de publicarla.
- Se probaron búsquedas con y sin acentos.
- Se probaron filtros individuales y combinados.
- Se verificó el caso de cero resultados.
- Se verificaron manualmente los KPIs.
- Se agregaron pruebas automáticas con Node.js.
- Se agregó GitHub Actions para evitar desplegar código con errores de sintaxis o pruebas fallidas.

## Variables de entorno

Esta versión no usa APIs externas ni datos sensibles, por lo que no necesita variables de entorno. Agregar variables ficticias sería incorrecto y no mejoraría la seguridad.

Si en el futuro se integra una API con llave privada, la clave deberá guardarse en Vercel y nunca escribirse directamente en el repositorio.

## Prompts principales utilizados con IA

1. “Crea una aplicación web para encontrar estacionamientos en CDMX.”
2. “Separa los datos, la lógica y el renderizado en módulos.”
3. “Agrega búsqueda, filtros, ordenamiento y KPIs.”
4. “Incluye casos borde y estados alternativos.”
5. “Analiza la complejidad y escalabilidad del algoritmo.”
6. “Agrega pruebas automáticas y un flujo de GitHub Actions.”
7. “Documenta las limitaciones de la IA y cómo fueron mitigadas.”
8. “Haz el diseño responsivo.”

## Pruebas

Ejecutar:

```bash
npm test
```

Revisar sintaxis:

```bash
npm run check
```

## Despliegue

1. Subir todos los archivos a GitHub.
2. Verificar que GitHub Actions termine correctamente.
3. Conectar el repositorio a Vercel.
4. Confirmar que el despliegue esté en estado `Ready`.

## Autoevaluación

El proyecto transforma la planeación en una aplicación funcional. La solución está dividida en módulos con responsabilidades claras y maneja flujos normales, alternativos y casos borde.

También incluye análisis de complejidad, pruebas automáticas y un flujo de verificación antes del despliegue. La IA fue utilizada como copiloto, pero sus sugerencias fueron revisadas, corregidas y documentadas.

## Mejoras futuras

- Integrar datos reales mediante una API.
- Agregar geolocalización y mapas.
- Implementar disponibilidad en tiempo real.
- Agregar paginación.
- Incluir reservaciones y cuentas de usuario.
