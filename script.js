import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  push,
  update,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwS_AI9_m2P8p3xmNV1HAaFl1E7QHa1uo",
  authDomain: "el-festival-de-los-valores.firebaseapp.com",
  databaseURL: "https://el-festival-de-los-valores-default-rtdb.firebaseio.com",
  projectId: "el-festival-de-los-valores",
  storageBucket: "el-festival-de-los-valores.firebasestorage.app",
  messagingSenderId: "519288376721",
  appId: "1:519288376721:web:a946a536b17ca91e539e30"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const animales = ["🦊", "🐼", "🐯", "🐸", "🐨", "🐱", "🐵", "🐰"];

let jugador = "";
let animal = "";
let codigo = "";
let soyAnfitrion = false;
let jugadorID = "";
let preguntaActual = 0;
let puntos = 0;
let tiempo = 15;
let temporizador;

const preguntas = [
  ["Un amigo rompe algo tuyo accidentalmente. ¿Qué haces?", ["Gritarle", "Hablar con él tranquilamente", "Ignorarlo", "Romperle algo"], 1],
  ["Alguien piensa diferente a ti. ¿Qué demuestra respeto?", ["Escucharlo", "Burlarte", "Interrumpirlo", "Insultarlo"], 0],
  ["Encuentras dinero en el salón y nadie sabe de quién es. ¿Qué haces?", ["Te lo quedas", "Lo escondes", "Lo entregas al profesor", "Lo gastas"], 2],
  ["Tu equipo pierde por un error tuyo. ¿Qué haces?", ["Culpas a otro", "Aceptas el error", "Te vas", "Te burlas"], 1],
  ["Un compañero está siendo excluido. ¿Qué sería solidaridad?", ["Ignorarlo", "Invitarlo a participar", "Reírte", "Decir que se vaya"], 1],
  ["Prometiste hacer una tarea. ¿Qué valor debes demostrar?", ["Responsabilidad", "Envidia", "Orgullo", "Egoísmo"], 0],
  ["Alguien te cuenta un secreto importante. ¿Qué haces?", ["Lo publicas", "Lo cuentas a todos", "Respetas su confianza", "Te burlas"], 2],
  ["¿Cuál acción demuestra empatía?", ["Escuchar cómo se siente alguien", "Ignorarlo", "Juzgarlo", "Burlarte"], 0],
  ["Si ves una injusticia, ¿qué deberías hacer?", ["Apoyarla", "Ignorarla siempre", "Buscar una solución justa", "Reírte"], 2],
  ["Un compañero consigue algo que tú querías. ¿Qué actitud es mejor?", ["Felicitarlo", "Enojarte", "Insultarlo", "Quitárselo"], 0],
  ["¿Qué significa ser honesto?", ["Decir la verdad", "Mentir", "Ocultar siempre la verdad", "Engañar"], 0],
  ["Si cometes un error, ¿qué demuestra madurez?", ["Negarlo", "Reconocerlo", "Culpar a otro", "Esconderlo"], 1],
  ["¿Qué valor ayuda a convivir con personas diferentes?", ["Respeto", "Egoísmo", "Envidia", "Burla"], 0],
  ["Alguien necesita ayuda con una tarea. ¿Qué puedes hacer?", ["Ayudarlo", "Burlarte", "Ignorarlo", "Dañarle el trabajo"], 0],
  ["¿Qué haces si alguien te habla mientras estás ocupado?", ["Lo escuchas cuando puedas", "Lo insultas", "Lo ignoras siempre", "Le gritas"], 0],
  ["¿Cuál es una forma correcta de resolver un conflicto?", ["Dialogar", "Golpear", "Insultar", "Huir siempre"], 0],
  ["Si recibes una crítica, ¿qué puedes hacer?", ["Escucharla y reflexionar", "Insultar", "Enojarte siempre", "Burlarte"], 0],
  ["¿Qué demuestra tolerancia?", ["Aceptar diferencias", "Obligar a todos a pensar igual", "Burlarse", "Excluir"], 0],
  ["Un compañero gana justamente. ¿Qué haces?", ["Lo felicitas", "Lo acusas sin razón", "Te burlas", "Le quitas el premio"], 0],
  ["¿Qué valor está relacionado con cumplir tus compromisos?", ["Responsabilidad", "Envidia", "Egoísmo", "Desprecio"], 0],
  ["Si ves basura en el colegio, ¿qué actitud ayuda al ambiente?", ["Recogerla o depositarla correctamente", "Tirarla más", "Ignorar siempre", "Esconderla"], 0],
  ["¿Qué significa cooperar?", ["Trabajar juntos", "Trabajar contra todos", "No participar", "Molestar"], 0],
  ["Si alguien se equivoca al hablar, ¿qué haces?", ["Lo respetas", "Te burlas", "Lo imitas", "Lo interrumpes"], 0],
  ["¿Qué valor ayuda a reconocer los sentimientos de otros?", ["Empatía", "Envidia", "Orgullo", "Egoísmo"], 0],
  ["¿Qué demuestra una persona justa?", ["Trata de manera equilibrada", "Favorece siempre a sus amigos", "Miente", "Excluye"], 0],
  ["Si tienes una opinión diferente, puedes...", ["Expresarla respetuosamente", "Insultar", "Gritar", "Obligar a todos"], 0],
  ["¿Qué haces cuando alguien necesita ser escuchado?", ["Prestas atención", "Lo interrumpes", "Te burlas", "Te vas"], 0],
  ["¿Cuál acción demuestra generosidad?", ["Compartir cuando puedes", "Quedarte todo", "Esconderlo", "Negarte siempre"], 0],
  ["¿Qué ayuda más a una buena convivencia?", ["Respeto y diálogo", "Insultos", "Mentiras", "Egoísmo"], 0],
  ["Al terminar un proyecto grupal, ¿qué es correcto?", ["Reconocer el esfuerzo de todos", "Atribuirte todo", "Culpar al equipo", "Ignorar a los demás"], 0]
];

