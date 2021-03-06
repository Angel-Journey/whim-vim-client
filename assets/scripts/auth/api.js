'use strict'

// this file contains the functions that make the requests to the api

// import our apiUrl from the config file
const config = require('../config')

const store = require('../store') // store.user.token will be used

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    // sending info for the single user we want to create
    url: config.apiUrl + '/sign-up',
    // send the formData
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    // sending info for the single user we want to create
    url: config.apiUrl + '/change-password',
    // send the formData
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    // sending info for the user to sign in
    url: config.apiUrl + '/sign-in',
    // send the formData
    data: formData
  })
}

const signOut = function () {
  // console.log('store is ', store)
  return $.ajax({
    method: 'DELETE',
    // removing info for the user
    url: config.apiUrl + '/sign-out',
    // removing the formData
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const newWhim = function (newWhimTitle, newWhimDetails, id) {
  return $.ajax({
    method: 'POST',
    // asking for new game
    url: config.apiUrl + '/whims',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      whim: {
        title: newWhimTitle,
        text: newWhimDetails,
        owner: id
      }
    }
  })
}

// let whimsArray = []

const whimIndex = function () {
  return $.ajax({
    method: 'GET',
    // asking for index of whims
    url: config.apiUrl + '/whims',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
    // success: function (data) {
    //   let i
    //   for (i in data) {
    //     whimsArray.push(data[i])
    //   }
    //   // console.log(whimsArray)
    // }
  })
}

const deleteWhim = function (id) {
  return $.ajax({
    method: 'DELETE',
    // asking to delete specified whim
    url: config.apiUrl + '/whims/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const editWhim = function (id, newWhimTitle, newWhimDetails) {
  return $.ajax({
    method: 'PATCH',
    // asking to update specified whim
    url: config.apiUrl + '/whims/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      whim: {
        title: newWhimTitle,
        text: newWhimDetails
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  newWhim,
  whimIndex,
  changePassword,
  deleteWhim,
  editWhim
}
