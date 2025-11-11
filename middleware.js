import { RouteProtectionStrategy } from "./src/services/guards/RouteProtectionStrategy";

/**
 * Next.js Middleware
 *
 * Aplica a estratégia de proteção de rotas usando o padrão Strategy
 * seguindo princípios SOLID (especialmente SRP)
 *
 * @param {Request} request - Request do Next.js
 * @returns {NextResponse}
 */
export function middleware(request) {
  return RouteProtectionStrategy.execute(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (.png, .jpg, etc)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
