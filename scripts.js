let carrito = [];

document.querySelectorAll('.producto button').forEach(button => {
    button.addEventListener('click', () => {
        const producto = button.parentElement;
        const nombre = producto.querySelector('h2').innerText;
        const precio = producto.querySelector('p:nth-child(3)').innerText;
        alert(`Añadiste ${nombre} al carrito. ${precio}`);
        carrito.push({ nombre, precio });
        console.log(carrito); // Puedes mejorar esto para mostrar el carrito en la página
    });
});