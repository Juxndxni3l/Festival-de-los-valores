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


/* =========================
   🔥 FIREBASE
========================= */

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


/* =========================
   🐯 ANIMALES
========================= */

const animales = [
  "🦊",
  "🐼",
  "🐯",
  "🐸",
  "🐨",
  "🐱",
  "🐵",
  "🐰"
];


/* =========================
   🧠 30 PREGUNTAS
========================= */

const preguntas = [

[
"Un amigo rompe algo tuyo accidentalmente. ¿Qué haces?",
["Gritarle","Hablar con él tranquilamente","Ignorarlo","Romperle algo"],
1
],

[
"Alguien piensa diferente a ti. ¿Qué demuestra respeto?",
["Escucharlo","Burlarte","Interrumpirlo","Insultarlo"],
0
],

[
"Encuentras dinero en el salón y nadie sabe de quién es. ¿Qué haces?",
["Te lo quedas","Lo escondes","Lo entregas al profesor","Lo gastas"],
2
],

[
"Tu equipo pierde por un error tuyo. ¿Qué haces?",
["Culpas a otro","Aceptas el error","Te vas","Te burlas"],
1
],

[
"Un compañero está siendo excluido. ¿Qué sería solidaridad?",
["Ignorarlo","Invitarlo a participar","Reírte","Decir que se vaya"],
1
],

[
"Prometiste hacer una tarea. ¿Qué valor debes demostrar?",
["Responsabilidad","Envidia","Orgullo","Egoísmo"],
0
],

[
"Alguien te cuenta un secreto importante. ¿Qué haces?",
["Lo publicas","Lo cuentas a todos","Respetas su confianza","Te burlas"],
2
],

[
"¿Cuál acción demuestra empatía?",
["Escuchar cómo se siente alguien","Ignorarlo","Juzgarlo","Burlarte"],
0
],

[
"Si ves una injusticia, ¿qué deberías hacer?",
["Apoyarla","Ignorarla siempre","Buscar una solución justa","Reírte"],
2
],

[
"Un compañero consigue algo que tú querías. ¿Qué actitud es mejor?",
["Felicitarlo","Enojarte","Insultarlo","Quitárselo"],
0
],

[
"¿Qué significa ser honesto?",
["Decir la verdad","Mentir","Ocultar siempre la verdad","Engañar"],
0
],

[
"Si cometes un error, ¿qué demuestra madurez?",
["Negarlo","Reconocerlo","Culpar a otro","Esconderlo"],
1
],

[
"¿Qué valor ayuda a convivir con personas diferentes?",
["Respeto","Egoísmo","Envidia","Burla"],
0
],

[
"Alguien necesita ayuda con una tarea. ¿Qué puedes hacer?",
["Ayudarlo","Burlarte","Ignorarlo","Dañarle el trabajo"],
0
],

[
"¿Qué haces si alguien te habla mientras estás ocupado?",
["Lo escuchas cuando puedas","Lo insultas","Lo ignoras siempre","Le gritas"],
0
],

[
"¿Cuál es una forma correcta de resolver un conflicto?",
["Dialogar","Golpear","Insultar","Huir siempre"],
0
],

[
"Si recibes una crítica, ¿qué puedes hacer?",
["Escucharla y reflexionar","Insultar","Enojarte siempre","Burlarte"],
0
],

[
"¿Qué demuestra tolerancia?",
["Aceptar diferencias","Obligar a todos a pensar igual","Burlarse","Excluir"],
0
],

[
"Un compañero gana justamente. ¿Qué haces?",
["Lo felicitas","Lo acusas sin razón","Te burlas","Le quitas el premio"],
0
],

[
"¿Qué valor está relacionado con cumplir tus compromisos?",
["Responsabilidad","Envidia","Egoísmo","Desprecio"],
0
],

[
"Si ves basura en el colegio, ¿qué actitud ayuda al ambiente?",
["Recogerla o depositarla correctamente","Tirarla más","Ignorar siempre","Esconderla"],
0
],

[
"¿Qué significa cooperar?",
["Trabajar juntos","Trabajar contra todos","No participar","Molestar"],
0
],

[
"Si alguien se equivoca al hablar, ¿qué haces?",
["Lo respetas","Te burlas","Lo imitas","Lo interrumpes"],
0
],

[
"¿Qué valor ayuda a reconocer los sentimientos de otros?",
["Empatía","Envidia","Orgullo","Egoísmo"],
0
],

[
"¿Qué demuestra una persona justa?",
["Trata de manera equilibrada","Favorece siempre a sus amigos","Miente","Excluye"],
0
],

[
"Si tienes una opinión diferente, puedes...",
["Expresarla respetuosamente","Insultar","Gritar","Obligar a todos"],
0
],

[
"¿Qué haces cuando alguien necesita ser escuchado?",
["Prestas atención","Lo interrumpes","Te burlas","Te vas"],
0
],

[
"¿Cuál acción demuestra generosidad?",
["Compartir cuando puedes","Quedarte todo","Esconderlo","Negarte siempre"],
0
],

[
"¿Qué ayuda más a una buena convivencia?",
["Respeto y diálogo","Insultos","Mentiras","Egoísmo"],
0
],

[
"Al terminar un proyecto grupal, ¿qué es correcto?",
["Reconocer el esfuerzo de todos","Atribuirte todo","Culpar al equipo","Ignorar a los demás"],
0
]

];


