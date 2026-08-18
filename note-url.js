// Enrutamiento por hash de una nota individual: #nota/<path url-encodeado>.
// Puro, sin DOM — testeado con tests/note-url.test.js (node --test).
// UMD chico a mano (sin build): en el browser cuelga window.NoteUrl,
// en Node exporta vía module.exports para los tests.
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NoteUrl = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const HASH_PREFIX = "#nota/";

  function noteHash(path) {
    return HASH_PREFIX + encodeURIComponent(path);
  }

  function notePathFromHash(hash) {
    if (!hash || hash.indexOf(HASH_PREFIX) !== 0) return null;
    const raw = hash.slice(HASH_PREFIX.length);
    if (!raw) return null;
    return decodeURIComponent(raw);
  }

  return { noteHash, notePathFromHash };
});
