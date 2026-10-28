/* ==========================================================================
   FAMILIA PIAMONTESA · VILLA MARÍA
   Interacciones y renderizado de contenidos
   --------------------------------------------------------------------------
   No requiere librerías externas. Los datos se editan en assets/js/datos.js
   ========================================================================== */
(function () {
  "use strict";

  const FP = window.FP || {};
  const $ = (selector, contexto = document) => contexto.querySelector(selector);
  const $$ = (selector, contexto = document) => Array.from(contexto.querySelectorAll(selector));

  const MESES = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
  const MESES_LARGOS = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  const DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

  const esc = (valor = "") => String(valor)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  const fecha = (iso) => {
    const d = new Date(iso);
    return Number.isNaN(d.getTime()) ? null : d;
  };

  const formatoFecha = (iso) => {
    const d = fecha(iso);
    if (!d) return { dia: "--", mes: "---", texto: "Fecha a confirmar" };
    return {
      dia: String(d.getDate()).padStart(2, "0"),
      mes: MESES[d.getMonth()],
      texto: `${DIAS[d.getDay()]} ${d.getDate()} de ${MESES_LARGOS[d.getMonth()]}`
    };
  };

  const iniciales = (nombre = "") => nombre
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();

  /* ------------------------------------------------------------------------
     Cabecera y navegación
     ------------------------------------------------------------------------ */
  function initCabecera() {
    const header = $("[data-header]");
    if (header) {
      const actualizar = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
      actualizar();
      window.addEventListener("scroll", actualizar, { passive: true });
    }

    const toggle = $("[data-menu-toggle]");
    const panel = $("[data-menu-panel]");
    if (!toggle || !panel) return;

    const cerrar = () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
      panel.hidden = true;
      panel.classList.remove("is-open");
      document.body.classList.remove("menu-abierto");
    };

    const abrir = () => {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Cerrar menú");
      panel.hidden = false;
      panel.classList.add("is-open");
      document.body.classList.add("menu-abierto");
    };

    toggle.addEventListener("click", () => {
      const abierto = toggle.getAttribute("aria-expanded") === "true";
      abierto ? cerrar() : abrir();
    });

    $$("a", panel).forEach((enlace) => enlace.addEventListener("click", cerrar));

    document.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") cerrar();
    });

    document.addEventListener("click", (evento) => {
      if (panel.hidden) return;
      if (panel.contains(evento.target) || toggle.contains(evento.target)) return;
      cerrar();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) cerrar();
    });
  }

  function initNavegacionActiva() {
    const archivo = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    $$("a[href]").forEach((enlace) => {
      const href = enlace.getAttribute("href") || "";
      if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) return;
      const destino = href.split("#")[0].toLowerCase();
      if (destino === archivo || (archivo === "" && destino === "index.html")) {
        enlace.setAttribute("aria-current", "page");
      }
    });
  }

  /* ------------------------------------------------------------------------
     Revelado al hacer scroll
     ------------------------------------------------------------------------ */
  function initRevelar() {
    const elementos = $$(".revelar");
    if (!elementos.length) return;

    if (!("IntersectionObserver" in window)) {
      elementos.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        const retardo = entrada.target.dataset.retardo;
        if (retardo) entrada.target.style.transitionDelay = `${retardo}ms`;
        entrada.target.classList.add("is-visible");
        observador.unobserve(entrada.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    elementos.forEach((el) => observador.observe(el));
  }

  /* ------------------------------------------------------------------------
     Render de eventos
     ------------------------------------------------------------------------ */
  function tarjetaEvento(evento, opciones = {}) {
    const f = formatoFecha(evento.fecha);
    const destacado = opciones.destacar && evento.destacado;
    const socios = evento.soloSocios
      ? `<span class="etiqueta etiqueta--socios">Solo socios</span>`
      : "";

    return `
      <article class="evento${destacado ? " evento--destacado" : ""} revelar" data-categoria="${esc(evento.categoria)}">
        <div class="evento__cabecera">
          <div class="evento__fecha${destacado ? "" : ""}">
            <span class="dia">${f.dia}</span>
            <span class="mes">${f.mes}</span>
          </div>
          <div>
            <div class="evento__etiquetas">
              <span class="etiqueta etiqueta--vino">${esc(evento.categoriaNombre)}</span>
              ${socios}
            </div>
            <p class="evento__hora">${esc(evento.hora)} h · ${esc(evento.lugar)}</p>
          </div>
        </div>
        <div class="evento__cuerpo">
          <h3>${esc(evento.titulo)}</h3>
          <p class="evento__desc">${esc(evento.descripcion)}</p>
          <ul class="evento__meta">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>
              <span>${esc(evento.fechaTexto)}, ${esc(evento.hora)} h</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/></svg>
              <span>${esc(evento.lugar)}</span>
            </li>
          </ul>
          <div class="evento__pie">
            <span class="evento__precio">${esc(evento.precio)}</span>
            <button class="evento__ver" type="button" data-evento="${esc(evento.id)}">Ver detalle <span aria-hidden="true">→</span></button>
          </div>
        </div>
      </article>`;
  }

  function initEventos() {
    const contenedor = $("[data-eventos]");
    if (!contenedor || !Array.isArray(FP.eventos)) return;

    const limite = Number(contenedor.dataset.limite || 0);
    const ordenados = [...FP.eventos].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    const visibles = limite > 0 ? ordenados.slice(0, limite) : ordenados;
    const destacar = contenedor.dataset.destacar === "true";

    contenedor.innerHTML = visibles.map((evento) => tarjetaEvento(evento, { destacar })).join("");
    initRevelar();
    initDialogoEventos();
    initFiltrosEventos();
  }

  function initFiltrosEventos() {
    const barra = $("[data-filtros]");
    const contenedor = $("[data-eventos]");
    if (!barra || !contenedor) return;

    const categorias = [...new Set((FP.eventos || []).map((evento) => evento.categoria))];
    const etiquetas = {};
    (FP.eventos || []).forEach((evento) => { etiquetas[evento.categoria] = evento.categoriaNombre; });

    barra.innerHTML = `
      <button class="filtro" type="button" data-filtro="todos" aria-pressed="true">Todos</button>
      ${categorias.map((categoria) => `
        <button class="filtro" type="button" data-filtro="${esc(categoria)}" aria-pressed="false">${esc(etiquetas[categoria] || categoria)}</button>
      `).join("")}
    `;

    barra.addEventListener("click", (evento) => {
      const boton = evento.target.closest("[data-filtro]");
      if (!boton) return;
      const filtro = boton.dataset.filtro;
      $$(".filtro", barra).forEach((b) => b.setAttribute("aria-pressed", String(b === boton)));

      const tarjetas = $$(".evento", contenedor);
      let visibles = 0;
      tarjetas.forEach((tarjeta) => {
        const coincide = filtro === "todos" || tarjeta.dataset.categoria === filtro;
        tarjeta.hidden = !coincide;
        if (coincide) visibles += 1;
      });

      let vacio = $(".vacio", contenedor);
      if (!visibles) {
        if (!vacio) {
          vacio = document.createElement("p");
          vacio.className = "vacio";
          vacio.textContent = "No hay encuentros en esta categoría por ahora.";
          contenedor.appendChild(vacio);
        }
        vacio.hidden = false;
      } else if (vacio) {
        vacio.hidden = true;
      }
    });
  }

  let dialogo = null;
  let ultimoFoco = null;

  function crearDialogo() {
    if (dialogo) return dialogo;
    dialogo = document.createElement("dialog");
    dialogo.className = "evento-dialogo";
    dialogo.setAttribute("aria-labelledby", "dialogo-titulo");
    dialogo.innerHTML = `
      <div class="dialogo__cabecera">
        <button class="dialogo__cerrar" type="button" data-cerrar-dialogo aria-label="Cerrar detalle del evento">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
        </button>
        <p class="eyebrow" data-dialogo-categoria></p>
        <h2 id="dialogo-titulo" data-dialogo-titulo></h2>
      </div>
      <div class="dialogo__cuerpo">
        <ul class="dialogo__meta" data-dialogo-meta></ul>
        <p class="dialogo__texto" data-dialogo-texto></p>
        <div class="dialogo__acciones" data-dialogo-acciones></div>
      </div>
    `;
    document.body.appendChild(dialogo);

    $("[data-cerrar-dialogo]", dialogo).addEventListener("click", () => dialogo.close());
    dialogo.addEventListener("click", (evento) => {
      if (evento.target === dialogo) dialogo.close();
    });
    dialogo.addEventListener("close", () => {
      if (ultimoFoco) ultimoFoco.focus();
    });

    return dialogo;
  }

  function initDialogoEventos() {
    $$("[data-evento]").forEach((boton) => {
      if (boton.dataset.escuchando) return;
      boton.dataset.escuchando = "1";
      boton.addEventListener("click", () => abrirDialogo(boton.dataset.evento, boton));
    });
  }

  function abrirDialogo(id, origen) {
    const evento = (FP.eventos || []).find((item) => item.id === id);
    if (!evento) return;
    const d = crearDialogo();
    ultimoFoco = origen;

    $("[data-dialogo-categoria]", d).textContent = `${evento.categoriaNombre} · ${evento.fechaTexto}`;
    $("[data-dialogo-titulo]", d).textContent = evento.titulo;
    $("[data-dialogo-meta]", d).innerHTML = `
      <li><strong>Cuándo</strong><span>${esc(evento.fechaTexto)} · ${esc(evento.hora)} h</span></li>
      <li><strong>Dónde</strong><span>${esc(evento.lugar)}</span></li>
      <li><strong>Acceso</strong><span>${esc(evento.precio)} · ${esc(evento.cupo)}</span></li>
      ${evento.soloSocios ? `<li><strong>Modalidad</strong><span>Actividad para socios e invitados</span></li>` : ""}
    `;
    $("[data-dialogo-texto]", d).textContent = evento.detalle || evento.descripcion;
    $("[data-dialogo-acciones]", d).innerHTML = `
      <a class="btn btn--primario" href="contacto.html?motivo=evento&evento=${encodeURIComponent(evento.titulo)}">Consultar por este evento</a>
      <button class="btn btn--fantasma" type="button" data-cerrar-dialogo>Volver</button>
    `;
    $("[data-cerrar-dialogo]", d).focus();
    d.showModal();
  }

  /* ------------------------------------------------------------------------
     Render de menús
     ------------------------------------------------------------------------ */
  function initMenus() {
    const contenedor = $("[data-menus]");
    if (!contenedor || !Array.isArray(FP.menus)) return;

    contenedor.innerHTML = FP.menus.map((menu) => `
      <article class="menu${menu.destacado ? " menu--destacado" : ""} revelar">
        ${menu.destacado ? `<span class="menu__cinta">El clásico</span>` : ""}
        <header class="menu__cabecera">
          <h3>${esc(menu.nombre)}</h3>
          <p>${esc(menu.subtitulo)}</p>
          <span class="menu__precio">${esc(menu.precio)} · ${esc(menu.minimo)}</span>
        </header>
        ${menu.bloques.map((bloque) => `
          <div class="menu__bloque">
            <h4>${esc(bloque.titulo)}</h4>
            <ul>
              ${bloque.platos.map((plato) => `
                <li>${esc(plato.nombre)}<span>${esc(plato.desc)}</span></li>
              `).join("")}
            </ul>
          </div>
        `).join("")}
        <p class="menu__pie">${esc(menu.pie)}</p>
      </article>
    `).join("");

    initRevelar();
  }

  /* ------------------------------------------------------------------------
     Comisión directiva
     ------------------------------------------------------------------------ */
  function initComision() {
    const contenedor = $("[data-comision]");
    if (!contenedor || !Array.isArray(FP.comision)) return;

    contenedor.innerHTML = FP.comision.map((persona) => `
      <article class="persona revelar">
        <div class="persona__monograma" aria-hidden="true">${esc(persona.iniciales || iniciales(persona.nombre))}</div>
        <p class="persona__cargo">${esc(persona.cargo)}</p>
        <h3>${esc(persona.nombre)}</h3>
        <p>${esc(persona.bio)}</p>
      </article>
    `).join("");

    initRevelar();
  }

  /* ------------------------------------------------------------------------
     Libro de socios
     ------------------------------------------------------------------------ */
  function initSocios() {
    const contenedor = $("[data-socios]");
    if (!contenedor || !Array.isArray(FP.socios)) return;

    const categoria = contenedor.dataset.categoria || "";
    const datos = categoria ? FP.socios.filter((socio) => socio.categoria === categoria) : FP.socios;
    contenedor.innerHTML = datos.map((socio) => `
      <article class="socio" data-nombre="${esc(socio.nombre.toLowerCase())}" data-categoria="${esc(socio.categoria)}">
        <span class="socio__inicial" aria-hidden="true">${esc(iniciales(socio.nombre))}</span>
        <span class="socio__datos">
          <span class="socio__nombre">${esc(socio.nombre)}</span>
          <span class="socio__detalle">${esc(socio.categoria)} · ${esc(socio.detalle)}</span>
        </span>
        <span class="socio__badge">${esc(socio.badge || "")}</span>
      </article>
    `).join("");

    const buscador = $("[data-buscador-socios]");
    const filtros = $("[data-filtros-socios]");
    const conteo = $("[data-conteo-socios]");
    let filtroActual = "todos";
    let termino = "";

    const aplicarFiltros = () => {
      let visibles = 0;
      $$(".socio", contenedor).forEach((socio) => {
        const coincideCategoria = filtroActual === "todos" || socio.dataset.categoria === filtroActual;
        const coincideTexto = !termino || socio.dataset.nombre.includes(termino);
        socio.hidden = !(coincideCategoria && coincideTexto);
        if (!socio.hidden) visibles += 1;
      });
      if (conteo) conteo.textContent = `${visibles} ${visibles === 1 ? "nombre" : "nombres"}`;
    };

    if (buscador) {
      buscador.addEventListener("input", () => {
        termino = buscador.value.trim().toLowerCase();
        aplicarFiltros();
      });
    }

    if (filtros) {
      const categorias = [...new Set(FP.socios.map((socio) => socio.categoria))];
      filtros.innerHTML = `
        <button class="filtro" type="button" data-filtro-socio="todos" aria-pressed="true">Todos</button>
        ${categorias.map((cat) => `<button class="filtro" type="button" data-filtro-socio="${esc(cat)}" aria-pressed="false">${esc(cat)}</button>`).join("")}
      `;
      filtros.addEventListener("click", (evento) => {
        const boton = evento.target.closest("[data-filtro-socio]");
        if (!boton) return;
        $$(".filtro", filtros).forEach((b) => b.setAttribute("aria-pressed", String(b === boton)));
        filtroActual = boton.dataset.filtroSocio;
        aplicarFiltros();
      });
    }

    aplicarFiltros();
  }

  /* ------------------------------------------------------------------------
     Beneficios
     ------------------------------------------------------------------------ */
  function initBeneficios() {
    const contenedor = $("[data-beneficios]");
    if (!contenedor || !Array.isArray(FP.beneficios)) return;

    contenedor.innerHTML = FP.beneficios.map((beneficio, indice) => `
      <article class="beneficio revelar">
        <span class="beneficio__num">${String(indice + 1).padStart(2, "0")}</span>
        <h3>${esc(beneficio.titulo)}</h3>
        <p>${esc(beneficio.texto)}</p>
      </article>
    `).join("");

    initRevelar();
  }

  /* ------------------------------------------------------------------------
     Opciones de menú y fechas mínimas
     ------------------------------------------------------------------------ */
  function initOpcionesMenu() {
    if (!Array.isArray(FP.menus)) return;
    $$("select[data-opciones-menu]").forEach((select) => {
      const opcionVacia = select.querySelector('option[value=""]');
      const placeholder = opcionVacia
        ? `<option value="">${esc(opcionVacia.textContent.trim())}</option>`
        : '<option value="">A definir</option>';
      select.innerHTML = placeholder + FP.menus.map((menu) => (
        `<option value="${esc(menu.nombre)}">${esc(menu.nombre)}</option>`
      )).join("");
    });
  }

  function initFechasMinimas() {
    const hoy = new Date();
    const iso = [
      hoy.getFullYear(),
      String(hoy.getMonth() + 1).padStart(2, "0"),
      String(hoy.getDate()).padStart(2, "0")
    ].join("-");
    $$('input[type="date"][data-fecha-min]').forEach((input) => {
      if (!input.min) input.min = iso;
    });
  }

  /* ------------------------------------------------------------------------
     Preguntas frecuentes
     ------------------------------------------------------------------------ */
  function initPreguntas() {
    [["[data-preguntas]", FP.preguntas], ["[data-preguntas-salon]", FP.preguntasSalon]].forEach(([selector, datos]) => {
      const contenedor = $(selector);
      if (!contenedor || !Array.isArray(datos)) return;
      contenedor.innerHTML = datos.map((item, indice) => `
        <details class="faq__item" ${indice === 0 ? "open" : ""}>
          <summary>${esc(item.pregunta)}</summary>
          <p>${esc(item.respuesta)}</p>
        </details>
      `).join("");
    });
  }

  /* ------------------------------------------------------------------------
     Fuentes
     ------------------------------------------------------------------------ */
  function initFuentes() {
    const contenedor = $("[data-fuentes]");
    if (!contenedor || !Array.isArray(FP.fuentes)) return;
    contenedor.innerHTML = FP.fuentes.map((fuente) => `
      <li class="fuente">
        <a href="${esc(fuente.enlace)}" target="_blank" rel="noopener noreferrer">${esc(fuente.titulo)}</a>.
        ${esc(fuente.detalle)}
      </li>
    `).join("");
  }

  /* ------------------------------------------------------------------------
     Datos de contacto en el HTML
     ------------------------------------------------------------------------ */
  function initContacto() {
    if (!FP.contacto) return;
    const c = FP.contacto;

    $$("[data-dato]").forEach((el) => {
      const clave = el.dataset.dato;
      if (c[clave]) el.textContent = c[clave];
    });

    $$("[data-enlace]").forEach((el) => {
      const clave = el.dataset.enlace;
      if (!c[clave]) return;
      if (clave === "email") el.href = `mailto:${c.email}`;
      else if (clave === "telefono") el.href = `tel:${c.telefono.replace(/[^\d+]/g, "")}`;
      else if (clave === "whatsapp") el.href = `https://wa.me/${c.whatsapp}`;
      else el.href = c[clave];
      if (!el.getAttribute("target") && el.href.startsWith("http")) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    });

    $$("[data-mapa]").forEach((iframe) => { iframe.src = c.mapa; });
  }

  /* ------------------------------------------------------------------------
     Formularios (envío por correo)
     ------------------------------------------------------------------------ */
  const ETIQUETAS = {
    nombre: "Nombre y apellido",
    email: "Correo electrónico",
    telefono: "Teléfono",
    motivo: "Motivo de la consulta",
    mensaje: "Mensaje",
    fecha: "Fecha del evento",
    personas: "Cantidad de personas",
    tipo: "Tipo de evento",
    menu: "Menú elegido",
    ascendencia: "Ascendencia / familia",
    evento: "Evento",
    origen: "Página de origen"
  };

  function initFormularios() {
    $$("form[data-form]").forEach((form) => {
      form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        if (!form.reportValidity()) return;

        const datos = new FormData(form);
        const lineas = [];
        datos.forEach((valor, clave) => {
          if (!String(valor).trim()) return;
          lineas.push(`${ETIQUETAS[clave] || clave}: ${valor}`);
        });

        const asunto = form.dataset.asunto || "Consulta desde el sitio web";
        const cuerpo = `${lineas.join("\n")}\n\n— Enviado desde el sitio de la Familia Piamontesa de Villa María`;
        window.location.href = `mailto:${FP.contacto.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

        const aviso = $("[data-form-ok]", form);
        if (aviso) {
          aviso.classList.add("is-visible");
          aviso.setAttribute("tabindex", "-1");
          aviso.focus();
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     Prellenado desde la URL
     ------------------------------------------------------------------------ */
  function initPrefill() {
    const params = new URLSearchParams(location.search);
    if (!params.toString()) return;

    const motivo = params.get("motivo");
    const evento = params.get("evento");
    const menu = params.get("menu");
    const personas = params.get("personas");

    const selects = $$('select[name="motivo"]');
    selects.forEach((select) => {
      if (!motivo) return;
      const valor = motivo === "evento" ? "evento" : motivo;
      if ([...select.options].some((opcion) => opcion.value === valor)) select.value = valor;
    });

    const campoEvento = $('input[name="evento"], textarea[name="mensaje"]');
    if (campoEvento && evento && !campoEvento.value) {
      campoEvento.value = campoEvento.tagName === "TEXTAREA"
        ? `Hola, quisiera consultar por el evento «${evento}».\n\n`
        : evento;
    }

    const campoMenu = $('select[name="menu"]');
    if (campoMenu && menu) {
      const opcion = [...campoMenu.options].find((item) => item.value.toLowerCase() === menu.toLowerCase());
      if (opcion) campoMenu.value = opcion.value;
    }

    const campoPersonas = $('input[name="personas"]');
    if (campoPersonas && personas) campoPersonas.value = personas;
  }

  /* ------------------------------------------------------------------------
     Galería ampliable
     ------------------------------------------------------------------------ */
  function initGaleria() {
    const figuras = $$("[data-ampliar]");
    if (!figuras.length) return;

    let visor = null;
    const abrir = (figura) => {
      if (!visor) {
        visor = document.createElement("dialog");
        visor.className = "evento-dialogo visor";
        visor.innerHTML = `
          <div class="dialogo__cabecera">
            <button class="dialogo__cerrar" type="button" data-cerrar-visor aria-label="Cerrar imagen">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
            </button>
          </div>
          <div class="dialogo__cuerpo"></div>
        `;
        document.body.appendChild(visor);
        $("[data-cerrar-visor]", visor).addEventListener("click", () => visor.close());
        visor.addEventListener("click", (evento) => { if (evento.target === visor) visor.close(); });
      }
      const imagen = $("img", figura);
      const pie = $("figcaption", figura);
      $(".dialogo__cuerpo", visor).innerHTML = `
        <img src="${esc(imagen.currentSrc || imagen.src)}" alt="${esc(imagen.alt)}" style="width:100%;height:auto">
        ${pie ? `<p class="dialogo__texto">${esc(pie.textContent)}</p>` : ""}
      `;
      visor.showModal();
    };

    figuras.forEach((figura) => {
      figura.style.cursor = "zoom-in";
      figura.addEventListener("click", () => abrir(figura));
      figura.setAttribute("tabindex", "0");
      figura.setAttribute("role", "button");
      figura.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" || evento.key === " ") {
          evento.preventDefault();
          abrir(figura);
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     Año actual
     ------------------------------------------------------------------------ */
  function initAnio() {
    $$("[data-anio]").forEach((el) => { el.textContent = new Date().getFullYear(); });
  }

  /* ------------------------------------------------------------------------
     Arranque
     ------------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    initCabecera();
    initNavegacionActiva();
    initRevelar();
    initEventos();
    initMenus();
    initComision();
    initSocios();
    initBeneficios();
    initOpcionesMenu();
    initFechasMinimas();
    initPreguntas();
    initFuentes();
    initContacto();
    initFormularios();
    initPrefill();
    initGaleria();
    initAnio();
  });
})();
