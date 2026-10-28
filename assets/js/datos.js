/* ==========================================================================
   FAMILIA PIAMONTESA · VILLA MARÍA
   Archivo central de contenidos
   --------------------------------------------------------------------------
   Este es el archivo que se edita para actualizar eventos, menús, autoridades
   y datos de contacto. No hace falta tocar el HTML.

   Los textos entre signos < > son ejemplos: reemplazalos por los datos reales.
   Al guardar el archivo y subirlo al servidor, los cambios se ven en el sitio.

   Fechas: usar el formato "AAAA-MM-DDTHH:MM:00-03:00" (hora de Argentina).
   ========================================================================== */

window.FP = {

  /* ----------------------------------------------------------------------
     1. Datos de la institución
     ---------------------------------------------------------------------- */
  institucion: {
    nombre: "Asociación Civil Familia Piamontesa de Villa María",
    nombreCorto: "Familia Piamontesa",
    ciudad: "Villa María",
    provincia: "Córdoba",
    pais: "Argentina",
    fundacion: 1997,
    aniversario: "16 de marzo",
    lema: "La nòstra stòria a l'é la nòstra cà.",
    lemaTraduccion: "Nuestra historia es nuestra casa.",
    descripcion: "Una asociación civil cultural, social, deportiva y filantrópica que reúne a los descendientes de piamonteses de Villa María y mantiene viva la memoria de sus antepasados."
  },

  /* ----------------------------------------------------------------------
     2. Contacto y redes
     ---------------------------------------------------------------------- */
  contacto: {
    // TODO: reemplazar por el correo institucional real
    email: "famipiamontesavm@gmail.com",
    // TODO: reemplazar por el teléfono / WhatsApp real
    telefono: "+54 9 353 400 0000",
    whatsapp: "5493534000000",
    direccion: "Villa María, Córdoba, Argentina",
    horario: "Atención en sede: a confirmar",
    facebook: "https://www.facebook.com/familiapiamontesavm",
    instagram: "",
    familysearch: "https://www.familysearch.org/es/global",
    fapa: "https://fapa.org.ar",
    mapa: "https://www.google.com/maps?q=Villa+Mar%C3%ADa,+C%C3%B3rdoba,+Argentina&output=embed"
  },

  /* ----------------------------------------------------------------------
     3. Navegación principal
     ---------------------------------------------------------------------- */
  navegacion: [
    { etiqueta: "Inicio", href: "index.html" },
    { etiqueta: "Historia", href: "historia.html" },
    { etiqueta: "La sociedad", href: "socios.html" },
    { etiqueta: "Eventos", href: "eventos.html" },
    { etiqueta: "Salón y menús", href: "salon.html" },
    { etiqueta: "Contacto", href: "contacto.html" }
  ],

  /* ----------------------------------------------------------------------
     4. Cifras de la portada
     ---------------------------------------------------------------------- */
  cifras: [
    { numero: "1997", etiqueta: "Año de fundación" },
    { numero: "29", etiqueta: "Años de historia" },
    { numero: "2003", etiqueta: "Hermanamiento con Savigliano" },
    { numero: "2023", etiqueta: "Lengua piamontesa, patrimonio cultural" }
  ],

  /* ----------------------------------------------------------------------
     5. Áreas de la sociedad
     ---------------------------------------------------------------------- */
  areas: [
    {
      titulo: "Cultura y lengua",
      texto: "Charlas, cine, música y cursos de piamontés para que la lengua de nuestros mayores siga sonando en Villa María.",
      enlace: "historia.html#lengua",
      enlaceTexto: "La lengua piamontesa"
    },
    {
      titulo: "Escuela de Arquería",
      texto: "Una disciplina que nos representa: entrenamiento, torneos sociales y participación en competencias provinciales.",
      enlace: "eventos.html#deportes",
      enlaceTexto: "Ver encuentros"
    },
    {
      titulo: "Mesa piamontesa",
      texto: "Agnolotti, tajarin, bagna cauda y bonet. La cocina como memoria y como excusa para encontrarnos.",
      enlace: "salon.html#menus",
      enlaceTexto: "Conocer los menús"
    },
    {
      titulo: "Comunidad y solidaridad",
      texto: "Una asociación abierta que colabora con instituciones de la ciudad y acompaña a las familias en cada etapa.",
      enlace: "socios.html",
      enlaceTexto: "Ser parte"
    }
  ],

  /* ----------------------------------------------------------------------
     6. Eventos
     ----------------------------------------------------------------------
     categoria: cultura | deportes | gastronomia | comunidad
     Las fechas son de ejemplo: actualizalas antes de publicar.
     ---------------------------------------------------------------------- */
  eventos: [
    {
      id: "noche-tajarin",
      titulo: "Noche de tajarin y bagna cauda",
      categoria: "gastronomia",
      categoriaNombre: "Gastronomía",
      fecha: "2026-11-14T20:30:00-03:00",
      fechaTexto: "Sábado 14 de noviembre",
      hora: "20:30",
      lugar: "Salón de la Familia Piamontesa",
      descripcion: "Una mesa larga, recetas de familia y el gusto de encontrarnos. Noche de tajarin al ragù, bagna cauda y postres de la tradición.",
      detalle: "El encuentro comienza a las 20:30 con una recepción. El menú incluye entradas, plato principal, postre, pan casero y bebida. Hay opción vegetariana y sin gluten con aviso previo. La actividad está destinada a socios y a sus invitados; los cupos son limitados y se confirman por orden de reserva.",
      soloSocios: true,
      precio: "Consultar valor",
      cupo: "Cupos limitados",
      imagen: "assets/img/comida-tajarin-ragu.jpg",
      destacado: true
    },
    {
      id: "torneo-arqueria",
      titulo: "Torneo social de arquería",
      categoria: "deportes",
      categoriaNombre: "Arquería",
      fecha: "2026-11-21T09:00:00-03:00",
      fechaTexto: "Sábado 21 de noviembre",
      hora: "09:00",
      lugar: "Escuela de Arquería · Familia Piamontesa",
      descripcion: "Una jornada de tiro con arco para socios, alumnos de la escuela y arqueros invitados. Modalidad indoor y premiación al finalizar.",
      detalle: "Acreditación desde las 8:30. La competencia se desarrolla en modalidad indoor, con categorías promocionales y competitivas. Se recomienda llevar arco propio; la escuela dispone de material para quienes se inician. La inscripción incluye el seguro deportivo y el refrigerio.",
      soloSocios: false,
      precio: "Inscripción: consultar",
      cupo: "Abierto a la comunidad",
      imagen: "assets/img/arqueria.jpg",
      destacado: false
    },
    {
      id: "charla-ciudadania",
      titulo: "Charla: ciudadanía italiana, paso a paso",
      categoria: "cultura",
      categoriaNombre: "Cultura",
      fecha: "2026-12-05T18:30:00-03:00",
      fechaTexto: "Sábado 5 de diciembre",
      hora: "18:30",
      lugar: "Sede de la Familia Piamontesa",
      descripcion: "Documentos, partidas, traducciones y trámites. Una guía práctica para quienes quieren reconstruir su origen italiano.",
      detalle: "La charla está a cargo de especialistas en ciudadanía italiana y de miembros de la asociación que compartirán su experiencia. Se abordan los requisitos generales, la búsqueda de actas en Italia y los errores más frecuentes. Al finalizar, espacio de preguntas. Entrada libre y gratuita, con inscripción previa por capacidad del salón.",
      soloSocios: false,
      precio: "Entrada libre",
      cupo: "Inscripción previa",
      imagen: "assets/img/historia-inmigrantes.jpg",
      destacado: false
    },
    {
      id: "curso-piamontes",
      titulo: "Curso intensivo de lengua piamontesa",
      categoria: "cultura",
      categoriaNombre: "Cultura",
      fecha: "2026-12-12T10:00:00-03:00",
      fechaTexto: "Sábado 12 de diciembre",
      hora: "10:00",
      lugar: "Aula cultural · Familia Piamontesa",
      descripcion: "Un primer encuentro para leer, pronunciar y reconocer las palabras que quedaron en la memoria de las familias.",
      detalle: "El curso está pensado para principiantes y para quienes escucharon piamontés en su infancia. Se entrega material de lectura y se trabaja con canciones, refranes y textos breves. Requiere inscripción previa; los socios tienen descuento en la matrícula.",
      soloSocios: false,
      precio: "Socios con descuento",
      cupo: "Cupos limitados",
      imagen: "assets/img/historia-vendimia.jpg",
      destacado: false
    },
    {
      id: "cena-fin-de-ano",
      titulo: "Cena de fin de año de la familia",
      categoria: "comunidad",
      categoriaNombre: "Comunidad",
      fecha: "2026-12-19T21:00:00-03:00",
      fechaTexto: "Sábado 19 de diciembre",
      hora: "21:00",
      lugar: "Salón de la Familia Piamontesa",
      descripcion: "El brindis que cierra el año y abre el siguiente. Una noche para reencontrarnos, celebrar y agradecer.",
      detalle: "Cena de socios con menú especial de fin de año, brindis y música. La reserva se realiza por mesa y se confirma con seña. Los interesados pueden comunicarse por el formulario de contacto o en la secretaría de la sede.",
      soloSocios: true,
      precio: "Reserva anticipada",
      cupo: "Últimas mesas",
      imagen: "assets/img/salon.jpg",
      destacado: false
    },
    {
      id: "dia-inmigrante",
      titulo: "Día del Inmigrante Piamontés",
      categoria: "comunidad",
      categoriaNombre: "Comunidad",
      fecha: "2027-08-16T11:00:00-03:00",
      fechaTexto: "Lunes 16 de agosto",
      hora: "11:00",
      lugar: "Villa María · A confirmar",
      descripcion: "Cada 16 de agosto recordamos a quienes cruzaron el océano. Acto, ofrenda floral y encuentro de la colectividad.",
      detalle: "La fecha recuerda la llegada de los primeros inmigrantes piamonteses a la Argentina. La asociación participa del acto oficial y organiza un encuentro de familias. Las actividades se confirman durante el mes de agosto.",
      soloSocios: false,
      precio: "Actividad abierta",
      cupo: "Sin inscripción",
      imagen: "assets/img/villa-maria.jpg",
      destacado: false
    }
  ],

  /* ----------------------------------------------------------------------
     7. Menús del salón
     ---------------------------------------------------------------------- */
  menus: [
    {
      id: "piamontes",
      nombre: "Menú Piamontés",
      subtitulo: "La mesa de los domingos",
      precio: "Valor a consultar por persona",
      minimo: "Mínimo 30 personas",
      destacado: true,
      bloques: [
        {
          titulo: "Para empezar",
          platos: [
            { nombre: "Bagna cauda", desc: "Salsa tibia de ajo, anchoas y aceite, con verduras de estación" },
            { nombre: "Vitello tonnato", desc: "Ternera fría con salsa de atún y alcaparras" },
            { nombre: "Tabla de salame y queso", desc: "Productos de la zona y pan casero" }
          ]
        },
        {
          titulo: "Platos principales",
          platos: [
            { nombre: "Agnolotti del plin", desc: "Al burro y salvia, con caldo de asado" },
            { nombre: "Tajarin al ragù", desc: "Pasta fresca al huevo con ragù de carne" },
            { nombre: "Brasato al Barolo", desc: "Con papas rústicas y vegetales" }
          ]
        },
        {
          titulo: "Postres",
          platos: [
            { nombre: "Bonet", desc: "Flan piamontés de cacao, amaretti y caramelo" },
            { nombre: "Torta de avellanas", desc: "Receta de familia, con crema chantilly" },
            { nombre: "Panna cotta", desc: "Con frutos rojos de estación" }
          ]
        }
      ],
      pie: "Incluye pan casero, agua, café y una copa de vino. Opciones sin cerdo, sin gluten y vegetarianas con aviso previo."
    },
    {
      id: "criollo",
      nombre: "Menú Criollo",
      subtitulo: "El fuego de la pampa",
      precio: "Valor a consultar por persona",
      minimo: "Mínimo 30 personas",
      destacado: false,
      bloques: [
        {
          titulo: "Para empezar",
          platos: [
            { nombre: "Empanadas de carne", desc: "Cortada a cuchillo, al horno de barro" },
            { nombre: "Provoleta", desc: "Con orégano y aceite de oliva" },
            { nombre: "Picada de campo", desc: "Quesos, salame, aceitunas y pan" }
          ]
        },
        {
          titulo: "Platos principales",
          platos: [
            { nombre: "Asado de tira y vacío", desc: "Con chorizo, morcilla y ensaladas" },
            { nombre: "Pollo al disco", desc: "Con papas, cebolla y vino blanco" },
            { nombre: "Ensalada de la casa", desc: "Hojas, tomate, cebolla y limón" }
          ]
        },
        {
          titulo: "Postres",
          platos: [
            { nombre: "Flan casero", desc: "Con dulce de leche y crema" },
            { nombre: "Queso y dulce", desc: "Selección de dulces artesanales" },
            { nombre: "Frutas de estación", desc: "Con miel y nueces" }
          ]
        }
      ],
      pie: "Incluye pan, agua, gaseosas y café. El asado se cotiza según la cantidad de comensales y la temporada."
    },
    {
      id: "vegetariano",
      nombre: "Menú de la Huerta",
      subtitulo: "Vegetariano y de estación",
      precio: "Valor a consultar por persona",
      minimo: "Mínimo 20 personas",
      destacado: false,
      bloques: [
        {
          titulo: "Para empezar",
          platos: [
            { nombre: "Bruschettas de tomate", desc: "Pan casero, albahaca y aceite de oliva" },
            { nombre: "Berenjenas grilladas", desc: "Con miel, limón y menta" },
            { nombre: "Hummus de garbanzos", desc: "Con crudités y pan de campo" }
          ]
        },
        {
          titulo: "Platos principales",
          platos: [
            { nombre: "Ravioles de ricota y espinaca", desc: "Con manteca de salvia" },
            { nombre: "Lasagna de verduras", desc: "Zapallito, berenjena, tomate y bechamel" },
            { nombre: "Risotto de hongos", desc: "Con queso parmesano y hierbas" }
          ]
        },
        {
          titulo: "Postres",
          platos: [
            { nombre: "Panna cotta", desc: "Con frutos rojos" },
            { nombre: "Torta de nuez", desc: "Sin harina, con dulce de leche" },
            { nombre: "Ensalada de frutas", desc: "Con menta y limón" }
          ]
        }
      ],
      pie: "Incluye pan casero, agua, limonada y café. Opciones sin gluten y sin lácteos con aviso previo."
    }
  ],

  /* ----------------------------------------------------------------------
     8. Comisión directiva
     ----------------------------------------------------------------------
     Datos públicos de la asamblea del 13 de noviembre de 2024.
     Completar vocales y revisar cargos en cada renovación.
     ---------------------------------------------------------------------- */
  comision: [
    {
      nombre: "Carlos Polliotto",
      cargo: "Presidente",
      iniciales: "CP",
      bio: "Conduce la comisión directiva desde la asamblea de noviembre de 2024.",
      desde: "2024"
    },
    {
      nombre: "Oscar Trucco",
      cargo: "Vicepresidente",
      iniciales: "OT",
      bio: "Acompaña la gestión y coordina las actividades sociales de la asociación.",
      desde: "2024"
    },
    {
      nombre: "Lorenzo Gastaldi",
      cargo: "Tesorero · Socio fundador",
      iniciales: "LG",
      bio: "Expresidente e impulsor de la creación de la asociación en 1997.",
      desde: "1997"
    }
  ],

  /* ----------------------------------------------------------------------
     9. Libro de socios y equipo de arquería
     ----------------------------------------------------------------------
     Agregar nombres reales. categoria: Comisión Directiva | Socios fundadores |
     Equipo de arquería | Socios activos | Socios honorarios
     ---------------------------------------------------------------------- */
  socios: [
    { nombre: "Carlos Polliotto", categoria: "Comisión Directiva", detalle: "Presidente", badge: "CD" },
    { nombre: "Oscar Trucco", categoria: "Comisión Directiva", detalle: "Vicepresidente", badge: "CD" },
    { nombre: "Lorenzo Gastaldi", categoria: "Socios fundadores", detalle: "Fundador · expresidente · tesorero", badge: "Fundador" },
    { nombre: "Javier Boretti", categoria: "Equipo de arquería", detalle: "Equipo 2017 · Raso 18 m Senior", badge: "2017" },
    { nombre: "Milton Boretti", categoria: "Equipo de arquería", detalle: "Equipo 2017 · Recurvo Olímpico", badge: "2017" },
    { nombre: "Ayrton Boretti", categoria: "Equipo de arquería", detalle: "Equipo 2017 · Recurvo Olímpico", badge: "2017" },
    { nombre: "Pablo Bianchi", categoria: "Equipo de arquería", detalle: "Equipo 2017 · Raso 18 m Escuela", badge: "2017" },
    { nombre: "Jimena Giletta", categoria: "Equipo de arquería", detalle: "Equipo 2017 · Raso 18 m Escuela", badge: "2017" },
    { nombre: "Fabrizio De Biaggio", categoria: "Equipo de arquería", detalle: "Equipo 2017 · Recurvo Olímpico", badge: "2017" },
    { nombre: "María José Pecchio", categoria: "Equipo de arquería", detalle: "Equipo 2017 · Raso 18 m Escuela", badge: "2017" },
    { nombre: "Silvana Negri", categoria: "Equipo de arquería", detalle: "Equipo 2017 · Raso 18 m Escuela", badge: "2017" },
    { nombre: "Guillermo Casalis", categoria: "Equipo de arquería", detalle: "Equipo 2017 · Recurvo Olímpico", badge: "2017" },
    { nombre: "Juan Pablo De la Calle", categoria: "Equipo de arquería", detalle: "Equipo 2017 · Recurvo Olímpico", badge: "2017" }
  ],

  /* ----------------------------------------------------------------------
     10. Beneficios de asociarse
     ---------------------------------------------------------------------- */
  beneficios: [
    { titulo: "Actividades culturales", texto: "Charlas, presentaciones, cine y encuentros sobre la historia y la cultura piamontesa." },
    { titulo: "Escuela de Arquería", texto: "Entrenamientos, torneos sociales y representación de la institución en competencias." },
    { titulo: "Cursos y talleres", texto: "Lengua piamontesa, cocina tradicional, genealogía y otras propuestas para socios." },
    { titulo: "Salón para celebrar", texto: "Condiciones preferenciales para alquilar el salón en cumpleaños, reuniones y eventos familiares." },
    { titulo: "Mesa compartida", texto: "Cenas, almuerzos y celebraciones del calendario piamontés a lo largo del año." },
    { titulo: "Red de familias", texto: "Un espacio para encontrar apellidos, historias y vínculos con otras familias de la colectividad." },
    { titulo: "Archivo y memoria", texto: "Participación en la recuperación de fotos, documentos y relatos de las familias socias." },
    { titulo: "Solidaridad", texto: "Acciones comunitarias y acompañamiento a instituciones de Villa María." }
  ],

  /* ----------------------------------------------------------------------
     11. Preguntas frecuentes
     ---------------------------------------------------------------------- */
  preguntas: [
    {
      pregunta: "¿Quién puede asociarse?",
      respuesta: "Toda persona interesada en la cultura piamontesa y en la historia de la colectividad, sea o no descendiente directa de piamonteses. La asociación es abierta a la comunidad."
    },
    {
      pregunta: "¿Cómo me hago socio?",
      respuesta: "Escribinos por el formulario de contacto o acercate a la sede. Te contamos las categorías de socio, el valor de la cuota y las actividades incluidas. La solicitud se aprueba en la comisión directiva."
    },
    {
      pregunta: "¿Necesito saber piamontés?",
      respuesta: "No. La lengua es una parte importante de nuestra identidad, pero no un requisito. Hay cursos y espacios para aprender desde cero, y también para quienes quieren recuperar lo que escucharon en la infancia."
    },
    {
      pregunta: "¿Puedo alquilar el salón sin ser socio?",
      respuesta: "Sí, sujeto a disponibilidad y a las condiciones de uso. Los socios tienen prioridad y valores preferenciales. Escribinos con la fecha, la cantidad de invitados y el tipo de evento para recibir una propuesta."
    },
    {
      pregunta: "¿Cómo busco mis antepasados piamonteses?",
      respuesta: "El punto de partida es reunir nombres, fechas y lugares, y después buscar en FamilySearch, en las actas civiles y parroquiales y en los registros de inmigración. En la sección de historia compartimos una guía básica y el enlace al árbol genealógico global."
    },
    {
      pregunta: "¿Puedo colaborar con fotos o documentos?",
      respuesta: "Sí. Recibimos fotografías, cartas, partidas, objetos y relatos familiares. El material se revisa y se incorpora al archivo con el nombre del aportante o en forma anónima, según prefieras."
    }
  ],

  /* ----------------------------------------------------------------------
     12. Preguntas del salón
     ---------------------------------------------------------------------- */
  preguntasSalon: [
    {
      pregunta: "¿Qué incluye el alquiler del salón?",
      respuesta: "El uso del salón, mesas y sillas, cocina, sonido y personal de servicio según la propuesta. El menú, la decoración y los servicios adicionales se acuerdan en la visita."
    },
    {
      pregunta: "¿Con cuánta anticipación conviene reservar?",
      respuesta: "Recomendamos consultar con al menos dos meses de anticipación, especialmente para los meses de mayor demanda. Las fechas se confirman con una seña."
    },
    {
      pregunta: "¿Se puede llevar catering propio?",
      respuesta: "El salón cuenta con servicio de cocina propio. Consultanos por opciones especiales, restricciones alimentarias y menús para invitados con necesidades particulares."
    },
    {
      pregunta: "¿Hay estacionamiento?",
      respuesta: "La sede se encuentra en Villa María y cuenta con opciones de estacionamiento en las inmediaciones. Te enviamos las indicaciones al confirmar la visita."
    },
    {
      pregunta: "¿Se puede visitar el salón antes de reservar?",
      respuesta: "Sí. Coordinamos una visita para que conozcas el espacio, revises la capacidad y conversemos sobre tu evento. Escribinos por el formulario o por WhatsApp."
    }
  ],

  /* ----------------------------------------------------------------------
     13. Fuentes y archivo
     ---------------------------------------------------------------------- */
  fuentes: [
    {
      titulo: "Municipalidad de Villa María",
      detalle: "«Se conformó la nueva Comisión Directiva de la Asociación Civil Familia Piamontesa», 13 de noviembre de 2024.",
      enlace: "https://www.villamaria.gob.ar/novedades/2024/11/13/se-conformo-la-nueva-comision-directiva-de-la-asociacion-civil-familia-piamontesa"
    },
    {
      titulo: "Villa María Ya",
      detalle: "«Noi parloma piemontèis: la lengua piamontesa ya es patrimonio cultural de Villa María», 29 de noviembre de 2023.",
      enlace: "https://villamariaya.com/la-lengua-piamontesa-fue-declarada-como-patrimonio-cultural-de-villa-maria/"
    },
    {
      titulo: "Radio Estación",
      detalle: "«Arquería: importantes premiaciones de la Asociación Civil Familia Piamontesa», 1 de agosto de 2017.",
      enlace: "https://www.radioestacion.com.ar/arqueria-importantes-premiaciones-de-la-asociacion-civil-familia-piemontesa/"
    },
    {
      titulo: "Federación de Asociaciones Piamontesas de Argentina (FAPA)",
      detalle: "Antecedentes de la declaración de la lengua piamontesa como patrimonio cultural.",
      enlace: "https://fapa.org.ar"
    }
  ]
};
