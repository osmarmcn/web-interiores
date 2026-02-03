# Portfolio de Design de Interiores - Carolina Mendes

Um website portfólio profissional, elegante e responsivo para designers de interiores.

## 🎯 Sistema Dinâmico de Projetos

**NOVIDADE:** O portfólio agora é totalmente dinâmico! 

✨ **Não é mais necessário criar páginas HTML para cada projeto**

### Como Funciona:

- Todos os projetos são gerenciados através do arquivo `data/projetos.json`
- Uma única página HTML (`projeto.html`) é usada para exibir todos os projetos
- JavaScript carrega e renderiza os dados automaticamente
- Para adicionar um novo projeto, basta editar o arquivo JSON

### Vantagens:

✅ **Fácil manutenção**: Adicione projetos editando apenas um arquivo JSON  
✅ **Sem código HTML**: Não precisa conhecer HTML para adicionar projetos  
✅ **Consistência**: Todos os projetos seguem o mesmo layout automaticamente  
✅ **Escalável**: Adicione quantos projetos quiser sem criar novas páginas  
✅ **Datas automáticas**: Sistema calcula duração e formata datas automaticamente  

### Guia Rápido para Adicionar Projetos:

Leia o arquivo **[COMO_ADICIONAR_PROJETOS.md](COMO_ADICIONAR_PROJETOS.md)** para instruções detalhadas.

- **Design Minimalista e Sofisticado**: Estética clean com paleta de cores elegantes
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Arquitetura Modular**: Código organizado em arquivos separados para fácil manutenção
- **Animações Suaves**: Transições e efeitos sutis para uma experiência premium
- **Performance Otimizada**: Código limpo e eficiente

## 🎨 Seções do Website

1. **Header (Cabeçalho)**
   - Logo da designer
   - Menu de navegação elegante
   - Menu hambúrguer responsivo para mobile

2. **Hero / Home (Seção Principal)**
   - Imagem de fundo impactante
   - Título e proposta de valor
   - Call-to-action proeminente

3. **Portfólio (Projetos)**
   - Grid responsivo de projetos
   - Hover effects elegantes
   - Miniaturas clicáveis que direcionam para páginas individuais
   - **Páginas de projeto individuais com:**
     - Hero section dedicada com imagem de destaque
     - Descrição detalhada do projeto
     - Informações técnicas (cliente, duração, área, localização)
     - Galeria de imagens interativa com lightbox
     - Características principais destacadas
     - Seção "Desafio & Solução"
     - Projetos relacionados
     - Navegação entre imagens em tela cheia

4. **Sobre Mim**
   - Foto profissional
   - Biografia detalhada
   - Assinatura personalizada

5. **Serviços & Processo**
   - Cards de serviços oferecidos
   - Visualização do processo de trabalho em 4 etapas
   - Ícones SVG personalizados

6. **Depoimentos**
   - Slider de depoimentos de clientes
   - Controles de navegação
   - Auto-slide e suporte touch

7. **Contato**
   - Formulário de contato funcional
   - Informações de contato
   - Links para redes sociais

8. **Footer (Rodapé)**
   - Links de navegação
   - Redes sociais
   - Direitos autorais

## 📁 Estrutura de Arquivos

```
interior-portfolio/
│
├── index.html            # Página principal
├── projeto.html          # Página dinâmica de projeto (única para todos)
├── COMO_ADICIONAR_PROJETOS.md  # Guia de como adicionar projetos
│
├── data/
│   └── projetos.json     # ⭐ ARQUIVO PRINCIPAL - Dados de todos os projetos
│
├── css/
│   ├── main.css          # Estilos globais e variáveis
│   ├── header.css        # Estilos do cabeçalho
│   ├── hero.css          # Estilos da seção hero
│   ├── portfolio.css     # Estilos do portfólio
│   ├── about.css         # Estilos da seção sobre
│   ├── services.css      # Estilos dos serviços
│   ├── testimonials.css  # Estilos dos depoimentos
│   ├── contact.css       # Estilos do contato
│   ├── footer.css        # Estilos do rodapé
│   └── project-page.css  # Estilos das páginas de projeto
│
├── js/
│   ├── main.js           # Scripts principais
│   ├── menu.js           # Funcionalidade do menu
│   ├── portfolio-loader.js    # ⭐ Carrega projetos do JSON no grid
│   ├── project-renderer.js    # ⭐ Renderiza página individual do projeto
│   ├── testimonials.js   # Slider de depoimentos
│   ├── contact.js        # Validação do formulário
│   └── scroll-reveal.js  # Animações de scroll
│
└── images/               # Pasta para imagens (opcional)
```