/* =========================
   VARIABLES
========================= */

let jugador = "";
let animal = "";
let codigo = "";

let soyAnfitrion = false;
let jugadorID = "";

let preguntaActual = 0;
let puntos = 0;

let tiempo = 15;
let temporizador = null;

let yaRespondio = false;
let ultimaPreguntaMostrada = -1;

let escuchandoPartida = false;


/* =========================
   🖥️ PANTALLA
========================= */

function pantalla(html) {
  document.getElementById("pantalla").innerHTML = html;
}


/* =========================
   👑 CREAR PARTIDA
========================= */

window.crearPartida = function () {

  soyAnfitrion = true;

  ocultarMenu();

  pantalla(`
    <div class="card">

      <h2>👑 Crear partida</h2>

      <input id="nombre" placeholder="Nombre del anfitrión">

      <button onclick="crearSala()">
        🚀 Crear partida
      </button>

    </div>
  `);
};


/* =========================
   OCULTAR BOTONES
========================= */

function ocultarMenu() {

  const menu = document.querySelector(".menu");

  if (menu) {
    menu.style.display = "none";
  }
}


/* =========================
   CREAR SALA
========================= */

window.crearSala = async function () {

  jugador = document.getElementById("nombre").value.trim();

  if (!jugador) {
    alert("Escribe un nombre 😭");
    return;
  }

  codigo = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  await set(
    ref(db, "partidas/" + codigo),
    {
      estado: "esperando",
      pregunta: 0,
      anfitrion: jugador,
      preguntaInicio: 0,
      tiempoRestante: 15
    }
  );

  mostrarSalaAnfitrion();
};


/* =========================
   SALA DEL ANFITRIÓN
========================= */

function mostrarSalaAnfitrion() {

  pantalla(`
    <div class="card">

      <h2>👑 SALA</h2>

      <div class="codigo">${codigo}</div>

      <p>Comparte este código 📱</p>

      <div id="listaJugadores">
        Esperando jugadores...
      </div>

      <br>

      <button onclick="empezarPartida()">
        🚀 EMPEZAR
      </button>

    </div>
  `);

  onValue(
    ref(db, "partidas/" + codigo + "/jugadores"),
    snap => {

      const jugadores = snap.val() || {};

      const lista =
        Object.values(jugadores);

      const elemento =
        document.getElementById("listaJugadores");

      if (!elemento) return;

      elemento.innerHTML =
        lista.map(j => `
          <p>
            ${j.animal} ${j.nombre}
            — ${j.puntos || 0} pts
          </p>
        `).join("")
        ||
        "Esperando jugadores...";
    }
  );
}


