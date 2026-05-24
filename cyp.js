 /* ─────────────────────────────────────────────────────────────────
   SECCIÓN DE INTERFAZ
   ───────────────────────────────────────────────────────────────── */
 // Ocultar todas las secciones
function cambiarSeccion(idSeccion, botonActivo) {
  document.querySelectorAll('.seccion').forEach(function(s) {
    s.classList.remove('activa');
  });

  // Desactivar todos los botones
  document.querySelectorAll('.boton-tab').forEach(function(b) {
    b.classList.remove('activo');
  });

  // Activar la sección y el botón seleccionados
  let seccion = document.getElementById(idSeccion);
  if (seccion) seccion.classList.add('activa');
  if (botonActivo) botonActivo.classList.add('activo');
}

/* ─────────────────────────────────────────────────────────────────
   EMERGENTE — NOTIFICACIÓN TEMPORAL (RESULTADO CALCULADORA)
   ───────────────────────────────────────────────────────────────── */

function mostrarEmergente(mensaje, tipo) {
  let notif = document.getElementById('notificacion');
  mostrarTexto('notificacion', mensaje);
  notif.className = 'notificacion visible ' + (tipo || '');
  clearTimeout(notif._temporizador);
  notif._temporizador = setTimeout(function() {
    notif.className = 'notificacion';
  }, 4000);
}
