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
let minutoAtualiolisegundosDecorrido = 0;
let cronometroRodando = false

function iniciar() {
    if (cronometroRodando) return;
    /*  parar(); */
    tempoInicial = Date.now();
    startCronometro();
    cronometroRodando = true;
}

function startCronometro(TempoDeCorido) {
    let milesegundos = TempoDeCorido || 0
    intervaloCronometro = setInterval(function () {
        let timeStampNow = Date.now()
        let diferença = timeStampNow - tempoInicial
        $cronometro.textContent = formatarCronometro(milesegundos + diferença)
    }, 100)
}

function formatarCronometro(milesegundos) {
    if (milesegundos < 1000) {
        if (segundosCronometro > 0) {
            return milesegundos
        }
         else{
            return `00:00.${milesegundos}`
        } 

    } else if (milesegundos < MINUTO) {
        segundosCronometro = parseInt(segundosCronometro = milesegundos / 1000)
        centesimosCronometro = milesegundos - (segundosCronometro * 1000)
        if (minutosCronometro > 0) {
            return `${(formatarSegundoMinutominutos(segundosCronometro))}.${centesimosCronometro}`
        } else {
            return `00:${(formatarSegundoMinutominutos(segundosCronometro))}.${centesimosCronometro}`
        }

    } else {
        minutosCronometro = parseInt(minutosCronometro = milesegundos / (MINUTO))
        return `${formatarSegundoMinutominutos(minutosCronometro)}:${formatarCronometro(milesegundos - minutosCronometro * MINUTO)}`
    }
}
function formatarSegundoMinutominutos(segundos_minutos) {
    return segundos_minutos = segundos_minutos < 10 ? `0${segundos_minutos}` : segundos_minutos
}
/*else {
            var minutos = ms / (MINUTO)
            minutos = parseInt(minutos)

return `${minutos}:${formataTimeTamp(ms-minutos*MINUTO)}`
          /*   var segundo = ms / 1000 - (minutos * 60)
            segundo = parseInt(segundo)
            var centesimo = ms - (segundo * 1000) - (minutos * MINUTO)
            return `${minutos}:${segundo}:${centesimo}` 
        }
    }
    function pausar() {
        if(!$cronometro.value) return;
        if (rodando) {
            clearInterval(intervalo)
            timestampClickPausar = Date.now()
            msTempoDeCorido += (timestampClickPausar - timestampClickStart)

        } else {
            timestampClickStart = Date.now()
            iniciarCronometro(msTempoDeCorido)
        }
rodando = !rodando
    }
    function parar() {
        timestampClickStart = 0;
        timestampClickPausar = 0;
        msTempoDeCorido = 0
        rodando = false
        clearInterval(intervalo)
        $cronometro.value=""
    }
 */   $iniciar.addEventListener("click", function () {
    iniciar()
})
