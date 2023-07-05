
function puntoQuince() {


    let montoPagoInput = document.getElementById("montoPago");
    let montoPago = parseFloat(montoPagoInput.value);
    
    // Verificar si el valor ingresado es válido
    if (isNaN(montoPago)) {
        let error = document.getElementById("error");
        error.textContent ="Debe introcir un valor numerico!";

        error.value="";
        setTimeout(() => {
            error.textContent= "";
          }, 3000);
        return;
    }
    const punTo = 0.15;
    const proceso = (montoPago * punTo)/100;
    
    //actualizar dom

    let resultadom = document.getElementById("resultado");
    resultadom.textContent = "El 0.15 del pago es de: " +proceso
}


