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

## 🎯 Fluxo de Navegação

```
Login → Registro
  ↓
Início ←→ Loja ←→ Perfil ←→ Ranking
  ↓
Configurações
```

## � Requisitos Funcionais

### RF01 - Autenticação de usuário

O sistema deve permitir que o jogador crie uma conta e faça login utilizando e-mail e senha.

### RF02 - Contador de cliques

O sistema deve contabilizar cada clique do jogador como uma “venda de café” e atualizar o total de moedas em tempo real na interface.

### RF03 - Sistema de Ranking e Perfil

O sistema deve exibir um ranking global com pódio destacado para os top 3 jogadores dos demais competidores, além de permitir que o usuário visualize suas estatísticas pessoais (cafés servidos, moedas, tempo de jogo, posição no ranking) na tela de perfil.

## 🔧 Requisitos Não Funcionais

### RNF01 - Persistência na nuvem

Os dados devem ser armazenados e sincronizados na nuvem (AWS).

### RNF02 - Interface responsiva e leve

O jogo deve ser executável em navegadores e dispositivos móveis sem travamentos, com interface simples.

## �🚀 Como Usar

1. Abra o arquivo `index.html` no navegador
2. Navegue entre as telas usando os botões e links
