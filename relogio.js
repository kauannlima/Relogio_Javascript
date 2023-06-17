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

setInterval(function () { mostraHorarioAtual() }, 1000)
setInterval(function () { mostraDataAtual() }, 1000)


var $horarioFusoStrong = document.querySelector("#horario_fuso_strong")
var $dataFusoStrong = document.querySelector("#data_fuso_strong")
var $select = document.querySelector("select")

setInterval(function () { mostraFuso() }, 1000)

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