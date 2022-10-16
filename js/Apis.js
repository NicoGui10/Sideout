/***Api Prueba***/

const CriptoYa ="https://criptoya.com/api/decrypto/usdt/ars/1";

let DivBTC = document.getElementById("DivBTC");

setInterval(()=>{
    fetch(CriptoYa)
    
    .then(res => res.json())
   
    .then(({totalAsk})=>{
        DivBTC.innerHTML = `
        <h2>USDT - ARS:</h2>
    
    <p>USDT: ${totalAsk}</p>
    
    
        `
    })
    .catch(error => console.error(error))
    })


    const CriptoYa2 ="https://criptoya.com/api/decrypto/btc/ars/1";

    let DivBTC2 = document.getElementById("DivBTC2");
    
    setInterval(()=>{
        fetch(CriptoYa2)
        
        .then(res => res.json())
       
        .then(({totalAsk})=>{
            DivBTC2.innerHTML = `
            <h2>BTC - ARS:</h2>
        
        <p>BTC: ${totalAsk}</p>
        
        
            `
        })
        .catch(error => console.error(error))
        })
    


