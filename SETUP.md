# 🔧 Configuração do Back4App

## Passo 1: Criar conta no Back4App

1. Acesse [https://www.back4app.com/](https://www.back4app.com/)
2. Clique em "Sign Up" e crie sua conta gratuita
3. Confirme seu email

## Passo 2: Criar uma nova aplicação

1. No dashboard, clique em "Build new app"
2. Escolha "Backend as a Service"
3. Dê um nome para sua aplicação (ex: "cafe-clicker")
4. Selecione a região mais próxima
5. Clique em "Create"

## Passo 3: Obter as credenciais

1. No menu lateral, clique em "App Settings" > "Security & Keys"
2. Copie as seguintes informações:
   - **Application ID**
   - **JavaScript Key**

## Passo 4: Configurar o projeto

1. Abra o arquivo `js/config.js`
2. Substitua os valores placeholders pelas suas credenciais:

```javascript
const BACK4APP_CONFIG = {
  applicationId: "SUA_APPLICATION_ID_AQUI", // Cole seu Application ID
  javascriptKey: "SUA_JAVASCRIPT_KEY_AQUI", // Cole sua JavaScript Key
  serverURL: "https://parseapi.back4app.com",
};
```

## Passo 5: Configurar CORS (Opcional)

Se houver problemas de CORS ao testar localmente:

1. No Back4App, vá em "Server Settings" > "Web Hosting"
2. Em "CORS Settings", adicione:
   - `http://localhost:*`
   - `http://127.0.0.1:*`
   - `file://*` (para abrir diretamente do explorador de arquivos)

## Passo 6: Testar a aplicação

1. Abra `index.html` em um navegador
2. Tente criar uma nova conta
3. Faça login com a conta criada
4. Clique no café e veja se os dados são salvos

## Verificar se está funcionando

### No Console do Navegador (F12):

```javascript
// Verificar se Parse está carregado
console.log(Parse);

// Verificar usuário atual
console.log(Parse.User.current());
```

### No Dashboard do Back4App:

1. Vá em "Database" > "Browser"
2. Clique na classe "\_User"
3. Veja se os usuários registrados aparecem
4. Verifique os campos customizados: `coffeeCount`, `coins`, `level`, `playTime`

## Estrutura de Dados

### Classe User (automática)

- `username` - Nome de usuário (único)
- `email` - Email do usuário
- `password` - Senha (criptografada)
- `coffeeCount` - Total de cafés clicados (número)
- `coins` - Total de moedas (número)
- `level` - Nível do jogador (número)
- `playTime` - Tempo de jogo em horas (número)

## Recursos Úteis

- [Documentação Parse SDK](https://docs.parseplatform.org/js/guide/)
- [Back4App Docs](https://www.back4app.com/docs/)
- [Tutoriais Back4App](https://www.back4app.com/docs/get-started)

## Troubleshooting

### Erro: "Application ID not found"

- Verifique se copiou corretamente o Application ID
- Certifique-se de não ter espaços extras

### Erro: "Invalid session token"

- Faça logout e login novamente
- Limpe o localStorage do navegador

### Dados não estão salvando

- Verifique o console do navegador (F12)
- Confirme que o usuário está logado: `Parse.User.current()`
- Verifique a conexão com internet

### Ranking não aparece

- Verifique se há usuários com `coffeeCount` > 0
- Abra o console e veja se há erros

## Próximos Passos

Depois de configurar o Back4App, você pode:

1. ✅ Testar login e registro
2. ✅ Clicar no café e ver os pontos aumentando
3. ✅ Verificar se os dados persistem após refresh
4. ✅ Ver o ranking funcionando
5. 🎮 Começar a jogar!

---

**Dúvidas?** Consulte a documentação oficial ou abra uma issue no repositório.
