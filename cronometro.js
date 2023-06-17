let $cronometro = document.querySelector("#horario_cronometro_strong")
const $iniciar = document.querySelector('#iniciar-cronometro');
const $pausar = document.querySelector('#pausar-cronometro');
const $parar = document.querySelector('#parar-cronometro');

let minutosCronometro
let segundosCronometro
let centesimosCronometro

const MINUTO = 60 * 1000;
const SEGUNDO = 1 * 10000;

let intervaloCronometro = null;
let tempoInicial = 0;
let tempoPausado = 0;
let tempoDecorrido = 0;
let cronometroRodando = false

$pausar.disabled = true;

function iniciar() {
    if (cronometroRodando) return;
    parar()
    tempoInicial = Date.now();
    startCronometro();
    cronometroRodando = true;
    $pausar.disabled = false;

}

function startCronometro(TempoDeCorido) {
    let milesegundos = TempoDeCorido || 0
    intervaloCronometro = setInterval(function () {
        let timeStampNow = Date.now()
        let diferença = timeStampNow - tempoInicial
        $cronometro.textContent = formatarCronometro(milesegundos + diferença)
    }, 10)
}

function formatarCronometro(milissegundos) {
    minutosCronometro = Math.floor(milissegundos / MINUTO);
    minutosSegundos = Math.floor((milissegundos % MINUTO) / 1000);
    minutosCentesimos = Math.floor((milissegundos % 1000) / 10);

    let minutosFormatados = minutosCronometro.toString().padStart(2, '0');
    let segundosFormatados = minutosSegundos.toString().padStart(2, '0');
    let centesimosFormatados = minutosCentesimos.toString().padStart(2, '0');

    return `${minutosFormatados}:${segundosFormatados}.${centesimosFormatados}`;
}
function pausar() {
    if (cronometroRodando) {
        clearInterval(intervaloCronometro)
        tempoPausado = Date.now()
        tempoDecorrido += (tempoPausado - tempoInicial)
        cronometroRodando = false
        $iniciar.disabled = true;
    } else {
        tempoInicial = Date.now()
        startCronometro(tempoDecorrido)
        cronometroRodando = true
    }

}

function parar() {
    tempoInicial = 0;
    tempoPausado = 0;
    tempoDecorrido = 0;
    cronometroRodando = false
    clearInterval(intervaloCronometro)
    $cronometro.innerHTML = "00:00.00"
    $iniciar.disabled = false
}

$iniciar.addEventListener("click", iniciar)
$pausar.addEventListener("click", pausar)
$parar.addEventListener("click", parar)

