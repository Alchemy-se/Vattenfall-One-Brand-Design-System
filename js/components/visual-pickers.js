window.onload = () => {
  console.log('visual pickers loaded')
  let visualPickersContainer = document.querySelector(
    '.vf-visual-pickers__container'
  )

  //check if exists
  if (visualPickersContainer) {
    //check if single or multiple class
      console.log(visualPickersContainer.id)

    if (visualPickersContainer.id.contains('vf-visual-pickers__single')) {
      console.log('single')
    }
    if (visualPickersContainer.id.contains('vf-visual-pickers__multiple')) {
      console.log('multiple')
    }
  }
}
