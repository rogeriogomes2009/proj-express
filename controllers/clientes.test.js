const clientesController = require('./clientes')
const expect = require('chai').expect
const sinon = require('sinon')

describe('Controle de Clientes', () => {
  it('Criar um cliente', () => {
    let res = {
      send: function (){}
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Eu sou MASTER')
    clientesController.create({}, res)
  })
  it('Listar todos os clientes', () => {
    let res = {
      send: function (){}
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Eu sou MASTER')
    clientesController.list({}, res)
  })
})