/* ===================================
   PORTFOLIO DYNAMIC LOADER JAVASCRIPT
   =================================== */

let projetosData = null;

// Carregar dados dos projetos
async function carregarProjetos() {
    try {
        const response = await fetch('data/projetos.json');
        const data = await response.json();
        projetosData = data.projetos;
        return projetosData;
    } catch (error) {
        console.error('Erro ao carregar projetos:', error);
        return [];
    }
}

// Renderizar grid de projetos na página principal
async function renderizarPortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (!portfolioGrid) return;
    
    const projetos = await carregarProjetos();
    
    portfolioGrid.innerHTML = '';
    
    projetos.forEach(projeto => {
        const projetoHTML = `
            <a href="projeto.html?id=${projeto.id}" class="portfolio-item" data-project="${projeto.id}">
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
        `;
        
        portfolioGrid.insertAdjacentHTML('beforeend', projetoHTML);
    });
    
    // Aplicar animações de reveal
    aplicarAnimacoesPortfolio();
}

// Aplicar animações aos itens do portfólio
function aplicarAnimacoesPortfolio() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
}

// Inicializar na página principal
if (document.querySelector('.portfolio-grid') && !window.location.pathname.includes('projeto.html')) {
    renderizarPortfolio();
}
