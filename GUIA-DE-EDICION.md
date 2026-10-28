# Guía de edición

Esta guía está pensada para actualizar el sitio **sin conocimientos de programación**. Todos los
contenidos que cambian con frecuencia —contacto, eventos, menús, autoridades, socios y preguntas
frecuentes— están reunidos en un solo archivo:

> **`assets/js/datos.js`**

Se puede abrir con el **Bloc de notas**, con **Notepad++** o, mejor, con **Visual Studio Code**.
Después de guardar, recargar el sitio con `Ctrl + F5`.

---

## 1. Reglas básicas para no romper el archivo

`datos.js` es una lista de datos. Hay tres reglas simples:

1. **Las comillas no se tocan.** Cada texto va entre comillas dobles: `"así"`.
2. **Las comas separan elementos.** Cada línea de datos termina con una coma, menos la última de
   cada lista.
3. **Los acentos y la ñ son bienvenidos.** El archivo está guardado en UTF-8.

Ejemplo correcto:

```js
{ nombre: "Carlos Polliotto", categoria: "Comisión Directiva", detalle: "Presidente", badge: "CD" },
{ nombre: "Oscar Trucco", categoria: "Comisión Directiva", detalle: "Vicepresidente", badge: "CD" }
```

- La **primera** línea lleva coma al final porque sigue otra.
- La **última** no lleva coma.

Si algo deja de funcionar después de editar, casi siempre es una coma de más, una coma que falta o
una comilla sin cerrar. Se puede probar el archivo con:

```bash
node --check assets/js/datos.js
```

También conviene hacer una copia de `datos.js` antes de cambios grandes.

---

## 2. Datos de contacto y redes

Al comienzo de `datos.js`, dentro de `contacto`:

```js
contacto: {
  email: "correo@institucion.org",
  telefono: "+54 9 353 000 0000",
  whatsapp: "5493530000000",
  direccion: "Calle 000, Villa María, Córdoba",
  horario: "Atención en sede: martes y jueves de 18 a 20 h",
  facebook: "https://www.facebook.com/...",
  instagram: "https://www.instagram.com/...",
  familysearch: "https://www.familysearch.org/es/global",
  fapa: "https://fapa.org.ar",
  mapa: "https://www.google.com/maps?q=DIRECCION&output=embed"
}
```

- **`whatsapp`** va solo con números, con código de país y sin `+`, espacios ni guiones.
- **`mapa`** se obtiene en Google Maps: buscar la dirección → *Compartir* → *Insertar un mapa* →
  copiar el valor de `src` del código que ofrece Google.
- Al cambiar el correo o el teléfono, el sitio actualiza automáticamente los enlaces del pie, de la
  página de contacto y de los formularios, **siempre que JavaScript esté activo**.
- Para que los datos también se vean sin JavaScript, se pueden reemplazar a mano las apariciones
  del correo y del teléfono en los archivos `.html` (buscar y reemplazar en los ocho archivos).
  No es obligatorio para el funcionamiento normal.

El bloque **“Datos en actualización”** aparece en `contacto.html` y en el pie de todas las páginas.
Cuando la información esté confirmada, se puede borrar ese párrafo y la línea
`<span>Datos institucionales en actualización</span>` del pie.

---

## 3. Eventos y agenda

Los eventos están en la lista `eventos`. Cada uno tiene esta forma:

```js
{
  id: "nombre-corto-sin-espacios",
  titulo: "Nombre del encuentro",
  categoria: "gastronomia",
  categoriaNombre: "Gastronomía",
  fecha: "2027-03-20T20:30:00-03:00",
  fechaTexto: "Sábado 20 de marzo",
  hora: "20:30",
  lugar: "Salón de la Familia Piamontesa",
  descripcion: "Texto breve que aparece en la tarjeta.",
  detalle: "Texto más largo que aparece al abrir «Ver detalle».",
  soloSocios: false,
  precio: "Entrada libre",
  cupo: "Sin inscripción",
  imagen: "assets/img/salon.jpg",
  destacado: false
}
```

