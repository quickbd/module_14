import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/myaccount/:path*",
    "/admin/:path*",
    "/api/user/:path*",
    "/api/myaccount/:path*",
  ],
};

export default async function middleware(req) {
  const token = req.cookies.get("token");
  const url = req.nextUrl.pathname;
  const session = !!req.cookies.get("next-auth.session-token");

  const roles = process.env.ADMIN_ROLES; //["admin", "super-admn", "manager"];
  const userRole = req?.nextauth?.token?.user?.role;
  //console.log(roles[0]);
  if (url.startsWith("/admin/myapp")) {
    if (!session || !roles.includes(userRole)) {
      console.log("admin");
      return NextResponse.redirect(new URL("/admin/login", req.url));
    } else if (session) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }
  if (url.startsWith("/api/example2")) {
    console.log("example2");
    return NextResponse.next();
  }
}
