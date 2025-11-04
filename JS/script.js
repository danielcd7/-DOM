function sumar() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    document.getElementById('resultado1').value = n1 + n2;
}

function restar() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    document.getElementById('resultado1').value = n1 - n2;
}

function multiplicar() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    document.getElementById('resultado1').value = n1 * n2;
}

function dividir() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);

    if (n2 === 0) {
        document.getElementById('resultado1').value = "Error: Division por cero";
    } else {
        document.getElementById('resultado1').value = n1 / n2;
    }
}

function calcularEdad() {
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let fechaNac = new Date(fechaNacimiento);
    let hoy = new Date();

    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    document.getElementById('resultadoEdad').value = edad;
}

function calcularPrecioTotal() {
    let valor = parseFloat(document.getElementById('valor').value);
    let cantidad = parseInt(document.getElementById('cantidad').value);

    let subtotal = valor * cantidad;
    let iva = subtotal * 0.19;
    let descuento = subtotal * 0.10;
    let total = (subtotal + iva) - descuento;

    document.getElementById('subtotal').value = subtotal.toFixed(2);
    document.getElementById('iva').value = iva.toFixed(2);
    document.getElementById('descuento').value = descuento.toFixed(2);
    document.getElementById('total').value = total.toFixed(2);
}

function calcularVenta() {
    let valor = parseFloat(document.getElementById('valor').value);
    let cantidad = parseInt(document.getElementById('cantidad').value);

    let subtotal = valor * cantidad;
    let iva = subtotal * 0.19;
    let descuento = subtotal * 0.10;
    let total = (subtotal + iva) - descuento;

    document.getElementById('subtotal').value = subtotal.toFixed(2);
    document.getElementById('iva').value = iva.toFixed(2);
    document.getElementById('descuento').value = descuento.toFixed(2);
    document.getElementById('total').value = total.toFixed(2);

    document.getElementById('resultado').style.display = 'block';
}

function calcularVentaTabla() {
    let valor = parseFloat(document.getElementById('valor').value);
    let cantidad = parseInt(document.getElementById('cantidad').value);

    let subtotal = valor * cantidad;
    let iva = subtotal * 0.19;
    let descuento = subtotal * 0.10;
    let total = (subtotal + iva) - descuento;

    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('iva').innerText = iva.toFixed(2);
    document.getElementById('descuento').innerText = descuento.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);
}

function calcularVentaFinal() {
    let precio = parseFloat(document.getElementById('precio').value);
    let tipoPago = document.getElementById('tipoPago').value;

    let descuentos = document.getElementsByName('descuento');
    let descuentoTotalPorcentaje = 0;

    for (let i = 0; i < descuentos.length; i++) {
        if (descuentos[i].checked) {
            descuentoTotalPorcentaje += parseFloat(descuentos[i].value);
        }
    }

    let montoDescuento = precio * descuentoTotalPorcentaje;
    let totalPagar = precio - montoDescuento;

    document.getElementById('totalPagar').innerText = totalPagar.toFixed(2);
}