/* =========================
   🚀 EMPEZAR
========================= */

window.empezarPartida = async function () {

  preguntaActual = 0;

  await update(
    ref(db, "partidas/" + codigo),
    {
      estado: "jugando",
      pregunta: 0,
      preguntaInicio: Date.now(),
      tiempoRestante: 15
    }
  );

  iniciarControlPreguntas();
};


/* =========================
   🎮 CONTROL DEL ANFITRIÓN
========================= */

function iniciarControlPreguntas() {

  mostrarPreguntaAnfitrion();

  clearInterval(temporizador);

  temporizador = setInterval(async () => {

    const snap =
      await get(ref(db, "partidas/" + codigo));

    const partida = snap.val();

    if (!partida) return;

    if (partida.estado !== "jugando") return;

    const transcurrido =
      Math.floor(
        (Date.now() - partida.preguntaInicio) / 1000
      );

    const restante =
      Math.max(0, 15 - transcurrido);

    const contador =
      document.getElementById("tiempoAnfitrion");

    if (contador) {
      contador.innerHTML =
        `⏱️ ${restante}`;
    }

    if (restante <= 0) {

      clearInterval(temporizador);

      if (preguntaActual < preguntas.length - 1) {

        preguntaActual++;

        await update(
          ref(db, "partidas/" + codigo),
          {
            pregunta: preguntaActual,
            preguntaInicio: Date.now(),
            tiempoRestante: 15
          }
        );

        iniciarControlPreguntas();

      } else {

        finalizarPartida();
      }
    }

  }, 500);
}


/* =========================
   👑 PREGUNTA ANFITRIÓN
========================= */

function mostrarPreguntaAnfitrion() {

  const p = preguntas[preguntaActual];

  pantalla(`
    <div class="card">

      <h2>👑 Pregunta ${preguntaActual + 1}/30</h2>

      <h2>${p[0]}</h2>

      <div
        id="tiempoAnfitrion"
        style="
          font-size:2rem;
          font-weight:bold;
          margin:15px;
        ">
        ⏱️ 15
      </div>

      <p>
        📱 Los jugadores están respondiendo...
      </p>

      <button
        id="botonPausa"
        onclick="pausarPartida()">
        ⏸️ PAUSAR
      </button>

      <div id="rankingActual"></div>

    </div>
  `);

  escucharJugadoresAnfitrion();
}


/* =========================
   ⏸️ PAUSAR
========================= */

window.pausarPartida = async function () {

  const snap =
    await get(ref(db, "partidas/" + codigo));

  const partida = snap.val();

  if (!partida) return;

  if (partida.estado === "jugando") {

    const transcurrido =
      Math.floor(
        (Date.now() - partida.preguntaInicio) / 1000
      );

    const restante =
      Math.max(0, 15 - transcurrido);

    await update(
      ref(db, "partidas/" + codigo),
      {
        estado: "pausada",
        tiempoRestante: restante
      }
    );

    clearInterval(temporizador);

  } else if (partida.estado === "pausada") {

    const restante =
      partida.tiempoRestante || 0;

    await update(
      ref(db, "partidas/" + codigo),
      {
        estado: "jugando",
        preguntaInicio:
          Date.now() - ((15 - restante) * 1000)
      }
    );

    iniciarControlPreguntas();
  }
};


/* =========================
   📊 RANKING DEL ANFITRIÓN
========================= */

function escucharJugadoresAnfitrion() {

  onValue(
    ref(db, "partidas/" + codigo + "/jugadores"),
    snap => {

      const jugadores =
        Object.values(snap.val() || {});

      jugadores.sort(
        (a, b) => (b.puntos || 0) - (a.puntos || 0)
      );

      const elemento =
        document.getElementById("rankingActual");

      if (!elemento) return;

      elemento.innerHTML = `
        <h3>🏆 Puntos</h3>

        ${jugadores.map((j, i) => `
          <p>
            ${i + 1}. ${j.animal}
            ${j.nombre}
            — <strong>${j.puntos || 0}</strong> pts
          </p>
        `).join("")}
      `;
    }
  );
}


