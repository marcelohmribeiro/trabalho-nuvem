/**
 * Route Matcher
 * Responsibility: Determinar o tipo de rota (pública ou protegida)
 *
 * Princípio SRP: Esta classe tem uma única responsabilidade -
 * classificar rotas em públicas ou protegidas
 */

export class RouteMatcher {
  // Rotas que não requerem autenticação
  static PUBLIC_ROUTES = ["/login", "/register"];

  // Prefixos de rotas protegidas
  static PROTECTED_PREFIXES = [
    "/home",
    "/shop",
    "/profile",
    "/ranking",
    "/settings",
  ];

  /**
   * Verifica se a rota é pública
   * @param {string} pathname - Caminho da URL
   * @returns {boolean}
   */
  static isPublicRoute(pathname) {
    return this.PUBLIC_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(route + "/")
    );
  }

  /**
   * Verifica se a rota é protegida
   * @param {string} pathname - Caminho da URL
   * @returns {boolean}
   */
  static isProtectedRoute(pathname) {
    return this.PROTECTED_PREFIXES.some((prefix) =>
      pathname.startsWith(prefix)
    );
  }

  /**
   * Verifica se a rota deve ser processada pelo middleware
   * @param {string} pathname - Caminho da URL
   * @returns {boolean}
   */
  static shouldProcess(pathname) {
    // Ignora arquivos estáticos e API routes
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname.includes(".")
    ) {
      return false;
    }

    return this.isPublicRoute(pathname) || this.isProtectedRoute(pathname);
  }
}
