anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 500,
    delay: (el, i) => 500 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 800,
    easing: "easeOutExpo",
    delay: 800
  });