/* =========================
   🎮 UNIRSE
========================= */

window.unirsePartida = function () {

  soyAnfitrion = false;

  ocultarMenu();

  pantalla(`
    <div class="card">

      <h2>🎮 Unirse</h2>

      <input
        id="nombreJugador"
        placeholder="Tu nombre"
      >

      <h3>🐾 Elige tu animal</h3>

      <div>
        ${animales.map((a, i) => `
          <button
            class="personaje"
            onclick="elegirAnimal(${i}, this)">
            ${a}
          </button>
        `).join("")}
      </div>

      <input
        id="codigo"
        placeholder="Código de partida"
      >

      <button onclick="entrar()">
        🚀 Entrar
      </button>

    </div>
  `);
};


/* =========================
   🐼 ELEGIR ANIMAL
========================= */

window.elegirAnimal = function (i, boton) {

  animal = animales[i];

  document
    .querySelectorAll(".personaje")
    .forEach(b => {
      b.style.transform = "scale(1)";
    });

  boton.style.transform =
    "scale(1.3)";
};


/* =========================
   🚪 ENTRAR
========================= */

window.entrar = async function () {

  jugador =
    document.getElementById(
      "nombreJugador"
    ).value.trim();

  codigo =
    document.getElementById(
      "codigo"
    ).value.trim();

  if (!jugador || !codigo || !animal) {

    alert("Completa todo 😭");

    return;
  }

  const salaSnap =
    await get(
      ref(db, "partidas/" + codigo)
    );

  if (!salaSnap.exists()) {

    alert("❌ Esa partida no existe");

    return;
  }

  jugadorID =
    push(
      ref(
        db,
        "partidas/" +
        codigo +
        "/jugadores"
      )
    ).key;

  await set(
    ref(
      db,
      "partidas/" +
      codigo +
      "/jugadores/" +
      jugadorID
    ),
    {
      nombre: jugador,
      animal: animal,
      puntos: 0,
      respondio: false
    }
  );

  pantalla(`
    <div class="card">

      <div style="font-size:5rem">
        ${animal}
      </div>

      <h2>✅ ¡Entraste!</h2>

      <p>
        Hola ${jugador} 👋
      </p>

      <p>
        Esperando al anfitrión...
      </p>

    </div>
  `);

  escucharPartidaJugador();
};


/* =========================
   📡 ESCUCHAR PARTIDA
========================= */

function escucharPartidaJugador() {

  if (escuchandoPartida) return;

  escuchandoPartida = true;

  onValue(
    ref(db, "partidas/" + codigo),
    snap => {

      const partida = snap.val();

      if (!partida) return;

      if (
        partida.estado === "jugando" &&
        partida.pregunta !== undefined
      ) {

        if (
          ultimaPreguntaMostrada !==
          partida.pregunta
        ) {

          ultimaPreguntaMostrada =
            partida.pregunta;

          preguntaActual =
            partida.pregunta;

          mostrarPreguntaJugador();
        }

      }

      if (
        partida.estado === "pausada"
      ) {

        clearInterval(temporizador);

        mostrarPausaJugador(
          partida.tiempoRestante
        );
      }

      if (
        partida.estado === "finalizada"
      ) {

        clearInterval(temporizador);

        mostrarResultadoJugador();
      }

    }
  );
}


/* =========================
   ⏸️ PAUSA JUGADOR
========================= */

function mostrarPausaJugador(tiempoRestante) {

  pantalla(`
    <div class="card">

      <div style="font-size:5rem">
        ⏸️
      </div>

      <h2>Partida pausada</h2>

      <p>
        El anfitrión puso el juego en pausa.
      </p>

      <p>
        Quedaban ${tiempoRestante} segundos.
      </p>

      <p>
        Espera... 👀
      </p>

    </div>
  `);
}


