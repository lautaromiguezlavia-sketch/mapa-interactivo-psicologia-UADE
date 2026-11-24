# 🗺️ Mapas de carrera

Página con **mapas interactivos de planes de estudio**. Desde el menú principal elegís tu carrera y ves de un vistazo qué materias hay, cuáles dependen de cuáles y cómo venís avanzando.

Hoy incluye la **Licenciatura en Psicología de UADE** (Plan 7816, 2016), y cualquier carrera se puede sumar con un archivo de datos (ver más abajo).

Es un proyecto hecho por y para estudiantes. No es una página oficial de ninguna universidad y no tiene relación con ellas.

## ¿Para qué sirve?

- **Ver el plan completo** en un mapa de 43 materias, ordenado por año y cuatrimestre.
- **Entender las correlativas.** Cada materia se conecta con flechas a las que tenés que tener aprobadas antes y a las que habilita. Al elegir una materia se resaltan sus conexiones.
- **Llevar tu avance.** Marcás la cursada como aprobada y, cuando rendís el final, cargás la nota. Como en UADE, una materia recién cuenta para el acta y para las correlativas con el **final aprobado**; mientras tanto figura como "final pendiente".
- **Saber qué podés cursar ahora.** La página te muestra qué materias están habilitadas y cuáles te faltan, con sus correlativas.
- **Calcular tu promedio.** Cuenta solo finales aprobados (nota mínima 4).
- **Consultar la bibliografía.** Cada materia tiene su lista de lecturas y un acceso a la carpeta compartida para abrirlas y descargarlas.
- **Colaborar.** Si tenés material que falta, lo mandás por el formulario de aportes y se suma.
- **Llevarte tus datos.** Podés exportar e importar tu avance en un archivo CSV.

## ¿Cómo se usa?

1. Abrí la página.
2. Tocá una materia para ver su detalle, sus correlativas y su bibliografía.
3. Desde el menú **Mi avance**, marcá las materias que ya cursaste y cargá las notas de tus finales.
4. Mirá tu promedio y las materias que tenés habilitadas.
5. Usá **Exportar** para guardar tu avance y **Importar** para recuperarlo en otro dispositivo.

## Privacidad

- No hay cuentas, registro ni servidores: tu avance y tus notas se guardan **solo en tu navegador**.
- Nadie más puede ver tus datos, y el proyecto tampoco los recibe.
- Si borrás los datos del navegador, se pierde el avance. Por eso conviene exportar el CSV de vez en cuando.

## Bibliografía

Las listas son **lecturas de cursada** armadas a partir de los materiales que compartieron estudiantes. **No son el programa oficial**: para eso, consultá el de tu cátedra. Hay materias que todavía no tienen lecturas cargadas.

Los archivos pueden tener derechos de autor. Se comparten con fines de estudio; si sos titular de derechos y querés que algo se retire, avisá y se baja.

## Cómo aportar

- **Material nuevo:** usá el botón **➕ Aportar material** dentro de "Ver bibliografía" de cada materia.
- **Errores** en correlativas o en la información de una materia: abrí un *issue* en este repositorio.
- **Una carrera nueva:** seguí los pasos de arriba y mandá tu archivo.

## Cómo sumar tu carrera

Cada carrera es un archivo de datos en la carpeta `planes/`. No hace falta programar:

1. Copiá `planes/PLANTILLA.js` y renombralo (por ejemplo `planes/mi-universidad-mi-carrera.js`).
2. Completá los datos, las materias y las correlativas directas.
3. Agregá la carrera en `planes/lista.js`.
4. Subí los archivos: aparece sola en el menú.

Al abrir un plan, la página revisa el archivo y avisa si hay códigos repetidos, correlativas inexistentes o ciclos. Las instrucciones completas están en `planes/LEEME.md`.

## Estructura del proyecto

```
index.html                    la página (menú, mapa, avance, notas)
planes/lista.js               lista de carreras del menú
planes/<carrera>.js           datos de cada carrera
planes/PLANTILLA.js           plantilla para sumar una carrera
planes/LEEME.md               instrucciones detalladas
```

## Para quien quiera usar el código

Es HTML, CSS y JavaScript sin dependencias ni proceso de compilación. Para probarla en tu computadora hay que servir la carpeta con un servidor local (por ejemplo `python3 -m http.server`), porque el navegador no siempre deja leer los archivos de `planes/` abriendo `index.html` directo. Para publicarla, alcanza con subir toda la carpeta a GitHub Pages.

## Fuentes

- Planes y correlativas: cargados a mano a partir de la información de cada institución (en UADE, el WebCampus). Si hay un cambio de plan o de correlativas, pueden quedar desactualizados: verificá siempre con tu universidad.

## Aviso

Proyecto independiente, sin fines de lucro. Usalo como ayuda para organizarte, no como fuente oficial: la situación académica válida es la que figura en tu universidad.
