import { NextResponse } from "next/server";

/**
 * Redirect Handler
 * Responsibility: Criar redirecionamentos apropriados
 *
 * Princípio SRP: Esta classe tem uma única responsabilidade -
 * gerenciar redirecionamentos baseados no estado de autenticação
 */

export class RedirectHandler {
  /**
   * Redireciona para a página de login
   * @param {Request} request - Request do Next.js
   * @returns {NextResponse}
   */
  static toLogin(request) {
    const url = new URL("/login", request.url);
    return NextResponse.redirect(url);
  }

  /**
   * Redireciona para a página inicial (home)
   * @param {Request} request - Request do Next.js
   * @returns {NextResponse}
   */
  static toHome(request) {
    const url = new URL("/home", request.url);
    return NextResponse.redirect(url);
  }

  /**
   * Permite a requisição continuar
   * @returns {NextResponse}
   */
  static allow() {
    return NextResponse.next();
  }
}
