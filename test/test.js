'use strict'

var app = require('../app')
var request = require('supertest')
var superagent = require('superagent')
var agent = superagent.agent()
var mocha = require('mocha')
var jwt = require('jsonwebtoken')
var expect = require('chai').expect
var describe = mocha.describe
var it = mocha.it

describe('register', function () {
  it('user registration', function (done) {
    request(app)
            .post('/register')
            .send({  comments: 'abc', age: '18', gender:'M', firstname:'nipan', lastname:'das' })
            .expect(200, done)
            
  })
})


describe('home', function () {
  it('Should show the home page', function (done) {
            request(app)
      .get('/')
      .expect(200, done)
  })
})
