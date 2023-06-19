function botton(){

    let nombre = 'augusto'

    let numero = 0

    while (numero == 0) {

        if (nombre == 'bauti') {
            break
        } else {
            nombre = prompt()
        }
    }
}


function InteresCompuesto() {
    let MontoInicial = parseInt(prompt('ingrese el monto inicial'))
    let tasa = parseInt(prompt('ingrese la tasa mensual'))
    let tiempo = parseInt(prompt('ingrese el timpo en meses'))

    let total = MontoInicial
    let suma = 0

    for (let index = 0; index <= tiempo; index++) {
        suma = MontoInicial * tasa / 100


        total = total + suma
    }

    alert(total)
    
}
