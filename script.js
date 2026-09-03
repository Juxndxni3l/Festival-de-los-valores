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
   🐾 ANIMALES
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
   🧠 PREGUNTAS DIFÍCILES
========================= */

const preguntas = [

[
"En un trabajo grupal, un compañero no cumplió su parte y te pide que digas que sí la hizo. ¿Cuál demuestra mejor responsabilidad?",
[
"Cubrirlo para evitar un conflicto",
"Decir la verdad y buscar una forma de solucionar el problema",
"Exponerlo delante de todos para que aprenda",
"Hacer todo el trabajo sin decir nada"
],
1
],

[
"Dos personas tienen opiniones opuestas sobre un tema. ¿Cuál comportamiento demuestra tolerancia?",
[
"Intentar convencer al otro hasta que cambie de opinión",
"Escuchar sus argumentos aunque no estés de acuerdo",
"Evitar hablar con esa persona",
"Decir que ambas opiniones son igualmente correctas"
],
1
],

[
"Antes de una evaluación recibes por accidente las respuestas de otro estudiante. ¿Qué decisión refleja integridad?",
[
"Revisarlas solo para comprobar si son correctas",
"No utilizarlas y comunicar la situación",
"Compartirlas únicamente con tus amigos",
"Utilizarlas porque llegaron sin que las pidieras"
],
1
],

[
"Un estudiante nuevo es excluido porque habla con un acento diferente. ¿Qué acción refleja inclusión?",
[
"Decirle que debe cambiar su forma de hablar",
"Invitarlo a participar respetando sus diferencias",
"Dejar que se adapte solo",
"Hablar por él para evitar que se equivoque"
],
1
],

[
"Cometes un error que afecta el resultado de un proyecto. ¿Qué demuestra mayor madurez?",
[
"Explicar por qué alguien más tuvo la culpa",
"Ocultar el error hasta encontrar una solución",
"Reconocerlo y proponer cómo corregirlo",
"Esperar a que otra persona lo descubra"
],
2
],

[
"Un profesor hace una crítica sobre tu trabajo y señala aspectos que debes mejorar. ¿Qué actitud demuestra humildad?",
[
"Rechazar la crítica porque trabajaste mucho",
"Escucharla y analizar qué puedes aprender de ella",
"Comparar tu trabajo con el de otros",
"Responder señalando los errores del profesor"
],
1
],

[
"Tu propuesta pierde una votación dentro del grupo. ¿Qué comportamiento demuestra cooperación?",
[
"Dejar de participar porque no eligieron tu idea",
"Apoyar el acuerdo y expresar tus preocupaciones respetuosamente",
"Intentar convencer al grupo después de la decisión",
"Decir que el resultado fue injusto sin analizarlo"
],
1
],

[
"Un compañero recibe un reconocimiento por su esfuerzo y tú también querías obtenerlo. ¿Qué demuestra una buena convivencia?",
[
"Felicitarlo y reconocer su esfuerzo",
"Restarle importancia al premio",
"Evitar hablarle durante el resto del día",
"Intentar demostrar que tú eras mejor"
],
0
],

[
"Una persona te cuenta algo privado y te pide que no lo compartas. ¿Qué conducta demuestra respeto?",
[
"Contárselo solamente a tu mejor amigo",
"Compartirlo si crees que es interesante",
"Respetar su privacidad",
"Publicarlo sin mencionar su nombre"
],
2
],

[
"En un grupo de mensajes comienza una discusión entre dos compañeros. ¿Cuál es la mejor forma de manejarla?",
[
"Tomar partido inmediatamente",
"Responder con el mismo tono para defenderte",
"Buscar un diálogo respetuoso y evitar ataques personales",
"Salir del grupo y dejar que continúe"
],
2
],

[
"Tienes varias tareas pendientes y sabes que no podrás terminarlas todas a tiempo. ¿Qué demuestra responsabilidad?",
[
"Esperar hasta el último momento",
"Priorizar, organizar el tiempo y comunicar cualquier dificultad",
"Hacer primero las más fáciles aunque no sean urgentes",
"Dejar algunas sin terminar sin avisar"
],
1
],

[
"Un amigo incumple una regla y otra persona hace exactamente lo mismo. ¿Qué demuestra justicia?",
[
"Aplicar la regla solo a quien no es tu amigo",
"Defender a tu amigo porque lo conoces",
"Aplicar el mismo criterio para ambos",
"Permitirlo si nadie se da cuenta"
],
2
],

[
"Alguien hace una broma que incomoda públicamente a otro compañero. ¿Qué demuestra empatía?",
[
"Reír para evitar quedar mal",
"Preguntar después qué ocurrió",
"Reconocer que la broma puede haber afectado a la persona y detenerla",
"Decir que debe aprender a soportar bromas"
],
2
],

[
"Un proyecto grupal obtiene un resultado negativo. ¿Cuál reacción favorece la convivencia?",
[
"Buscar inmediatamente a un culpable",
"Analizar juntos qué falló y cómo solucionarlo",
"Decir que el problema fue responsabilidad del líder",
"Evitar hablar del resultado"
],
1
],

[
"El profesor felicita al grupo por un trabajo y menciona especialmente tu participación. ¿Qué demuestra humildad?",
[
"Aceptar el reconocimiento pero destacar también el esfuerzo del equipo",
"Decir que prácticamente hiciste todo",
"No aceptar ningún reconocimiento",
"Compararte con quienes participaron menos"
],
0
],

[
"Recibes una opinión negativa sobre una idea que considerabas muy buena. ¿Qué demuestra apertura?",
[
"Descartarla porque no coincide contigo",
"Preguntar las razones y evaluar si tienen fundamento",
"Responder inmediatamente defendiendo tu idea",
"Preguntar a otros quién tiene la razón"
],
1
],

[
"Un estudiante está solo durante una actividad grupal. ¿Qué acción demuestra solidaridad e inclusión?",
[
"Esperar a que él se acerque",
"Invitarlo a participar y darle un espacio dentro del equipo",
"Preguntarle delante de todos por qué está solo",
"Decirle que busque otro grupo"
],
1
],

[
"Escuchas un rumor sobre un compañero, pero nadie sabe si es cierto. ¿Qué demuestra prudencia?",
[
"Compartirlo diciendo que no sabes si es verdad",
"Preguntar a varias personas para confirmar el rumor",
"No difundirlo sin información confiable",
"Publicarlo para que la persona pueda defenderse"
],
2
],

[
"Una costumbre de otra persona es diferente a la tuya. ¿Qué demuestra tolerancia?",
[
"Considerarla incorrecta porque no coincide con tus costumbres",
"Intentar comprenderla antes de juzgarla",
"Evitar relacionarte con esa persona",
"Decirle que debería adoptar tus costumbres"
],
1
],

[
"Un integrante del equipo tiene dificultades para realizar su parte. ¿Qué demuestra cooperación?",
[
"Reemplazarlo sin explicarle nada",
"Excluirlo para terminar más rápido",
"Apoyarlo y buscar una distribución adecuada de las tareas",
"Decir que el problema es únicamente suyo"
],
2
],

[
"Sabes que probablemente no cumplirás una fecha de entrega. ¿Cuál decisión demuestra responsabilidad?",
[
"Esperar hasta que llegue la fecha",
"Informarlo con anticipación y proponer una solución realista",
"Entregar cualquier cosa para cumplir",
"No decir nada para evitar una discusión"
],
1
],

[
"No estás de acuerdo con una norma del colegio. ¿Qué conducta demuestra ciudadanía responsable?",
[
"Incumplirla para demostrar tu desacuerdo",
"Criticarla únicamente con tus amigos",
"Expresar tu opinión por los canales adecuados y respetuosamente",
"Intentar que otros también la incumplan"
],
2
],

[
"Crees que una calificación pudo haber sido revisada incorrectamente, pero no tienes pruebas. ¿Qué demuestra justicia?",
[
"Acusar al profesor de inmediato",
"Pedir respetuosamente una explicación o revisión",
"Decir a tus compañeros que fue injusto",
"Ignorar el resultado aunque tengas dudas"
],
1
],

[
"Un amigo te pide que mientas para justificar una ausencia suya. ¿Qué demuestra honestidad?",
[
"Aceptar porque es tu amigo",
"Mentir solo una vez",
"Negarte a mentir y animarlo a explicar la situación con sinceridad",
"Decir una verdad a medias"
],
2
],

[
"Alguien comparte contigo una captura de una conversación privada de otra persona. ¿Qué demuestra respeto digital?",
[
"Guardar la captura por si algún día la necesitas",
"Compartirla solamente con personas de confianza",
"No difundir contenido privado sin autorización",
"Publicarla ocultando los nombres"
],
2
],

[
"Durante una decisión grupal, la mayoría rechaza una idea de la minoría. ¿Qué demuestra apertura y cooperación?",
[
"Ignorar la idea porque perdió la votación",
"Analizar sus argumentos antes de descartarla definitivamente",
"Obligar al grupo a probarla",
"Decir que la mayoría siempre tiene la razón"
],
1
],

[
"Durante una discusión estás muy molesto y tienes ganas de responder inmediatamente. ¿Qué demuestra autocontrol?",
[
"Responder rápido para no parecer débil",
"Esperar a calmarte antes de contestar",
"Ignorar completamente a la otra persona",
"Responder utilizando el mismo tono"
],
1
],

[
"El equipo recibe un reconocimiento por un proyecto en el que participaron varias personas. ¿Qué demuestra humildad?",
[
"Decir que el reconocimiento fue principalmente por ti",
"Reconocer la contribución de todos",
"Decir que el premio no tiene importancia",
"Comparar tu trabajo con el de los demás"
],
1
],

[
"Un compañero te pide ayuda mientras estás ocupado. ¿Cuál respuesta combina empatía y responsabilidad?",
[
"Decirle que no puedes y olvidarte del tema",
"Explicarle cuándo podrás ayudarlo y cumplirlo",
"Dejar tus tareas inmediatamente aunque sean urgentes",
"Decirle que busque ayuda con otra persona"
],
1
],

[
"Un proyecto fracasa poco antes de la fecha de entrega. ¿Qué demuestra perseverancia?",
[
"Abandonarlo porque ya no vale la pena",
"Buscar responsables para explicar el fracaso",
"Analizar los errores y crear un plan para mejorar el resultado",
"Ocultar las dificultades hasta la entrega"
],
2
]

];


