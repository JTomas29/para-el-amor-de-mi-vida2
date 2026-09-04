import './style.css'

import citaBerenice from './assets/img/citaBerenice.jpg'
import citaSpidermanNewBrandDay from './assets/img/citaSpidermanNewBrandDay.jpg'
import citaDeanDennys from './assets/img/citaDean&Dennys.jpg'
import citaDeanDennys2 from './assets/img/citaDean&Dennys2.jpg'
import citaPool from './assets/img/citaPool.jpg'
import citaLoDePepe from './assets/img/citaLoDePepe.jpg'
import foto1ro from './assets/img/1ro.jpg'
import franouiYpeli from './assets/img/franouiYpeli.jpeg'
import juegoTheWalkingDead from './assets/img/juegoTheWalkingDead.jpeg'
import practicaPictionary from './assets/img/practicaPictionary.jpeg'
import royjoafot1 from './assets/img/royjoafot1.jpeg'
import royjoafot2 from './assets/img/royjoafot2.jpeg'
import royjoafot3 from './assets/img/royjoafot3.jpeg'
import royjoafot4 from './assets/img/royjoafot4.jpeg'
import tejo from './assets/img/tejo.jpeg'
import bingoJuntos from './assets/img/bingoJuntos.jpeg'
import delBajon from './assets/img/delBajonyPelis.jpeg'
import harryPotter from './assets/img/harrypotter.jpeg'
import harrypotter2 from './assets/img/harrypotter2.jpeg'
import royjoafot5 from './assets/img/royjoafot5.jpeg'
import royjoafot6 from './assets/img/royjoafot6.jpeg'
import royjoafot7 from './assets/img/royjoafot7.jpeg'
import royjoafot8 from './assets/img/royjoafot8.jpeg'

const app = document.querySelector('#app')

const CONFIG = {
  historia: {
    fechaInicio: '2026-06-26',
    citas: [
      { titulo: 'Ir a merendar a Berenice', fotos: [citaBerenice] },
      { titulo: 'Ir al cine Showcase IMAX a ver La Odisea', fotos: [] },
      { titulo: 'Mates en la costanera', fotos: [] },
      { titulo: 'Patinar sobre hielo', fotos: [] },
      { titulo: 'Ir a ver Spiderman: Brand New Day (Comprar remeras)', fotos: [citaSpidermanNewBrandDay] },
      { titulo: 'Ir a comer pastas', fotos: [] },
      { titulo: 'Ir a comer milanesas con papas fritas', fotos: [] },
      { titulo: 'Ir a comer en Dean & Dennys', fotos: [citaDeanDennys, citaDeanDennys2] },
      { titulo: 'Ir a ver el reestreno de Harry Potter', fotos: [harryPotter, harrypotter2] },
      { titulo: 'Ir a ver The Fockers in Law', fotos: [] },
      { titulo: 'Ir a ver Resident Evil', fotos: [] },
      { titulo: 'Ir a ver Clayface', fotos: [] },
      { titulo: 'Ir a ver Los Juegos del Hambre', fotos: [] },
      { titulo: 'Ir al Rosedal', fotos: [] },
      { titulo: 'Cocinar juntos', fotos: [] },
      { titulo: 'Ir al pool', fotos: [citaPool] },
      { titulo: 'Ir a comer panchos en lo de Pepe', fotos: [citaLoDePepe] },
      { titulo: 'Ir a ver cars reestreno 8 octubre', fotos: [] },
      { titulo: 'Salir juntos a bailar', fotos: [] },
      { titulo: 'Jugar al tejo', fotos: [tejo] },
      { titulo: 'Jugar a las cartas', fotos: [] },
      { titulo: 'Berenice x2 probar chipa y croassan del chocolate verde', fotos: [] },
      { titulo: 'Piedra papel o tijera date', fotos: [] },
      { titulo: 'Ir a la freseria', fotos: [] },
      { titulo: 'Escape room', fotos: [] },
      { titulo: 'Ir a un partido', fotos: [] },
      { titulo: 'Ir a un concierto', fotos: [] },
      { titulo: 'Zoológico Temaiken', fotos: [] },
      { titulo: 'Acuario mundo marino', fotos: [] },
      { titulo: 'Juego de mesa', fotos: [] },
      { titulo: 'Practica del pictionary ', fotos: [practicaPictionary] },
      { titulo: 'Jugar Juego The Walking Dead', fotos: [juegoTheWalkingDead] },
      { titulo: 'Peli + franoui', fotos: [franouiYpeli] },
      { titulo: 'Salir a andar bici', fotos: [] },
      { titulo: 'Pintar cerámica', fotos: [] },
      { titulo: 'Ir a un museo', fotos: [] },
      { titulo: 'Galería de arte', fotos: [] },
      { titulo: 'Ir misa', fotos: [] },
      { titulo: 'Planetario', fotos: [] },
      { titulo: 'Hacer sándwich de churrasco y huevo', fotos: [] },
      { titulo: 'Ir a comer a borde pizza', fotos: [] },
      { titulo: 'DelBajon y pelis', fotos: [delBajon] },
      { titulo: 'Bingo juntos', fotos: [bingoJuntos] },

    ],
  },
  fotosJuntos: [
    royjoafot7,
    royjoafot1,
    royjoafot2,
    royjoafot3,
    royjoafot4,
    royjoafot5,
    royjoafot6,
    royjoafot8,
  ],
}


CONFIG.historia.citas.forEach((cita) => {
  cita.fotos = Array.isArray(cita.fotos) ? cita.fotos : []
  if (typeof cita.hecha !== 'boolean') {
    cita.hecha = cita.fotos.length > 0
  }
})

