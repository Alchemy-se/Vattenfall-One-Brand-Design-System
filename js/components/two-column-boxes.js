const Rellax = require('../rellax.js');

// Only intiate parallax for larger screens
if (window.innerWidth >= 992) {
  if (document.getElementsByClassName('vf-two-column-boxes__image').length > 0) {
    var rellax1 = new Rellax('.vf-two-column-boxes__image', {
      speed: 0,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
      callback: function (pos, element, percentages) {
        var y = percentages.y;
        var image = element.children[0];
        var size = 1 + y;
        image.style.transform = 'scale(' + size.toString() + ')';
      }
    });
  }

  // if (document.getElementsByClassName('vf-two-column-boxes__headline').length > 0) {
  //     var rellax2 = new Rellax('.vf-two-column-boxes__headline', {
  //     speed: 2,
  //     center: true,
  //     wrapper: null,
  //     round: true,
  //     vertical: true,
  //     horizontal: false
  //   });
  // }

  // if (document.getElementsByClassName('vf-two-column-boxes__content').length > 0) {
  //   var rellax3 = new Rellax('.vf-two-column-boxes__content', {
  //     speed: 5,
  //     center: true,
  //     wrapper: null,
  //     round: true,
  //     vertical: true,
  //     horizontal: false
  //   });
  // }
}
