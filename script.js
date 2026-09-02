const preguntas = [
  {
    pregunta: "¿Qué valor demuestra una persona cuando ayuda a alguien que lo necesita?",
    opciones: ["Respeto", "Solidaridad", "Envidia", "Egoísmo"],
    correcta: 1
  },
  {
    pregunta: "¿Qué significa respetar a los demás?",
    opciones: [
      "Ignorar sus opiniones",
      "Tratar a todos con consideración",
      "Burlarse de ellos",
      "Hacer siempre lo que uno quiere"
    ],
    correcta: 1
  },
  {
    pregunta: "Si encuentras algo que no es tuyo, ¿qué deberías hacer?",
    opciones: [
      "Quedártelo",
      "Esconderlo",
      "Buscar a su dueño",
      "Venderlo"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál de estos es un ejemplo de responsabilidad?",
    opciones: [
      "No hacer las tareas",
      "Cumplir con tus deberes",
      "Culpar a otros",
      "Llegar tarde siempre"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué valor nos ayuda a decir la verdad?",
    opciones: ["Honestidad", "Envidia", "Orgullo", "Egoísmo"],
    correcta: 0
  }
];

const personajes = [
  "🦊",
  "🐼",
  "🐯",
  "🐸",
  "🐨",
  "🐱"
];

let jugador = "";
let personaje = "";
let preguntaActual = 0;
let puntos = 0;
let tiempo = 15;
let temporizador;

function crearPartida() {
  document.getElementById("pantalla").innerHTML = `
    <div class="card">
      <h2>👑 Crear partida</h2>
      <p>Elige tu personaje</p>

      <div id="personajes">
        ${personajes.map((p, i) => `
          <button 
            class="personaje"
            onclick="seleccionarPersonaje(${i}, this)">
            ${p}
          </button>
        `).join("")}
      </div>

      <input id="nombreJugador" type="text" placeholder="Tu nombre">

      <button onclick="generarCodigo()">
        🚀 Crear partida
      </button>
    </div>
  `;
}

function seleccionarPersonaje(indice, boton) {
  personaje = personajes[indice];

  document.querySelectorAll(".personaje").forEach(b => {
    b.style.transform = "scale(1)";
  });

  boton.style.transform = "scale(1.25)";
}

function generarCodigo() {
  jugador = document.getElementById("nombreJugador").value.trim();

  if (jugador === "") {
    alert("⚠️ Escribe tu nombre");
    return;
  }

  if (personaje === "") {
    alert("⚠️ Elige un personaje");
    return;
  }

  const codigo = Math.floor(100000 + Math.random() * 900000);

  document.getElementById("pantalla").innerHTML = `
    <div class="card">
      <h2>🎉 ¡Partida creada!</h2>

      <div style="font-size:4rem">${personaje}</div>

      <p>Jugador: <strong>${jugador}</strong></p>

      <p>Código de partida:</p>

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

      <input id="codigoPartida" type="number" placeholder="Código">

      <button onclick="entrarPartida()">
        🚀 Entrar
      </button>
    </div>
  `;
}

function entrarPartida() {
  jugador = document.getElementById("nombreJugador").value.trim();
  const codigo = document.getElementById("codigoPartida").value.trim();

  if (jugador === "" || codigo === "") {
    alert("⚠️ Completa los campos");
    return;
  }

  document.getElementById("pantalla").innerHTML = `
    <div class="card">
      <h2>✅ ¡Te uniste!</h2>
      <p>Jugador: <strong>${jugador}</strong></p>
      <p>Código: <strong>${codigo}</strong></p>

      <div style="font-size:4rem">🎮</div>

      <p>Esperando para comenzar...</p>

      <button onclick="iniciarJuego()">
        ▶️ Comenzar
      </button>
    </div>
  `;
}

function iniciarJuego() {
  preguntaActual = 0;
  puntos = 0;

  mostrarPregunta();
}

function mostrarPregunta() {
  clearInterval(temporizador);

  if (preguntaActual >= preguntas.length) {
    mostrarResultado();
    return;
  }

  const pregunta = preguntas[preguntaActual];

  tiempo = 15;

  document.getElementById("pantalla").innerHTML = `
    <div class="card">

      <div style="font-size:3rem">${personaje}</div>

      <p>Pregunta ${preguntaActual + 1} de ${preguntas.length}</p>

      <h2>${pregunta.pregunta}</h2>

      <div id="tiempo"
           style="font-size:2rem;font-weight:bold;margin:15px">
        ⏱️ ${tiempo}
      </div>

      <div class="opciones">
        ${pregunta.opciones.map((opcion, i) => `
          <button onclick="responder(${i})">
            ${opcion}
          </button>
        `).join("")}
      </div>

      <p style="margin-top:15px">
        🏆 Puntos: ${puntos}
      </p>

    </div>
  `;

  temporizador = setInterval(() => {

    tiempo--;

    const contador = document.getElementById("tiempo");

    if (contador) {
      contador.innerHTML = `⏱️ ${tiempo}`;
    }

    if (tiempo <= 0) {
      clearInterval(temporizador);

      alert("⏰ ¡Se acabó el tiempo!");

      preguntaActual++;

      mostrarPregunta();
    }

  }, 1000);
}

function responder(opcion) {
  clearInterval(temporizador);

  const pregunta = preguntas[preguntaActual];

  if (opcion === pregunta.correcta) {

    const puntosTiempo = tiempo * 10;

    puntos += 100 + puntosTiempo;

    alert("✅ ¡Correcto! +" + (100 + puntosTiempo) + " puntos");

  } else {

    alert("❌ Incorrecto 😭");

  }

  preguntaActual++;

  setTimeout(() => {
    mostrarPregunta();
  }, 300);
}

function mostrarResultado() {

  document.getElementById("pantalla").innerHTML = `
    <div class="card">

      <div style="font-size:5rem">${personaje}</div>

      <h2>🏆 ¡Partida terminada!</h2>

      <h1>${puntos}</h1>

      <p>Puntos obtenidos</p>

      <button onclick="mostrarRanking()">
        📊 Ver ranking
      </button>

      <button onclick="location.reload()">
        🔄 Jugar otra vez
      </button>

    </div>
  `;
}

function mostrarRanking() {

  const jugadores = [
    {
      nombre: jugador,
      personaje: personaje,
      puntos: puntos
    },
    {
      nombre: "Valentina",
      personaje: "🐼",
      puntos: Math.max(0, puntos - 120)
    },
    {
      nombre: "Santiago",
      personaje: "🦊",
      puntos: Math.max(0, puntos - 250)
    }
  ];

  jugadores.sort((a, b) => b.puntos - a.puntos);

  document.getElementById("pantalla").innerHTML = `
    <div class="card">

      <h2>🏆 RANKING</h2>

      ${jugadores.map((j, i) => `
        <div style="
          padding:15px;
          margin:10px 0;
          border-radius:15px;
          background:#f1f1f1;
          font-size:1.2rem;
        ">
          <strong>${i + 1}°</strong>
          ${j.personaje}
          ${j.nombre}
          — ${j.puntos} pts
        </div>
      `).join("")}

      <button onclick="location.reload()">
        🏠 Volver al inicio
      </button>

    </div>
  `;
}
