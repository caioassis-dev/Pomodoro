let tempoRestante = 1500;
const visor = document.getElementById('visor');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const input = document.getElementById('input');
let cronometro = undefined;
let flag = true;

input.addEventListener('input', function(){
  console.log(input.value)
})

stop.addEventListener('click', function(){
  visor.innerHTML = ''
  clearInterval(cronometro)
  cronometro = undefined
  flag = true
  input.value = ''
})

play.addEventListener('click', function () {
  visor.hidden = false
  console.log("INICIO")
  if (cronometro === undefined) {
    if(flag == true) {
    tempoRestante = input.value * 60
    flag = false
    }
    renderVisor(tempoRestante)
    cronometro = setInterval(function () {
      tempoRestante -= 1
      renderVisor(tempoRestante)
    }, 1000);
  }
});
pause.addEventListener('click', function () {
  clearInterval(cronometro)
  cronometro = undefined
});

function renderVisor(segundos) {
  let minutos = Math.floor(segundos / 60);
  let segundosFormatado = `0${segundos % 60}`.substr(-2)
  visor.innerHTML = `${minutos}:${segundosFormatado}`
}

visor.hidden = true

// SUBSTRING TROCAR PARA PADRAO ATUAL - DESAFIO DIFICIL
// QUANDO ZERAR O TEMPO EM 00:00 - TOCAR UM ALARME - VER NO GOOGLE
// AJUSTAR ESTILO AINDSA FALTA AJUSTAR OS BOTOES
