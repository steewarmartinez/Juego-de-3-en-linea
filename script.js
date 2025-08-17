const celdas = document.querySelectorAll(".grilla");
let turno = "X";

const combinacionesGanadoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const mensaje = document.getElementById("mensaje");

function actualizarMensaje(texto) {
  mensaje.textContent = texto;
}

function revisarGanador() {
  return combinacionesGanadoras.some((combinacion) => {
    return combinacion.every((index) => celdas[index].textContent === turno);
  });
}

function reiniciarJuego() {
  celdas.forEach((celda) => {
    celda.textContent = "";
    celda.classList.remove("X", "O");
  });
  turno = "X";
  actualizarMensaje(`Turno de: ${turno}`);
}

actualizarMensaje(`Turno de: ${turno}`);

celdas.forEach((celda) => {
  celda.addEventListener("click", () => {
    if (celda.textContent !== "") return;

    celda.textContent = turno;
    celda.classList.add(turno);

    if (revisarGanador()) {
      actualizarMensaje(`🎉 ¡Jugador ${turno} ganó! 🎉`);
      setTimeout(reiniciarJuego, 1500);
      return;
    }

    if ([...celdas].every((c) => c.textContent !== "")) {
      actualizarMensaje("🤝 ¡Empate!");
      setTimeout(reiniciarJuego, 1500);
      return;
    }

    turno = turno === "X" ? "O" : "X";
    actualizarMensaje(`Turno de: ${turno}`);
  });
});
