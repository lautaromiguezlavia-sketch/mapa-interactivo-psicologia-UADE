/* Lista de carreras que aparecen en el menú principal.
   Para sumar una carrera: agregá un bloque como los de abajo (separado por coma) apuntando a su archivo de plan.
   Instrucciones completas en planes/LEEME.md */
window.PLAN_LISTA = [
  {
    id: 'uade-psicologia-7816',                 // igual al id que tiene el archivo del plan
    archivo: 'planes/uade-psicologia-7816.js',   // ruta del archivo del plan
    universidad: 'UADE',
    universidadLarga: 'Universidad Argentina de la Empresa',
    carrera: 'Licenciatura en Psicología',
    plan: 'Plan 7816 (2016)',
    anios: 4,
    materias: 43,
    icono: 'Ψ',
    storage: 'psico-uade-7816'                   // clave donde se guarda el avance (igual a la del archivo del plan)
  }
];

/* Opcional: link a un formulario para que la gente mande planes nuevos. */
window.PLAN_CONFIG = {
  formularioPlanes: ''
};
