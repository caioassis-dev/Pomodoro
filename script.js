
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