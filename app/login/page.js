"use client"; // Indicates that this file is client-side only

// This is a REST API

export default function Login() {
  // Function to handle the login process
  const handleLogin = async () => {
    // Making a GET request to the /api/auth endpoint
    const response = await fetch("/api/auth");
    // Parsing the JSON response
    const result = await response.json();
    // Logging the result to the console
    console.log(result);
  };

  // Function to handle the logout process
  const handleLogout = async () => {
    // Making a DELETE request to the /api/auth endpoint
    const response = await fetch("/api/auth", { method: "DELETE" });
    // Parsing the JSON response
    const result = await response.json();
    // Logging the result to the console (not shown in the original code, but you might want to log it here for consistency)
    console.log(result);
  };

  return (
    <div>
      <h1>Login page</h1>
      {/* Button to trigger the handleLogin function when clicked */}
      <button onClick={handleLogin}>Login</button>
      {/* Button to trigger the handleLogout function when clicked */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
