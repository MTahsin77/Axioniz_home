import { NextResponse, type NextRequest } from 'next/server'

// Middleware to enforce HTTPS and set security headers
export function middleware(req: NextRequest) {
  const proto = req.headers.get('x-forwarded-proto')

  // If request came in over HTTP behind a proxy (e.g., Heroku), redirect to HTTPS
  if (proto === 'http') {
    const url = new URL(req.url)
    url.protocol = 'https:'
    const redirect = NextResponse.redirect(url, 308)
    // Security headers even on redirect response
    addSecurityHeaders(redirect)
    return redirect
  }

  // Continue normally and attach security headers
  const res = NextResponse.next()
  addSecurityHeaders(res)
  return res
}

function addSecurityHeaders(res: NextResponse) {
  // Strict Transport Security (1 year, include subdomains, allow preload)
  res.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  // Other helpful security headers
  res.headers.set('X-Content-Type-Options', 'nosniff')
  res.headers.set('X-Frame-Options', 'SAMEORIGIN')
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
}

// Apply to all paths
export const config = {
  matcher: ['/:path*'],
}
