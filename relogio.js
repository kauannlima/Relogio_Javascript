var $horarioRelogioStrong = document.querySelector("#horario_relogio_strong")
var $dataRelogioStrong = document.querySelector("#data_relogio_strong")

function mostraHorarioAtual() {
    var horarioAtual = new Date();
    var horaAtual = formatarValores(horarioAtual.getHours())
    var minutoAtual = formatarValores(horarioAtual.getMinutes())
    var segundoAtual = formatarValores(horarioAtual.getSeconds())
    $horarioRelogioStrong.textContent = `${horaAtual}:${minutoAtual}:${segundoAtual}`
}
function mostraDataAtual() {
    var dataAtual = new Date();
    var diaDaSemanaAtual = formatarDiaDaSeamana(dataAtual.getDay())
    var diaAtual = formatarValores(dataAtual.getDate())
    var mesAtual = formatarValores(dataAtual.getMonth() + 1)
    var anoAtual = formatarValores(dataAtual.getFullYear())
    $dataRelogioStrong.textContent = `${diaDaSemanaAtual} - ${diaAtual}/${mesAtual}/${anoAtual}`
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


