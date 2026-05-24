/* ── UTILITARIOS DE DATOS BAASE ──────────────────────────────── */
function recuperarTexto(idComponente) {
  let componente = document.getElementById(idComponente);
  return componente ? componente.value : '';
}

function recuperarEntero(idComponente) {
  let valorCaja = recuperarTexto(idComponente);
  return parseInt(valorCaja, 10);
}

function recuperarDecimal(idComponente) {
  let valorCaja = recuperarTexto(idComponente);
  return parseFloat(valorCaja);
}


/* ── VISUALIZACIÓN DE RESULTADOS BASE ──────────────────────────────── */

function mostrarTexto(idComponente, mensaje) {
  let componente = document.getElementById(idComponente);
  if (componente) componente.innerText = mensaje;
}

function mostrarEnCaja(idComponente, mensaje) {
  let componente = document.getElementById(idComponente);
  if (componente) componente.value = mensaje;
}

function mostrarImagen(idComponente, rutaImagen) {
  let componente = document.getElementById(idComponente);
  if (componente) componente.src = rutaImagen;
}
