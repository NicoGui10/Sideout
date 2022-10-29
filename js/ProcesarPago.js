$('#ProcesarPago').click(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Informacion de entrega',
        showDenyButton: true,
        height: '60%',
        confirmButtonText: 'Siguiente',
        denyButtonText: `Cancelar Compra`,
        html:
            '<div class="divmargin"><input type="text" id="name" required placeholder="Nombre(s) *"><input type="text" id="name" required placeholder="Apellido *"></div>'+
            '<div class="divmargin"><input type="text" id="name" required placeholder="Calle *"><input type="text" id="name" required placeholder="Numero *"></div>'+
            '<div class="divmargin"><input type="text" id="name" required placeholder="departamento"><input type="text" id="name" required placeholder="Codigo Postal *"></div>'+
            '<div class="divmargin"><input type="text" id="name" required placeholder="Ciudad"><select name="" id=""><option value="">Buenos Aires</option> <option value="">Cordoba</option> <option value="">Mendoza</option> <option value="">Resto de Argentina</option></select></div>'
            
            

    })
    
    
    .then((result) => {
        
        if (result.isConfirmed) {

            (async () => {

                const { value: ProcesarPAgo } = await Swal.fire({
                    title: 'Informacion de entrega',
                    showDenyButton: true,
                    height: '60%',
                    confirmButtonText: 'Procesar Pago',
                    denyButtonText: `Cancelar Compra`,
                    confirmButtonColor: '#1D2C53',
                    customClass:{
                        confirmButton:'ProcesarPagoBtn'
                    },
                    html:
                        '<div class="divmarginPay"><label  for="cardCvc">Tipo De Tarjeta</label><select name="" id=""><option value="">Visa</option> <option value="">America Express</option> <option value="">Mastercard</option> <option value="">CryptoCard</option></select></div>'+
                        '<div class="divmarginPay"><label class="form__label" for="cardholder">Cardholder Name</label><input type="text" name="cardholder"  placeholder=" Nicolas Guido"></div>'+
                        '<div class="divmarginPay"><label  for="cardNumber">Card Number</label><input type="text" name="cardNumber"  maxlength="19" placeholder=" 1234 5678 9123 0000"></div>'+
                        '<div class="divmarginPay"><label  for="cardMonth">Exp. Date (MM)</label><input type="text" maxlength="2" name="cardMonth"  placeholder="MM"></div>'+
                        '<div class="divmarginPay"><label  for="cardMonth">Exp. Date (YY)</label><input type="text" maxlength="2" name="cardYear" placeholder="YY"></div>'+
                        '<div class="divmarginPay"><label  for="cardCvc">CVC</label><input type="text" maxlength="3" name="cardCvc"  placeholder="e.g. 123"></div>'
                        
                        
            
                });
                if (ProcesarPAgo) {
                    Swal.fire({
                        icon: 'success',
                        background: "#1D2C53",
                        color: '#CDA279',
                        title: 'Pago Aprobado',
                        showConfirmButton: false,
                        timer: 1500
                        
                    })
                    
                    
                }
            })()
            
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
        
    })
    
   
})

