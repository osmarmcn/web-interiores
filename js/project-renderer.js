/* ===================================
   PROJECT PAGE DYNAMIC RENDERER
   =================================== */

// Obter ID do projeto da URL
function obterIdProjeto() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id')) || 1;
}

// Formatar data
function formatarData(dataISO) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                   'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const data = new Date(dataISO + 'T00:00:00');
    return `${meses[data.getMonth()]} de ${data.getFullYear()}`;
}

// Calcular duração entre datas
function calcularDuracao(dataInicio, dataTermino) {
    const inicio = new Date(dataInicio + 'T00:00:00');
    const termino = new Date(dataTermino + 'T00:00:00');
    const diffTime = Math.abs(termino - inicio);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    return diffMonths === 1 ? '1 mês' : `${diffMonths} meses`;
}

// Gerar ícone SVG baseado no tipo
function gerarIcone(tipo) {
    const icones = {
        layout: '<rect x="5" y="10" width="30" height="25" rx="2"/><path d="M5 18h30"/>',
        light: '<circle cx="20" cy="20" r="12"/><path d="M20 8v4m0 16v4m12-12h-4m-16 0H8"/>',
        premium: '<path d="M10 30h20M15 15l5-5 5 5M20 10v20"/>',
        storage: '<rect x="8" y="8" width="24" height="24" rx="2"/><path d="M8 16h24M16 8v24"/>',
        design: '<path d="M25 5L30 20H45L33 28L38 43L25 35L12 43L17 28L5 20H20L25 5Z"/>',
        art: '<rect x="5" y="5" width="30" height="30" rx="2"/><circle cx="15" cy="15" r="3"/><path d="M25 25l10-10"/>',
        height: '<path d="M20 5v30M15 10l5-5 5 5M15 30l5 5 5-5"/>',
        heritage: '<path d="M20 5L5 15v20h30V15L20 5z"/><rect x="15" y="20" width="10" height="15"/>',
        custom: '<circle cx="20" cy="20" r="15"/><path d="M20 10v20M10 20h20"/>',
        nature: '<path d="M20 5C15 5 10 10 10 15c0 10 10 20 10 20s10-10 10-20c0-5-5-10-10-10z"/>',
        sustainable: '<circle cx="20" cy="20" r="15"/><path d="M20 10v10h10"/>',
        comfort: '<path d="M5 25h30M10 25V15c0-5 5-10 10-10s10 5 10 10v10"/>',
        garden: '<circle cx="20" cy="25" r="10"/><path d="M20 15V5M15 10l5-5 5 5"/>'
    };
    
    return icones[tipo] || icones.design;
}

// Renderizar página do projeto
async function renderizarProjeto() {
    try {
        const response = await fetch('data/projetos.json');
        const data = await response.json();
        const projetoId = obterIdProjeto();
        const projeto = data.projetos.find(p => p.id === projetoId);
        
        if (!projeto) {
            window.location.href = 'index.html#portfolio';
            return;
        }
        
        // Atualizar meta tags
        document.title = `${projeto.titulo} | Carolina Mendes`;
        document.querySelector('meta[name="description"]').setAttribute('content', projeto.subtitulo);
        
        // Renderizar Hero
        renderizarHero(projeto);
        
        // Renderizar Overview
        renderizarOverview(projeto);
        
        // Renderizar Características
        renderizarCaracteristicas(projeto);
        
        // Renderizar Galeria
        renderizarGaleria(projeto);
        
        // Renderizar Desafio & Solução
        renderizarDesafioSolucao(projeto);
        
        // Renderizar Projetos Relacionados
        renderizarProjetosRelacionados(data.projetos, projetoId);
        
    } catch (error) {
        console.error('Erro ao renderizar projeto:', error);
        window.location.href = 'index.html#portfolio';
    }
}

function renderizarHero(projeto) {
    const heroSection = document.querySelector('.project-hero');
    if (!heroSection) return;
    
    heroSection.style.backgroundImage = `url('${projeto.imagemCapa}')`;
    
    const heroContent = heroSection.querySelector('.project-hero-content');
    heroContent.innerHTML = `
        <p class="project-category">${projeto.categoria}</p>
        <h1>${projeto.titulo}</h1>
        <div class="project-meta">
            <div class="project-meta-item">
                <strong>Ano:</strong> <span>${projeto.ano}</span>
            </div>
            <div class="project-meta-item">
                <strong>Área:</strong> <span>${projeto.area}</span>
            </div>
            <div class="project-meta-item">
                <strong>Local:</strong> <span>${projeto.localizacao}</span>
            </div>
        </div>
    `;
}

