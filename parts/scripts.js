// JAVASCRIPT PRINCIPAL - HERMANDAD DE LA BORRIQUITA DE FERNÁN NÚÑEZ

// DATOS DE NOTICIAS
const newsData = {
  1: {
    kicker: 'Cultos y Liturgia',
    date: '12 Marzo, 2026',
    title: 'Cultos de Cuaresma de nuestra Hermandad',
    image: 'images/noticia-01.jpg',
    body: 'Nuestra Hermandad convoca a todos sus hermanos, fieles y devotos a la celebración del Solemne Triduo en honor a Nuestro Padre Jesús de los Reyes en su Entrada Triunfal en Jerusalén. Las eucaristías darán comienzo a las 20:00 horas en el altar mayor de la Parroquia de Santa Marina de Aguas Santas, presididas por el párroco y director espiritual. Rogamos la asistencia con medalla corporativa.'
  },
  2: {
    kicker: 'Domingo de Ramos',
    date: '05 Marzo, 2026',
    title: 'Preparativos para el Domingo de Ramos',
    image: 'images/noticia-02.jpg',
    body: 'El equipo de priostía y mayordomía se encuentra inmerso en los trabajos preparatorios para la salida procesional. Se ha iniciado la limpieza de la orfebrería del paso de palio de María Santísima del Rosario, la colocación de cera pura de abeja y la preparación de las andas del Señor de los Reyes. Agradecemos la desinteresada labor de todos los hermanos colaboradores.'
  },
  3: {
    kicker: 'Patrimonio Cofrade',
    date: '28 Febrero, 2026',
    title: 'Presentación del cartel de Semana Santa',
    image: 'images/noticia-03.jpg',
    body: 'En un solemne acto celebrado en el salón de actos parroquial, ha sido desvelada la obra artística que ilustra la Semana Santa y la estación de penitencia de nuestra corporación para este año. La obra destaca por su calidez lumínica y la expresividad de la mirada de Jesús entre las palmas en su caminar por las calles de Fernán Núñez.'
  },
  4: {
    kicker: 'Secretaría',
    date: '15 Febrero, 2026',
    title: 'Convocatoria de Cabildo General Ordinario',
    image: 'images/noticia-04.jpg',
    body: 'Por orden del Hermano Mayor y de conformidad con nuestras Santas Reglas, se cita a todos los hermanos mayores de dieciocho años al Cabildo General Ordinario de Cuentas, Salida y Proyectos que tendrá lugar en la casa de hermandad, en primera convocatoria a las 20:30 h y segunda a las 21:00 h.'
  },
  5: {
    kicker: 'Devoción y Culto',
    date: '01 Febrero, 2026',
    title: 'Actos y cultos en honor de nuestros Titulares',
    image: 'images/noticia-05.jpg',
    body: 'Durante el próximo fin de semana se celebrará el Devoto Besapiés a Nuestro Padre Jesús de los Reyes y solemne besamanos a María Santísima del Rosario. El templo permanecerá abierto ininterrumpidamente de 10:00 h a 20:30 h para la veneración de todos los fieles de Fernán Núñez y pueblos hermanos.'
  },
  6: {
    kicker: 'Mayordomía',
    date: '20 Enero, 2026',
    title: 'Reparto de Papeletas de Sitio y Palmas',
    image: 'images/noticia-01.jpg',
    body: 'Se establece el calendario oficial para la expedición de papeletas de sitio para los hermanos que deseen realizar la estación de penitencia en los tramos de nazarenos, insignias, costaleros o portando palmas rizadas. El reparto presencial se efectuará en la sede de la hermandad en horario de tarde.'
  }
};

// DATOS DE TITULARES
const titularesData = {
  jesus: {
    kicker: 'Paso de Misterio',
    title: 'Nuestro Padre Jesús de los Reyes en su Entrada Triunfal en Jerusalén',
    image: 'images/jesus-reyes.jpg',
    body: 'La sagrada imagen de Nuestro Padre Jesús de los Reyes representa el momento evangélico de la Entrada Triunfal en Jerusalén a lomos de un pollino, aclamado por el pueblo con ramas de olivo y palmas. Es una talla en madera policromada de notable valor artístico y honda unción sagrada, caracterizada por la serenidad y dulzura de su rostro, con la mirada levantada bendiciendo a Fernán Núñez. Procesiona sobre un imponente paso de misterio acompañado por el grupo escultórico de discípulos y niños hebreos.'
  },
  virgen: {
    kicker: 'Paso de Palio',
    title: 'María Santísima del Rosario',
    image: 'images/virgen-rosario.jpg',
    body: 'María Santísima del Rosario es la Madre y protectora de nuestra Hermandad. Imagen dolorosa de candelero para vestir, de conmovedora belleza y aflicción contenida, posee una mirada suavemente inclinada y lágrimas de cristal que reflejan el dolor de la Pasión y la esperanza de la Resurrección. Procesiona bajo suntuoso paso de palio con orfebrería plateada y manto bordado, llevando en sus manos el Santo Rosario que da nombre a su advocación.'
  }
};

