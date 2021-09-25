const $slider = document.getElementById("slider");
const $filter = document.getElementById("filter");
const $sunIcon = document.getElementById("sun");

$slider.addEventListener("input", (ev) => {
  const value = ev.target.value / 100;

  $filter.style.opacity = 1 - value - 0.1;
  $sunIcon.style.transform = `rotate(-${360 - 360 * value}deg)`;
});
