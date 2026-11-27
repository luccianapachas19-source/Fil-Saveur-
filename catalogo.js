
const productos = [
  // COCINA
  {
    id: 1,
    categoria: "cocina",
    nombre: "Chocolate artesanal",
    descripcion: "Un detalle dulce y especial para compartir en esta Navidad. Nuestro chocolate artesanal está preparado con dedicación y presentado con un toque festivo, ideal para sorprender a alguien querido y regalarle un momento lleno de dulzura."
  },
  {
    id: 2,
    categoria: "cocina",
    nombre: "Brownie",
    descripcion: "Nuestro brownie combina el delicioso sabor del chocolate con una textura suave y esponjosa. Es perfecto para acompañar una tarde navideña, compartir con familiares y amigos o sorprender con un pequeño regalo preparado con mucho cariño."
  },
  {
    id: 3,
    categoria: "cocina",
    nombre: "Mini cupcakes",
    descripcion: "Pequeños, deliciosos y llenos de creatividad. Nuestros mini cupcakes están decorados con detalles inspirados en la Navidad, convirtiéndose en un regalo encantador para endulzar cualquier celebración y compartir momentos especiales."
  },
  {
    id: 4,
    categoria: "cocina",
    nombre: "Alfajores",
    descripcion: "Nuestros alfajores artesanales están elaborados con suaves tapas y un delicioso relleno de manjar blanco. Su presentación especial los convierte en un detalle dulce y tradicional, ideal para regalar y disfrutar durante estas fiestas."
  },
  {
    id: 5,
    categoria: "cocina",
    nombre: "Galletas navideñas",
    descripcion: "Cada galleta está preparada y decorada con inspiración navideña, incorporando formas, colores y detalles que transmiten alegría. Son ideales para acompañar una chocolatada, decorar una mesa festiva o compartir con las personas que más queremos."
  },
  {
    id: 6,
    categoria: "cocina",
    nombre: "Trufas",
    descripcion: "Nuestras trufas artesanales son pequeños bocaditos de chocolate preparados para conquistar a quienes disfrutan de los sabores dulces. Su presentación delicada y festiva las convierte en un regalo especial para sorprender en Navidad."
  },
  {
    id: 7,
    categoria: "cocina",
    nombre: "Keke navideño",
    descripcion: "Un delicioso keke artesanal inspirado en los sabores tradicionales de la Navidad. Su presentación festiva y su preparación cuidadosa lo convierten en una excelente opción para compartir en familia, acompañar una reunión o expresar cariño mediante un regalo."
  },

  // COSTURA
  {
    id: 8,
    categoria: "costura",
    nombre: "Gorro navideño",
    descripcion: "Nuestro gorro navideño está confeccionado con materiales textiles y detalles festivos que le dan un toque alegre y especial. Es un accesorio ideal para complementar las celebraciones, participar en reuniones navideñas y regalar un poquito de espíritu navideño."
  },
  {
    id: 9,
    categoria: "costura",
    nombre: "Vincha navideña",
    descripcion: "Una vincha elaborada con telas y accesorios decorativos inspirados en la Navidad. Su diseño creativo permite complementar los atuendos festivos y añadir un detalle divertido y original a las celebraciones de esta temporada."
  },
  {
    id: 10,
    categoria: "costura",
    nombre: "Servilletas decoradas",
    descripcion: "Nuestras servilletas decoradas están confeccionadas y personalizadas con detalles navideños que aportan calidez y creatividad a cualquier mesa. Son perfectas para complementar cenas especiales, decorar reuniones familiares y hacer que cada celebración tenga un toque único."
  },
  {
    id: 11,
    categoria: "costura",
    nombre: "Calcetines decorativos",
    descripcion: "Estos calcetines decorativos están elaborados con materiales textiles y detalles inspirados en la Navidad. Son ideales para adornar diferentes espacios del hogar, complementar la decoración navideña y crear un ambiente acogedor durante estas fiestas."
  },
  {
    id: 12,
    categoria: "costura",
    nombre: "Fundas de almohada",
    descripcion: "Nuestras fundas de almohada presentan diseños navideños elaborados con dedicación, ideales para renovar pequeños espacios del hogar. Sus detalles decorativos aportan un ambiente cálido y festivo, convirtiéndolas en un regalo útil y lleno de creatividad."
  },
  {
    id: 13,
    categoria: "costura",
    nombre: "Mini cojines",
    descripcion: "Pequeños detalles que pueden transformar cualquier espacio. Nuestros mini cojines están confeccionados con telas y decoraciones navideñas, perfectos para adornar habitaciones, muebles o rincones especiales y regalar un detalle hecho con cariño."
  },
  {
    id: 14,
    categoria: "costura",
    nombre: "Bolsa navideña",
    descripcion: "Nuestra bolsa navideña está elaborada artesanalmente con tela y detalles decorativos que la hacen especial. Es una alternativa creativa para presentar regalos, transportar pequeños objetos y sorprender con un empaque reutilizable y lleno de espíritu navideño."
  },

  // MANUALIDADES
  {
    id: 15,
    categoria: "manualidades",
    nombre: "Esferas decorativas",
    descripcion: "Nuestras esferas decorativas están elaboradas artesanalmente con detalles y combinaciones de colores inspirados en la Navidad. Son perfectas para adornar el árbol, complementar la decoración del hogar y darle un toque personal a cada rincón festivo."
  },
  {
    id: 16,
    categoria: "manualidades",
    nombre: "Mini corona de Adviento",
    descripcion: "Una pequeña corona decorativa elaborada a mano, inspirada en una de las tradiciones más especiales de la Navidad. Sus detalles aportan calidez y significado a los espacios del hogar, convirtiéndola en un bonito obsequio para compartir durante esta temporada."
  },
  {
    id: 17,
    categoria: "manualidades",
    nombre: "Llaveros",
    descripcion: "Nuestros llaveros artesanales combinan creatividad y diseños navideños en un accesorio pequeño, práctico y especial. Son ideales para llevar un detalle festivo a todas partes, decorar mochilas o entregar un recuerdo lleno de cariño."
  },
  {
    id: 18,
    categoria: "manualidades",
    nombre: "Mini centro de mesa",
    descripcion: "Un pequeño adorno elaborado a mano para darle vida y alegría a cualquier mesa. Nuestro mini centro de mesa incorpora detalles navideños que ayudan a crear un ambiente acogedor y especial durante reuniones, cenas y celebraciones familiares."
  },
  {
    id: 19,
    categoria: "manualidades",
    nombre: "Tarjeta 3D",
    descripcion: "Nuestra tarjeta 3D transforma un mensaje navideño en una sorpresa creativa. Está elaborada con detalles tridimensionales que le dan un toque original y especial, permitiendo expresar buenos deseos y transmitir sentimientos de una manera diferente."
  },
  {
    id: 20,
    categoria: "manualidades",
    nombre: "Bolsas de regalo de papel",
    descripcion: "Nuestras bolsas de papel están decoradas artesanalmente con motivos navideños y detalles llenos de creatividad. Son ideales para presentar pequeños obsequios de una manera bonita y especial, haciendo que la sorpresa comience desde el empaque."
  },
  {
    id: 21,
    categoria: "manualidades",
    nombre: "Broche navideño",
    descripcion: "Un accesorio artesanal diseñado para añadir un toque navideño a cualquier atuendo. Nuestro broche combina pequeños detalles decorativos y creatividad, convirtiéndose en un obsequio original para sorprender y compartir la alegría de estas fiestas."
  }
];