/* =========================
   ⚙️ CONFIGURACIÓN DEL JUEGO
========================= */

const DURACION = 15;
const DURACION_MS = DURACION * 1000;


/*
   PUNTOS:

   15 segundos = 1000
   14 segundos = 950
   13 segundos = 900
   ...
   5 segundos  = 500
   1 segundo   = 300
   0 segundos  = 0

   Fórmula:
   250 + (segundos restantes × 50)
*/

function calcularPuntos(correcta, inicio) {

  if (!correcta) return 0;

  const transcurrido = Math.max(
    0,
    Math.min(
      DURACION_MS,
      ahoraServidor() - inicio
    )
  );

  const milisegundosRestantes =
    DURACION_MS - transcurrido;

  const segundosRestantes =
    Math.ceil(
      milisegundosRestantes / 1000
    );

  if (segundosRestantes <= 0) {
    return 0;
  }

  return Math.min(
    1000,
    250 + segundosRestantes * 50
  );
}


/* =========================
   🕐 HORA DEL SERVIDOR
========================= */

let serverOffset = 0;
let offsetListo = false;

const esperaServidor =
  new Promise(resolve => {

    onValue(
      ref(db, ".info/serverTimeOffset"),
      snap => {

        serverOffset =
          Number(snap.val()) || 0;

        if (!offsetListo) {

          offsetListo = true;

          resolve();
        }
      }
    );
  });


