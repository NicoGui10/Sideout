
let timerInterval
Swal.fire({
  title: 'Abonando en CriptoCard dispones de un 20% de descuento',
  timer: 3500,
  imageUrl:'https://cdn.pixabay.com/photo/2021/04/30/16/47/bitcoin-logo-6219385_960_720.png',
  imageWidth: '200px',
  imageHeigth:'50px',
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})