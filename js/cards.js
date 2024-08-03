const contenedorProductos = document.getElementById('contenedor-productos');

//js a card
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto','card', producto.categoria)
    div.innerHTML = `

 <div class="face front">
   <img class="cim"src=${producto.imagen} alt=${producto.marca}>
   <h1>S/. <span>${producto.precio}</span></h1>
 </div>
 <div class="face back">
   <h4 class="name my-0 font-weight-bold">${producto.marca}</h4>
   <ul class="list-unstyled mt-3 mb-4">
					${producto.detalles.map(
							(ele) => `
							<li>${ele}</li>
						`
						)
						.join("")}
		</ul>
		<h5>${producto.disponible}</h5>
		<h1 class="card-title pricing-card-title precio">S/. <span>${producto.precio}</span></h1>
		<a href="#" class="btn btn-block btn-success agregar-carrito" data-id=${producto.id}>Comprar</a>
    </div>
    
		`
    contenedorProductos.appendChild(div)
})
 

