/**
 * Authentication Guard
 * Responsibility: Verificar se o usuário está autenticado
 *
 * Princípio SRP: Esta classe tem uma única responsabilidade -
 * verificar a autenticação do usuário através de cookies/tokens
 */

export class AuthGuard {
  /**
   * Verifica se o usuário possui token de autenticação válido
   * @param {Request} request - Request do Next.js
   * @returns {boolean} - true se autenticado, false caso contrário
   */
  static isAuthenticated(request) {
    // Verifica cookie de sessão do Parse
    const parseCookie = request.cookies.get("parseSessionToken");

    // Em produção, você pode adicionar validação JWT aqui
    return !!parseCookie?.value;
  }
}