function ahoraServidor() {

  return Date.now() + serverOffset;
}


function serverTimestamp() {

  return {
    ".sv": "timestamp"
  };
}


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

let tiempo = DURACION;
let temporizador = null;

let yaRespondio = false;

let ultimaPreguntaMostrada = -1;
let preguntaInicioActual = 0;

let escuchandoPartida = false;

let controlandoPreguntas = false;
let cambiandoPregunta = false;
let finalizando = false;

let detenerRanking = null;
let detenerLobby = null;


/* =========================
   🖥️ PANTALLA
========================= */

function pantalla(html) {

  const elemento =
    document.getElementById("pantalla");

  if (elemento) {
    elemento.innerHTML = html;
  }
}


/* =========================
   🧹 ESCAPAR TEXTO
========================= */

function escapar(texto) {

  return String(texto)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================
   🚫 OCULTAR MENÚ
========================= */

function ocultarMenu() {

  const menu =
    document.querySelector(".menu");

  if (menu) {
    menu.style.display = "none";
  }
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

      <input
        id="nombre"
        placeholder="Nombre del anfitrión"
        maxlength="25"
      >

      <button onclick="crearSala()">
        🚀 Crear partida
      </button>

    </div>

  `);
};


/* =========================
   🔢 CREAR CÓDIGO
========================= */

async function generarCodigo() {

  let nuevoCodigo;
  let existe = true;

  while (existe) {

    nuevoCodigo =
      Math.floor(
        100000 +
        Math.random() * 900000
      ).toString();

    const snap =
      await get(
        ref(
          db,
          "partidas/" +
          nuevoCodigo
        )
      );

    existe = snap.exists();
  }

  return nuevoCodigo;
}


/* =========================
   🏠 CREAR SALA
========================= */

window.crearSala = async function () {

  jugador =
    document
      .getElementById("nombre")
      .value
      .trim();

  if (!jugador) {

    alert("Escribe tu nombre 😭");

    return;
  }

  codigo =
    await generarCodigo();

  await set(
    ref(
      db,
      "partidas/" +
      codigo
    ),
    {
      estado: "esperando",
      pregunta: 0,
      anfitrion: jugador,
      preguntaInicio: 0,
      tiempoRestante: DURACION
    }
  );

  mostrarSalaAnfitrion();
};


/* =========================
   👑 SALA ANFITRIÓN
========================= */

function mostrarSalaAnfitrion() {

  pantalla(`

    <div class="card">

      <h2>👑 SALA</h2>

      <div class="codigo">
        ${codigo}
      </div>

      <p>
        📱 Comparte este código
      </p>

      <div
        style="
          font-size:1.2rem;
          margin:20px 0;
        "
      >
        🧠 30 preguntas difíciles<br>
        ⏱️ 15 segundos por pregunta<br>
        🏆 Máximo 1000 puntos
      </div>

      <div id="listaJugadores">
        Esperando jugadores...
      </div>

      <br>

      <button
        id="btnEmpezar"
        onclick="empezarPartida()"
        disabled
      >
        🚀 EMPEZAR
      </button>

    </div>

  `);

  escucharLobby();
}


/* =========================
   👥 LOBBY
========================= */

function escucharLobby() {

  if (detenerLobby) {
    detenerLobby();
    detenerLobby = null;
  }

  detenerLobby = onValue(
    ref(
      db,
      "partidas/" +
      codigo +
      "/jugadores"
    ),
    snap => {

      const jugadores =
        snap.val() || {};

      const lista =
        Object.values(jugadores);

      const elemento =
        document.getElementById(
          "listaJugadores"
        );

      const boton =
        document.getElementById(
          "btnEmpezar"
        );

      if (!elemento) return;

      elemento.innerHTML = `

        <h3>
          👥 Jugadores: ${lista.length}
        </h3>

        ${
          lista.map(j => `
            <p>
              ${j.animal}
              ${escapar(j.nombre)}
            </p>
          `).join("")
          ||
          "<p>Esperando jugadores... 👀</p>"
        }

      `;

      if (boton) {
        boton.disabled =
          lista.length === 0;
      }
    }
  );
}


/* =========================
   🚀 EMPEZAR PARTIDA
========================= */

window.empezarPartida = async function () {

  if (detenerLobby) {
    detenerLobby();
    detenerLobby = null;
  }

  preguntaActual = 0;
  finalizando = false;

  await esperaServidor;

  await update(
    ref(
      db,
      "partidas/" +
      codigo
    ),
    {
      estado: "jugando",
      pregunta: 0,

      /*
        Firebase coloca aquí
        la hora REAL del servidor.
      */
      preguntaInicio:
        serverTimestamp(),

      tiempoRestante:
        DURACION
    }
  );

  iniciarControlPreguntas();
};


/* =========================
   👑 CONTROL PREGUNTAS
========================= */

function iniciarControlPreguntas() {

  if (controlandoPreguntas) return;

  controlandoPreguntas = true;

  mostrarPreguntaAnfitrion();

  clearInterval(temporizador);

  temporizador =
    setInterval(async () => {

      if (cambiandoPregunta) return;

      const snap =
        await get(
          ref(
            db,
            "partidas/" +
            codigo
          )
        );

      const partida =
        snap.val();

      if (!partida) return;

      if (
        partida.estado !==
        "jugando"
      ) {

        clearInterval(temporizador);

        controlandoPreguntas = false;

        return;
      }

      const inicio =
        Number(
          partida.preguntaInicio
        );

      if (!inicio) return;

      const transcurrido =
        ahoraServidor() -
        inicio;

      const restante =
        Math.max(
          0,
          Math.ceil(
            (
              DURACION_MS -
              transcurrido
            ) / 1000
          )
        );

      tiempo = restante;

      const contador =
        document.getElementById(
          "tiempoAnfitrion"
        );

      if (contador) {

        contador.innerHTML =
          `⏱️ ${restante}`;

        if (restante <= 5) {

          contador.style.transform =
            "scale(1.2)";
        }
      }

      if (
        transcurrido >=
        DURACION_MS
      ) {

        cambiandoPregunta = true;

        if (
          preguntaActual <
          preguntas.length - 1
        ) {

          preguntaActual++;

          await cambiarPregunta();

          cambiandoPregunta = false;

        } else {

          await finalizarPartida();

          cambiandoPregunta = false;
        }
      }

    }, 100);
}


/* =========================
   🔄 CAMBIAR PREGUNTA
========================= */

async function cambiarPregunta() {

  const jugadoresSnap =
    await get(
      ref(
        db,
        "partidas/" +
        codigo +
        "/jugadores"
      )
    );

  const jugadores =
    jugadoresSnap.val() || {};

  const cambios = {

    ["partidas/" +
      codigo +
      "/pregunta"]:
      preguntaActual,

    ["partidas/" +
      codigo +
      "/preguntaInicio"]:
      serverTimestamp(),

    ["partidas/" +
      codigo +
      "/tiempoRestante"]:
      DURACION

  };


  Object.keys(jugadores)
    .forEach(id => {

      cambios[
        "partidas/" +
        codigo +
        "/jugadores/" +
        id +
        "/respondio"
      ] = false;

      cambios[
        "partidas/" +
        codigo +
        "/jugadores/" +
        id +
        "/ultimaGanancia"
      ] = 0;

    });


  await update(
    ref(db),
    cambios
  );

  mostrarPreguntaAnfitrion();
}


/* =========================
   👑 PREGUNTA ANFITRIÓN
========================= */

function mostrarPreguntaAnfitrion() {

  const p =
    preguntas[preguntaActual];

  pantalla(`

    <div class="card">

      <h2>
        👑 Pregunta
        ${preguntaActual + 1}/30
      </h2>

      <div
        id="tiempoAnfitrion"
        style="
          font-size:2.8rem;
          font-weight:bold;
          margin:15px;
          transition:transform .2s;
        "
      >
        ⏱️ ${DURACION}
      </div>

      <h2>
        ${p[0]}
      </h2>

      <p>
        📱 Los jugadores están respondiendo...
      </p>

      <div id="rankingActual"></div>

    </div>

  `);

  escucharRankingAnfitrion();
}


/* =========================
   🏆 RANKING EN VIVO
========================= */

function escucharRankingAnfitrion() {

  if (detenerRanking) {
    detenerRanking();
    detenerRanking = null;
  }

  detenerRanking = onValue(
    ref(
      db,
      "partidas/" +
      codigo +
      "/jugadores"
    ),
    snap => {

      const jugadores =
        Object.entries(
          snap.val() || {}
        )
        .map(([id, datos]) => ({
          id,
          ...datos
        }));

      jugadores.sort(
        (a, b) =>
          Number(b.puntos || 0) -
          Number(a.puntos || 0)
      );

      const elemento =
        document.getElementById(
          "rankingActual"
        );

      if (!elemento) return;

      elemento.innerHTML = `

        <h3>🏆 Ranking</h3>

        ${
          jugadores.map((j, i) => `

            <p
              style="
                margin:8px;
                padding:8px;
                border-radius:12px;
                background:rgba(255,255,255,.75);
                color:#5424b8;
              "
            >

              ${
                i === 0 ? "🥇" :
                i === 1 ? "🥈" :
                i === 2 ? "🥉" :
                `${i + 1}.`
              }

              ${j.animal}
              ${escapar(j.nombre)}

              —
              <strong>
                ${Number(j.puntos || 0)}
              </strong>
              pts

            </p>

          `).join("")
        }

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

      <h2>🎮 Unirse a partida</h2>

      <input
        id="nombreJugador"
        placeholder="Tu nombre"
        maxlength="25"
      >

      <h3>
        🐾 Elige tu animal
      </h3>

      <div>

        ${
          animales.map((a, i) => `

            <button
              class="personaje"
              onclick="
                elegirAnimal(${i}, this)
              "
              style="
                font-size:2rem;
                margin:5px;
                transition:.2s;
              "
            >
              ${a}
            </button>

          `).join("")
        }

      </div>

      <input
        id="codigo"
        placeholder="Código de partida"
        maxlength="6"
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

window.elegirAnimal =
function (i, boton) {

  animal =
    animales[i];

  document
    .querySelectorAll(".personaje")
    .forEach(b => {

      b.style.transform =
        "scale(1)";
    });

  boton.style.transform =
    "scale(1.3)";
};


/* =========================
   🚪 ENTRAR
========================= */

window.entrar =
async function () {

  jugador =
    document
      .getElementById(
        "nombreJugador"
      )
      .value
      .trim();

  codigo =
    document
      .getElementById(
        "codigo"
      )
      .value
      .trim();

  if (
    !jugador ||
    !codigo ||
    !animal
  ) {

    alert(
      "Completa tu nombre, código y animal 😭"
    );

    return;
  }

  const salaSnap =
    await get(
      ref(
        db,
        "partidas/" +
        codigo
      )
    );

  if (!salaSnap.exists()) {

    alert(
      "❌ Esa partida no existe"
    );

    return;
  }

  const sala =
    salaSnap.val();

  if (
    sala.estado !==
    "esperando"
  ) {

    alert(
      "❌ La partida ya comenzó"
    );

    return;
  }


  const jugadorRef =
    push(
      ref(
        db,
        "partidas/" +
        codigo +
        "/jugadores"
      )
    );

  jugadorID =
    jugadorRef.key;


  puntos = 0;

  await set(
    jugadorRef,
    {
      nombre: jugador,
      animal: animal,
      puntos: 0,
      respondio: false,
      ultimaGanancia: 0
    }
  );


  pantalla(`

    <div class="card">

      <div style="
        font-size:5rem;
      ">
        ${animal}
      </div>

      <h2>
        ✅ ¡Entraste!
      </h2>

      <p>
        Hola ${escapar(jugador)} 👋
      </p>

      <p>
        Código:
        <strong>${codigo}</strong>
      </p>

      <p>
        Esperando al anfitrión... 👑
      </p>

    </div>

  `);

  escucharPartidaJugador();
};


/* =========================
   📡 PARTIDA JUGADOR
========================= */

function escucharPartidaJugador() {

  if (escuchandoPartida) return;

  escuchandoPartida = true;

  onValue(
    ref(
      db,
      "partidas/" +
      codigo
    ),
    snap => {

      const partida =
        snap.val();

      if (!partida) return;


      /* ESPERANDO */

      if (
        partida.estado ===
        "esperando"
      ) {

        clearInterval(
          temporizador
        );

        return;
      }


      /* JUGANDO */

      if (
        partida.estado ===
        "jugando"
      ) {

        const nuevaPregunta =
          Number(
            partida.pregunta
          );

        const nuevoInicio =
          Number(
            partida.preguntaInicio
          );


        if (
          ultimaPreguntaMostrada !==
            nuevaPregunta ||
          preguntaInicioActual !==
            nuevoInicio
        ) {

          ultimaPreguntaMostrada =
            nuevaPregunta;

          preguntaActual =
            nuevaPregunta;

          preguntaInicioActual =
            nuevoInicio;

          mostrarPreguntaJugador();
        }

        return;
      }


      /* FINALIZADA */

      if (
        partida.estado ===
        "finalizada"
      ) {

        clearInterval(
          temporizador
        );

        if (!finalizando) {

          mostrarResultadoJugador();
        }
      }

    }
  );
}


/* =========================
   🧠 PREGUNTA JUGADOR
========================= */

function mostrarPreguntaJugador() {

  clearInterval(
    temporizador
  );

  yaRespondio = false;

  const p =
    preguntas[preguntaActual];


  pantalla(`

    <div class="card">

      <div style="
        font-size:4rem;
      ">
        ${animal}
      </div>

      <p>
        Pregunta
        ${preguntaActual + 1}
        de 30
      </p>

      <div
        id="tiempo"
        style="
          font-size:2.8rem;
          font-weight:bold;
          margin:15px;
          transition:transform .15s;
        "
      >
        ⏱️ ${DURACION}
      </div>

      <h2>
        ${p[0]}
      </h2>

      <div id="opciones">

        ${
          p[1].map((op, i) => `

            <button
              onclick="
                responderJugador(${i})
              "
              style="
                display:block;
                width:100%;
                margin:10px 0;
              "
            >
              ${op}
            </button>

          `).join("")
        }

      </div>

      <p>
        🏆 Tus puntos:
        <strong>
          ${puntos}
        </strong>
      </p>

    </div>

  `);


  iniciarRelojJugador();
}


/* =========================
   ⏱️ RELOJ JUGADOR
========================= */

async function iniciarRelojJugador() {

  await esperaServidor;

  clearInterval(
    temporizador
  );

  if (!preguntaInicioActual) {
    return;
  }


  function actualizarReloj() {

    if (yaRespondio) return;

    const transcurrido =
      ahoraServidor() -
      preguntaInicioActual;

    const restanteMs =
      Math.max(
        0,
        DURACION_MS -
        transcurrido
      );

    tiempo =
      Math.max(
        0,
        Math.ceil(
          restanteMs / 1000
        )
      );


    const elemento =
      document.getElementById(
        "tiempo"
      );


    if (elemento) {

      elemento.innerHTML =
        `⏱️ ${tiempo}`;

      elemento.style.transform =
        tiempo <= 5
          ? "scale(1.2)"
          : "scale(1)";
    }


    if (
      restanteMs <= 0
    ) {

      clearInterval(
        temporizador
      );

      if (!yaRespondio) {

        responderJugador(-1);
      }
    }
  }


  actualizarReloj();

  temporizador =
    setInterval(
      actualizarReloj,
      100
    );
}


/* =========================
   🧮 RESPONDER
========================= */

window.responderJugador =
async function (respuesta) {

  if (yaRespondio) return;

  yaRespondio = true;

  clearInterval(
    temporizador
  );


  const pregunta =
    preguntas[preguntaActual];


  const inicio =
    preguntaInicioActual;


  const correcta =
    respuesta !== -1 &&
    respuesta === pregunta[2];


  const puntosGanados =
    calcularPuntos(
      correcta,
      inicio
    );


  /*
    LEEMOS LOS PUNTOS REALES
    DE FIREBASE PARA EVITAR
    QUE SE DESCUADREN.
  */

  const jugadorRef =
    ref(
      db,
      "partidas/" +
      codigo +
      "/jugadores/" +
      jugadorID
    );


  const snap =
    await get(jugadorRef);


  if (!snap.exists()) {

    return;
  }


  const datos =
    snap.val();


  const puntosActuales =
    Number(
      datos.puntos || 0
    );


  const nuevoTotal =
    puntosActuales +
    puntosGanados;


  puntos =
    nuevoTotal;


  await update(
    jugadorRef,
    {
      puntos:
        nuevoTotal,

      respondio:
        true,

      ultimaGanancia:
        puntosGanados
    }
  );


  /*
    MOSTRAR RESULTADO
  */

  if (
    respuesta === -1
  ) {

    mostrarSinRespuesta();

  } else if (
    correcta
  ) {

    mostrarPuntosGanados(
      puntosGanados
    );

  } else {

    mostrarIncorrecta();
  }
};


/* =========================
   ⏰ TIEMPO AGOTADO
========================= */

function mostrarSinRespuesta() {

  pantalla(`

    <div class="card">

      <div style="
        font-size:6rem;
        animation:aparecer .7s ease;
      ">
        ⏰
      </div>

      <h2>
        ¡Se acabó el tiempo!
      </h2>

      <p>
        No alcanzaste a responder 😭
      </p>

      <h1>
        +0
      </h1>

      <p>
        🏆 Total:
        <strong>${puntos}</strong>
      </p>

    </div>

  `);
}


/* =========================
   🎉 CORRECTA
========================= */

function mostrarPuntosGanados(
  ganados
) {

  pantalla(`

    <div class="card">

      <div style="
        font-size:6rem;
        animation:aparecer .7s ease;
      ">
        🎉
      </div>

      <h2>
        ¡CORRECTO!
      </h2>

      <h1
        style="
          animation:puntos .5s ease;
        "
      >
        +${ganados}
      </h1>

      <p>
        ⚡ Respondiste a tiempo
      </p>

      <p>
        🏆 Total:
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
        animation:sacudir .5s ease;
      ">
        ❌
      </div>

      <h2>
        ¡Incorrecto!
      </h2>

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

  if (finalizando) return;

  finalizando = true;

  clearInterval(
    temporizador
  );

  controlandoPreguntas = false;


  await update(
    ref(
      db,
      "partidas/" +
      codigo
    ),
    {
      estado: "finalizada",
      tiempoRestante: 0
    }
  );


  /*
    Esperamos un pequeño momento
    para que las últimas respuestas
    terminen de guardarse.
  */

  await new Promise(
    resolve =>
      setTimeout(resolve, 500)
  );


  if (detenerRanking) {

    detenerRanking();

    detenerRanking = null;
  }


  mostrarRankingFinal();
}


/* =========================
   🥇 RANKING FINAL
========================= */

async function mostrarRankingFinal() {

  const snap =
    await get(
      ref(
        db,
        "partidas/" +
        codigo +
        "/jugadores"
      )
    );


  const jugadores =
    Object.entries(
      snap.val() || {}
    )
    .map(([id, datos]) => ({
      id,
      ...datos
    }));


  jugadores.sort(
    (a, b) =>
      Number(b.puntos || 0) -
      Number(a.puntos || 0)
  );


  pantalla(`

    <div class="card">

      <div style="
        font-size:5rem;
        animation:aparecer .8s ease;
      ">
        🏆
      </div>

      <h1>
        RANKING FINAL
      </h1>

      <p>
        🎉 ¡Partida terminada!
      </p>


      ${
        jugadores.map((j, i) => `

          <div
            style="
              margin:12px 0;
              padding:16px;
              border-radius:20px;
              background:white;
              color:#5424b8;
              animation:
                aparecer
                .6s ease
                ${i * .1}s
                both;
            "
          >

            <div
              style="
                font-size:2rem;
              "
            >

              ${
                i === 0 ? "🥇" :
                i === 1 ? "🥈" :
                i === 2 ? "🥉" :
                `#${i + 1}`
              }

            </div>

            <div
              style="
                font-size:3rem;
              "
            >
              ${j.animal}
            </div>

            <h2>
              ${escapar(j.nombre)}
            </h2>

            <h3>
              ${Number(j.puntos || 0)}
              puntos
            </h3>

          </div>

        `).join("")
      }


      <button
        onclick="location.reload()"
      >
        🔄 Nueva partida
      </button>

    </div>

  `);
}


/* =========================
   🏆 RESULTADO JUGADOR
========================= */

async function mostrarResultadoJugador() {

  const snap =
    await get(
      ref(
        db,
        "partidas/" +
        codigo +
        "/jugadores"
      )
    );


  const jugadores =
    Object.entries(
      snap.val() || {}
    )
    .map(([id, datos]) => ({
      id,
      ...datos
    }));


  jugadores.sort(
    (a, b) =>
      Number(b.puntos || 0) -
      Number(a.puntos || 0)
  );


  const posicion =
    jugadores.findIndex(
      j =>
        j.id === jugadorID
    ) + 1;


  const jugadorFinal =
    jugadores.find(
      j =>
        j.id === jugadorID
    );


  if (jugadorFinal) {

    puntos =
      Number(
        jugadorFinal.puntos || 0
      );
  }


  let emoji = "🎉";


  if (posicion === 1) {
    emoji = "🥇";
  }

  if (posicion === 2) {
    emoji = "🥈";
  }

  if (posicion === 3) {
    emoji = "🥉";
  }


  pantalla(`

    <div class="card">

      <div style="
        font-size:7rem;
        animation:aparecer 1s ease;
      ">
        ${emoji}
      </div>

      <h1>
        ¡PARTIDA TERMINADA!
      </h1>

      <h2>
        ${animal}
        ${escapar(jugador)}
      </h2>

      <h1
        style="
          animation:puntos .7s ease;
        "
      >
        ${puntos}
      </h1>

      <p>
        🏆 PUNTOS TOTALES
      </p>

      <h2>
        Puesto: ${posicion}°
      </h2>

      ${
        posicion === 1
          ? "<h2>👑 ¡GANASTE!</h2>"
          : posicion <= 3
            ? "<h2>🔥 ¡QUEDASTE EN EL PODIO!</h2>"
            : "<h2>💪 ¡Buen trabajo!</h2>"
      }

      <p>
        El anfitrión está viendo
        el ranking final 👑
      </p>

    </div>

  `);
}

