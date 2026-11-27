
const productos = [
  {
    id: 1,
    categoria: "cocina",
    nombre: "Caja de galletas navideñas",
    descripcion: "Galletas artesanales para regalar en Navidad.",
    precio: 15,
    imagen: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=900&auto=format&fit=crop"
  },
  {
    id: 2,
    categoria: "costura",
    nombre: "Bolsa de tela personalizada",
    descripcion: "Bolsa artesanal con detalles personalizados.",
    precio: 18,
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop"
  },
  {
    id: 3,
    categoria: "manualidades",
    nombre: "Adorno navideño",
    descripcion: "Decoración hecha a mano para regalar.",
    precio: 10,
    imagen: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=900&auto=format&fit=crop"
  }
];

function agregarAlCarrito(id) {
  const carrito = JSON.parse(
    localStorage.getItem("filCarrito") || "{}"
  );

  carrito[id] = (carrito[id] || 0) + 1;

  localStorage.setItem(
    "filCarrito",
    JSON.stringify(carrito)
  );
}