### Campos

| Campo | Qué poner |
|---|---|
| `id` | Identificador único, en minúsculas y con guiones. No repetirlo. |
| `categoria` | Solo uno de estos valores: `gastronomia`, `deportes`, `cultura`, `comunidad`. |
| `categoriaNombre` | El nombre que se muestra en la etiqueta: `Gastronomía`, `Arquería`, `Cultura`, `Comunidad`. |
| `fecha` | Formato `AAAA-MM-DDTHH:MM:00-03:00` (hora de Argentina). |
| `fechaTexto` | Cómo se lee la fecha: `Sábado 20 de marzo`. |
| `hora` | Solo la hora: `20:30`. |
| `soloSocios` | `true` o `false` (sin comillas). |
| `destacado` | `true` para que la tarjeta se vea más grande en la portada. Conviene dejar uno solo. |
| `imagen` | Ruta dentro de `assets/img/`. Si no hay foto, usar una de las existentes. |

Los filtros de la página de eventos se generan solos a partir de las categorías. No hay que tocar
el HTML.

### Agregar un evento

1. Copiar un bloque completo, desde `{` hasta `},` (incluida la coma final).
2. Pegarlo antes del corredor `]` que cierra la lista `eventos`.
3. Cambiar `id`, título, fecha y demás datos.
4. Asegurarse de que el bloque anterior termine con coma.

### Borrar un evento

Borrar el bloque completo, desde `{` hasta `},`. Si era el último, revisar que el nuevo último
bloque no quede con coma final (aunque JavaScript tolera una coma final, es mejor evitarla).

### Orden

El sitio ordena los eventos por fecha automáticamente. No hace falta ordenarlos a mano. Los eventos
con fechas pasadas siguen apareciendo: conviene borrarlos o actualizarlos.

---

## 4. Menús del salón

En la lista `menus`, cada menú tiene tres bloques (`Para empezar`, `Platos principales`, `Postres`)
y cada plato se escribe así:

```js
{ nombre: "Bagna cauda", desc: "Salsa tibia de ajo, anchoas y aceite, con verduras de estación" }
```

- `nombre`: el plato.
- `desc`: una aclaración breve.
- `precio` y `minimo` son textos libres. Mientras no estén definidos, dejar
  `"Valor a consultar por persona"` y `"Mínimo 30 personas"`.
- `destacado: true` marca un menú como “El clásico”. Conviene que haya uno solo.

El formulario de reserva del salón toma los nombres de los menús automáticamente. Si se agrega o
renombra un menú, la lista del formulario se actualiza sola.

---

## 5. Comisión directiva

En `comision`, cada persona tiene:

```js
{
  nombre: "Nombre y apellido",
  cargo: "Presidente",
  iniciales: "NN",
  bio: "Una o dos líneas sobre su rol.",
  desde: "2024"
}
```

Las iniciales se usan en el círculo del retrato. Si se borran, el sitio las calcula solo.

Para **agregar un vocal**, copiar un bloque y completar los datos. Para **quitar** a alguien,
borrar el bloque completo. La página de inicio muestra las tres primeras personas de la lista y la
página “La sociedad” muestra todas.

---

## 6. Libro de socios

En la lista `socios`:

```js
{ nombre: "Nombre y apellido", categoria: "Socios activos", detalle: "Desde 2019", badge: "Socio" }
```

- `categoria` agrupa y genera los botones de filtro. Se puede usar, por ejemplo:
  `Comisión Directiva`, `Socios fundadores`, `Equipo de arquería`, `Socios activos`,
  `Socios honorarios`.
- `detalle` es la línea gris debajo del nombre.
- `badge` es la etiqueta corta de la derecha. Puede quedar vacío: `badge: ""`.

