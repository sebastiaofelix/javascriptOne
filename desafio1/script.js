let numberOne = prompt('Digite o primeiro número')
let numberTwo = prompt('Digite o segundo número')
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let rest = numberOne % numberTwo

alert(sum)
alert(numberOne - numberTwo)
alert(numberOne * numberTwo)
alert(numberOne / numberTwo)
alert(rest)

if (rest == 0) alert('par')
else alert('impar')

if (numberOne == numberTwo) alert('São iguais')
else alert('São diferentes')