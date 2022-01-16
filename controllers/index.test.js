const indexController = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('index Controller', () => {
  it('Home', () => {
    let res = {
      send: function (){}
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Eu sou FULLSTACK')
    indexController.home({}, res)
  })
  it('Manipula sem num1 e num2', () => {
    let res = {
      send: function (){}
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Calculadora')
    indexController.calc({ query: {} }, res)
  })

  it('Manipula sem num1', () => {
    let res = {
      send: function (){}
    }
    let req = {
      query: {
        num2: '20'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Calculadora')
    indexController.calc(req, res)
  })

  it('Manipula sem num2', () => {
    let res = {
      send: function (){}
    }
    let req = {
      query: {
        num1: '10'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Calculadora')
    indexController.calc(req, res)
  })

  it('Manipula com num1 e num2', () => {
    let res = {
      send: function (){}
    }
    let req = {
      query:{
        num1: '10',
        num2: '20' 
      }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('A soma é: 30')
    indexController.calc(req, res)
  })
 })