**Importante:** publicar nombres de personas requiere su autorización. Si no hay autorización,
usar solo autoridades y cargos públicos, o reemplazar la lista por una invitación a sumarse.

El contador (“13 nombres”) y el buscador se actualizan automáticamente.

---

## 7. Preguntas frecuentes y beneficios

- `preguntas`: las de la página “La sociedad” y la portada.
- `preguntasSalon`: las de la página del salón.
- `beneficios`: las ocho tarjetas de “Lo que se abre cuando te sumás”.

Cada pregunta tiene `pregunta` y `respuesta`. Cada beneficio tiene `titulo` y `texto`.
Se pueden agregar o quitar bloques; el diseño se acomoda.

---

## 8. Formularios: correo o Formspree

### Cómo funcionan ahora

Los formularios abren el programa de correo del visitante con todos los datos ya escritos. No se
guarda nada en el sitio. Si el visitante no tiene correo configurado, el envío no se completa.

### Recibir consultas con Formspree (recomendado)

1. Crear una cuenta gratuita en <https://formspree.io>.
2. Crear un formulario y copiar el endpoint, similar a:
   `https://formspree.io/f/abcdwxyz`.
3. En el HTML de cada página con formulario (`socios.html`, `salon.html`, `contacto.html` y el
   boletín del pie de todas las páginas), buscar la etiqueta `<form` y:
   - quitar el atributo `data-form`;
   - agregar `action="https://formspree.io/f/abcdwxyz"` y `method="POST"`.
4. Probar un envío real.

Ejemplo:

```html
<form class="form" action="https://formspree.io/f/abcdwxyz" method="POST">
```

Al quitar `data-form`, el sitio deja de interceptar el envío y el formulario se envía a Formspree.
Los nombres de los campos (`nombre`, `email`, `mensaje`, etc.) llegan tal cual al correo.

> Revisar la política de privacidad del servicio y avisar en el formulario qué se hace con los
> datos. Para un sitio institucional conviene sumar una frase breve de consentimiento.

---

## 9. Cambiar fotos

Las imágenes están en `assets/img/`. La forma más simple es **reemplazar un archivo por otro con el
mismo nombre**, por ejemplo `salon.jpg` por una foto real del salón.

| Archivo | Dónde se usa |
|---|---|
| `hero-langhe.jpg` | Portada principal |
| `historia-inmigrantes.jpg` | Historia y charla de ciudadanía |
| `historia-vendimia.jpg` | Presentación y curso de piamontés |
| `villa-maria.jpg` | Página de historia y Día del Inmigrante |
| `arqueria.jpg` | Escuela de Arquería |
| `salon.jpg` | Salón, menús y cena de fin de año |
| `salon-vintage.jpg` | Galería del salón |
| `comida-*.jpg` | Platos y galería gastronómica |
| `emblema.svg` | Sello de la marca |
| `favicon.svg` | Ícono de la pestaña |

Recomendaciones:

- Formato JPG para fotos, PNG o SVG para logos.
- Ancho entre 1200 y 1600 px; las fotos de portada pueden llegar a 1920 px.
- Peso ideal: menos de 300 KB por imagen. Se puede comprimir en <https://squoosh.app>.
- Mantener una proporción parecida a la original para que el recorte no sorprenda.
- Si se cambia el nombre del archivo, actualizar la ruta en `datos.js` (eventos) o en el HTML
  (fotos fijas de las páginas).
- Actualizar el **texto alternativo** (`alt="..."`) para describir la foto.
- Si la imagen no es propia, agregar autor y licencia en `creditos.html`.

Las fotos actuales del salón son **ilustrativas**. Conviene reemplazarlas por fotos reales y quitar
la leyenda “Imagen ilustrativa” cuando corresponda.

---

## 10. Cambiar textos de las páginas

Los textos largos (historia, presentación, descripciones de secciones) están en los archivos
`.html`. Para editar:

1. Abrir el archivo de la página, por ejemplo `historia.html`.
2. Buscar el texto con `Ctrl + F`.
3. Reemplazar solo el contenido entre las etiquetas, sin borrar las etiquetas:

```html
<h2>Una historia <em>en fechas.</em></h2>
<p>Estas son algunas de las marcas de la colectividad...</p>
```

- `<h1>` es el título principal: debe haber **uno solo por página**.
- `<h2>` son los títulos de sección.
- `<p>` son párrafos.
- `<em>` pone una parte en cursiva.
- No hace falta entender todo el HTML: alcanza con cambiar el texto y conservar las etiquetas.

Para cambios de estilo (colores, tamaños, espacios) se edita `assets/css/estilos.css`. Los colores
principales están al comienzo del archivo, en `:root`:

```css
--vino: ...
--verde: ...
--oro: ...
--papel: ...
```

---

## 11. Probar antes de publicar

1. Abrir el sitio con `python -m http.server 4321` o con Live Server.
2. Recorrer las seis páginas en computadora y en celular.
3. Probar:
   - el menú móvil (botón de tres líneas);
   - el buscador y los filtros del libro de socios;
   - los filtros de eventos y el botón “Ver detalle”;
   - los menús y el formulario del salón;
   - el formulario de contacto y el enlace de WhatsApp;
   - el mapa;
   - los enlaces del pie y de las migas de pan.
4. Revisar que no haya textos de ejemplo (“a confirmar”, “consultar valor”, fechas de 2026).
5. Publicar los cambios.

### Errores frecuentes

| Síntoma | Causa probable |
|---|---|
| La página queda en blanco o desaparecen los eventos | Error de sintaxis en `datos.js` (coma o comilla). |
| Un evento no aparece | `fecha` mal escrita o bloque fuera de la lista. |
| El filtro no muestra nada | `categoria` distinta de las cuatro permitidas. |
| El formulario abre el correo pero llega vacío | El cliente de correo no está configurado. |
| La foto no aparece | Ruta o nombre de archivo incorrecto. Respetar mayúsculas y minúsculas. |
| Los cambios no se ven | Caché del navegador: `Ctrl + F5`. |

---

## 12. Publicar los cambios

El sitio está en <https://mativ93.github.io/familia-piamontesa-villa-maria/> y se actualiza solo
cuando se sube un cambio a la rama `main` del repositorio
<https://github.com/mativ93/familia-piamontesa-villa-maria>. GitHub Pages tarda alrededor de un
minuto en reflejar la nueva versión.

### Con GitHub desde el navegador

1. Entrar al repositorio.
2. Abrir el archivo que se quiere cambiar (por ejemplo `assets/js/datos.js`).
3. Hacer clic en el lápiz.
4. Pegar el contenido actualizado.
5. *Commit changes*.
6. Esperar un minuto y recargar el sitio.

### Con GitHub Desktop

1. Guardar los cambios en la carpeta local.
2. Abrir GitHub Desktop: los archivos modificados aparecen a la izquierda.
3. Escribir un resumen, por ejemplo “Actualizar agenda de noviembre”.
4. *Commit to main* y luego *Push origin*.

---

## 13. Checklist rápido para cada actualización

- [ ] Los datos de contacto están actualizados.
- [ ] La agenda no tiene eventos vencidos ni fechas de ejemplo.
- [ ] Los menús y precios coinciden con lo que se ofrece.
- [ ] La comisión directiva está vigente.
- [ ] Los nombres publicados cuentan con autorización.
- [ ] Las fotos son actuales y tienen autor/licencia.
- [ ] Se probaron los formularios y el mapa.
- [ ] Se revisó el sitio en el celular.
- [ ] Se actualizó el año del pie si cambió el año.

---

¿Dudas sobre algún cambio? Lo más seguro es duplicar el archivo, probar en una copia y volver
atrás si algo no sale como se esperaba.
