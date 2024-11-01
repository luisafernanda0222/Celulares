let cart = [];
let totalPrice = 0;

// Función para agregar 

function openProductDetail(name, price) {
    const product = { name, price };
    cart.push(product);
    updateCart();
}

// Función para actualizar y mostrar el total

function updateCart() {
    const cartContainer = document.getElementById("cartItems");
    const totalContainer = document.getElementById("totalPrice");
    
    cartContainer.innerHTML = ''; 
    totalPrice = 0;

    cart.forEach((product) => {
        const item = document.createElement("div");
        item.className = "cart-item";
        item.innerText = `${product.name} - COP ${product.price.toFixed(2)}`;
        cartContainer.appendChild(item);
        totalPrice += product.price;
    });

    totalContainer.innerText = `Total: COP ${totalPrice.toFixed(2)}`;
}

// Función para realizar la compra (vaciar el carrito)

function checkout() {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    alert(`Gracias por tu compra. Total pagado: COP ${totalPrice.toFixed(2)}`);
    cart = [];
    updateCart();
}

// Evento para mostrar el carrito cuando se presiona el botón "Carrito"

document.getElementById("cartButton").addEventListener("click", () => {
    document.getElementById("cart").classList.toggle("visible");
});