function pantalla(html) {
  document.getElementById("pantalla").innerHTML = html;
}

window.crearPartida = function () {
  soyAnfitrion = true;

  pantalla(`
    <div class="card">
      <h2>👑 Crear partida</h2>
      <input id="nombre" placeholder="Nombre del anfitrión">
      <button onclick="crearSala()">🚀 Crear partida</button>
    </div>
  `);
};

window.crearSala = async function () {
  jugador = document.getElementById("nombre").value.trim();

  if (!jugador) {
    alert("Escribe un nombre 😭");
    return;
  }

  codigo = Math.floor(100000 + Math.random() * 900000).toString();

  await set(ref(db, "partidas/" + codigo), {
    estado: "esperando",
    pregunta: 0,
    anfitrion: jugador
  });

  mostrarSalaAnfitrion();
};

function mostrarSalaAnfitrion() {
  pantalla(`
    <div class="card">
      <h2>👑 SALA</h2>
      <div class="codigo">${codigo}</div>
      <p>Comparte este código con los jugadores 📱</p>
      <div id="listaJugadores">Esperando jugadores...</div>

      <button onclick="empezarPartida()">
        🚀 EMPEZAR
      </button>
    </div>
  `);

  onValue(ref(db, "partidas/" + codigo + "/jugadores"), snap => {
    const jugadores = snap.val() || {};

    document.getElementById("listaJugadores").innerHTML =
      Object.values(jugadores)
        .map(j => `<p>${j.animal} ${j.nombre}</p>`)
        .join("") || "Esperando jugadores...";
  });
}

window.empezarPartida = async function () {
  await update(ref(db, "partidas/" + codigo), {
    estado: "jugando",
    pregunta: 0
  });

  iniciarControlPreguntas();
};

function iniciarControlPreguntas() {
  mostrarPreguntaAnfitrion();

  setTimeout(() => {
    if (preguntaActual < preguntas.length - 1) {
      preguntaActual++;
      update(ref(db, "partidas/" + codigo), {
        pregunta: preguntaActual
      });
      iniciarControlPreguntas();
    } else {
      finalizarPartida();
    }
  }, 15000);
}

function mostrarPreguntaAnfitrion() {
  const p = preguntas[preguntaActual];

  pantalla(`
    <div class="card">
      <h2>👑 Pregunta ${preguntaActual + 1}/30</h2>
      <h2>${p[0]}</h2>
      <p>⏱️ 15 segundos</p>
      <p>Los jugadores están respondiendo...</p>
    </div>
  `);
}

window.unirsePartida = function () {
  soyAnfitrion = false;

  pantalla(`
    <div class="card">
      <h2>🎮 Unirse</h2>

      <input id="nombreJugador" placeholder="Tu nombre">

      <div>
        ${animales.map((a, i) => `
          <button
            class="personaje"
            onclick="elegirAnimal(${i}, this)">
            ${a}
          </button>
        `).join("")}
      </div>

      <input id="codigo" placeholder="Código de partida">

      <button onclick="entrar()">🚀 Entrar</button>
    </div>
  `);
};