const cornersHtml = `
  <div class="corners" aria-hidden="true">
    <span class="corner tl"></span>
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
  </div>
`

const screenHome = `
  <div id="screen-home" class="screen active min-h-screen items-center justify-center px-4 py-8">
    <div class="glass-card w-full max-w-md px-6 py-10 text-center sm:px-10">
      ${cornersHtml}
      <div class="home-hero relative mx-auto mb-8 h-24 w-24" aria-hidden="true">
        <span class="orbit-icon" style="--orbit-radius: 44px; --orbit-duration: 8s">💫</span>
        <span class="orbit-icon" style="--orbit-radius: 44px; --orbit-duration: 12s; --orbit-delay: -3s">✨</span>
        <span class="orbit-icon" style="--orbit-radius: 44px; --orbit-duration: 16s; --orbit-delay: -7s">🌟</span>
        <div class="home-heart">❤️</div>
      </div>
      <h1 class="home-title font-display text-4xl font-light tracking-tight text-rose sm:text-5xl">
        Mai Lof,
        <span class="block italic">¿estás lista?</span>
      </h1>
      <div class="home-divider mt-6" aria-hidden="true"></div>
      <p class="mt-5 text-base text-blush/70 sm:text-lg">Preparé algo especial para vos.</p>
      <button
        id="btn-start"
        type="button"
        class="btn-shimmer mt-8 w-full cursor-pointer rounded-full px-10 py-4 text-lg sm:w-auto"
      >
        Comenzar <span aria-hidden="true">🌹</span>
      </button>
      <p class="mt-6 text-sm tracking-wide text-blush/45">Solo para vos · con todo mi amor</p>
    </div>
  </div>
`

const opcionBtnClass =
  'option-btn w-full cursor-pointer rounded-2xl px-4 py-3.5 text-base'

function questionScreen(id, pregunta, opciones) {
  const corazonesHtml = [1, 2, 3]
    .map(() => '<span class="progress-heart heart-empty">♡</span>')
    .join('')

  const opcionesHtml = opciones
    .map(
      ({ texto, correcta }) => `
      <button type="button" data-correct="${correcta}" class="${opcionBtnClass}">
        ${texto}
      </button>
    `,
    )
    .join('')

  return `
  <div id="screen-${id}" class="screen min-h-screen items-center justify-center px-4 py-8">
    <div class="glass-card w-full max-w-md px-6 py-8 text-center sm:px-10">
      ${cornersHtml}
      <div class="chip-heart" aria-hidden="true">❤️</div>
      <div class="progress-hearts mt-5 flex items-center justify-center gap-2 text-xl" role="img" aria-label="Progreso de preguntas">
        ${corazonesHtml}
      </div>
      <h2 class="glow-rose mt-5 font-display text-2xl font-light tracking-tight text-rose sm:text-3xl">${pregunta}</h2>
      <div class="mt-6 flex flex-col gap-3">${opcionesHtml}</div>
    </div>
  </div>
`
}

const screenQ1 = questionScreen('q1', '¿Cuál fue nuestra primer cita?', [
  { texto: '20 de Junio', correcta: 'false' },
  { texto: '25 de Junio', correcta: 'false' },
  { texto: '26 de Junio', correcta: 'true' },
  { texto: '23 de Junio', correcta: 'false' },
])

const screenQ2 = questionScreen('q2', '¿Cuándo fue nuestro primer beso?', [
  { texto: 'Primera cita', correcta: 'false' },
  { texto: 'Segunda cita', correcta: 'true' },
  { texto: 'Tercer cita', correcta: 'false' },
  { texto: 'Cuarta cita', correcta: 'false' },
])

const screenQ3 = questionScreen('q3', '¿Cómo se llama nuestro hijo?', [
  { texto: 'Mai Lof', correcta: 'true' },
  { texto: 'Matheus', correcta: 'false' },
  { texto: 'Deus', correcta: 'false' },
  { texto: 'Pedrinhio', correcta: 'false' },
])

const screenPropuesta = `
  <div id="screen-propuesta" class="screen min-h-screen items-center justify-center px-4 py-8">
    <div class="glass-card w-full max-w-md px-6 py-10 text-center sm:px-10">
      ${cornersHtml}
      <div class="chip-heart propuesta-corazon" aria-hidden="true">❤️</div>
      <h2 class="glow-rose mt-6 font-display text-2xl font-light tracking-tight text-rose sm:text-3xl">Tengo una última pregunta para vos...</h2>
      <button
        id="btn-revelar"
        type="button"
        class="btn-shimmer mt-8 w-full cursor-pointer rounded-full px-10 py-4 text-lg sm:w-auto"
      >
        Revelar <span aria-hidden="true">❤️</span>
      </button>
    </div>
  </div>
`

const screenNovia = `
  <div id="screen-novia" class="screen min-h-screen items-center justify-center px-4 py-8">
    <div class="propuesta-card glass-card w-full max-w-md px-6 py-10 text-center sm:px-10">
      ${cornersHtml}
      <div class="chip-heart propuesta-corazon" aria-hidden="true">❤️</div>
      <h2 class="glow-rose mt-6 font-display text-3xl font-light tracking-tight text-rose sm:text-4xl">¿Querés ser mi novia?</h2>
      <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button
          id="btn-si"
          type="button"
          class="btn-shimmer w-full cursor-pointer rounded-full px-8 py-3.5 text-lg sm:w-auto"
        >
          Sí <span aria-hidden="true">❤️</span>
        </button>
        <button
          id="btn-no"
          type="button"
          class="w-full cursor-pointer rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-lg font-semibold text-blush transition duration-300 ease-in-out hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto"
        >
          No
        </button>
      </div>
    </div>
  </div>
`

