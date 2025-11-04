# ☕ Café Clicker

Sistema web responsivo de jogo clicker sobre café, desenvolvido com HTML5 e CSS3 puro. Funciona perfeitamente em desktop e dispositivos móveis.

## � Estrutura do Projeto

```
trabalho/
├── index.html              # Tela de Login
├── css/
│   ├── reset.css          # Reset/normalização CSS
│   ├── variables.css      # Variáveis globais (cores, fontes, espaçamentos)
│   ├── components.css     # Componentes reutilizáveis
│   ├── theme-enhancements.css # Melhorias visuais do tema café
│   ├── login.css          # Estilos da tela de login
│   ├── register.css       # Estilos da tela de registro
│   ├── home.css           # Estilos da tela principal
│   ├── shop.css           # Estilos da loja
│   ├── profile.css        # Estilos do perfil
│   ├── ranking.css        # Estilos do ranking
│   └── settings.css       # Estilos das configurações
└── pages/
    ├── register.html      # Tela de Registro
    ├── home.html          # Tela Principal (Clicker)
    ├── shop.html          # Loja de Upgrades
    ├── profile.html       # Perfil do Jogador
    ├── ranking.html       # Ranking Global
    └── settings.html      # Configurações
```

## 🎨 Telas Implementadas

1. **Login** (`index.html`) - Autenticação do usuário
2. **Registro** (`pages/register.html`) - Criação de conta
3. **Início** (`pages/home.html`) - Dashboard principal com clicker
4. **Loja** (`pages/shop.html`) - Compra de upgrades e melhorias
5. **Perfil** (`pages/profile.html`) - Estatísticas do jogador
6. **Ranking** (`pages/ranking.html`) - Leaderboard global
7. **Configurações** (`pages/settings.html`) - Som e tema

## ✨ Características

- ✅ **Totalmente Responsivo** - Funciona em desktop e mobile
- ✅ **CSS Puro** - Sem dependências de frameworks
- ✅ **SRP** - Single Responsibility Principle aplicado
- ✅ **Navegação Funcional** - Links entre todas as telas
- ✅ **Componentização** - Estilos reutilizáveis
- ✅ **Variáveis CSS** - Fácil manutenção e customização
- ✅ **Design Clean** - Interface minimalista e moderna
- ✅ **Scroll na Loja** - Lista de produtos com scroll customizado
- ✅ **Layout Adaptativo** - Largura máxima de 1200px em desktop

## 🎯 Fluxo de Navegação

```
Login → Registro
  ↓
Início ←→ Loja ←→ Perfil ←→ Ranking
  ↓
Configurações
```

## 🚀 Como Usar

1. Abra o arquivo `index.html` no navegador
2. Navegue entre as telas usando os botões e links
3. Todas as telas são responsivas e funcionam em mobile

## 🎨 Paleta de Cores - Tema Café

### Cores Principais

- **Primary**: `#6F4E37` - Marrom café escuro (botões e headers)
- **Secondary**: `#A67B5B` - Tom cappuccino (painéis e destaques)
- **Accent**: `#D7B899` - Tom creme claro (fundos secundários)

### Fundos

- **Background**: `#F3E5AB` - Bege suave (fundo principal)
- **White**: `#FFFFFF` - Branco puro (cards)

### Detalhes

- **Gold**: `#C89F65` - Dourado (moedas, upgrades e decorações)
- **Coin Yellow**: `#FFD54F` - Amarelo moeda (recompensas e progresso)

### Texto

- **Dark**: `#2C1B13` - Marrom escuro (texto principal)
- **Secondary**: `#5A4A3F` - Marrom médio (texto secundário)
- **Light**: `#FFF8E7` - Creme claro (texto sobre fundos escuros)

### Ações

- **Success**: `#4CAF50` - Verde (ações positivas/compras)
- **Error**: `#E57373` - Vermelho (alertas/fundos insuficientes)

## 📐 Princípios de Design

- **Responsivo** - Funciona em todos os tamanhos de tela
- **Máxima largura**: 1200px em desktop, 100% em mobile
- **Espaçamentos consistentes** usando variáveis CSS
- **Tipografia clara** com hierarquia bem definida
- **Ícones emoji** para economia de recursos
- **Scroll customizado** na lista de produtos da loja

## 🔧 Personalização

Todas as variáveis globais estão centralizadas em `css/variables.css`:

- Cores
- Tamanhos de fonte
- Espaçamentos
- Raios de borda
- Sombras
- Transições

## 📱 Compatibilidade

- Chrome/Edge (Chromium)
- Firefox
- Safari
- Opera

## 👨‍💻 Desenvolvimento

Projeto desenvolvido seguindo boas práticas:

- Separação de responsabilidades
- Código limpo e organizado
- Comentários descritivos
- Nomenclatura semântica
- Estrutura escalável

---

**Made with ☕ & 💜**
