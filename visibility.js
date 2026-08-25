// Visibilidad de una nota: public / unlisted / privada. Puro, sin DOM —
// testeado con tests/visibility.test.js (node --test) y con el
// escenario Gherkin @automated de features/visibilidad-de-notas.feature.
// UMD chico a mano (sin build): en el browser cuelga window.Visibility,
// en Node exporta vía module.exports para los tests.
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.Visibility = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const PUBLIC = "public";
  const UNLISTED = "unlisted";
  const PRIVATE = "privada";

  // Toda nota debe declarar **Visibilidad:** explícitamente (no hay
  // más default-por-ausencia) — esto solo cubre el caso defensivo de
  // una nota vieja sin migrar o un valor mal tipeado, cayendo a
  // "public" en vez de romper el render.
  function normalizeVisibilidad(raw) {
    const v = (raw == null ? "" : String(raw)).trim().toLowerCase();
    if (v === UNLISTED) return UNLISTED;
    if (v === PRIVATE) return PRIVATE;
    return PUBLIC;
  }

  function isListable(visibilidad) {
    return visibilidad !== UNLISTED;
  }

  return { PUBLIC, UNLISTED, PRIVATE, normalizeVisibilidad, isListable };
});
