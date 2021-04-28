'use strict'

const store = require('../store') // will store user info (from onSignInSuccess)

// import the functions that make requests to the api
const api = require('./api')
const authEvents = require('./events')

const onPasswordChangeSuccess = function () {
  $('#message').text('Success! Your password has been changed.')

  $('#message').addClass('success')

  $('form').trigger('reset')
  $('#sign-out').show()
  $('#new-game').hide()
  $('#old-game').hide()
  $('#game-history').hide()
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('#change-pw-btn').show()

  setTimeout(() => {
    // Clear the success message
    $('#message').text('')
    // Remove the class of 'success' from the element
    $('#message').removeClass('success')
  }, 5000)
}

const onSignUpSuccess = function () {
  $('#message').text('Success! Thank you for joining Whim Vim! Please sign in to start creating Whims!')

  $('#message').addClass('success')

  $('form').trigger('reset')
  $('#sign-out').hide()
  $('#sign-in-btn').show()
  $('#change-pw-btn').hide()
  $('#new-whim-btn').hide()
  $('#display-all-whims').hide()

  // setTimeout(() => {
  //   // Clear the success message
  //   $('#message').text('')
  //   // Remove the class of 'success' from the element
  //   $('#message').removeClass('success')
  // }, 5000)
}

const onSignInSuccess = function (response) {
  store.user = response.user
  // console.log(store.user)
  // console.log(store)
  $('#message').text(response.user.email + ' has successfully signed in!')

  $('#message').addClass('success')

  $('form').trigger('reset')
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('#sign-out').show()
  $('#change-pw-btn').show()
  $('#whimListTitles').text('')
  $('#whimListDetails').text('')
  $('#whimListTitles').show()
  $('#whimListDetails').show()
  $('#new-whim-btn').show()
  $('#display-all-whims').show()
  $('#listBox').hide()
  // $('#old-game').show()
  // $('#game-history').show()

  setTimeout(() => {
    // Clear the success message
    $('#message').text('')
    // Remove the class of 'success' from the element
    $('#message').removeClass('success')
  }, 2500)
}

const onSignOutSuccess = function () {
  $('#message').text(store.user.email + ' has signed out!')

  $('#message').addClass('success')
  $('#sign-out').hide()
  $('#sign-in-btn').show()
  $('#sign-up-btn').show()
  $('#whimListTitles').hide()
  $('#whimListDetails').hide()
  $('#change-pw-btn').hide()
  $('#new-whim-btn').hide()
  $('#display-all-whims').hide()
  $('#edit-whim-btn').hide()
  store.user = null

  setTimeout(() => {
    // Clear the success message
    $('#message').text('')
    // Remove the class of 'success' from the element
    $('#message').removeClass('success')
  }, 5000)
}

const onError = function (err) {
  // log any errors that occur
  console.error(err)
  $('#error-message').text('Sorry, please try again.')
  $('#error-message').addClass('failure')

  $('form').trigger('reset')

  setTimeout(() => {
    // Clear the error message
    $('#error-message').text('')
    // Remove the class of 'success' from the element
    $('#error-message').removeClass('failure')
  }, 5000)
}

const onNewWhimSuccess = function (newWhimTitle, newWhimDetails) {
  // store.user = response.user
  // // console.log('Store user value is ' + store.user.value)
  // // console.log('Store value is ' + store)
  // console.log('This is ui.js ' + newWhimTitle)
  // console.log('This is ui.js ' + newWhimDetails)
  store.whims = newWhimTitle + ' : ' + newWhimDetails
  // console.log(store.whims)
  $('#message').text('New Whim Created! Click "Whim Index" to view updated list')
  $('#message').addClass('success')

  $('#display-title').text('Title: ' + newWhimTitle)
  $('#display-details').text('Details: ' + newWhimDetails)

  $('form').trigger('reset')
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('#sign-out').show()
  $('#new-game').show()
  // $('#old-game').show()
  // $('#game-history').show()
}

