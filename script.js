let tempoRestante = 1500;
const visor = document.getElementById('visor');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const input = document.getElementById('input');
let cronometro = undefined;
let flag = true;

function comecou() {
  let audio = document.getElementById('audio');
  audio.play();
}

function horaDaPausa(){
  let alarme = document.getElementById('horaDaPausa');
  alarme.play();
}

stop.addEventListener('click', function(){
  document.getElementById('visor').style.display = "none";
  document.getElementById('c1').style.display = "none";
  document.getElementById('c2').style.display = "none";
  document.getElementById('c3').style.display = "none";
  comecou();
  visor.innerHTML = ''
  clearInterval(cronometro)
  cronometro = undefined
  flag = true
  input.value = ''
})

play.addEventListener('click', function () {
  document.getElementById('visor').style.display = "";
  document.getElementById('c1').style.display = "";
  document.getElementById('c2').style.display = "";
  document.getElementById('c3').style.display = "";
  comecou();
  visor.hidden = false
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
  comecou();
  clearInterval(cronometro)
  cronometro = undefined
});

function renderVisor(segundos) {
  let minutos = Math.floor(segundos / 60);
  let segundosFormatado = `0${segundos % 60}`.substr(-2)
  visor.innerHTML = `${minutos}:${segundosFormatado}`
  if(visor.innerHTML === '0:00') {
    horaDaPausa()
    fim()
  }
}

function fim() {
  visor.innerHTML = 'FIM'
  document.getElementById('c1').style.display = "none";
  document.getElementById('c2').style.display = "none";
  clearInterval(cronometro)
  cronometro = undefined
  flag = true
  input.value = ''
}

const pausar = document.getElementById('pause');
pausar.addEventListener('click', () => {
const animations = document.querySelectorAll('circle#c2');
const animations1 = document.querySelectorAll('circle#c1');
animations.forEach(animation => {
  const running = animation.style.animationPlayState || 'running';
  animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
})
animations1.forEach(animation => {
  const running = animation.style.animationPlayState || 'running';
  animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
})
});

const inicio = document.getElementById('play');
inicio.addEventListener('click', () => {
const animations = document.querySelectorAll('circle#c2');
const animations1 = document.querySelectorAll('circle#c1');
animations.forEach(animation => {
  const running = animation.style.animationPlayState || 'paused';
  animation.style.WebkitAnimationDuration = tempoRestante + 's';
  animation.style.animationDuration = tempoRestante + 's';
  animation.style.animationPlayState = 'running';
})
animations1.forEach(animation => {
  const running = animation.style.animationPlayState || 'paused';
  animation.style.WebkitAnimationDuration = tempoRestante + 's';
  animation.style.animationDuration = tempoRestante + 's';
  animation.style.animationPlayState = 'running';
})
});
visor.hidden = true