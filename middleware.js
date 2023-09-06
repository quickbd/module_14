import { withAuth } from "next-auth/middleware";
// export { default } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/admin/myapp/:path*", "/api/admin/:path*"],
};

// role based authorization
export default withAuth(async function middleware(req) {
  const url = req.nextUrl.pathname;
  const userRole = req?.nextauth?.token?.user?.role;
  const roles = process.env.ADMIN_ROLES;
  console.log(roles);
  // cors
  if (url?.includes("/api")) {
    NextResponse.next().headers.append("Access-Control-Allow-Origin", "*");
  }

  if (url?.includes("/admin/myapp") && roles.includes(userRole)) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
});
