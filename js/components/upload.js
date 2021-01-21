;(function ($) {
  // wheter to set value from element or default
  const setValue = (elementValue, defaultValue) => {
    if (
      elementValue == undefined ||
      elementValue.length === 0 ||
      isNaN(elementValue) ||
      elementValue == null
    ) {
      return defaultValue
    } else {
      return elementValue
    }
  }

  // set default value for max file uploads
  let maxUploads = 5
  // set default value (in bytes)
  let maxFileSizeMB = 50000000

  // check if the element exists
  if ($('[max-file-uploads]').length > 0) {
    setValue($('[max-file-uploads]')[0].attributes[0].value, maxUploads)
  }

  // check if elemente exists
  if ($('[max-file-size-MB]').length > 0) {
    setValue(
      Number($('[max-file-size-megabyte]')[0].attributes[0].value) * 1000000,
      maxFileSizeMB
    )
  }

  // set default value if maxUploads or maxFileSizeMB is not given

  // shorten filenames
  const shortenFilename = filename => {
    // convert filename to string
    filename = filename + ''

    // check if filename includes a dot
    if (filename.includes('.')) {
      // check length of filename
      let split = filename.split('.')
      if (filename.length > 13) {
        return split[0].substring(0, 10) + '...' + split[split.length - 1]
      } else {
        return split[0] + '.' + split[split.length - 1]
      }
    } else {
      return filename.substring(0, 13) + '...'
    }
  }

  // BASIC UPLOAD (vanilla javascript)
  window.onload = () => {
    // variables for BASIC UPLOAD
    let ulElement = document.getElementById('vf-file-upload__filelist')
    let upToSize = document.getElementById('up-to-size')
    let uploadButtonLabel = document.querySelector(
      '#vf-file-upload__container > label'
    )
    let uploadForm = document.getElementById('vf-file-upload__container')
    let fileArray = []

    if (uploadForm.classList.contains('vf-file-upload__container')) {
      document
        .getElementById('vf-file-upload__button')
        .addEventListener('change', e => {
          e.preventDefault()
          let filesList = Object.values(e.target.files)

          let chosenFiles = filesList.map((file, id) => {
            return {
              id: fileArray.length + id,
              name: file.name,
              size: file.size,
            }
          })

          e.target.value = null

          // check if files exist and that the choosen files does not exceeds max uploads
          if (
            chosenFiles.length > 0 &&
            chosenFiles.length + fileArray.length <= maxUploads
          ) {
            // total = existing length + chosen files length
            let totalListLength = fileArray.length + chosenFiles.length

            // if maxUploads is reached disable upload button
            if (totalListLength >= maxUploads) {
              uploadButtonLabel.classList.add('disabled')
              uploadButtonLabel.style = 'pointer-events:none'
            }

            // if there is no files that is too large, remove red text
            if (upToSize.length === 0) {
              upToSize.classList.remove('errorText')
            }

            // append to list
            addListItem(chosenFiles)
          }
        })
    }

    const addListItem = files => {
      files.map(file => {
        // check if file with that name does NOT exist in list
        if (!fileArray.find(index => index.name == file.name)) {
          fileArray.push(file)
          let li = document.createElement('li')

          // check if file is too large
          if (file.size > maxFileSizeMB) {
            li.innerHTML = `
          <span class='errorText'>${shortenFilename(file.name)}</span>
          <span id="${
            file.id
          }" class='vf-icon-span vf-icon-close errorText'></span>
        `
            li.setAttribute('id', 'to-large-file')
            ulElement.appendChild(li)

            renderErrorStyle(li)

            // if size is ok
          } else {
            li.innerHTML = `
          <span>${shortenFilename(file.name)}</span>
          <span id="${file.id}" class="vf-icon-span vf-icon-close"></span>
        `
            li.setAttribute('id', file.id)
            ulElement.appendChild(li)

            // event handler for all close buttons
            document.querySelectorAll('.vf-icon-close').forEach(item => {
              item.addEventListener('click', event => {
                // handle click
                removeListItem(event.target)
              })
            })
          }
        }
      })
    }

    const removeListItem = target => {
      target.parentElement.remove()
      let arr = fileArray.filter(file => file.id + '' !== target.id + '')
      fileArray = arr

      if (fileArray.length < maxUploads) {
        if (!upToSize.classList.contains('errorText')) {
          uploadButtonLabel.classList.remove('disabled')
          uploadButtonLabel.style = 'pointer-events:auto'
        }
      }
    }

    const renderErrorStyle = li => {
      upToSize.classList.add('errorText')
      uploadButtonLabel.classList.add('disabled')
      uploadButtonLabel.style = 'pointer-events:none'
      renderErrorRemoveIcon(li)
    }

    const renderErrorRemoveIcon = li => {
      document
        .querySelector('#to-large-file span.vf-icon-close')
        .addEventListener('click', event => {
          uploadButtonLabel.classList.remove('disabled')
          uploadButtonLabel.style = 'pointer-events:auto'
          upToSize.classList.remove('errorText')

          event.target.parentElement.remove()
          let arr = fileArray.filter(
            file => file.id + '' !== event.target.id + ''
          )
          fileArray = arr
        })
    }
  }

  // ADVANCED UPLOAD (jQuery)
  const dndUploadButton = $('#vf-file-upload__button_dragndrop')
  const dndUploadButtonLabel = $('#vf-file-upload--dragndrop > label')
  const dndUploadUlElement = $('#vf-dragndrop-file-upload__filelist')
  const dndUploadForm = $('.vf-file-upload--dragndrop')
  let listItemsArray = []

  if ($('form').hasClass('vf-file-upload--dragndrop')) {
    const isAdvancedUpload = function () {
      const div = document.createElement('div')
      return (
        ('draggable' in div || ('ondragstart' in div && 'ondrop' in div)) &&
        'FormData' in window &&
        'FileReader' in window
      )
    }

    if (isAdvancedUpload) {
      let droppedFiles = false

      // DND UPLOAD
      dndUploadForm
        .on(
          'drag dragstart dragend dragover dragenter dragleave drop',
          function (e) {
            e.preventDefault()
            e.stopPropagation()
          }
        )
        .on('dragover dragenter', function () {
          dndUploadForm.addClass('is-dragover')
          dndUploadButtonLabel.addClass('disabled')
        })
        .on('dragleave dragend drop', function () {
          dndUploadForm.removeClass('is-dragover')
          dndUploadButtonLabel.removeClass('disabled')
        })
        .on('drop', function (e) {
          // convert to array of files
          droppedFiles = Object.entries(e.originalEvent.dataTransfer.files)

          let dndFiles = droppedFiles.map((file, id) => {
            return {
              id: listItemsArray.length + id,
              name: file[1].name,
              size: file[1].size,
            }
          })

          // check if files exist and that the choosen files does not exceeds max uploads
          if (
            dndFiles.length > 0 &&
            dndFiles.length + dndUploadUlElement[0].children.length <=
              maxUploads
          ) {
            e.stopImmediatePropagation()
            // total = existing length + chosen files length
            let totalLength =
              dndUploadUlElement[0].children.length + dndFiles.length

            // if maxUploads is reached disable upload button
            if (totalLength >= maxUploads) {
              dndUploadButtonLabel.addClass('disabled')
              dndUploadButtonLabel.css('pointer-events', 'none')
            }

            appendListItem(dndFiles, dndUploadUlElement, listItemsArray)
          }
        })
    }

    // CLICK UPLOAD
    dndUploadButton.on('change', function (e) {
      e.preventDefault()

      // convert to array fo files
      let filesList = Object.values(e.target.files)

      let files = filesList.map((file, id) => {
        return {
          id: listItemsArray.length + id,
          name: file.name,
          size: file.size,
        }
      })

      e.target.value = null

      // check if files exist and that the choosen files does not exceeds max uploads
      if (
        files.length > 0 &&
        files.length + dndUploadUlElement[0].children.length <= maxUploads
      ) {
        // total = existing length + chosen files length
        let totalListLength =
          files.length + dndUploadUlElement[0].children.length

        // if maxUploads is reached disable upload button
        if (totalListLength >= maxUploads) {
          dndUploadButtonLabel.addClass('disabled')
          dndUploadButtonLabel.css('pointer-events', 'none')
        }

        // if there is no files that is too large, remove red text
        if ($('#up-to-size').length === 0) {
          $('#up-to-size').removeClass('.errorText')
        }

        // append to list
        appendListItem(files, dndUploadUlElement, listItemsArray)
      }
    })
  }

  // add
  const appendListItem = (files, ul, listItemsArray) => {
    files.map(file => {
      // check if file with that name does NOT exist in list
      if (!listItemsArray.find(index => index.name == file.name)) {
        // if filesize is exceeded
        if (file.size > maxFileSizeMB) {
          // appends given HTML to the ul element
          ul.append(`
          <li id="to-large-file-drangnDrop">
              <span class='errorText'>${shortenFilename(file.name)}</span>
              <span id="${
                file.id
              }" class='vf-icon-span vf-icon-close errorText'></span>
          </li>
        `)

          // Error styling
          $('#up-to-size-dragnDrop').addClass('errorText')
          dndUploadButtonLabel.addClass('disabled')
          dndUploadButtonLabel.css('pointer-events', 'none')

          // Error event handler
          $('#to-large-file-drangnDrop').on('click', function (e) {
            e.preventDefault()
            dndUploadButtonLabel.removeClass('disabled')
            dndUploadButtonLabel.css('pointer-events', 'auto')
            $('#up-to-size-dragnDrop').removeClass('errorText')
            removeListItem(e.target)
          })

          // if filesize is ok
        } else {
          // appends given HTML to the ul element
          ul.append(`
          <li>
            <span>${shortenFilename(file.name)}</span>
            <span id="${file.id}" class="vf-icon-span vf-icon-close"></span>
          </li>
        `)

          // Eventhandler to remove listitem
          $('li').on('click', '.vf-icon-close', function (e) {
            e.preventDefault()
            removeListItem(e.target)
          })
        }
        listItemsArray.push(file)
      }
    })
  }

  // remove
  const removeListItem = target => {
    target.parentElement.remove()
    let arr = listItemsArray.filter(file => file.id + '' !== target.id + '')
    listItemsArray = arr

    if (listItemsArray.length <= maxUploads) {
      if (!$('#up-to-size').hasClass('errorText')) {
        $('label').removeClass('disabled')
        $('label').css('pointer-events', 'auto')
      }
    }
  }
})(jQuery)