/* =========================
   🧠 PREGUNTA JUGADOR
========================= */

function mostrarPreguntaJugador() {

  clearInterval(temporizador);

  yaRespondio = false;

  const p = preguntas[preguntaActual];

  pantalla(`
    <div class="card">

      <div style="font-size:4rem">
        ${animal}
      </div>

      <p>
        Pregunta ${preguntaActual + 1} de 30
      </p>

      <div
        id="tiempo"
        style="
          font-size:2.5rem;
          font-weight:bold;
          margin:15px;
        ">
        ⏱️ 15
      </div>

      <h2>${p[0]}</h2>

      <div id="opciones">

        ${p[1].map((op, i) => `
          <button
            onclick="responderJugador(${i})">
            ${op}
          </button>
        `).join("")}

      </div>

      <p>
        🏆 Tus puntos:
        <strong>${puntos}</strong>
      </p>

    </div>
  `);

  // El reloj empieza usando la hora
  // que puso el anfitrión en Firebase
  iniciarRelojJugador();
}

/* =========================
   ⏱️ RELOJ JUGADOR
========================= */

async function iniciarRelojJugador() {

  const snap =
    await get(
      ref(db, "partidas/" + codigo)
    );

  const partida =
    snap.val();

  if (!partida) return;

  clearInterval(temporizador);

  temporizador =
    setInterval(() => {

      if (yaRespondio) return;

      const transcurrido =
        Math.floor(
          (Date.now() -
            partida.preguntaInicio) /
          1000
        );

      tiempo =
        Math.max(
          0,
          15 - transcurrido
        );

      const elemento =
        document.getElementById("tiempo");

      if (elemento) {

        elemento.innerHTML =
          `⏱️ ${tiempo}`;

        if (tiempo <= 5) {
          elemento.style.transform =
            "scale(1.2)";
        }
      }

      if (tiempo <= 0) {

        clearInterval(temporizador);

        responderJugador(-1);
      }

    }, 250);
}


/* =========================
   🧮 RESPONDER
========================= */

window.responderJugador =
async function (respuesta) {

  if (yaRespondio) return;

  yaRespondio = true;

  clearInterval(temporizador);

  const pregunta =
    preguntas[preguntaActual];

  let puntosGanados = 0;

  if (respuesta === pregunta[2]) {

    /*
      MÁS RÁPIDO = MÁS PUNTOS
      MÁS LENTO = MENOS PUNTOS
    */

    puntosGanados =
      100 + (Math.max(0, tiempo) * 10);

    puntos += puntosGanados;

  } else {

    puntosGanados = 0;
  }

  await update(
    ref(
      db,
      "partidas/" +
      codigo +
      "/jugadores/" +
      jugadorID
    ),
    {
      puntos: puntos,
      respondio: true,
      ultimaGanancia: puntosGanados
    }
  );

  if (respuesta === -1) {

    mostrarSinRespuesta();

  } else if (
    respuesta === pregunta[2]
  ) {

    mostrarPuntosGanados(
      puntosGanados
    );

  } else {

    mostrarIncorrecta();
  }
};


/* =========================
   ❌ SIN RESPUESTA
========================= */

function mostrarSinRespuesta() {

  pantalla(`
    <div class="card">

      <div
        style="
          font-size:6rem;
          animation: aparecer 0.7s ease;
        ">
        ⏰
      </div>

      <h2>
        ¡Se acabó el tiempo!
      </h2>

      <p>
        😭 No resolviste la pregunta.
      </p>

      <h1>
        +0
      </h1>

      <p>
        No recibiste puntos.
      </p>

      <p>
        🏆 Total:
        <strong>${puntos}</strong>
      </p>

    </div>
  `);
}


/* =========================
   💰 PUNTOS GANADOS
========================= */

