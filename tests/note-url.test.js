// TDD para el enrutamiento por hash de una nota individual (feature:
// copiar link directo + deep link al abrir #nota/<path>). Sin deps —
// node:test/node:assert vienen con Node, igual que el resto de anfora
// no usa build ni paquetes. Correr: node --test tests/
"use strict";

const { test } = require("node:test");
const assert = require("node:assert/strict");
const { noteHash, notePathFromHash } = require("../note-url.js");

test("noteHash: arma #nota/<path> con el path url-encodeado", () => {
  assert.equal(noteHash("ia/nota-simple.md"), "#nota/ia%2Fnota-simple.md");
});

test("noteHash: escapa espacios y caracteres especiales del path", () => {
  assert.equal(
    noteHash("ia/una nota con espacios & símbolos.md"),
    "#nota/ia%2Funa%20nota%20con%20espacios%20%26%20s%C3%ADmbolos.md"
  );
});

test("notePathFromHash: decodifica el path de un hash #nota/<path> válido", () => {
  assert.equal(notePathFromHash("#nota/ia%2Fnota-simple.md"), "ia/nota-simple.md");
});

test("notePathFromHash: hace roundtrip con noteHash para paths con caracteres especiales", () => {
  const original = "systems-thinking/pensamiento en sistemas & bucles.md";
  assert.equal(notePathFromHash(noteHash(original)), original);
});

test("notePathFromHash: devuelve null si el hash está vacío", () => {
  assert.equal(notePathFromHash(""), null);
  assert.equal(notePathFromHash(undefined), null);
});

test("notePathFromHash: devuelve null si el hash no es de una nota (#nota/...)", () => {
  assert.equal(notePathFromHash("#otra-cosa"), null);
  assert.equal(notePathFromHash("#"), null);
});