window.elegirAnimal = function (i, boton) {
  animal = animales[i];

  document.querySelectorAll(".personaje").forEach(b => {
    b.style.transform = "scale(1)";
  });

  boton.style.transform = "scale(1.3)";
};

window.entrar = async function () {
  jugador = document.getElementById("nombreJugador").value.trim();
  codigo = document.getElementById("codigo").value.trim();

  if (!jugador || !codigo || !animal) {
    alert("Completa todo 😭");
    return;
  }

  jugadorID = push(ref(db, "partidas/" + codigo + "/jugadores")).key;

  await set(
    ref(db, "partidas/" + codigo + "/jugadores/" + jugadorID),
    {
      nombre: jugador,
      animal: animal,
      puntos: 0
    }
  );

  pantalla(`
    <div class="card">
      <div style="font-size:5rem">${animal}</div>
      <h2>✅ ¡Entraste!</h2>
      <p>Hola ${jugador} 👋</p>
      <p>Esperando al anfitrión...</p>
    </div>
  `);

  escucharPartida();
};

function escucharPartida() {
  onValue(ref(db, "partidas/" + codigo), snap => {
    const partida = snap.val();

    if (!partida) return;

    if (partida.estado === "jugando") {
      preguntaActual = partida.pregunta;
      mostrarPreguntaJugador();
    }

    if (partida.estado === "finalizada") {
      mostrarEsperaFinal();
    }
  });
}

function mostrarPreguntaJugador() {
  const p = preguntas[preguntaActual];

  pantalla(`
    <div class="card">

      <div style="font-size:4rem">${animal}</div>

      <p>Pregunta ${preguntaActual + 1} de 30</p>

      <div id="tiempo" style="font-size:2rem">
        ⏱️ 15
      </div>

      <h2>${p[0]}</h2>

      ${p[1].map((op, i) => `
        <button onclick="responderJugador(${i})">
          ${op}
        </button>
      `).join("")}

    </div>
  `);

  tiempo = 15;

  clearInterval(temporizador);

  temporizador = setInterval(() => {
    tiempo--;

    const t = document.getElementById("tiempo");

    if (t) t.innerHTML = `⏱️ ${tiempo}`;

    if (tiempo <= 0) {
      clearInterval(temporizador);
      responderJugador(-1);
    }
  }, 1000);
}

window.responderJugador = async function (respuesta) {
  clearInterval(temporizador);

  const correcta = preguntas[preguntaActual][2];

  if (respuesta === correcta) {
    puntos += 100 + tiempo * 10;
  }

  await update(
    ref(db, "partidas/" + codigo + "/jugadores/" + jugadorID),
    {
      puntos: puntos
    }
  );

  pantalla(`
    <div class="card">
      <div style="font-size:4rem">${animal}</div>
      <h2>✅ Respuesta enviada</h2>
      <p>Espera la siguiente pregunta...</p>
    </div>
  `);
};

async function finalizarPartida() {
  await update(ref(db, "partidas/" + codigo), {
    estado: "finalizada"
  });

  mostrarRanking();
}

function mostrarEsperaFinal() {
  pantalla(`
    <div class="card">
      <div style="font-size:5rem">${animal}</div>
      <h2>🎉 ¡Terminaste!</h2>
      <p>El anfitrión está viendo el ranking 🏆</p>
    </div>
  `);
}

function mostrarRanking() {
  get(ref(db, "partidas/" + codigo + "/jugadores")).then(snap => {

    const jugadores = Object.values(snap.val() || {});

    jugadores.sort((a, b) => b.puntos - a.puntos);

    pantalla(`
      <div class="card">
        <h1>🏆 RANKING FINAL</h1>

        <div id="podio">
          ${jugadores.slice(0, 3).map((j, i) => `
            <div style="
              margin:15px;
              padding:20px;
              border-radius:20px;
              background:white;
              color:#5424b8;
              animation: aparecer 0.7s ease ${i * 0.4}s both;
            ">
              <div style="font-size:3rem">
                ${["🥇", "🥈", "🥉"][i]}
              </div>

              <div style="font-size:3rem">${j.animal}</div>

              <strong>${j.nombre}</strong>

              <p>${j.puntos} puntos</p>
            </div>
          `).join("")}
        </div>

        <h2>🎉 ¡Gracias por participar!</h2>
      </div>
    `);
  });
}