function renderizarOverview(projeto) {
    const descriptionDiv = document.querySelector('.project-description');
    if (!descriptionDiv) return;
    
    let descricaoHTML = '<h2>Sobre o Projeto</h2>';
    projeto.descricao.forEach(paragrafo => {
        descricaoHTML += `<p>${paragrafo}</p>`;
    });
    
    descriptionDiv.innerHTML = descricaoHTML;
    
    // Renderizar detalhes
    const detailsDiv = document.querySelector('.project-details');
    if (!detailsDiv) return;
    
    const dataInicioFormatada = formatarData(projeto.dataInicio);
    const dataTerminoFormatada = formatarData(projeto.dataTermino);
    const duracaoCalculada = calcularDuracao(projeto.dataInicio, projeto.dataTermino);
    
    detailsDiv.innerHTML = `
        <h3>Detalhes do Projeto</h3>
        
        <div class="detail-item">
            <p class="detail-label">Cliente</p>
            <p class="detail-value">${projeto.cliente}</p>
        </div>
        
        <div class="detail-item">
            <p class="detail-label">Duração</p>
            <p class="detail-value">${duracaoCalculada}</p>
        </div>
        
        <div class="detail-item">
            <p class="detail-label">Início</p>
            <p class="detail-value">${dataInicioFormatada}</p>
        </div>
        
        <div class="detail-item">
            <p class="detail-label">Conclusão</p>
            <p class="detail-value">${dataTerminoFormatada}</p>
        </div>
        
        <div class="detail-item">
            <p class="detail-label">Ano</p>
            <p class="detail-value">${projeto.ano}</p>
        </div>
        
        <div class="detail-item">
            <p class="detail-label">Área Total</p>
            <p class="detail-value">${projeto.area}</p>
        </div>
        
        <div class="detail-item">
            <p class="detail-label">Localização</p>
            <p class="detail-value">${projeto.localizacao}</p>
        </div>
        
        <div class="detail-item">
            <p class="detail-label">Categoria</p>
            <p class="detail-value">${projeto.categoria}</p>
        </div>
        
        <div class="detail-item">
            <p class="detail-label">Serviços</p>
            <p class="detail-value">${projeto.servicos}</p>
        </div>
    `;
}

function renderizarCaracteristicas(projeto) {
    const featuresGrid = document.querySelector('.features-grid');
    if (!featuresGrid) return;
    
    featuresGrid.innerHTML = '';
    
    projeto.caracteristicas.forEach(caracteristica => {
        const featureHTML = `
            <div class="feature-item">
                <div class="feature-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2">
                        ${gerarIcone(caracteristica.icone)}
                    </svg>
                </div>
                <h3>${caracteristica.titulo}</h3>
                <p>${caracteristica.descricao}</p>
            </div>
        `;
        
        featuresGrid.insertAdjacentHTML('beforeend', featureHTML);
    });
}

function renderizarGaleria(projeto) {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    projeto.galeria.forEach((imagem, index) => {
        const imagemHTML = `
            <div class="gallery-item ${imagem.destaque ? 'large' : ''}" data-index="${index}">
                <img src="${imagem.url}" alt="${imagem.alt}">
            </div>
        `;
        
        galleryGrid.insertAdjacentHTML('beforeend', imagemHTML);
    });
    
    // Inicializar lightbox com as imagens do projeto
    inicializarLightbox(projeto.galeria);
}

function renderizarDesafioSolucao(projeto) {
    const csGrid = document.querySelector('.cs-grid');
    if (!csGrid) return;
    
    csGrid.innerHTML = `
        <div class="cs-card">
            <h3>O Desafio</h3>
            <p>${projeto.desafio}</p>
        </div>
        
        <div class="cs-card">
            <h3>A Solução</h3>
            <p>${projeto.solucao}</p>
        </div>
    `;
}

function renderizarProjetosRelacionados(todosOsProjetos, projetoAtualId) {
    const relatedGrid = document.querySelector('.related-grid');
    if (!relatedGrid) return;
    
    // Filtrar projetos relacionados (excluindo o atual)
    const projetosRelacionados = todosOsProjetos
        .filter(p => p.id !== projetoAtualId)
        .slice(0, 3);
    
    relatedGrid.innerHTML = '';
    
    projetosRelacionados.forEach(projeto => {
        const projetoHTML = `
            <div class="portfolio-item">
                <a href="projeto.html?id=${projeto.id}">
                    <div class="portfolio-image">
                        <img src="${projeto.imagemThumb}" alt="${projeto.titulo}">
                        <div class="portfolio-overlay">
                            <span class="view-project">Ver Projeto</span>
                        </div>
                    </div>
                    <div class="portfolio-info">
                        <h3>${projeto.titulo}</h3>
                        <p>${projeto.subtitulo}</p>
                    </div>
                </a>
            </div>
        `;
        
        relatedGrid.insertAdjacentHTML('beforeend', projetoHTML);
    });
}

function inicializarLightbox(galeria) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    let currentImageIndex = 0;
    const images = galeria.map(img => img.url);
    
    // Adicionar evento de clique nas imagens da galeria
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
    
    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImg.src = images[index];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentImageIndex];
    }
    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImg.src = images[currentImageIndex];
    }
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    });
}

// Inicializar na página de projeto
if (window.location.pathname.includes('projeto.html')) {
    document.addEventListener('DOMContentLoaded', renderizarProjeto);
}