function mostrarPuntosGanados(ganados) {

  pantalla(`
    <div class="card">

      <div
        style="
          font-size:6rem;
          animation: aparecer 0.7s ease;
        ">
        🎉
      </div>

      <h2>
        ¡Correcto!
      </h2>

      <h1>
        +${ganados}
      </h1>

      <p>
        🏆 Puntos ganados
      </p>

      <p>
        Total:
        <strong>${puntos}</strong>
      </p>

    </div>
  `);
}


/* =========================
   ❌ INCORRECTA
========================= */

function mostrarIncorrecta() {

  pantalla(`
    <div class="card">

      <div style="
        font-size:6rem;
        animation: aparecer 0.7s ease;
      ">
        ❌
      </div>

      <h2>
        ¡Ups!
      </h2>

      <p>
        Esa respuesta no era.
      </p>

      <h2>
        +0 puntos
      </h2>

      <p>
        🏆 Total:
        <strong>${puntos}</strong>
      </p>

    </div>
  `);
}


/* =========================
   🏁 FINALIZAR
========================= */

async function finalizarPartida() {

  clearInterval(temporizador);

  await update(
    ref(db, "partidas/" + codigo),
    {
      estado: "finalizada"
    }
  );

  mostrarRankingFinal();
}


/* =========================
   👑 RANKING FINAL ANFITRIÓN
========================= */

function mostrarRankingFinal() {

  get(
    ref(
      db,
      "partidas/" +
      codigo +
      "/jugadores"
    )
  ).then(snap => {

    const jugadores =
      Object.values(
        snap.val() || {}
      );

    jugadores.sort(
      (a, b) =>
        (b.puntos || 0) -
        (a.puntos || 0)
    );

    pantalla(`
      <div class="card">

        <div
          style="
            font-size:5rem;
            animation: aparecer 0.8s ease;
          ">
          🏆
        </div>

        <h1>
          RANKING FINAL
        </h1>

        <p>
          🎉 ¡Partida terminada!
        </p>

        <div id="podio">

          ${jugadores.slice(0, 3)
            .map((j, i) => `

            <div
              style="
                margin:15px;
                padding:20px;
                border-radius:20px;
                background:white;
                color:#5424b8;

                animation:
                  aparecer
                  0.8s ease
                  ${i * 0.6}s
                  both;
              "
            >

              <div style="font-size:4rem">

                ${
                  ["🥇","🥈","🥉"][i]
                }

              </div>

              <div
                style="
                  font-size:4rem;
                "
              >
                ${j.animal}
              </div>

              <h2>
                ${j.nombre}
              </h2>

              <h3>
                ${j.puntos || 0}
                puntos
              </h3>

            </div>

          `).join("")}

        </div>

        <button onclick="location.reload()">
          🔄 Nueva partida
        </button>

      </div>
    `);
  });
}


/* =========================
   🏆 RESULTADO JUGADOR
========================= */

function mostrarResultadoJugador() {

  get(
    ref(
      db,
      "partidas/" +
      codigo +
      "/jugadores"
    )
  ).then(snap => {

    const jugadores =
      Object.values(
        snap.val() || {}
      );

    jugadores.sort(
      (a, b) =>
        (b.puntos || 0) -
        (a.puntos || 0)
    );

    const posicion =
      jugadores.findIndex(
        j =>
          j.nombre === jugador &&
          j.animal === animal
      ) + 1;

    let emoji = "🎉";

    if (posicion === 1) emoji = "🥇";
    if (posicion === 2) emoji = "🥈";
    if (posicion === 3) emoji = "🥉";

    pantalla(`
      <div class="card">

        <div
          style="
            font-size:7rem;
            animation: aparecer 1s ease;
          "
        >
          ${emoji}
        </div>

        <h1>
          ¡Terminaste!
        </h1>

        <h2>
          ${animal} ${jugador}
        </h2>

        <h1>
          ${puntos}
        </h1>

        <p>
          🏆 PUNTOS TOTALES
        </p>

        <h2>
          Puesto: ${posicion}°
        </h2>

        <p>
          El anfitrión está viendo
          el ranking final 👑
        </p>

      </div>
    `);
  });
}
