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

const onSignUp = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()
  $('#signUpModal').modal('toggle')

  // event.target is our '#sign-up' form so store it in a better named variable
  const form = event.target
  // get the data from our form
  const formData = getFormFields(form)

  // // console.log(formData)

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

  // // console.log(formData)

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

  // // console.log(formData)

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

const onNewWhim = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()
  $('#newWhimModal').modal('toggle')

  // event.target is our ''#new-whim' form so store it in a better named variable
  const form = event.target
  // get the data from our form
  const formData = getFormFields(form)

  // console.log(formData)
  // console.log(formData.newWhim.title) // shows New Whim Title
  // console.log(formData.newWhim.details) // shows New Whim Details
  // console.log(store.user._id)

  const newWhimTitle = formData.newWhim.title

  const newWhimDetails = formData.newWhim.details

  const id = store.user._id

  // make a request to API
  api.newWhim(newWhimTitle, newWhimDetails, id)
    // show success or failure
    .then(ui.onNewWhimSuccess(newWhimTitle, newWhimDetails))
    .catch(ui.onError)
}

const onWhimIndex = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()

  // console.log(event)

  // console.log(store.user._id)

  // const id = store.user._id

  // make a request to API
  api.whimIndex()
    // show success or failure
    .then(ui.onWhimIndexSuccess)
    .catch(ui.onError)
}

// store.whimId = 0

const onEditButton = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()

  $('#editWhimModal').modal('toggle')

  // console.log(event)
  // console.log('test edit')

  // console.log($('#whimListTitles'))

  // console.log(event.target.value)
  // console.log(event.target.title)
  // console.log(event.target.text)

  const whimId = event.target.value
  const whimText = event.target.text
  const whimTitle = event.target.title
  store.whimId = whimId

  if (whimId === 0) {
    // this sets the function to only work if the `Edit Whim` button is clicked
    return
  }

  ui.onEditButtonClick(whimText, whimTitle)

  // const newWhimDetails = formData.newWhim.details
  // // console.log(newWhimDetails)

  // // make a request to API
  // api.whimIndex(id, newWhimDetails)
  //   // show success or failure
  //   .then(ui.onWhimIndexSuccess)
  //   .catch(ui.onError)
}

const onEditWhim = function (event) {
  // prevent the defaul action of refreshing the page when a form is submitted
  event.preventDefault()

  // console.log(event)
  // console.log('test editWhim')
  // // console.log(whimId)
  // // console.log(event.target.value)

  $('#editWhimModal').modal('toggle')

  // event.target is our ''#new-whim' form so store it in a better named variable
  const form = event.target
  // get the data from our form
  const formData = getFormFields(form)
  // console.log(formData.newWhim.details)
  const newWhimDetails = formData.newWhim.details

  const newWhimTitle = formData.newWhim.title

  // console.log(store.whimId)
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

  // console.log(event)
  // console.log('test delete')
  // console.log(event.target.value)

  const id = event.target.value

  // this sets the function to only work if the `Delete Whim` button is clicked
  if (id === 0) {
    return
  }

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
  onNewWhim,
  onWhimIndex,
  onChangePassword,
  onEditButton,
  onEditWhim,
  onDeleteWhim
}
