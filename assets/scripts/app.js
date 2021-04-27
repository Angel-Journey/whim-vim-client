'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')

$(() => {
  $('#change-pw-btn').hide()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#game-Board').hide()
  $('#game-history').hide()
  $('#old-game').hide()
  $('#new-whim-btn').hide()
  $('#display-all-whims').hide()
  $('#edit-whim-btn').hide()
  $('#listBox').hide()
  // $('#new-whim').hide()

  $('#sign-up').on('submit', authEvents.onSignUp)

  $('#sign-in').on('submit', authEvents.onSignIn)

  $('#sign-out').on('click', authEvents.onSignOut)

  $('#change-password').on('submit', authEvents.onChangePassword)

  // $('#edit_button').on('click', authEvents.onEditWhim)
  // $('#delete_button').on('click', authEvents.onDeleteWhim)

  $('#whimListTitles').on('click', authEvents.onEditButton)
  $('#edit-whim-form').on('submit', authEvents.onEditWhim)

  $('#whimListDetails').on('click', authEvents.onDeleteWhim)

  $('#new-whim-form').on('submit', authEvents.onNewWhim)
  $('#display-all-whims').on('click', authEvents.onWhimIndex)
})
