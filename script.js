function rodarRelogio() {
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    
    if (horas < 10) {
        horas = '0' + horas;
    }
    
    if (minutos <10) {
        minutos = '0' + minutos;
    }

    if (segundos <10) {
        segundos = '0' + segundos;
    }
    
    const relogioDigital = horas + ":" + minutos + ":" + segundos;
    const relogioDigitalGet = document.getElementById('relogio');
    relogioDigitalGet.innerHTML = relogioDigital;

}


setInterval(rodarRelogio, 500);