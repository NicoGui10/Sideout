$('#ProcesarPago').click(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Completa Los Siguientes campos',
        showDenyButton: true,
        height: '60%',
        confirmButtonText: 'Procesar Pago',
        denyButtonText: `Seguir Comprando`,
        html:
            '<div class="divmargin"><input type="text" id="name" required placeholder="Nombre(s) *"><input type="text" id="name" required placeholder="Apellido *"></div>'+
            '<div class="divmargin"><input type="text" id="name" required placeholder="Calle *"><input type="text" id="name" required placeholder="Numero *"></div>'+
            '<div class="divmargin"><input type="text" id="name" required placeholder="departamento"><input type="text" id="name" required placeholder="Codigo Postal *"></div>'+
            '<div class="divmargin"><input type="text" id="name" required placeholder="Numero"><select name="" id=""><option value="">Mercado Pago</option> <option value="">Visa</option> <option value="">Amex</option> <option value="">MasterCard</option></select></div>'+
            
            '<div class="divmargin"><input type="text" id="name" required placeholder="Numero"><input type="text" id="name" required placeholder="Piso"></div>',

    })
    
    .then((result) => {
        /* Read more about isConfirmed, isDenied below */
        
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
    // title:
    // text:
    // html:
    // icon:
    // confirmButtonText:
    // footer:
    // width:
    // padding:
    // background:
    // grow:
    // backdrop:
    // timer:
    // timerProgressBar:
    // toast:
    // position:
    // allowOutsideClick:
    // allowEscapeKey:
    // allowEnterKey:
    // stopKeydownPropagation:

    // input:
    // inputPlaceholder:
    // inputValue:
    // inputOptions:

    //  customClass:
    // 	container:
    // 	popup:
    // 	header:
    // 	title:
    // 	closeButton:
    // 	icon:
    // 	image:
    // 	content:
    // 	input:
    // 	actions:
    // 	confirmButton:
    // 	cancelButton:
    // 	footer:	

    // showConfirmButton:
    // confirmButtonColor:
    // confirmButtonAriaLabel:

    // showCancelButton:
    // cancelButtonText:
    // cancelButtonColor:
    // cancelButtonAriaLabel:

    // buttonsStyling:
    // showCloseButton:
    // closeButtonAriaLabel:


    // imageUrl:
    // imageWidth:
    // imageHeight:
    // imageAlt:

    // html:
    if (email) {
        Swal.fire(`Entered email: ${email}`)
      }
})