const screenNo = `
  <div id="screen-no" class="screen min-h-screen items-center justify-center px-4 py-8">
    <div class="glass-card w-full max-w-md px-6 py-10 text-center sm:px-10">
      ${cornersHtml}
      <div class="chip-heart" aria-hidden="true">😈</div>
      <h2 class="glow-rose mt-6 font-display text-2xl font-light tracking-tight text-rose sm:text-3xl">¿No? ¿En serio? 😏</h2>
      <p class="mt-3 text-base text-blush/70 sm:text-lg">
        Creo que tu dedo resbaló. Los destinos se escriben de a dos... y la mía dice que sí. 🌹
      </p>
      <button
        id="btn-again"
        type="button"
        class="btn-shimmer mt-8 w-full cursor-pointer rounded-full px-8 py-3.5 text-lg sm:w-auto"
      >
        Preguntame otra vez <span aria-hidden="true">🌹</span>
      </button>
    </div>
  </div>
`

const screenSi = `
  <div id="screen-si" class="screen min-h-screen items-center justify-center px-4 py-8">
    <div class="si-card glass-card w-full max-w-md px-6 py-8 text-center sm:px-10">
      ${cornersHtml}
      <div class="si-heart chip-heart chip-heart--lg" aria-hidden="true">❤️</div>
      <h2 class="glow-rose mt-5 font-display text-2xl font-light tracking-tight text-rose sm:text-3xl">No sabés lo feliz que me hace dar un paso más en nuestro vínculo. ❤️</h2>
      <div class="mt-7 flex justify-center">
        <div class="si-foto-wrapper relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-2 border-mint/50 bg-ink/40 shadow-[0_0_40px_rgba(45,184,112,0.25)] sm:h-44 sm:w-44">
          <div class="absolute inset-0 flex items-center justify-center text-4xl" aria-hidden="true">❤️</div>
        </div>
      </div>
      <p class="mt-7 text-base leading-relaxed text-blush/70 sm:text-lg">
        Y me llena el corazón saber que es con vos. ❤️
      </p>
      <div class="cierre-si mt-7 rounded-2xl border border-mint/25 bg-ink/40 px-6 py-5 backdrop-blur-sm">
        <p class="cierre-teamo font-display text-3xl font-light italic tracking-wide text-rose sm:text-4xl">Te amo.</p>
        <p class="cierre-joa mt-2 font-display text-2xl font-semibold text-jade sm:text-3xl">
          Joa <span class="cierre-corazon" aria-hidden="true">❤️</span>
        </p>
      </div>
      <button
        id="btn-historia"
        type="button"
        class="btn-shimmer mt-7 w-full cursor-pointer rounded-full px-8 py-3.5 text-lg sm:w-auto"
      >
        Ver nuestra historia <span aria-hidden="true">❤️</span>
      </button>
    </div>
  </div>
`

const screenHistoria = `
  <div id="screen-historia" class="screen min-h-screen items-center justify-center px-4 py-8">
    <div class="historia-card glass-card w-full max-w-lg px-6 py-8 text-center sm:px-8">
      ${cornersHtml}
      <div class="chip-heart" aria-hidden="true">❤️</div>
      <h2 class="glow-rose mt-4 font-display text-2xl font-light tracking-tight text-rose sm:text-3xl">Nuestra historia</h2>
      <p class="mt-2 text-base text-blush/70">Todo lo que todavía nos queda por vivir.</p>
      <div id="history-content" class="mt-6 text-left"></div>
    </div>
  </div>
`

const canvasCelebracion = `
  <canvas
    id="canvas-celebracion"
    class="pointer-events-none fixed inset-0 z-50 h-full w-full"
    aria-hidden="true"
  ></canvas>
`

const bgDecor = `
  <div class="bg-decor" aria-hidden="true">
    <canvas id="bokeh-canvas"></canvas>
    <div class="stars-layer"></div>
    <div class="petals-layer"></div>
  </div>
`

const transitionOverlay = `
  <div id="transition-overlay" aria-hidden="true"></div>
`

app.innerHTML =
  bgDecor +
  screenHome +
  screenQ1 +
  screenQ2 +
  screenQ3 +
  screenPropuesta +
  screenNovia +
  screenSi +
  screenNo +
  screenHistoria +
  canvasCelebracion +
  transitionOverlay

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (REDUCED_MOTION) {
  document.body.classList.add('reduce-motion')
}

function createStars(count) {
  const layer = document.querySelector('.stars-layer')
  if (!layer) return
  const glyphs = ['✦', '✧', '•']
  let html = ''
  for (let i = 0; i < count; i += 1) {
    const left = Math.random() * 100
    const top = Math.random() * 100
    const size = 6 + Math.random() * 10
    const delay = (Math.random() * 4).toFixed(2)
    const dur = (2.5 + Math.random() * 3).toFixed(2)
    const glyph = glyphs[i % glyphs.length]
    html += `<i class="star" style="left:${left.toFixed(2)}%;top:${top.toFixed(2)}%;font-size:${size}px;animation-delay:${delay}s;animation-duration:${dur}s">${glyph}</i>`
  }
  layer.innerHTML = html
}

