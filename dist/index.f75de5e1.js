AOS.init();
const dataDoEvento = new Date("May 16, 2024 19:00:00");
const TimeStampDoEvento = dataDoEvento.getTime();
const ContaHora = setInterval(function() {
    const agora = new Date();
    const TimeStampAtual = agora.getTime();
    const DistanciaAteEvento = TimeStampDoEvento - TimeStampAtual;
    const DiaEmMs = 86400000;
    const HoraEmMs = 3600000;
    const MinEmMs = 60000;
    const DiasAteEvento = Math.floor(DistanciaAteEvento / DiaEmMs);
    const horasAteEvento = Math.floor(DistanciaAteEvento % DiaEmMs / HoraEmMs);
    const minutosAteEvento = Math.floor(DistanciaAteEvento % HoraEmMs / MinEmMs);
    const segundosAteEvento = Math.floor(DistanciaAteEvento % MinEmMs / 1000);
    document.getElementById("contador").innerHTML = `${DiasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m e ${segundosAteEvento}s`;
    if (DistanciaAteEvento < 0) {
        clearInterval(ContaHora);
        document.getElementById("contador").innerHTML = "Vish, j\xe1 passou :/";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
