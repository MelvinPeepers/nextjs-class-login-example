import { NextResponse } from "next/server";

export function middleware(request) {
  // getting the cookie named cookieme
  let cookie = request.cookies.get("cookieme");
  // console.log to see if it gets the cookie (for possible debugging)
  console.log(cookie);

  // Need to check if cookie is valid
  // if cookie is NOT valid
  if (!cookie || cookie.value !== "123451") {
    // need to redirect to /log https://nextjs.org/docs/app/building-your-application/routing/redirecting#nextresponseredirect-in-middleware NextResponse.redirect in Middleware
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // if cookis IS valid, pass as normal
  return NextResponse.next();
}

// https://nextjs.org/docs/app/building-your-application/routing/middleware#matching-paths Matcher
export const config = {
  matcher: "/admin/",
};
