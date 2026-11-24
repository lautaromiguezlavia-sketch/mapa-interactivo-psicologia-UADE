# Cómo sumar una carrera

Cada carrera es un archivo de datos en la carpeta `planes/`. No hace falta programar.

1. **Copiá** `planes/PLANTILLA.js` y renombralo, por ejemplo `planes/mi-universidad-mi-carrera.js`.
2. **Completá** los datos de la carrera, las materias y las correlativas directas (los comentarios del archivo explican cada campo).
3. **Registrala** en `planes/lista.js`: agregá un bloque con el mismo `id` y la ruta del archivo.
4. **Subí** los archivos al repositorio. La carrera aparece sola en el menú principal.

## Reglas para los datos

- Los **códigos** de materia tienen que ser únicos.
- `y` (año) va de 1 a `anios`, y `q` (período) de 1 a `periodosPorAnio`.
- Las **correlativas** se cargan directas. Si C pide B y B pide A, C solo lleva B; la página calcula la cadena completa.
- Cada materia tiene que usar un `a` (área) definido en `areas`.

## Controles automáticos

Al abrir un plan, la página revisa el archivo. Si hay códigos repetidos, correlativas que apuntan a materias que no existen, materias fuera de rango o ciclos de correlativas, **no abre el plan** y muestra la lista de problemas en el menú.

## Cómo conseguir los datos

El plan de estudios y las correlativas suelen estar en el sitio de la universidad o en su campus virtual. Cargalos tal cual figuran y revisá una por una las materias con muchas correlativas.

## Avance de cada persona

El avance de cada carrera se guarda en el navegador con la clave `storage` del plan, así que cambiar de carrera no mezcla datos. No uses la misma clave para dos planes.
