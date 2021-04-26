'use strict'

// this file includes the functions that will be run when an 'event' occurs
// on a button or form

// import the functions that make requests to the api
const api = require('./api')
// import the functions that update our webpage's content
const ui = require('./ui')
// import the getFormFields function
const getFormFields = require('../../../lib/get-form-fields')

const store = require('../store') // will store user info (from onSignInSuccess)

// const gamePlay = require('./gamePlay')

// const store = require('../store')

const onSignUp = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()
  $('#signUpModal').modal('toggle')

  // event.target is our '#sign-up' form so store it in a better named variable
  const form = event.target
  // get the data from our form
  const formData = getFormFields(form)

  // console.log(formData)

  // make a request to submit sign-up form data to API
  api.signUp(formData)
    // show success or failure
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onChangePassword = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()
  $('#changePwModal').modal('toggle')

  // event.target is our '#change-password' form so store it in a better named variable
  const form = event.target
  // get the data from our form
  const formData = getFormFields(form)

  // console.log(formData)

  // make a request to submit change-password form data to API
  api.changePassword(formData)
    // show success or failure
    .then(ui.onPasswordChangeSuccess)
    .catch(ui.onError)
}

const onSignIn = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()
  $('#signInModal').modal('toggle')

  // event.target is our ''#sign-up' form so store it in a better named variable
  const form = event.target
  // get the data from our form
  const formData = getFormFields(form)

  // console.log(formData)

  // make a request to API
  api.signIn(formData)
    // show success or failure
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}

const onSignOut = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()

  // make a request to API
  api.signOut()
    // show success or failure
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

const onNewGame = function (event) {
  // prevent the default action of refreshing the page when a form is submitted
  event.preventDefault()

  // make a request to API
  api.newGame()
    // show success or failure
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}

const onGameHistory = function (event) {
  // prevent the default action of refreshing the page when a form is submitted
  event.preventDefault()

  // make a request to API
  api.newGameHistory()
    // show success or failure
    .then(ui.onGameHistorySuccess)
    .catch(ui.onError)
}

const onOldGameBoardID = function () {
  // prevent the default action of refreshing the page when a form is submitted
  event.preventDefault()

  // event.target is our 'clicked cell' form so store it in a better named variable

  // make a request to API
  api.oldGameBoardID()
    // show success or failure
    .then(ui.oldGameBoardIDSuccess)
    .catch(ui.onError)
}

// const onNewMoveClick = function (event) {
//   event.preventDefault()
//
//   // const cellIndex = $(event.target).data('cell-index')
//   // // gamePlay.updateArray(cellIndex)
//   //
//   // console.log(cellIndex) // shows number of cell clicked
//
//   ui.newMoveSuccess(event)
//
//   //
//   // api.newMove(cellIndex)
//   //   // show success or failure
//   //   .then(ui.newMoveSuccess)
//   //   .catch(ui.onError)
// }

const onNewWhim = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()
  $('#newWhimModal').modal('toggle')

  // event.target is our ''#new-whim' form so store it in a better named variable
  const form = event.target
  // get the data from our form
  const formData = getFormFields(form)

  console.log(formData)
  console.log(formData.newWhim.title) // shows New Whim Title
  console.log(formData.newWhim.details) // shows New Whim Details

  const newWhimTitle = formData.newWhim.title

  const newWhimDetails = formData.newWhim.details

  // make a request to API
  api.newWhim(newWhimTitle, newWhimDetails)
    // show success or failure
    .then(ui.onNewWhimSuccess(newWhimTitle, newWhimDetails))
    .catch(ui.onError)
}

const onWhimIndex = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()

  console.log(event)

  // make a request to API
  api.whimIndex()
    // show success or failure
    .then(ui.onWhimIndexSuccess)
    .catch(ui.onError)
}

store.whimId = 0

const onEditButton = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()

  console.log(event)
  console.log('test edit')

  console.log($('#whimListTitles'))

  console.log(event.target.value)
  console.log(event.target.title)
  console.log(event.target.text)

  const whimId = event.target.value
  const whimText = event.target.text
  const whimTitle = event.target.title
  store.whimId = whimId

  ui.onEditButtonClick(whimId, whimText, whimTitle)

  // const newWhimDetails = formData.newWhim.details
  // console.log(newWhimDetails)

  // // make a request to API
  // api.whimIndex(id, newWhimDetails)
  //   // show success or failure
  //   .then(ui.onWhimIndexSuccess)
  //   .catch(ui.onError)
}

const onEditWhim = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()

  console.log(event)
  console.log('test editWhim')
  // console.log(whimId)
  // console.log(event.target.value)

  $('#editWhimModal').modal('toggle')

  // event.target is our ''#new-whim' form so store it in a better named variable
  const form = event.target
  // get the data from our form
  const formData = getFormFields(form)
  console.log(formData.newWhim.details)
  const newWhimDetails = formData.newWhim.details

  const newWhimTitle = formData.newWhim.title

  console.log(store.whimId)
  const id = store.whimId

  // make a request to API
  api.editWhim(id, newWhimTitle, newWhimDetails)
    // show success or failure
    .then(ui.onWhimUpdateSuccess)
    .catch(ui.onError)
}

const onDeleteWhim = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()

  console.log(event)
  console.log('test delete')
  console.log(event.target.value)

  const id = event.target.value

  // // make a request to API
  api.deleteWhim(id)
  //   // show success or failure
    .then(ui.onWhimDeleteSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onGameHistory,
  onOldGameBoardID,
  onNewWhim,
  onWhimIndex,
  onChangePassword,
  onEditButton,
  onEditWhim,
  onDeleteWhim
  // onNewMoveClick
}
