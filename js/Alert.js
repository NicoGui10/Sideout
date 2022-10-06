
(async () => {

    const { value: pais } = await Swal.fire({
        title: "Bienvenido",
        text: "Seleccione Su Pais",
        color: '#CDA279',
        icon: "question",
        confirmButtonText: "Select",
        footer: '<span class="AlertRegion">Informacion Importante</span>',
        whidth: '80%',
        padding: '1rem',
        background: "#1D2C53",
        backdrop: 'true',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterkey: false,

        input: 'select',
        inputPlaceholder: 'Pais',
        inputOptions: {
            mexico: 'Mexico',
            españa: 'España',
            argentina: 'Argentina',
            colombia: 'Colombia',
            ecuador: 'Ecuador',
            venezuela: 'Venezuela',
            chile: 'Chile',
            brazil: 'Brazil',
            bolivia: 'Bolivia',
            Other: 'Other'
        },
        customClass: {
            // container :
            popup: 'PopSwal',
            // header :
            // title :
            // closeButton :
            // icon :
            // image :
            // content :
            input: 'ColorInputSwal',
            // actions :'Buttonswal',
            // confirmButton : 'Buttonswal'
            // cancelButton : 
        },
        confirmButtonColor: '#CDA279',
        confirmButtonAriaLabel: 'Boton Confirmar'

    });
    if (pais) {
        Swal.fire({
            icon: 'success',
            background: "#1D2C53",
            color: '#CDA279',
            title: 'Successful',
            showConfirmButton: false,
            timer: 1500
        })
    }

})()



