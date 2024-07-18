import { cookies } from "next/headers";
// Importing the cookies function from next/headers for handling cookies

// auth

// GET request handler for authentication
export async function GET(request) {
  // Setting a cookie named "cookieme" with a value of "123451"
  cookies().set("cookieme", "123451");
  // https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options
  // Returning a JSON response with a message
  return Response.json({ message: "auth" });
}

// delete

// DELETE request handler for deleting the cookie
export async function DELETE(request) {
  // Deleting the cookie named "cookieme"
  cookies().delete("cookieme");
  // https://nextjs.org/docs/app/api-reference/functions/cookies#deleting-cookies
  // Returning a JSON response with a message
  return Response.json({ message: "delete" });
  // It's common to return responses in JSON format
  // You can also return other more complicated things that are methods on the Response class
  // For example, you can return new Response('text') for plain text responses
}
