const enviarCompraBtn = document.getElementById('procesar-compra'); 
n = '51931993482';

                            

    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });

   // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    enviarCompraBtn.addEventListener('click', event => {
    if (compra.obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'No hay productos, selecciona alguno',
            showConfirmButton: false,
            timer: 1000
        }).then(function () {
            window.location = "JlcStore.html";
        })
    }
    else if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()  
      }else{
let listaCompra =JSON.parse(localStorage.getItem("productos"));
    //console.log(JSON.stringify(listaCompra));
    let productWsp = listaCompra.map(producto => `*Producto:* ${producto.titulo}%0A*Precio:* S/.${producto.precio}%0A*Cantidad:* ${producto.cantidad}%0A*Subtotal:* S/.${producto.precio * producto.cantidad }%0A`);
    const produs= productWsp.join('%0A');

let client = document.querySelector("#cliente").value.toUpperCase();
let telef = document.querySelector("#telefono").value;
let entrega = document.querySelector("#entrega").value;  
let subtotal = document.querySelector("#subtotal").value;
let igv = document.querySelector("#igv").value;
let total = document.querySelector("#total").value;
let clv=Math.random().toString(36).substring(8).toUpperCase();
let wsp = `http://api.whatsapp.com/send?phone=${n}&text=*_PEDIDO:_ ${clv}*%0A
----------------------------------------
%0A*Cliente: _${client}_*%0A
*Telefono:* ${telef}%0A
*Entrega:* ${entrega}%0A
----------------------------------------
%0A${produs}
----------------------------------------
%0A*Subtotal:* ${subtotal}
%0A*IGV:* ${igv}%0A
*Total a pagar: ${total}*`;   
//console.log(encodeURIComponent(wsp)); 
window.open(wsp, '_blank'); 
setTimeout(() => { 
compra.vaciarLocalStorage();
window.location = "JlcStore.html";
},10);
}
      form.classList.add('was-validated')
    }, false)
  })
})()


