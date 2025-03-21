import { withAuth } from "next-auth/middleware";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const cookieStore = await cookies();
    const token = cookieStore.get("next-auth.session-token");
    const publicRoutes = ["/login", "/signup"];

    if (publicRoutes.includes(req.nextUrl.pathname) && token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const publicRoutes = ["/login", "/signup"];
        if (!publicRoutes.includes(req.nextUrl.pathname) && token === null) {
          return false;
        }
        return true;
      },
    },
    secret: process.env.NEXT_AUTH_SECRET,
    pages: {
      error: "/error",
    },
  }
);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
