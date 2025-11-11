# ☕ Café Clicker

Sistema web responsivo de jogo clicker sobre café, desenvolvido com Next.js 16, React 19 e Back4App. Funciona perfeitamente em desktop e dispositivos móveis.

## 🎯 Fluxo de Navegação

```
Login → Registro
  ↓
Game ←→ Shop ←→ Profile ←→ Ranking
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

Os dados devem ser armazenados e sincronizados na nuvem (Back4App - Parse Server).

### RNF02 - Interface responsiva e leve

O jogo deve ser executável em navegadores e dispositivos móveis sem travamentos, com interface simples.

## 🚀 Como Usar

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
NEXT_PUBLIC_APPLICATION_ID=sua_app_id
NEXT_PUBLIC_JAVASCRIPT_KEY=sua_javascript_key
NEXT_PUBLIC_SERVER_URL=https://parseapi.back4app.com
```

### 3. Executar em desenvolvimento

```bash
npm run dev
```
