// const Rellax = require('../rellax.js');

// Only intiate parallax for larger screens
// if (window.innerWidth >= 992) {
//   if (document.getElementsByClassName('vf-two-column-boxes__image').length > 0) {
//     var rellax1 = new Rellax('.vf-two-column-boxes__image', {
//       speed: 0,
//       center: true,
//       wrapper: null,
//       round: true,
//       vertical: true,
//       horizontal: false,
//       callback: function (pos, element, percentages) {
//         var y = percentages.y;
//         var image = element.children[0];
//         var scale = y/2
//         image.style.transform = `scale(${scale})`;
//       }
//     });
//   }

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
// }

if (window.innerWidth >= 992) {
  // const parallax = () => {
    
  //   let scrollY = window.scrollY
  //   let intViewportHeight = window.innerHeight

  //   console.log("scroll Y", scrollY)
  //   console.log("intViewportHeight", intViewportHeight)

  // }
  
  // let box = document.querySelector(".vf-two-column-boxes")
  // console.log(box.getBoundingClientRect())
  let imageBox = document.querySelector('.vf-two-column-boxes__image')
  let image = imageBox.children[0]

  // console.log(imageBox.offsetTop)
  
  window.addEventListener("scroll", function () {
    // parallax()
    let wh = window.outerHeight
    let scroll = window.scrollY
    if (scroll < wh * 0.15)
    {
      image.style.width = 100 + scroll / 30 + '%'
    }
  })
}
