var $horarioRelogioStrong = document.querySelector("#horario_relogio_strong")
var $dataRelogioStrong = document.querySelector("#data_relogio_strong")

var tempoAtual
var horaAtual;
var minutoAtual;
var segundoAtual;

var diaDaSemanaAtual
var diaAtual;
var mesAtual;
var anoAtual;

function mostraHorarioAtual() {
    tempoAtual = new Date();
    horaAtual = formatarValores(tempoAtual.getHours())
    minutoAtual = formatarValores(tempoAtual.getMinutes())
    segundoAtual = formatarValores(tempoAtual.getSeconds())
    $horarioRelogioStrong.innerHTML = `${horaAtual}:${minutoAtual}:${segundoAtual}`
}
function mostraDataAtual() {
    tempoAtual = new Date();
    diaDaSemanaAtual = formatarDiaDaSeamana(tempoAtual.getDay())
    diaAtual = formatarValores(tempoAtual.getDate())
    mesAtual = formatarValores(tempoAtual.getMonth() + 1)
    anoAtual = formatarValores(tempoAtual.getFullYear())
    $dataRelogioStrong.innerHTML = `${diaDaSemanaAtual} - ${diaAtual}/${mesAtual}/${anoAtual}`
}
function formatarValores(value) {
    return value = value < 10 ? "0" + value : value
}
function formatarDiaDaSeamana(dia_da_semana) {
    if (dia_da_semana == 0) {
        return dia_da_semana.textContent = "Dom"
    } else if (dia_da_semana == 1) {
        return dia_da_semana.textContent = "Seg"
    } else if (dia_da_semana == 2) {
        return dia_da_semana.textContent = "Ter"
    } else if (dia_da_semana == 3) {
        return dia_da_semana.textContent = "Qua"
    } else if (dia_da_semana == 4) {
        return dia_da_semana.textContent = "Qui"
    } else if (dia_da_semana == 5) {
        return dia_da_semana.textContent = "Sex"
    } else {
        return dia_da_semana.textContent = "Sab"
    }

}
mostraHorarioAtual()
mostraDataAtual()
setInterval(function () { mostraHorarioAtual() }, 1000)
setInterval(function () { mostraDataAtual() }, 1000)

/* CRONOMETRO */
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

/* FUSO HORARIO */
var $horarioFusoStrong = document.querySelector("#horario_fuso_strong")
var $dataFusoStrong = document.querySelector("#data_fuso_strong")
var $select = document.querySelector("#select-fuso-horarios")



function mostraFuso() {
    tempoAtual = new Date();

    horaAtual = formatarValores(tempoAtual.getUTCHours() + 0)
    minutoAtual = formatarValores(tempoAtual.getMinutes())
    segundoAtual = formatarValores(tempoAtual.getSeconds())


    horaAtual = formatarValores(tempoAtual.getUTCHours() + parseInt($select.value))

    if (horaAtual < 0) {
        horaAtual += 24;
        tempoAtual.setDate(tempoAtual.getDate() - 1);
    } else if (horaAtual >= 24) {
        horaAtual -= 24;
        tempoAtual.setDate(tempoAtual.getDate() + 1);
    }
    minutoAtual = formatarValores(tempoAtual.getMinutes());
    segundoAtual = formatarValores(tempoAtual.getSeconds());

    diaDaSemanaAtual = formatarDiaDaSeamana(tempoAtual.getDay())
    diaAtual = formatarValores(tempoAtual.getDate());
    mesAtual = formatarValores(tempoAtual.getMonth() + 1);
    anoAtual = formatarValores(tempoAtual.getFullYear());

    $horarioFusoStrong.innerHTML = `${horaAtual}:${minutoAtual}:${segundoAtual}`;
    $dataFusoStrong.innerHTML = `${diaDaSemanaAtual} - ${diaAtual}/${mesAtual}/${anoAtual}`;
}
mostraFuso()
setInterval(function () { mostraFuso() }, 1000)