## 🎨 Paleta de Cores

- **Primária**: #C9A96E (Dourado elegante)
- **Primária Escura**: #B08D5B
- **Primária Clara**: #D4B87E
- **Texto Escuro**: #2C2C2C
- **Texto Médio**: #5A5A5A
- **Texto Claro**: #8A8A8A
- **Background Claro**: #FAFAF8
- **Background Branco**: #FFFFFF
- **Borda**: #E8E8E6

## 🔤 Tipografia

- **Títulos**: 'Cormorant Garamond', serif
- **Corpo**: 'Montserrat', sans-serif

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com variáveis CSS e Grid/Flexbox
- **JavaScript (Vanilla)**: Funcionalidades interativas sem dependências
- **Google Fonts**: Tipografia profissional

## 🚀 Como Usar

1. **Instalar**: Basta fazer o download de todos os arquivos mantendo a estrutura de pastas
2. **Personalizar**: 
   - Edite o `index.html` para alterar textos e conteúdo
   - Modifique as variáveis CSS em `css/main.css` para personalizar cores e estilos
   - Substitua as imagens placeholder pelas imagens reais dos projetos
3. **Hospedar**: Faça upload para qualquer serviço de hospedagem web

## 📱 Responsividade

O website é totalmente responsivo com breakpoints em:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## ✨ Funcionalidades JavaScript

- **Menu Responsivo**: Menu hambúrguer animado para dispositivos móveis
- **Scroll Suave**: Navegação suave entre seções
- **Active Navigation**: Destaque automático da seção ativa
- **Slider de Depoimentos**: Auto-slide com controles manuais e suporte touch
- **Validação de Formulário**: Validação do lado do cliente
- **Scroll Reveal**: Animações sutis ao rolar a página
- **Parallax Hero**: Efeito parallax na imagem de fundo
- **Lightbox de Galeria**: Visualização de imagens em tela cheia nas páginas de projeto
- **Navegação de Imagens**: Setas e teclado para navegar entre imagens da galeria
- **Suporte Touch**: Gestos de swipe para navegação em dispositivos móveis

## 🔧 Customização

### Alterar Cores
Edite as variáveis CSS em `css/main.css`:
```css
:root {
    --color-primary: #SUA_COR_AQUI;
    /* ... outras variáveis */
}
```

### Adicionar Projetos
No `index.html`, adicione novos items dentro de `.portfolio-grid`:
```html
<div class="portfolio-item">
    <!-- Conteúdo do projeto -->
</div>
```

### Integrar Backend
O formulário de contato atualmente simula o envio. Para integrar com backend:
1. Edite `js/contact.js`
2. Substitua a simulação por uma chamada AJAX/Fetch para seu servidor

## 📝 Licença

Este projeto foi criado como template profissional. Sinta-se livre para usar e customizar conforme suas necessidades.

## 🎯 Próximos Passos Recomendados

1. **Adicionar Lightbox**: Implementar modal/lightbox para visualização detalhada dos projetos
2. **Galeria de Imagens**: Adicionar múltiplas imagens por projeto
3. **Integração Backend**: Conectar formulário a um servidor ou serviço de email
4. **SEO**: Otimizar meta tags e structured data
5. **Analytics**: Adicionar Google Analytics ou similar
6. **Compressão**: Minificar CSS e JavaScript para produção
7. **Lazy Loading**: Implementar carregamento preguiçoso de imagens

## 📧 Suporte

Para dúvidas ou sugestões sobre este template, consulte a documentação ou entre em contato.

---

**Desenvolvido com ♥ para designers de interiores que valorizam elegância e sofisticação digital.**
