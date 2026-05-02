import dns from 'node:dns';
dns.setServers(['8.8.8.8','8.8.4.4']);

import { headers } from 'next/headers';
import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    // const isLogin = false;
    if(session){
        return NextResponse.next();
    }
  return NextResponse.redirect(new URL('/login', request.url))
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = { 
  matcher: ['/contact', '/news/:path*'],
}