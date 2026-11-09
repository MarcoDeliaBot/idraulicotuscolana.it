/**
 * Cloudflare Worker per idraulicotuscolana.it
 * Autore: Marco D'Elia
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Redirect 301 automatico da www.idraulicotuscolana.it all'apex domain idraulicotuscolana.it
    if (url.hostname === 'www.idraulicotuscolana.it' || url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.replace(/^www\./, '');
      return Response.redirect(url.toString(), 301);
    }

    // 2. Trailing slash enforcement per le rotte HTML
    if (!url.pathname.endsWith('/') && !url.pathname.split('/').pop().includes('.')) {
      url.pathname += '/';
      return Response.redirect(url.toString(), 301);
    }

    // 3. Erogazione asset statici dalla directory ./out tramite binding ASSETS
    let response = await env.ASSETS.fetch(request);

    // Fallback pagina 404
    if (response.status === 404) {
      const notFoundUrl = new URL('/404.html', url.origin);
      const notFoundResponse = await env.ASSETS.fetch(new Request(notFoundUrl, request));
      if (notFoundResponse.status === 200) {
        response = new Response(notFoundResponse.body, {
          status: 404,
          statusText: 'Not Found',
          headers: notFoundResponse.headers,
        });
      }
    }

    // 4. Header di Sicurezza Obbligatori
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    newHeaders.set('X-Content-Type-Options', 'nosniff');
    newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
    newHeaders.set('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');

    // 5. Content-Type espliciti e Cache Control per file SEO, LLMs e Manifest
    if (url.pathname.startsWith('/_next/static/')) {
      newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (url.pathname === '/sitemap.xml') {
      newHeaders.set('Content-Type', 'application/xml; charset=utf-8');
      newHeaders.set('Cache-Control', 'public, max-age=3600');
    } else if (
      url.pathname === '/robots.txt' ||
      url.pathname === '/llms.txt' ||
      url.pathname === '/llms-full.txt'
    ) {
      newHeaders.set('Content-Type', 'text/plain; charset=utf-8');
      newHeaders.set('Cache-Control', 'public, max-age=3600');
    } else if (url.pathname === '/manifest.webmanifest') {
      newHeaders.set('Content-Type', 'application/manifest+json; charset=utf-8');
      newHeaders.set('Cache-Control', 'public, max-age=86400');
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
