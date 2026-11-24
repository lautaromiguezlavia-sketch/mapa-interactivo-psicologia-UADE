/* PLANTILLA para sumar una carrera.
   1) Copiá este archivo con otro nombre, por ejemplo: planes/mi-universidad-mi-carrera.js
   2) Completá los datos y borrá los comentarios que no necesites.
   3) Agregá la carrera en planes/lista.js (mismo id y ruta de archivo).
   Todo lo marcado como OPCIONAL se puede borrar. */
registrarPlan({
  id: 'mi-universidad-mi-carrera',      // único, en minúsculas y con guiones. Tiene que coincidir con lista.js
  universidad: 'MiUni',                  // nombre corto
  universidadLarga: 'Mi Universidad',    // OPCIONAL
  carrera: 'Licenciatura en Algo',
  plan: 'Plan 2020',                     // OPCIONAL: nombre o código del plan
  titulo: 'Mi camino en Algo',           // OPCIONAL: título grande de la página
  icono: '🎓',                           // OPCIONAL: un emoji o una letra
  anios: 4,                              // cantidad de años
  periodosPorAnio: 2,                    // 2 = cuatrimestres/semestres, 1 = materias anuales
  periodo: 'cuatrimestre',               // cómo se llama el período: 'cuatrimestre', 'semestre', 'trimestre'
  notaMin: 4,                            // nota mínima de aprobación
  notaMax: 10,                           // nota máxima
  storage: 'mi-universidad-mi-carrera',  // OPCIONAL: clave para guardar el avance en el navegador (si falta se arma sola)
  fuente: 'Sitio de la universidad',     // OPCIONAL: de dónde salieron los datos

  /* Áreas: sirven para colorear las materias y filtrar. h es el color (0 a 360). OPCIONAL: si no hay áreas, todo va de un solo color. */
  areas: {
    basicas: { n: 'Ciclo básico', h: 208 },
    especificas: { n: 'Específicas', h: 340 }
  },

  /* Materias. c = código (único), n = nombre, s = subtítulo (puede ser ''),
     y = año, q = período dentro del año (1 o 2), a = área (una de las de arriba). */
  materias: [
    { c: 'A001', n: 'Introducción', s: '', y: 1, q: 1, a: 'basicas' },
    { c: 'A002', n: 'Matemática I', s: '', y: 1, q: 1, a: 'basicas' },
    { c: 'A003', n: 'Matemática II', s: '', y: 1, q: 2, a: 'basicas' }
  ],

  /* Correlativas DIRECTAS: la materia -> las que hay que tener aprobadas antes.
     No repitas las indirectas: si B pide A y C pide B, C solo lleva B. La página arma el resto. */
  correlativas: {
    'A003': ['A002']
  },

  /* OPCIONAL: bibliografía por materia (código -> lista de textos). Una línea que empieza con # es un subtítulo. */
  bibliografia: {
    // 'A002': ['#Unidad 1', 'Autor, Título del libro', '#Unidad 2', 'Otro texto']
  },

  /* OPCIONAL: carpetas compartidas con los archivos (id de la carpeta de Drive por materia) y carpeta general. */
  carpetas: {
    // 'A002': 'ID_DE_LA_CARPETA_DE_DRIVE'
  },
  carpetaRaiz: '',

  /* OPCIONAL: link a un formulario para que la gente aporte material. */
  formularioAportes: ''
});