// DATOS DE LA GALERÍA Y LIGHTBOX
const galleryData = [
  { src: 'images/galeria-01.jpg', title: 'Salida Procesional', category: 'Domingo de Ramos' },
  { src: 'images/galeria-02.jpg', title: 'Altar de Cultos', category: 'Cultos' },
  { src: 'images/galeria-03.jpg', title: 'Reina del Rosario bajo palio', category: 'Domingo de Ramos' },
  { src: 'images/galeria-04.jpg', title: 'El Cortejo de Palmas y Niños', category: 'Vida de Hermandad' },
  { src: 'images/galeria-05.jpg', title: 'Bendición de Palmas en Santa Marina', category: 'Actos' },
  { src: 'images/galeria-01.jpg', title: 'Traslado a los Pasos Procesionales', category: 'Traslados' }
];

let currentLightboxIndex = 0;

// CABECERA SCROLL Y BOTÓN VOLVER ARRIBA
window.addEventListener('scroll', function() {
  const header = document.getElementById('mainHeader');
  const backToTop = document.getElementById('backToTopBtn');
  
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }

  // Actualizar enlace activo en navegación
  highlightNavOnScroll();
});

document.getElementById('backToTopBtn').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// HIGHLIGHT NAVEGACIÓN ACTIVA
function highlightNavOnScroll() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  let currentId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentId) {
      link.classList.add('active');
    }
  });
}

// CONTROL MENÚ MÓVIL
const openMobileBtn = document.getElementById('openMobileNav');
const mobileNavDrawer = document.getElementById('mobileNavDrawer');
const mobileOverlay = document.getElementById('mobileDrawerOverlay');

openMobileBtn.addEventListener('click', function() {
  mobileNavDrawer.classList.add('active');
  mobileOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

function closeMobileNav() {
  mobileNavDrawer.classList.remove('active');
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// CONTROL GENERAL DE MODALES
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function handleOverlayClick(event, modalId) {
  if (event.target.id === modalId) {
    closeModal(modalId);
  }
}

// ABRIR DETALLE DE NOTICIA
function openArticleModal(id) {
  const item = newsData[id];
  if (!item) return;

  document.getElementById('noticiaModalKicker').textContent = item.kicker;
  document.getElementById('noticiaModalDate').textContent = item.date;
  document.getElementById('noticiaModalTitle').textContent = item.title;
  document.getElementById('noticiaModalImg').src = item.image;
  document.getElementById('noticiaModalImg').alt = item.title;
  document.getElementById('noticiaModalBody').innerHTML = `<p>${item.body}</p><p style="margin-top: 1rem;">Para mayor información o cualquier consulta sobre este acto, puede acudir a la Casa de Hermandad o enviar un correo electrónico a secretaría.</p>`;

  openModal('modalNoticia');
}

// EXPANDIR / COLAPSAR NOTICIAS
let allNewsExpanded = false;
function toggleAllNews() {
  const extraNews = document.querySelectorAll('.extra-news');
  const btn = document.getElementById('toggleNewsBtn');

  allNewsExpanded = !allNewsExpanded;
  extraNews.forEach(card => {
    card.style.display = allNewsExpanded ? 'flex' : 'none';
  });

  btn.textContent = allNewsExpanded ? 'Ver menos noticias' : 'Ver todas las noticias';
}

// ABRIR DETALLE DE SAGRADO TITULAR
function openTitularModal(key) {
  const item = titularesData[key];
  if (!item) return;

  document.getElementById('titularModalKicker').textContent = item.kicker;
  document.getElementById('titularModalTitle').textContent = item.title;
  document.getElementById('titularModalImg').src = item.image;
  document.getElementById('titularModalImg').alt = item.title;
  document.getElementById('titularModalText').innerHTML = `<p>${item.body}</p>`;

  openModal('modalTitular');
}

// FILTRADO DE GALERÍA
function filterGallery(category, clickedBtn) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  clickedBtn.classList.add('active');

  items.forEach(item => {
    const itemCat = item.getAttribute('data-category');
    if (category === 'all' || itemCat === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function showAllGalleryPhotos() {
  const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
  if (allBtn) {
    filterGallery('all', allBtn);
  }
  const galleryElem = document.getElementById('galeria');
  galleryElem.scrollIntoView({ behavior: 'smooth' });
}

// LIGHTBOX VISOR DE FOTOGRAFÍAS
function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightbox();
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const photo = galleryData[currentLightboxIndex];
  if (!photo) return;

  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const counter = document.getElementById('lightboxCounter');

  img.src = photo.src;
  caption.textContent = photo.title + ' — ' + photo.category;
  counter.textContent = `Fotografía ${currentLightboxIndex + 1} de ${galleryData.length}`;
}

function nextLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryData.length;
  updateLightbox();
}

function prevLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryData.length) % galleryData.length;
  updateLightbox();
}

// TECLADO PARA LIGHTBOX Y MODALES
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
    closeMobileNav();
    document.querySelectorAll('.modal-overlay.active').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = '';
  } else if (e.key === 'ArrowRight') {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
      nextLightboxImage();
    }
  } else if (e.key === 'ArrowLeft') {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
      prevLightboxImage();
    }
  }
});

