var $digitalClock = document.querySelector("#digital_clock_strong")
var $phoneClock = document.querySelector("#phone_clock_strong")

function formata(value) {
    return value = value < 10 ? "0" + value : value
}
function mostraRelogio() {
    var horario = new Date();
    var h = formata(horario.getHours())
    var m = formata(horario.getMinutes())
    var s = formata(horario.getSeconds())

    $digitalClock.textContent = `${h}:${m}:${s}`
    $phoneClock.textContent = `${h}:${m}`
}
mostraRelogio()
setInterval(function () { mostraRelogio() }, 1000)
