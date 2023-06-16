/* (function () {

    var $cronometro = document.querySelector('#cronometro');
    var $iniciar = document.querySelector('#iniciar');
    var $pausar = document.querySelector('#pausar');
    var $parar = document.querySelector('#parar');

    $iniciar.addEventListener("click", iniciar);
    $pausar.addEventListener("click", pausar);
    $parar.addEventListener("click", parar);

    var intervalo = null
    var timestampClickStart = 0;
    var timestampClickPausar = 0;
    var msTempoDeCorido = 0
    var rodando = false


    function iniciar() {
        if(rodando) return;
        parar();
        timestampClickStart = Date.now();
        iniciarCronometro();
        rodando = true;
    }

    function iniciarCronometro(TempoDeCorido) {
        var _ms = TempoDeCorido || 0
        intervalo = setInterval(function () {
            var timeStampNow = Date.now()
            var diferença = timeStampNow - timestampClickStart
            $cronometro.value = formataTimeTamp(diferença + _ms)
        }, 100)
    }

    const MINUTO = 60*1000
    const SEGUNDO = 1*10000

    function formataTimeTamp(ms) {
        if (ms < 1000) {
            return ms
        } else if (ms < MINUTO) {
            var segundo = ms / 1000
            segundo = parseInt(segundo)
            var centesimo = ms - (segundo * 1000)
            return `${segundo}:${centesimo}`
        } else {
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
 */