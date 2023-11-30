// Objeto que representa el carrito de compras con los libros creados
let carrito = {
    Libro1: { cantidad: 0, precio: 48300 },
    Libro2: { cantidad: 0, precio: 44800 },
    Libro3: { cantidad: 0, precio: 64400 }
};

// funcion para incrementar la cantidad de libros en el carrito
function incrementarCantidad(libroNombre) {

    // verifica si el libro existe en el carrito
    // undefined es un valor especial en JavaScript que se asigna automaticamente a las variables cuando se declaran, pero aun no se les ha asignado un valor.
    if (carrito[libroNombre] !== undefined) {

        // incrementa la cantidad del libro en el carrito
        carrito[libroNombre].cantidad++;
    }
    // actualiza el resumen del carrito en la interfaz
    actualizarResumenCarrito();
}

// funcion para decrementar la cantidad de libros en el carrito
function decrementarCantidad(libroNombre) {

    // verifica si el libro existe en el carrito y la cantidad es mayor que cero
    if (carrito[libroNombre] !== undefined && carrito[libroNombre].cantidad > 0) {

        // decrementa la cantidad del libro en el carrito
        carrito[libroNombre].cantidad--;
    }
    // actualiza el resumen del carrito en la interfaz
    actualizarResumenCarrito();
}

// funcion para calcular el total a pagar en el carrito
function calcularTotal() {

    // inicializa la variable total en cero
    let total = 0;

    // itera sobre cada libro en el carrito y suma los subtotales
    for (const [libroNombre, info] of Object.entries(carrito)) {
        total += info.cantidad * info.precio;
    }
    // retorna el total calculado
    return total;
}

// funcion para actualizar el resumen del carrito en la interfaz
function actualizarResumenCarrito() {

    // obtiene el elemento que mostrara el resumen del carrito
    const resumenCarrito = document.getElementById("resumenCarrito");
    
    // se obtiene el elemento que mostrara el total a pagar
    const totalElement = document.getElementById("totalPagar");

    // limpia el contenido anterior del resumen del carrito
    resumenCarrito.innerHTML = "";

    // itera sobre cada producto en el carrito y actualiza la interfaz
    for (const [libroNombre, info] of Object.entries(carrito)) {

        // actualiza el elemento de cantidad en la interfaz
        const cantidadElement = document.getElementById(`cantidad${libroNombre}`);
        cantidadElement.textContent = info.cantidad;

        // calcula el subtotal para el libro actual
        const subtotal = info.cantidad * info.precio;

        // actualiza el elemento de subtotal en la interfaz
        const subtotalElement = document.getElementById(`subtotal${libroNombre}`);
        subtotalElement.textContent = `$${subtotal}`;
        
        // crea un nuevo elemento de lista (<li>) para cada producto
        const li = document.createElement("li");
        
        // asigna una clase al elemento de lista para estilos
        li.className = "resumen-item";

        // asigna el contenido al elemento de lista con informacion del libro y su subtotal
        li.textContent = `Producto ${libroNombre}: ${info.cantidad} unidades - Subtotal: $${info.cantidad * info.precio}`;

        // agrega el elemento de lista al resumen del carrito
        // appendChild es un metodo en JavaScript que se utiliza para agregar un nuevo nodo como hijo a un nodo existente. En el contexto de la programacion web, se utiliza comunmente para agregar elementos HTML a otros elementos en el arbol DOM (Document Object Model).
        resumenCarrito.appendChild(li);
    }

    // calcula el total a pagar llamando a la funcion calcularTotal()
    const total = calcularTotal();

    // actualiza el elemento en la interfaz con el nuevo total a pagar
    totalElement.textContent = `Total a pagar: $${total}`;
}
// funcion para generar el total de la compra al hacer clic en el boton
function TotalCompra() {
    const total = calcularTotal();
    // muestra el total en un cuadro de alerta
    alert(`Total a pagar: $${total}`);
}