const onWhimIndexSuccess = function (responseData) {
  // // console.log('This is the index list ' + whimsArray)
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('#edit-whim-btn').hide()
  $('#listBox').show()
  $('#sign-out').show()
  $('#whimListTitles').text('Whim Title:')
  $('#whimListDetails').text('Details:')
  $('#message').text('')

  const whimsArray = responseData

  whimsArray.whims.forEach((whim) => {
    // only show items that belong to the current user
    if (whim.owner === store.user._id) {
      // create new list item to show whim title
      const p = document.createElement('LI')
      p.textContent = whim.title
      // add class to access in css
      p.setAttribute('class', 'titleText')
      document.querySelector('#whimListTitles').appendChild(p)

      // create `edit` button and add it to list
      const e = document.createElement('BUTTON')
      e.textContent = 'Edit Whim'
      // add values to be used during edit process
      e.value = whim._id
      e.text = whim.text
      e.title = whim.title
      // add class to access in css
      e.setAttribute('class', 'editButton')
      document.querySelector('#whimListTitles').appendChild(e)

      // create new list item to show whim details
      const x = document.createElement('LI')
      x.textContent = whim.text
      // add class to access in css
      x.setAttribute('class', 'detailsText')
      document.querySelector('#whimListDetails').appendChild(x)

      // create `delete` button and it to list
      const b = document.createElement('BUTTON')
      b.textContent = 'Delete Whim'
      // add id to be used for delete process
      b.value = whim._id
      // add class to access in css
      b.setAttribute('class', 'deleteButton')
      document.querySelector('#whimListDetails').appendChild(b)
    }
  })

  // b.id = 'delete_button'

  // $('#display-title').text(data.whims[0].title)
  // $('#display-details').text(data.whims[0].text)

  // console.log(whimsArray)
  // console.log(whimsArray.whims)
  // // console.log(data.whims.array)
  // // console.log(data.whims[0])
  // // console.log(data.whims[0].title)
  // // console.log(data.whims[0].text)

  // whimsArray.whims.forEach(whim => {
  //   $('#display-title').html(whim.title)
  //   $('#display-details').html(whim.text)
  // })

  // whimsArray.whims.forEach((whim) => {
  //   let p = document.createElement('p')
  //   p.textContent = whim.title
  //   document.querySelector('#display-title-test').appendChild(p)
  // //   let x = document.createElement('x')
  // //   x.textContent = whim.text
  // //   document.querySelector('#display-details-test').appendChild(x)
  // })
  // store.Array = whimsArray.whims
  // console.log(store.Array)

  // e.id = 'edit_button'
  // e.setAttribute("id", "edit_button")

  // function findValue (array) {
  //   return array.indexOf(whim.text)
  // }
  // e.value = findValue(whimsArray.whims)
  // // console.log(e.value)
  // find the indexOf the (whim) from the array whimsArray.whims
  // e.className = 'edit_modal'

  // let elements = ['LI', 'BUTTON']
  // for (var i = 0; i < elements.length; i++) {
  //   let p = document.createElement(elements[i]) }
  // find the indexOf the (whim) from the array whimsArray.whims
  // p.value = whimsArray.whims.indexOf(whim)
}

const onWhimDeleteSuccess = function () {
  $('#message').text('Whim deleted! Click "Whim Index" again to show updated list.')
  $('#message').addClass('success')
  // setTimeout(() => {
  //   // Clear the success message
  //   $('#message').text('')
  //   // Remove the class of 'success' from the element
  //   $('#message').removeClass('success')
  // }, 4000)
}

const onEditButtonClick = function (whimText, whimTitle) {
  // console.log('This is the id: ' + whimId)
  // console.log('This is the text: ' + whimText)
  // console.log('This is the title: ' + whimTitle)
  // $('#edit-whim-btn').show()
  $('#editWhimModal.modal-title').text('Edit Title, which is currently: ' + "'" + whimTitle + "'" + ' or edit Details, which is currently: ' + "'" + whimText + "'")
  // $('#edit-whim-form').placeholder(whimText)
  // $('#edit-whim-form').on('submit', authEvents.onEditWhim)
}

const onWhimUpdateSuccess = function () {
  $('#message').text('Whim updated! Click "Whim Index" again to show updated list.')
  $('#message').addClass('success')
  $('#edit-whim-btn').hide()
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onSignOutSuccess,
  onNewWhimSuccess,
  onWhimIndexSuccess,
  onPasswordChangeSuccess,
  onWhimDeleteSuccess,
  onEditButtonClick,
  onWhimUpdateSuccess
}
