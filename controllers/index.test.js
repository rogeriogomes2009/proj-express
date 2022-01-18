const indexController = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('index Controller', () => {
  it('Home', () => {
    let res = {
      render: function (){}
    }
    let data = {
      lista: ['Rogerio', 'Gomes', 'Teste'],
      animais: [
       { name: 'Cachorro' },
       { name: 'Gato' },
       { name: 'Galinha' },
       { name: 'Cavalo' }
      ]
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('home', data)
    indexController.home({}, res)
  })
  it('Manipula sem num1 e num2', () => {
    let res = {
      render: function (){}
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('Erro')
    indexController.calc({ query: {} }, res)
  })

  it('Manipula sem num1', () => {
    let res = {
      time: 10,
      render: function (){}
    }
    let req = {
      query: {
        num2: '20'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('Erro')
    indexController.calc(req, res)
  })

  it('Manipula sem num2', () => {
    let res = {
      render: function (){}
    }
    let req = {
      query: {
        num1: '10'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('Erro')
    indexController.calc(req, res)
  })

  it('Calcs', () => {
    let res = {
      render: function (){}
    }
    let req = {
      query:{
        num1: '10',
        num2: '20' 
      }
    }
    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('calc', {soma: 30})
    indexController.calc(req, res)
  })
 })