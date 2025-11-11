import { AuthGuard } from "./AuthGuard";
import { RouteMatcher } from "./RouteMatcher";
import { RedirectHandler } from "./RedirectHandler";

/**
 * Route Protection Strategy
 * Responsibility: Orquestrar a lógica de proteção de rotas
 *
 * Princípio SRP: Esta classe coordena os guards, matchers e handlers
 * para implementar a estratégia completa de proteção de rotas
 *
 * Princípio OCP (Open/Closed): Aberto para extensão (novas estratégias)
 * mas fechado para modificação (lógica base não muda)
 */

export class RouteProtectionStrategy {
  /**
   * Executa a estratégia de proteção de rota
   * @param {Request} request - Request do Next.js
   * @returns {NextResponse}
   */
  static execute(request) {
    const { pathname } = new URL(request.url);

    // 1. Verifica se deve processar esta rota
    if (!RouteMatcher.shouldProcess(pathname)) {
      return RedirectHandler.allow();
    }

    // 2. Verifica estado de autenticação
    const isAuthenticated = AuthGuard.isAuthenticated(request);

    // 3. Aplica regras de redirecionamento
    if (RouteMatcher.isProtectedRoute(pathname) && !isAuthenticated) {
      // Usuário não autenticado tentando acessar rota protegida
      return RedirectHandler.toLogin(request);
    }

    if (RouteMatcher.isPublicRoute(pathname) && isAuthenticated) {
      // Usuário autenticado tentando acessar rota pública (login/register)
      return RedirectHandler.toHome(request);
    }

    // 4. Permite acesso
    return RedirectHandler.allow();
  }
}
