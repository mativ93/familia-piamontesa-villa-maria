# Familia Piamontesa de Villa María · Sitio web

Sitio institucional de la **Asociación Civil Familia Piamontesa de Villa María** (Córdoba, Argentina).
Reúne la historia de la colectividad, la comisión directiva, el libro de socios, la agenda de
actividades, la Escuela de Arquería, el salón de eventos con sus menús y los canales de contacto.

**Sitio publicado:** <https://mativ93.github.io/familia-piamontesa-villa-maria/>
**Repositorio:** <https://github.com/mativ93/familia-piamontesa-villa-maria>

Es un sitio **estático**: no necesita servidor, base de datos ni proceso de compilación. Se puede
publicar gratis en GitHub Pages, Netlify, Cloudflare Pages o cualquier hosting que sirva archivos.

---

## 1. Cómo verlo en la computadora

**Opción simple:** abrir `index.html` con doble clic. Funciona, aunque algunos navegadores
restringen ciertas funciones cuando se abre un archivo local.

**Opción recomendada:** levantar un servidor local desde esta carpeta:

```bash
python -m http.server 4321
```

y visitar <http://127.0.0.1:4321/>.

En Visual Studio Code también se puede usar la extensión **Live Server**.

---

## 2. Estructura del proyecto

```
sociedad-piamontesa-villa-maria/
├── index.html              Portada
├── historia.html           Historia, línea de tiempo y lengua piamontesa
├── socios.html             La sociedad, comisión, libro de socios y formulario de adhesión
├── eventos.html            Agenda, filtros y Escuela de Arquería
├── salon.html              Salón, galería, menús y consulta de reserva
├── contacto.html           Datos de contacto, formulario y mapa
├── creditos.html           Créditos de imágenes, fuentes y licencias
├── 404.html                Página de error
├── favicon.svg
├── assets/
│   ├── css/estilos.css     Todo el diseño visual
│   ├── js/datos.js         CONTENIDO EDITABLE: textos, eventos, menús, socios, contacto
│   ├── js/app.js           Funcionamiento: filtros, fichas, formularios, menú móvil
│   └── img/                Fotografías e ilustraciones
├── GUIA-DE-EDICION.md      Instrucciones paso a paso para actualizar el sitio
└── README.md
```

La mayoría de los cambios de contenido se hacen en **`assets/js/datos.js`**, sin tocar el HTML.
El detalle está en [`GUIA-DE-EDICION.md`](GUIA-DE-EDICION.md).

---

## 3. Antes de publicar: datos que hay que reemplazar

El sitio se construyó con información pública y con **datos de referencia provisorios**. Antes de
difundirlo, la asociación debe revisar y completar:

- [ ] Correo institucional real.
- [ ] Teléfono y WhatsApp reales.
- [ ] Dirección de la sede y horarios de atención.
- [ ] Fechas, horarios y valores de los eventos (los actuales son ejemplos).
- [ ] Precios, capacidad y condiciones del salón.
- [ ] Fotos reales del salón y de las actividades (las actuales son ilustrativas).
- [ ] Nómina completa de socios, con autorización para publicar cada nombre.
- [ ] Composición completa de la comisión directiva (vocales, revisores de cuentas).
- [ ] Enlaces a redes sociales (Instagram está vacío).
- [ ] Dominio o dirección definitiva del sitio.

El texto **“Datos en actualización”** del pie y de la página de contacto se puede quitar una vez
confirmada la información.

> Los hechos históricos incorporados (fundación el 16/03/1997, hermanamiento con Savigliano en
> 2003, declaración de la lengua piamontesa como patrimonio cultural en 2023, autoridades surgidas
> de la asamblea de noviembre de 2024) provienen de fuentes públicas citadas en
> `creditos.html` y en `datos.js` → `fuentes`. Conviene que la asociación los revise igual.

---

## 4. Publicar en GitHub Pages

El sitio **ya está publicado** desde el repositorio `mativ93/familia-piamontesa-villa-maria`.
Cada `push` a la rama `main` actualiza automáticamente la versión pública.

Si alguna vez hay que volver a configurarlo desde cero:

1. Crear un repositorio en GitHub, por ejemplo `familia-piamontesa-villa-maria`.
2. Subir **el contenido de esta carpeta** (no la carpeta contenedora): `index.html`, `assets/`,
   `404.html`, etc.
3. En el repositorio: **Settings → Pages**.
4. En *Build and deployment*, elegir **Deploy from a branch**.
5. Seleccionar la rama `main` y la carpeta `/ (root)`. Guardar.
6. GitHub publica el sitio en `https://USUARIO.github.io/REPOSITORIO/` en uno o dos minutos.

El archivo `.nojekyll` (incluido) evita que GitHub procese el sitio con Jekyll. La página
`404.html` se usa automáticamente como página de error.

### Dominio propio (opcional)

Si la asociación consigue un dominio, en **Settings → Pages → Custom domain** se escribe el
dominio y se configuran los registros DNS que indica GitHub. Después conviene actualizar:

- Las etiquetas `og:image` de cada página (deben ser URL absolutas para que funcionen al compartir).
- Un `<link rel="canonical">` en cada página.
- Un `sitemap.xml` con las URL definitivas.
- El enlace del pie y de los metadatos, si cambia la dirección.

### Actualizar el sitio ya publicado

- **Desde la web de GitHub:** abrir el archivo, usar el lápiz, pegar el cambio y *Commit changes*.
- **Desde la computadora:** editar, guardar y subir los archivos con GitHub Desktop o `git push`.
- Los cambios tardan menos de un minuto en verse. Si no aparecen, recargar con `Ctrl + F5`.

---

## 5. Formularios

Los formularios **no envían datos a un servidor**: arman un correo con la información y abren el
programa de correo del visitante (`mailto:`). Es una solución sin costo y sin backend, pero depende
de que la persona tenga un cliente de correo configurado.

Para recibir las consultas de forma más confiable se puede usar un servicio gratuito como
**Formspree**. El procedimiento está explicado en la guía de edición, sección 8.

---

## 6. Accesibilidad y rendimiento

- HTML semántico, un solo `h1` por página y jerarquía de títulos revisada.
- Navegación por teclado, enlace “Saltar al contenido”, foco visible y diálogos nativos.
- Contraste de color corregido según Lighthouse (accesibilidad 100 en las páginas principales).
- Imágenes con texto alternativo, dimensiones declaradas y carga diferida fuera de pantalla.
- Fotografías optimizadas (el sitio completo pesa alrededor de 3 MB, sin contar las fuentes).
- Solo hay una dependencia externa: Google Fonts (Cormorant Garamond e Inter).

Para verificar después de un cambio importante:

```bash
node --check assets/js/app.js
node --check assets/js/datos.js
```

---

## 7. Créditos

Las fotografías históricas y de paisaje provienen de Wikimedia Commons y se usan con licencias
Creative Commons o de dominio público. El detalle, los autores y las licencias están en
[`creditos.html`](creditos.html). Si se reemplazan por fotos propias de la asociación, conviene
actualizar esa página y conservar el consentimiento de las personas retratadas.

El código y el diseño pueden usarse y modificarse libremente por la asociación. Los textos
institucionales y las imágenes propias quedan bajo la decisión de la asociación.
