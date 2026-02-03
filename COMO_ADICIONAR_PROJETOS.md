# 📘 Guia de Adição de Projetos

## Como Adicionar um Novo Projeto

O sistema agora é **totalmente dinâmico**! Para adicionar um novo projeto, basta editar o arquivo JSON. Não é necessário criar novas páginas HTML.

### Passo a Passo:

1. **Abra o arquivo** `data/projetos.json`

2. **Adicione um novo objeto** no array `projetos` seguindo este modelo:

```json
{
  "id": 5,
  "slug": "nome-do-projeto",
  "titulo": "Título do Projeto",
  "subtitulo": "Descrição curta que aparece no card",
  "categoria": "Residencial",
  "imagemCapa": "URL_DA_IMAGEM_GRANDE",
  "imagemThumb": "URL_DA_IMAGEM_MINIATURA",
  "ano": "2025",
  "area": "150m²",
  "localizacao": "Cidade, Estado",
  "cliente": "Nome do Cliente",
  "duracao": "calculado automaticamente",
  "dataInicio": "2025-01-15",
  "dataTermino": "2025-06-15",
  "servicos": "Projeto Completo, Decoração",
  "descricao": [
    "Primeiro parágrafo da descrição...",
    "Segundo parágrafo...",
    "Terceiro parágrafo...",
    "Quarto parágrafo..."
  ],
  "caracteristicas": [
    {
      "titulo": "Característica 1",
      "descricao": "Descrição da característica",
      "icone": "layout"
    },
    {
      "titulo": "Característica 2",
      "descricao": "Descrição da característica",
      "icone": "light"
    },
    {
      "titulo": "Característica 3",
      "descricao": "Descrição da característica",
      "icone": "premium"
    },
    {
      "titulo": "Característica 4",
      "descricao": "Descrição da característica",
      "icone": "storage"
    }
  ],
  "desafio": "Descrição do desafio enfrentado no projeto...",
  "solucao": "Descrição da solução implementada...",
  "galeria": [
    {
      "url": "URL_DA_IMAGEM_1",
      "alt": "Descrição da imagem",
      "destaque": true
    },
    {
      "url": "URL_DA_IMAGEM_2",
      "alt": "Descrição da imagem"
    },
    {
      "url": "URL_DA_IMAGEM_3",
      "alt": "Descrição da imagem"
    }
  ]
}
```

### Campos Obrigatórios:

- **id**: Número único e sequencial (1, 2, 3, 4, 5...)
- **slug**: Nome do projeto em formato URL (sem espaços, tudo minúsculo)
- **titulo**: Nome do projeto
- **subtitulo**: Descrição curta (aparece no grid de portfólio)
- **categoria**: Tipo de projeto (Residencial, Comercial, etc.)
- **imagemCapa**: URL da imagem grande para o hero
- **imagemThumb**: URL da imagem miniatura para o grid
- **ano**: Ano de conclusão
- **area**: Área do projeto (com unidade: m², hectares, etc.)
- **localizacao**: Cidade e Estado
- **cliente**: Nome do cliente (pode ser "Confidencial")
- **dataInicio**: Data de início no formato YYYY-MM-DD
- **dataTermino**: Data de término no formato YYYY-MM-DD
- **servicos**: Lista de serviços prestados
- **descricao**: Array com 4 parágrafos descrevendo o projeto
- **caracteristicas**: Array com 4 características principais
- **desafio**: Texto descrevendo o desafio do projeto
- **solucao**: Texto descrevendo a solução implementada
- **galeria**: Array com pelo menos 4-6 imagens

### Ícones Disponíveis para Características:

- `layout` - Para planta aberta, distribuição de espaços
- `light` - Para iluminação
- `premium` - Para materiais nobres
- `storage` - Para armazenamento
- `design` - Para design autoral
- `art` - Para arte e decoração
- `height` - Para pé-direito alto
- `heritage` - Para preservação histórica
- `custom` - Para personalização
- `nature` - Para integração com natureza
- `sustainable` - Para sustentabilidade
- `comfort` - Para conforto térmico/acústico
- `garden` - Para paisagismo

### Datas:

- Use sempre o formato **YYYY-MM-DD** (exemplo: 2025-03-15)
- A **duração** é calculada automaticamente entre dataInicio e dataTermino
- As datas são formatadas automaticamente no site (exemplo: "Março de 2025")

### Imagens:

Para as **imagens destaque** na galeria, adicione `"destaque": true`. Essas imagens serão exibidas em tamanho maior no grid.

```json
{
  "url": "URL_DA_IMAGEM",
  "alt": "Descrição",
  "destaque": true
}
```

### Exemplo Completo de Adição:

Vamos adicionar um 5º projeto:

1. Abra `data/projetos.json`
2. Depois do último projeto (Casa de Campo), adicione uma vírgula
3. Cole o novo objeto do projeto
4. Salve o arquivo
5. **Pronto!** O projeto aparecerá automaticamente no site

### Testando:

1. Abra `index.html` no navegador
2. Role até a seção "Portfólio"
3. O novo projeto deve aparecer automaticamente
4. Clique em "Ver Projeto" para ver a página completa

### Removendo Projetos:

Para remover um projeto, simplesmente delete o objeto correspondente do array em `projetos.json`.

### Editando Projetos Existentes:

Para editar informações de um projeto, localize-o pelo `id` em `projetos.json` e altere os campos desejados.

---

## ⚠️ Cuidados Importantes:

1. **Sempre valide o JSON** antes de salvar (use um validador JSON online)
2. **Não esqueça as vírgulas** entre os objetos no array
3. **IDs devem ser únicos** - não repita números
4. **Use aspas duplas** (") para strings, não aspas simples (')
5. **Formato de data** deve ser YYYY-MM-DD

## 🎨 Dicas de URLs para Imagens:

- **Unsplash**: https://unsplash.com (fotos gratuitas de alta qualidade)
- **Pexels**: https://pexels.com (fotos gratuitas)
- Suas próprias fotos hospedadas em serviços como:
  - Cloudinary
  - ImgBB
  - Google Drive (modo público)
  - Dropbox (modo público)

## 📞 Problemas?

Se o projeto não aparecer:
1. Verifique se o JSON está válido (sem erros de sintaxe)
2. Abra o Console do navegador (F12) e veja se há erros
3. Certifique-se de que as URLs das imagens estão acessíveis
4. Verifique se todos os campos obrigatórios estão preenchidos
