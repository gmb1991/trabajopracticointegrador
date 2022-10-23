alert ('Debe completar todos los campos')
function PrecioApagar () {
    const cantidad = document.getElementById('entradas').value;
    const TipoDeDescuento = document.getElementById('tipodescuento')
    let descuentos = TipoDeDescuento.options[TipoDeDescuento.selectedIndex].text;
    let entradas = 200
    let mascantidades = +cantidad

    if (descuentos === 'Estudiante') {
        let precio1 = entradas * mascantidades
        let precioREal1 = precio1*0.80
        let total = precio1-precioREal1
        document.getElementById('totalapagar').innerHTML='Total a pagar $'+total
    }
    else {
        if (descuentos === 'Trainee') {
            let precio2 = entradas*mascantidades
            let precioREal2 = precio2*0.5
            let total2 = precio2 - precioREal2
            document.getElementById('totalapagar').innerHTML='Total a pagar $'+total2
        }
        else {
            if (descuentos === 'Junior') {
                let precio3 = entradas*mascantidades
                let precioREal3 = precio3*0.15
                let total3 = precio3 - precioREal3
                document.getElementById('totalapagar').innerHTML='Total a pagar $'+total3
            }
        }
    }
    
}

function Borrar () {
    document.getElementById('totalapagar').innerHTML='Total a pagar $'
}