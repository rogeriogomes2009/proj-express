const home = (req, res) => {
  res.render('home', {
    lista: ['Rogerio', 'Gomes', 'Teste'],
    animais: [
     { name: 'Cachorro' },
     { name: 'Gato' },
     { name: 'Galinha' },
     { name: 'Cavalo' }
    ]
  })
}
const pagina1 = (req, res) => {
  res.send('Eu sou MASSA')
}
const calc = (req, res) => {

  if(req.query.num1 && req.query.num2){
    const { num1, num2 } = req.query
    const soma = parseFloat(num1) + parseFloat(num2)
    res.render('calc', { soma } )
  }else{
  res.render('Erro')
}
}
const par = (req, res) => {
  const isPar = (req.params.num %2) ===0
  if(isPar){
    res.send('Numero eh Par')
  }else{
    res.send('Numero eh impar')
  }
}
module.exports = {
home, pagina1, calc, par
}