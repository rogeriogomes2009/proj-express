const home = (req, res) => {
  res.send('Eu sou FULLSTACK')
}
const pagina1 = (req, res) => {
  res.send('Eu sou MASSA')
}
const calc = (req, res) => {

  if(req.query.num1 && req.query.num2){
    const { num1, num2 } = req.query
    const soma = parseFloat(num1) + parseFloat(num2)
    res.send('A soma é:'  + soma)
  }else{
  res.send('Calculadora')
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