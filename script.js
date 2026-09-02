function crearPartida() {
  const pantalla = document.getElementById("pantalla");

  pantalla.innerHTML = `
    <div class="card">
      <h2>👑 Crear partida</h2>
      <p>Escribe tu nombre:</p>

      <input id="nombreJugador" type="text" placeholder="Tu nombre">

      <button onclick="generarCodigo()">
        🚀 Crear partida
      </button>
    </div>
  `;
}

function generarCodigo() {
  const nombre = document.getElementById("nombreJugador").value.trim();

  if (nombre === "") {
    alert("⚠️ Escribe tu nombre primero");
    return;
  }

  const codigo = Math.floor(100000 + Math.random() * 900000);

  document.getElementById("pantalla").innerHTML = `
    <div class="card">
      <h2>🎉 ¡Partida creada!</h2>

      <p>Hola, <strong>${nombre}</strong> 👋</p>
      <p>Comparte este código:</p>

      <div class="codigo">${codigo}</div>

      <button onclick="iniciarJuego()">
        🎮 Iniciar juego
      </button>
    </div>
  `;
}

function unirsePartida() {
  document.getElementById("pantalla").innerHTML = `
    <div class="card">
      <h2>🎮 Unirse a partida</h2>

      <input id="nombreJugador" type="text" placeholder="Tu nombre">

      <input id="codigoPartida" type="number" placeholder="Código de partida">

      <button onclick="entrarPartida()">
        🚀 Entrar
      </button>
    </div>
  `;
}

function entrarPartida() {
  const nombre = document.getElementById("nombreJugador").value.trim();
  const codigo = document.getElementById("codigoPartida").value.trim();

  if (nombre === "" || codigo === "") {
    alert("⚠️ Completa todos los campos");
    return;
  }

  document.getElementById("pantalla").innerHTML = `
    <div class="card">
      <h2>✅ ¡Listo!</h2>
      <p>Jugador: <strong>${nombre}</strong></p>
      <p>Código: <strong>${codigo}</strong></p>
      <p>⏳ Esperando al anfitrión...</p>
    </div>
  `;
}

function iniciarJuego() {
  document.getElementById("pantalla").innerHTML = `
    <div class="card">
      <h2>🎯 ¡Comencemos!</h2>
      <p>La partida está lista.</p>
      <p>Próximamente aparecerán las preguntas 🧠🔥</p>
    </div>
  `;
}