// BUSCADOR EN VIVO
document.getElementById('openSearchBtn').addEventListener('click', function() {
  openModal('modalBuscador');
  setTimeout(() => {
    document.getElementById('liveSearchInput').focus();
  }, 200);
});

const searchableItems = [
  { title: 'Historia de la Hermandad', snippet: 'Orígenes vinculados al Domingo de Ramos en Fernán Núñez...', link: '#historia' },
  { title: 'Nuestro Padre Jesús de los Reyes', snippet: 'Paso de misterio, Entrada triunfal en Jerusalén, talla bendita...', link: '#titulares' },
  { title: 'María Santísima del Rosario', snippet: 'Paso de palio, devoción mariana de Fernán Núñez...', link: '#titulares' },
  { title: 'Estación de Penitencia y Recorrido', snippet: 'Horarios: Salida 11:30h, Carrera Oficial 13:45h, Entrada 15:30h...', link: '#penitencia' },
  { title: 'Cultos y Triduos de Cuaresma', snippet: 'Solemne triduo, besamanos, besapiés y Función Principal...', link: '#cultos' },
  { title: 'Hazte Hermano / Admisión', snippet: 'Formulario de ingreso para nuevos hermanos y cuotas...', link: '#hazte-hermano' },
  { title: 'Caridad y Acción Social', snippet: 'Bolsa de caridad y ayuda a familias vulnerables...', link: '#caridad' },
  { title: 'Galería Fotográfica', snippet: 'Reportajes gráficos del Domingo de Ramos y cultos...', link: '#galeria' }
];

function performSearch() {
  const query = document.getElementById('liveSearchInput').value.trim().toLowerCase();
  const resultsContainer = document.getElementById('searchResultsList');

  if (query.length < 2) {
    resultsContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem; text-align: center;">Escribe al menos 2 letras para iniciar la búsqueda en las secciones, noticias y cultos.</p>';
    return;
  }

  const matches = searchableItems.filter(item => 
    item.title.toLowerCase().includes(query) || item.snippet.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.88rem; text-align: center; padding: 1rem 0;">No se encontraron resultados para "<strong>${query}</strong>".</p>`;
    return;
  }

  let html = '';
  matches.forEach(item => {
    html += `
      <a href="${item.link}" onclick="closeModal('modalBuscador')" style="display: block; padding: 0.85rem; border: 1px solid var(--border-subtle); text-decoration: none; color: inherit; background: var(--bg-primary); transition: background 0.2s ease;">
        <div style="font-weight: 600; font-size: 0.95rem; color: var(--gold-dark);">${item.title}</div>
        <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.25rem;">${item.snippet}</div>
      </a>
    `;
  });
  resultsContainer.innerHTML = html;
}

// ENVÍO DE FORMULARIO HAZTE HERMANO
function handleBrotherSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('hazteHermanoForm');
  const notice = document.getElementById('brotherSuccessNotice');

  form.style.display = 'none';
  notice.style.display = 'block';

  setTimeout(() => {
    form.reset();
  }, 1000);
}

// LOGIN ÁREA DEL HERMANO
function handleMemberLogin(e) {
  e.preventDefault();
  const feedback = document.getElementById('loginFeedback');
  feedback.style.display = 'block';
}
