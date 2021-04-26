'use strict'

const store = require('../store') // will store user info (from onSignInSuccess)

// import the functions that make requests to the api
const api = require('./api')
const authEvents = require('./events')

// const gamePlay = require('./gamePlay')

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
  $('#message').text('Success! Thank you for joinging Whim Vim!')

  $('#message').addClass('success')

  $('form').trigger('reset')
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#old-game').hide()
  $('#game-history').hide()
  $('#sign-up-btn').hide()
  $('#sign-in-btn').show()
  $('#change-pw-btn').hide()
  $('#new-whim-btn').hide()
  $('#display-all-whims').hide()

  setTimeout(() => {
    // Clear the success message
    $('#message').text('')
    // Remove the class of 'success' from the element
    $('#message').removeClass('success')
  }, 5000)
}

const onSignInSuccess = function (response) {
  store.user = response.user
  console.log(store.user)
  console.log(store)
  $('#message').text(response.user.email + ' has successfully signed in!')

  $('#message').addClass('success')

  $('form').trigger('reset')
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('#sign-out').show()
  $('#new-game').show()
  $('#change-pw-btn').show()
  $('#whimListTitles').text('')
  $('#whimListDetails').text('')
  $('#whimListTitles').show()
  $('#whimListDetails').show()
  $('#new-whim-btn').show()
  $('#display-all-whims').show()
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
  $('#new-game').hide()
  $('#old-game').hide()
  $('#game-history').hide()
  $('#game-Board').hide()
  $('#sign-in-btn').show()
  $('#sign-up-btn').show()
  $('#win-message').hide()
  $('#whimListTitles').hide()
  $('#whimListDetails').hide()
  $('#change-pw-btn').hide()
  $('#new-whim-btn').hide()
  $('#display-all-whims').hide()
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
  $('#game-message').text('Red card! Sorry, please try again.')
  $('#game-message').addClass('failure')

  $('form').trigger('reset')

  setTimeout(() => {
    // Clear the error message
    $('#game-message').text('')
    // Remove the class of 'success' from the element
    $('#game-message').removeClass('failure')
  }, 5000)
}

store.whims = ''

const onNewWhimSuccess = function (newWhimTitle, newWhimDetails) {
  // store.user = response.user
  // console.log('Store user value is ' + store.user.value)
  // console.log('Store value is ' + store)
  console.log('This is ui.js ' + newWhimTitle)
  console.log('This is ui.js ' + newWhimDetails)
  store.whims = newWhimTitle + ' : ' + newWhimDetails
  console.log(store.whims)
  $('#message').text('New Whim Created!')
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

  // setTimeout(() => {
  //   // Clear the success message
  //   $('#message').text('')
  //   // Remove the class of 'success' from the element
  //   $('#message').removeClass('success')
  // }, 2500)
}

const onWhimIndexSuccess = function (responseData) {
  // console.log('This is the index list ' + whimsArray)
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('#sign-out').show()
  $('#whimListTitles').text('Titles:')
  $('#whimListDetails').text('Details:')
  const whimsArray = responseData
  console.log(whimsArray)
  console.log(whimsArray.whims)
  // console.log(data.whims.array)
  // console.log(data.whims[0])
  // console.log(data.whims[0].title)
  // console.log(data.whims[0].text)

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

  whimsArray.whims.forEach((whim) => {
    // let elements = ['LI', 'BUTTON']
    // for (var i = 0; i < elements.length; i++) {
    //   let p = document.createElement(elements[i]) }
    let p = document.createElement('LI')
    p.textContent = whim.title
    document.querySelector('#whimListTitles').appendChild(p)
    // find the indexOf the (whim) from the array whimsArray.whims
    // p.value = whimsArray.whims.indexOf(whim)

    let e = document.createElement('BUTTON')
    e.textContent = 'Edit Whim'

    // e.id = 'edit_button'
    // e.setAttribute("id", "edit_button")

    // function findValue (array) {
    //   return array.indexOf(whim.text)
    // }
    // e.value = findValue(whimsArray.whims)
    // console.log(e.value)
    // find the indexOf the (whim) from the array whimsArray.whims
    e.value = whim._id
    // e.className = 'edit_modal'
    e.text = whim.text
    e.title = whim.title
    document.querySelector('#whimListTitles').appendChild(e)

    let x = document.createElement('LI')
    x.textContent = whim.text
    document.querySelector('#whimListDetails').appendChild(x)

    let b = document.createElement('BUTTON')
    b.textContent = 'Delete Whim'
    // b.id = 'delete_button'
    b.value = whim._id
    document.querySelector('#whimListDetails').appendChild(b)
  })

  // $('#display-title').text(data.whims[0].title)
  // $('#display-details').text(data.whims[0].text)
}

const onWhimDeleteSuccess = function () {
  $('#message').text('Whim deleted! Click "Whim Index" again to show updated list.')
  $('#message').addClass('success')
}

let currentPlayer = 'X'

