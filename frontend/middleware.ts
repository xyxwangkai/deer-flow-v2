import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 获取认证cookie
  const authToken = request.cookies.get('auth_token')?.value
  const isAuthenticated = authToken === 'authenticated'
  
  // 公开路径（不需要认证）
  const publicPaths = ['/login', '/api/auth/login']
  const isPublicPath = publicPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )
  
  // 如果是公开路径，直接放行
  if (isPublicPath) {
    return NextResponse.next()
  }
  
  // 如果未认证且尝试访问受保护路径，重定向到登录页
  if (!isAuthenticated) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('from', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径，除了：
     * - _next/static (静态文件)
     * - _next/image (图片优化文件)
     * - favicon.ico (网站图标)
     * - public文件夹
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}