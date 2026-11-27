
const productos = [
  {
    id: 1,
    categoria: "cocina",
    nombre: "Caja de galletas navideñas",
    descripcion: "Galletas artesanales para regalar en Navidad.",
    precio: 15,
    imagen: "imagenes/galletas.jpg"
  },
  {
    id: 2,
    categoria: "costura",
    nombre: "Bolsa de tela personalizada",
    descripcion: "Bolsa artesanal con detalles personalizados.",
    precio: 18,
    imagen: "imagenes/bolsa.jpg"
  },
  {
    id: 3,
    categoria: "manualidades",
    nombre: "Adorno navideño",
    descripcion: "Decoración hecha a mano para regalar.",
    precio: 10,
    imagen: "imagenes/adorno.jpg"
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