const onNewGameSuccess = function (data) {
  $('#game-message').show()
  $('#game-message').text('Game on! Player X kicks off!')
  $('#game-message').addClass('success')
  setTimeout(() => {
    // Clear the game-message
    $('#game-message').text('')
    $('#game-message').removeClass('success')
  }, 3000)
  currentPlayer = 'X'
  store.game = data.game
  // console.log('New Game button was clicked!')
  // console.log(data.game)
  $('#game-Board').show()
  $('#win-message').text('')
  $('.box').text('')
  $('.box').removeAttr('style')
  $('.box').on('click')
  store.game.cells[0] = ''
  store.game.cells[1] = ''
  store.game.cells[2] = ''
  store.game.cells[3] = ''
  store.game.cells[4] = ''
  store.game.cells[5] = ''
  store.game.cells[6] = ''
  store.game.cells[7] = ''
  store.game.cells[8] = ''
  // $('#game-history').show()
  // $('#old-game').show()
  // console.log(store.game)
  // console.log(store.game._id) // shows game id
}

const onEditButtonClick = function (whimId, whimText, whimTitle) {
  console.log('This is the id: ' + whimId)
  console.log('This is the text: ' + whimText)
  console.log('This is the title: ' + whimTitle)
  $('#edit-whim-btn').show()
  $('#editWhimModal.modal-title').text('Edit details, which is currently: ' + "'" + whimText + "'")
  // $('#edit-whim-form').placeholder(whimText)
  $('#edit-whim-form').on('submit', authEvents.onEditWhim)
}

const onWhimUpdateSuccess = function () {
  $('#message').text('Whim updated! Click "Whim Index" again to show updated list.')
  $('#message').addClass('success')
}

const onGameHistorySuccess = function (data) {
  // console.log('Game History button was clicked!')
  // console.log(data)
}

const oldGameBoardIDSuccess = function (data) {
  // console.log('Old Game button was clicked!')
  // console.log(data)
}

// const newMoveSuccess = function (event) {
//   // console.log(store.game.__v)
//   // console.log('New move button was clicked!')
//   //
//   // console.log(event)
//
//   const box = $(event.target)
//   box.css('background', 'transparent')
//   if (box.text() === '') {
//     box.text(currentPlayer)
//     currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
//     $('#game-message').text(box.text() + ' has made their move!')
//     $('#game-message').addClass('success')
//     setTimeout(() => {
//       // Clear the game-message
//       $('#game-message').text('')
//       $('#game-message').removeClass('success')
//     }, 4000)
//   } else if (box.text() === 'O' || box.text() === 'X') {
//     $('#game-message').text('Foul! Please try again!')
//     $('#game-message').addClass('yellow')
//     setTimeout(() => {
//       // Clear the game-message
//       $('#game-message').text('')
//       $('#game-message').removeClass('yellow')
//     }, 2500)
//   }
//   const cellIndex = $(event.target).data('cell-index')
//   // console.log(cellIndex) // shows number of cell clicked
//   const value = (box.text())
//   // console.log(value) // shows which value ('X' or 'O') was entered
//   api.newMove(cellIndex, value)
//
//   store.game.cells[cellIndex] = value // assigns 'X' or 'O' to the array
//   // console.log(store.game.cells)
//   // console.log(store.game.cells.length)
//   if ((store.game.cells[0] === value && store.game.cells[1] === value && store.game.cells[2] === value) ||
//       (store.game.cells[3] === value && store.game.cells[4] === value && store.game.cells[5] === value) ||
//       (store.game.cells[6] === value && store.game.cells[7] === value && store.game.cells[8] === value) ||
//       (store.game.cells[0] === value && store.game.cells[3] === value && store.game.cells[6] === value) ||
//       (store.game.cells[1] === value && store.game.cells[4] === value && store.game.cells[7] === value) ||
//       (store.game.cells[2] === value && store.game.cells[5] === value && store.game.cells[8] === value) ||
//       (store.game.cells[0] === value && store.game.cells[4] === value && store.game.cells[8] === value) ||
//       (store.game.cells[2] === value && store.game.cells[4] === value && store.game.cells[6] === value)) {
//     // console.log(value + ' wins!')
//     $('#game-message').hide()
//     $('#win-message').text('Golazo! ' + value + ' wins!')
//     $('#win-message').addClass('winner')
//     // $('#game-Board').hide()
//     // $('.box').text('')
//     // $('.box').removeAttr('style')
//     // $('.box').off('click')
//     $('.box').css('pointer-events', 'none')
//     currentPlayer = 'X'
//   } else if ((store.game.cells[0] && store.game.cells[1] && store.game.cells[2] &&
//   store.game.cells[3] && store.game.cells[4] && store.game.cells[5] &&
//   store.game.cells[6] && store.game.cells[7] && store.game.cells[8]) !== '') {
//     // console.log('It is a draw!')
//     // $('#message').hide()
//     $('#win-message').text("It's a draw!")
//     $('#win-message').addClass('winner')
//     $('.box').css('pointer-events', 'none')
//     currentPlayer = 'X'
//   }
// }

module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  onGameHistorySuccess,
  oldGameBoardIDSuccess,
  onNewWhimSuccess,
  onWhimIndexSuccess,
  onPasswordChangeSuccess,
  onWhimDeleteSuccess,
  onEditButtonClick,
  onWhimUpdateSuccess
  // newMoveSuccess
}
