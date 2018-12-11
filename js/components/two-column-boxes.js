const Rellax = require('../rellax.js');

var rellax1 = new Rellax('.vf-two-column-boxes__image', {
  speed: 1,
  center: true,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});

var rellax2 = new Rellax('.vf-two-column-boxes__headline', {
  speed: -1,
  center: true,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});

var rellax3 = new Rellax('.vf-two-column-boxes__content', {
  speed: -1,
  center: true,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});
