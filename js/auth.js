function checkAuth() {
  const currentUser = Parse.User.current();
  if (currentUser) {
    return currentUser;
  }
  return null;
}

function requireAuth() {
  const user = checkAuth();
  if (!user) {
    window.location.href = "../index.html";
  }
  return user;
}

async function login(email, password) {
  try {
    const user = await Parse.User.logIn(email, password);
    console.log("Login bem-sucedido:", user);
    return { success: true, user };
  } catch (error) {
    console.error("Erro no login:", error);
    return { success: false, error: error.message };
  }
}

async function register(username, email, password) {
  try {
    const user = new Parse.User();
    user.set("username", username);
    user.set("email", email);
    user.set("password", password);

    user.set("coffeeCount", 0);
    user.set("coins", 0);
    user.set("level", 1);
    user.set("playTime", 0);

    await user.signUp();
    console.log("Registro bem-sucedido:", user);
    return { success: true, user };
  } catch (error) {
    console.error("Erro no registro:", error);
    return { success: false, error: error.message };
  }
}

async function logout() {
  try {
    await Parse.User.logOut();
    console.log("Logout bem-sucedido");
    window.location.href = "../index.html";
  } catch (error) {
    console.error("Erro no logout:", error);
  }
}

function getCurrentUserData() {
  const user = Parse.User.current();
  if (user) {
    return {
      username: user.get("username"),
      email: user.get("email"),
      coffeeCount: user.get("coffeeCount") || 0,
      coins: user.get("coins") || 0,
      level: user.get("level") || 1,
      playTime: user.get("playTime") || 0,
    };
  }
  return null;
}

async function updateUserData(data) {
  try {
    const user = Parse.User.current();
    if (!user) {
      throw new Error("Usuário não está logado");
    }

    if (data.coffeeCount !== undefined)
      user.set("coffeeCount", data.coffeeCount);
    if (data.coins !== undefined) user.set("coins", data.coins);
    if (data.level !== undefined) user.set("level", data.level);
    if (data.playTime !== undefined) user.set("playTime", data.playTime);

    await user.save();
    console.log("Dados atualizados com sucesso");
    return { success: true };
  } catch (error) {
    console.error("Erro ao atualizar dados:", error);
    return { success: false, error: error.message };
  }
}

async function resetPassword(email) {
  try {
    await Parse.User.requestPasswordReset(email);
    return { success: true, message: "Email de recuperação enviado!" };
  } catch (error) {
    console.error("Erro ao resetar senha:", error);
    return { success: false, error: error.message };
  }
}