function createPetals(count) {
  const layer = document.querySelector('.petals-layer')
  if (!layer) return
  const emojis = ['🌹', '🌸', '🍃', '🌿', '🌺']
  let html = ''
  for (let i = 0; i < count; i += 1) {
    const left = Math.random() * 100
    const drift = Math.round((Math.random() - 0.5) * 240)
    const spin = Math.round(240 + Math.random() * 480)
    const dur = (12 + Math.random() * 12).toFixed(1)
    const delay = (Math.random() * 16).toFixed(1)
    const size = 14 + Math.random() * 12
    const emoji = emojis[Math.floor(Math.random() * emojis.length)]
    html += `<i class="petal" style="left:${left.toFixed(2)}%;--p-drift:${drift}px;--p-spin:${spin}deg;--p-dur:${dur}s;--p-delay:${delay}s;--p-size:${size}px">${emoji}</i>`
  }
  layer.innerHTML = html
}

let bokehRafId = null

function initBokeh() {
  const canvas = document.getElementById('bokeh-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  let w = 0
  let h = 0

  const resize = () => {
    w = canvas.clientWidth
    h = canvas.clientHeight
    canvas.width = Math.max(1, Math.round(w * dpr))
    canvas.height = Math.max(1, Math.round(h * dpr))
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
  resize()
  window.addEventListener('resize', resize)

  const colores = [
    'rgba(140, 20, 60, 0.18)',
    'rgba(140, 20, 60, 0.12)',
    'rgba(180, 40, 90, 0.12)',
    'rgba(180, 40, 90, 0.08)',
    'rgba(20, 100, 60, 0.18)',
    'rgba(20, 100, 60, 0.12)',
    'rgba(30, 140, 80, 0.12)',
    'rgba(30, 140, 80, 0.08)',
  ]

  const blobs = Array.from({ length: 26 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: 40 + Math.random() * 140,
    color: colores[Math.floor(Math.random() * colores.length)],
    phase: Math.random() * Math.PI * 2,
    speed: 0.00008 + Math.random() * 0.00012,
  }))

  const draw = (t) => {
    ctx.clearRect(0, 0, w, h)
    for (const b of blobs) {
      const x = (b.x + Math.sin(t * b.speed + b.phase) * 0.03) * w
      const y = (b.y + Math.cos(t * b.speed * 1.1 + b.phase) * 0.03) * h
      const g = ctx.createRadialGradient(x, y, 0, x, y, b.r)
      g.addColorStop(0, b.color)
      g.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(x, y, b.r, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  if (REDUCED_MOTION) {
    draw(0)
    return
  }

  const loop = (t) => {
    draw(t)
    bokehRafId = requestAnimationFrame(loop)
  }
  bokehRafId = requestAnimationFrame(loop)
}

createStars(80)
createPetals(26)
initBokeh()

const FADE_MS = 250

function activateScreen(screen) {
  screen.classList.add('active', 'screen-enter')
  screen.addEventListener(
    'animationend',
    () => screen.classList.remove('screen-enter'),
    { once: true },
  )
}

function showScreen(nombre) {
  const target = document.getElementById(`screen-${nombre}`)
  const current = document.querySelector('.screen.active')

  if (!target) {
    console.log(`Navegación a "${nombre}" preparada: "screen-${nombre}" se creará en una próxima etapa.`)
    return
  }

  const index = questionOrder.indexOf(nombre)
  if (index !== -1) {
    updateProgress(progress)
  }

  if (nombre === 'propuesta') {
    resetNoButton()
  }

  if (nombre === 'si') {
    startCelebration()
  }

  if (nombre === 'historia') {
    startContadorHistoria()
    renderHistoryDates()
  }

  if (!current || current === target) {
    activateScreen(target)
    return
  }

  current.classList.add('screen-leaving')
  setTimeout(() => {
    current.classList.remove('active', 'screen-leaving')
    activateScreen(target)
  }, FADE_MS)
}

function goToScreenWithTransition(nombre) {
  const overlay = document.getElementById('transition-overlay')
  overlay.classList.add('overlay-on')
  setTimeout(() => {
    showScreen(nombre)
    setTimeout(() => overlay.classList.remove('overlay-on'), 380)
  }, 420)
}

const btnStart = document.getElementById('btn-start')
btnStart.addEventListener('click', () => goToScreenWithTransition('q1'))

const btnRevelar = document.getElementById('btn-revelar')
btnRevelar.addEventListener('click', () => showScreen('novia'))

const ANSWER_DELAY_MS = 900

const questionOrder = ['q1', 'q2', 'q3']
let progress = 0

function nextScreenFor(screen) {
  const index = questionOrder.indexOf(screen.id.replace('screen-', ''))
  return index === -1 ? null : (questionOrder[index + 1] ?? 'propuesta')
}

function updateProgress(step) {
  document.querySelectorAll('.progress-hearts').forEach((container) => {
    container.querySelectorAll('.progress-heart').forEach((heart, index) => {
      const completado = index < step
      heart.textContent = completado ? '♥' : '♡'
      heart.classList.toggle('heart-filled', completado)
      heart.classList.toggle('heart-empty', !completado)
    })
  })
}

function handleAnswer(button) {
  if (
    button.classList.contains('opcion-correcta') ||
    button.classList.contains('opcion-incorrecta')
  ) {
    return
  }

  const screen = button.closest('.screen')
  const correcta = button.dataset.correct === 'true'
  const siguiente = nextScreenFor(screen)

  screen.querySelectorAll('button').forEach((btn) => {
    btn.disabled = true
  })

  button.classList.add(correcta ? 'opcion-correcta' : 'opcion-incorrecta')
  button.classList.add(correcta ? 'pop' : 'shake')

  const marca = document.createElement('span')
  marca.setAttribute('aria-hidden', 'true')
  marca.className = 'ml-2 inline-block'
  marca.textContent = correcta ? '✓' : '✗'
  button.appendChild(marca)

  const answeredIndex = questionOrder.indexOf(screen.id.replace('screen-', ''))
  if (answeredIndex !== -1) {
    progress = answeredIndex + 1
    updateProgress(progress)
  }

  setTimeout(() => showScreen(siguiente), ANSWER_DELAY_MS)
}

questionOrder.forEach((id) => {
  const screen = document.getElementById(`screen-${id}`)
  screen.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => handleAnswer(btn))
  })
})

const MAX_DODGES = 3
let noDodgeCount = 0

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

function dodgeNoButton(button) {
  if (noDodgeCount >= MAX_DODGES) return

  const cardRect = button.closest('.propuesta-card').getBoundingClientRect()
  const btnRect = button.getBoundingClientRect()
  const inset = 16

  const minX = cardRect.left + inset - btnRect.left
  const maxX = cardRect.right - inset - btnRect.width - btnRect.left
  const minY = cardRect.top + inset - btnRect.top
  const maxY = cardRect.bottom - inset - btnRect.height - btnRect.top

  const dx = randomBetween(minX, Math.max(minX, maxX))
  const dy = randomBetween(minY, Math.max(minY, maxY))

  noDodgeCount += 1
  button.classList.add('btn-no-moved')
  button.style.transform = `translate(${dx}px, ${dy}px)`
}

function resetNoButton() {
  noDodgeCount = 0
  const btnNo = document.getElementById('btn-no')
  if (!btnNo) return
  btnNo.classList.remove('btn-no-moved')
  btnNo.style.transform = ''
}

const btnSi = document.getElementById('btn-si')
btnSi.addEventListener('click', () => goToScreenWithTransition('si'))

const btnHistoria = document.getElementById('btn-historia')
btnHistoria.addEventListener('click', () => goToScreenWithTransition('historia'))

const btnNo = document.getElementById('btn-no')
btnNo.addEventListener('click', () => showScreen('no'))
btnNo.addEventListener('pointerenter', (event) => {
  if (event.pointerType === 'mouse') {
    dodgeNoButton(btnNo)
  }
})

const btnAgain = document.getElementById('btn-again')
btnAgain.addEventListener('click', () => goToScreenWithTransition('propuesta'))

const CEL_DURATION_MS = 4500
let celebrationRafId = null

function createHeart(width, height) {
  const colores = [
    'rgba(249, 200, 216, 0.95)',
    'rgba(249, 200, 216, 0.6)',
    'rgba(110, 237, 176, 0.9)',
    'rgba(45, 184, 112, 0.7)',
    'rgba(180, 40, 90, 0.85)',
    'rgba(180, 40, 90, 0.55)',
  ]
  return {
    x: Math.random() * width,
    y: -Math.random() * height,
    size: 14 + Math.random() * 18,
    speedY: 80 + Math.random() * 140,
    sway: 20 + Math.random() * 40,
    swaySpeed: 0.001 + Math.random() * 0.002,
    rotation: (Math.random() - 0.5) * 0.8,
    color: colores[Math.floor(Math.random() * colores.length)],
  }
}

function drawHeart(ctx, heart, elapsed) {
  const x = heart.x + Math.sin(elapsed * heart.swaySpeed + heart.phase) * heart.sway
  const y = heart.y + (elapsed / 1000) * heart.speedY
  if (y - heart.size > ctx.canvas.clientHeight) return

  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(heart.rotation)
  ctx.font = `${heart.size}px serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = heart.color
  ctx.fillText('♥', 0, 0)
  ctx.restore()
}

function stopCelebration() {
  if (celebrationRafId !== null) {
    cancelAnimationFrame(celebrationRafId)
    celebrationRafId = null
  }
  const canvas = document.getElementById('canvas-celebracion')
  if (canvas) {
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
  }
}

function startCelebration() {
  stopCelebration()

  const canvas = document.getElementById('canvas-celebracion')
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = canvas.clientWidth * dpr
  canvas.height = canvas.clientHeight * dpr
  ctx.scale(dpr, dpr)

  const width = canvas.clientWidth
  const height = canvas.clientHeight
  const hearts = Array.from({ length: 45 }, () => createHeart(width, height))
  const start = performance.now()

  const frame = (now) => {
    const elapsed = now - start
    if (elapsed >= CEL_DURATION_MS) {
      stopCelebration()
      return
    }
    ctx.clearRect(0, 0, width, height)
    hearts.forEach((heart) => drawHeart(ctx, heart, elapsed))
    celebrationRafId = requestAnimationFrame(frame)
  }

  celebrationRafId = requestAnimationFrame(frame)
}

let contadorTimerId = null

function parseLocalDate(iso) {
  const [year, month, day] = iso.split('-').map(Number)
  return { year, month, day }
}

function formatFechaCita(iso) {
  if (!iso) return ''
  const { year, month, day } = parseLocalDate(iso)
  const fecha = new Date(year, month - 1, day)
  if (Number.isNaN(fecha.getTime())) return ''
  return fecha.toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function localDayNumber(date) {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000
}

function updateContadorHistoria() {
  const { year, month, day } = parseLocalDate(CONFIG.historia.fechaInicio)
  const ahora = new Date()

  const dias = Math.max(0, localDayNumber(ahora) - localDayNumber(new Date(year, month - 1, day)))
  const horas = String(ahora.getHours()).padStart(2, '0')
  const minutos = String(ahora.getMinutes()).padStart(2, '0')
  const segundos = String(ahora.getSeconds()).padStart(2, '0')

  const elDias = document.getElementById('contador-dias')
  const elHoras = document.getElementById('contador-horas')
  const elMinutos = document.getElementById('contador-minutos')
  const elSegundos = document.getElementById('contador-segundos')
  if (!elDias || !elHoras || !elMinutos || !elSegundos) return

  elDias.textContent = String(dias)
  elHoras.textContent = horas
  elMinutos.textContent = minutos
  elSegundos.textContent = segundos
}

function startContadorHistoria() {
  const content = document.getElementById('history-content')
  if (content && !content.querySelector('.contador-historia')) {
    content.innerHTML = `
      <div class="contador-historia text-center">
        <p class="text-sm text-blush/60">Desde el 26 de junio de 2026</p>
        <div class="mt-3 flex items-stretch justify-center gap-2 sm:gap-3">
          <div class="contador-caja flex flex-1 flex-col items-center rounded-2xl border px-1 py-3">
            <span id="contador-dias" class="font-display text-2xl font-semibold tabular-nums text-jade sm:text-3xl">0</span>
            <span class="mt-1 text-xs text-blush/50">días</span>
          </div>
          <div class="contador-caja flex flex-1 flex-col items-center rounded-2xl border px-1 py-3">
            <span id="contador-horas" class="font-display text-2xl font-semibold tabular-nums text-jade sm:text-3xl">00</span>
            <span class="mt-1 text-xs text-blush/50">horas</span>
          </div>
          <div class="contador-caja flex flex-1 flex-col items-center rounded-2xl border px-1 py-3">
            <span id="contador-minutos" class="font-display text-2xl font-semibold tabular-nums text-jade sm:text-3xl">00</span>
            <span class="mt-1 text-xs text-blush/50">min</span>
          </div>
          <div class="contador-caja flex flex-1 flex-col items-center rounded-2xl border px-1 py-3">
            <span id="contador-segundos" class="font-display text-2xl font-semibold tabular-nums text-jade sm:text-3xl">00</span>
            <span class="mt-1 text-xs text-blush/50">seg</span>
          </div>
        </div>
      </div>
    `
  }

  updateContadorHistoria()
  if (contadorTimerId === null) {
    contadorTimerId = setInterval(updateContadorHistoria, 1000)
  }
}

function renderHistoryDates() {
  const content = document.getElementById('history-content')
  if (!content || content.querySelector('.citas-section')) return

  const hechas = CONFIG.historia.citas.filter((cita) => cita.hecha)
  const pendientes = CONFIG.historia.citas.filter((cita) => !cita.hecha)

  const citaCard = (cita, citaIndex) => `
    <li class="rounded-2xl border px-4 py-3 backdrop-blur-sm ${
      cita.hecha ? 'border-mint/30 bg-mint/10' : 'border-white/10 bg-white/5'
    }">
      <div class="flex items-center gap-3">
        <span class="text-xl ${cita.hecha ? 'text-jade' : 'text-rose/40'}" aria-hidden="true">${cita.hecha ? '♥' : '♡'}</span>
        <div class="min-w-0 flex-1">
          <p class="break-words text-base ${
            cita.hecha ? 'font-semibold text-rose' : 'font-medium text-blush/70'
          }">${cita.titulo}</p>
          <p class="mt-0.5 text-xs ${cita.hecha ? 'font-semibold text-jade' : 'text-blush/40'}">${
            cita.hecha ? 'Hecha ❤️' : 'Pendiente'
          }</p>
          ${
            cita.fecha
              ? `<p class="mt-1 text-xs text-blush/45">${formatFechaCita(cita.fecha)}</p>`
              : ''
          }
        </div>
      </div>
      ${cita.fotos.length ? renderCarousel(cita, citaIndex) : ''}
    </li>
  `

  const seccion = (titulo, lista) => `
    <section class="mt-6">
      <h3 class="text-sm font-bold uppercase tracking-wide text-blush/60">${titulo}</h3>
      <ul class="mt-3 flex flex-col gap-2">${lista
        .map((cita) => citaCard(cita, CONFIG.historia.citas.indexOf(cita)))
        .join('')}</ul>
    </section>
  `

  content.insertAdjacentHTML(
    'beforeend',
    `
    <div class="recuerdo-section mt-8 border-t border-mint/20 pt-8">
      <h3 class="recuerdo-titulo glow-rose text-center font-display text-2xl font-light tracking-tight text-rose sm:text-3xl">Siempre estuvimos cerca...</h3>
      <p class="recuerdo-texto mx-auto mt-3 max-w-md text-center text-base leading-relaxed text-blush/75 sm:text-lg">
        Mismos lugares, gente en común, incluso compartimos colegio.
        Y de alguna manera, tuvimos que esperar hasta ahora para encontrarnos. 💚
      </p>
      <div class="recuerdo-foto-wrap mx-auto mt-6 w-full max-w-[260px] -rotate-2 transition-transform duration-500 hover:rotate-0">
        <div class="recuerdo-foto rounded-md bg-white/95 p-3 pb-6 shadow-lg shadow-black/30 ring-1 ring-mint/30">
          <img src="${foto1ro}" alt="Nosotros de chicos" loading="lazy" class="aspect-[4/5] w-full rounded-sm object-cover" />
        </div>
      </div>
      <p class="recuerdo-caption mx-auto mt-4 max-w-sm text-center text-sm text-blush/55 sm:text-base">
        Qué loco pensar que ya estábamos en la misma historia sin saberlo. 💚
      </p>
    </div>
    <div class="fotos-juntos-section mt-10 border-t border-mint/20 pt-8" data-fotos-juntos>
      <h3 class="glow-rose text-center font-display text-2xl font-light tracking-tight text-rose sm:text-3xl">Nuestras fotos juntos 💖</h3>
      <p class="mx-auto mt-2 max-w-sm text-center text-base text-blush/70">
        bechos en fotos. 💖
      </p>
      <div class="fotos-juntos-player relative mt-5">
        <div class="fotos-juntos-img-wrap relative w-full touch-pan-y select-none overflow-hidden rounded-2xl border border-mint/25 bg-ink/30 shadow-md shadow-black/30"></div>
        <button
          type="button"
          class="fotos-juntos-btn flex h-10 w-10 items-center justify-center rounded-full bg-ink/60 text-xl text-blush backdrop-blur-sm transition duration-300 ease-in-out hover:bg-mint hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-transparent absolute left-2 top-1/2 z-10 -translate-y-1/2"
          data-fotos-juntos-prev
          aria-label="Foto anterior"
        >‹</button>
        <button
          type="button"
          class="fotos-juntos-btn flex h-10 w-10 items-center justify-center rounded-full bg-ink/60 text-xl text-blush backdrop-blur-sm transition duration-300 ease-in-out hover:bg-mint hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-transparent absolute right-2 top-1/2 z-10 -translate-y-1/2"
          data-fotos-juntos-next
          aria-label="Foto siguiente"
        >›</button>
        <div class="fotos-juntos-progress absolute bottom-2 left-1/2 z-10 -translate-x-1/2 rounded-full bg-ink/50 px-3 py-1 text-xs font-semibold tabular-nums text-blush backdrop-blur-sm" data-fotos-juntos-progress></div>
      </div>
      <div class="mt-2 flex items-center justify-center gap-1.5" data-fotos-juntos-dots></div>
    </div>
    <div class="citas-section mt-8">
      <h2 class="glow-rose font-display text-xl font-light tracking-tight text-rose sm:text-2xl">Nuestras citas ❤️</h2>
      ${hechas.length ? seccion('❤️ Las que ya vivimos', hechas) : ''}
      ${pendientes.length ? seccion('♡ Las que todavía nos quedan', pendientes) : ''}
    </div>
    `,
  )

  CONFIG.historia.citas.forEach((cita, citaIndex) => {
    if (cita.fotos.length > 0) initCarousel(citaIndex)
  })
  initFotosJuntos()
}

const carouselStates = {}

function renderCarousel(cita, citaIndex) {
  const varias = cita.fotos.length > 1

  return `
  <div class="mt-4" data-carrusel="${citaIndex}" data-total="${cita.fotos.length}">
    <div class="relative">
      <div class="carrusel-img-wrap relative w-full touch-pan-y select-none overflow-hidden rounded-2xl border border-mint/25 bg-ink/30 shadow-md shadow-black/30"></div>
      ${
        varias
          ? `
        <button
          type="button"
          class="carrusel-btn-anterior absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-xl text-blush backdrop-blur-sm transition duration-300 ease-in-out hover:bg-mint hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          aria-label="Foto anterior"
        >‹</button>
        <button
          type="button"
          class="carrusel-btn-siguiente absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-xl text-blush backdrop-blur-sm transition duration-300 ease-in-out hover:bg-mint hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          aria-label="Foto siguiente"
        >›</button>
      `
          : ''
      }
    </div>
    ${
      varias
        ? `
      <div class="mt-2 flex items-center justify-center gap-1.5">
        ${cita.fotos
          .map(
            (foto, index) => `
          <button
            type="button"
            class="carrusel-dot h-2.5 w-2.5 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
            data-foto="${index}"
            aria-label="Foto ${index + 1}"
          ></button>
        `,
          )
          .join('')}
      </div>
    `
        : ''
    }
  </div>
  `
}

function initCarousel(citaIndex) {
  const carousel = document.querySelector(`[data-carrusel="${citaIndex}"]`)
  if (!carousel) return

  const cita = CONFIG.historia.citas[citaIndex]
  const varias = cita.fotos.length > 1

  if (varias) {
    const btnAnterior = carousel.querySelector('.carrusel-btn-anterior')
    const btnSiguiente = carousel.querySelector('.carrusel-btn-siguiente')
    btnAnterior.addEventListener('click', () => previousPhoto(citaIndex))
    btnSiguiente.addEventListener('click', () => nextPhoto(citaIndex))

    carousel.querySelectorAll('.carrusel-dot').forEach((dot) => {
      dot.addEventListener('click', () => goToPhoto(citaIndex, Number(dot.dataset.foto)))
    })

    const imgWrap = carousel.querySelector('.carrusel-img-wrap')
    let startX = null
    let startY = null
    imgWrap.addEventListener('pointerdown', (event) => {
      startX = event.clientX
      startY = event.clientY
    })
    imgWrap.addEventListener('pointerup', (event) => {
      if (startX === null) return
      const dx = event.clientX - startX
      const dy = event.clientY - startY
      startX = null
      startY = null
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) nextPhoto(citaIndex)
        else previousPhoto(citaIndex)
      }
    })
  }

  carouselStates[citaIndex] = 0
  showCarouselPhoto(citaIndex, 0)
}

function showCarouselPhoto(citaIndex, photoIndex) {
  const carousel = document.querySelector(`[data-carrusel="${citaIndex}"]`)
  if (!carousel) return

  const cita = CONFIG.historia.citas[citaIndex]
  const imgWrap = carousel.querySelector('.carrusel-img-wrap')
  if (!imgWrap) return

  imgWrap.innerHTML = ''

  const setFotoRatio = (img) => {
    const ratio = img.naturalWidth / img.naturalHeight
    if (Number.isFinite(ratio) && ratio > 0) {
      const clamped = Math.min(Math.max(ratio, 3 / 4), 16 / 9)
      imgWrap.style.setProperty('--foto-ratio', String(clamped))
    }
  }

  const img = document.createElement('img')
  img.className = 'carrusel-foto h-full w-full object-contain'
  img.loading = 'lazy'
  img.alt = `${cita.titulo} - foto ${photoIndex + 1}`
  img.draggable = false
  img.style.opacity = '0'
  img.addEventListener('load', () => {
    setFotoRatio(img)
    img.style.opacity = '1'
  })
  img.addEventListener('error', () => {
    imgWrap.innerHTML = `
      <div class="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
        <span class="text-3xl" aria-hidden="true">❤️</span>
        <span class="text-xs text-blush/60">Esta foto todavía no está disponible</span>
      </div>
    `
  })
  imgWrap.appendChild(img)
  img.src = cita.fotos[photoIndex]

  carousel.querySelectorAll('.carrusel-dot').forEach((dot, index) => {
    const activo = index === photoIndex
    dot.classList.toggle('bg-jade', activo)
    dot.classList.toggle('bg-white/20', !activo)
  })
}

function goToPhoto(citaIndex, photoIndex) {
  const total = CONFIG.historia.citas[citaIndex].fotos.length
  if (total === 0) return
  const nuevo = ((photoIndex % total) + total) % total
  carouselStates[citaIndex] = nuevo
  showCarouselPhoto(citaIndex, nuevo)
}

function nextPhoto(citaIndex) {
  goToPhoto(citaIndex, carouselStates[citaIndex] + 1)
}

function previousPhoto(citaIndex) {
  goToPhoto(citaIndex, carouselStates[citaIndex] - 1)
}

const fotosJuntos = CONFIG.fotosJuntos
const FOTOS_JUNTOS_INTERVALO_MS = 10000
let fotosJuntosIndice = 0
let fotosJuntosTimer = null

function initFotosJuntos() {
  const root = document.querySelector('[data-fotos-juntos]')
  if (!root) return

  const dots = root.querySelector('[data-fotos-juntos-dots]')
  dots.innerHTML = fotosJuntos
    .map(
      (foto, index) => `
      <button
        type="button"
        class="fotos-juntos-dot h-2.5 w-2.5 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
        data-fotos-juntos-foto="${index}"
        aria-label="Foto ${index + 1}"
      ></button>
    `,
    )
    .join('')

  const imgWrap = root.querySelector('.fotos-juntos-img-wrap')
  let startX = null
  let startY = null
  imgWrap.addEventListener('pointerdown', (event) => {
    startX = event.clientX
    startY = event.clientY
  })
  imgWrap.addEventListener('pointerup', (event) => {
    if (startX === null) return
    const dx = event.clientX - startX
    const dy = event.clientY - startY
    startX = null
    startY = null
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) showFotosJuntos(fotosJuntosIndice + 1)
      else showFotosJuntos(fotosJuntosIndice - 1)
    }
  })

  root
    .querySelector('[data-fotos-juntos-prev]')
    .addEventListener('click', () => showFotosJuntos(fotosJuntosIndice - 1))
  root
    .querySelector('[data-fotos-juntos-next]')
    .addEventListener('click', () => showFotosJuntos(fotosJuntosIndice + 1))
  dots.querySelectorAll('.fotos-juntos-dot').forEach((dot) => {
    dot.addEventListener('click', () =>
      showFotosJuntos(Number(dot.dataset.fotosJuntosFoto)),
    )
  })

  showFotosJuntos(0)
}

function showFotosJuntos(photoIndex) {
  const root = document.querySelector('[data-fotos-juntos]')
  if (!root) return

  const total = fotosJuntos.length
  fotosJuntosIndice = ((photoIndex % total) + total) % total

  const imgWrap = root.querySelector('.fotos-juntos-img-wrap')
  imgWrap.innerHTML = ''

  const img = document.createElement('img')
  img.className = 'carrusel-foto h-full w-full object-contain'
  img.loading = 'lazy'
  img.alt = `Nosotros dos - foto ${fotosJuntosIndice + 1}`
  img.draggable = false
  img.style.opacity = '0'
  img.addEventListener('load', () => {
    const ratio = img.naturalWidth / img.naturalHeight
    if (Number.isFinite(ratio) && ratio > 0) {
      imgWrap.style.setProperty('--foto-ratio', String(Math.min(Math.max(ratio, 3 / 4), 16 / 9)))
    }
    img.style.opacity = '1'
  })
  img.addEventListener('error', () => {
    imgWrap.innerHTML = `
      <div class="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
        <span class="text-3xl" aria-hidden="true">❤️</span>
        <span class="text-xs text-blush/60">Esta foto todavía no está disponible</span>
      </div>
    `
  })
  imgWrap.appendChild(img)
  img.src = fotosJuntos[fotosJuntosIndice]

  root.querySelectorAll('.fotos-juntos-dot').forEach((dot, index) => {
    const activo = index === fotosJuntosIndice
    dot.classList.toggle('bg-jade', activo)
    dot.classList.toggle('bg-white/20', !activo)
  })

  restartFotosJuntosTimer(root)
}

function restartFotosJuntosTimer(root) {
  if (fotosJuntosTimer !== null) clearInterval(fotosJuntosTimer)
  const progress = root.querySelector('[data-fotos-juntos-progress]')
  progress.textContent = '10s'
  let restante = FOTOS_JUNTOS_INTERVALO_MS / 1000
  fotosJuntosTimer = setInterval(() => {
    restante -= 1
    progress.textContent = `${restante}s`
    if (restante <= 0) showFotosJuntos(fotosJuntosIndice + 1)
  }, 1000)
}
