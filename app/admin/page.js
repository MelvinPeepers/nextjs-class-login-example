"use client"; // Indicates that this file is client-side only

export default function Login() {
  // Function to handle the admin action
  const handleLogin = async () => {
    // Making a DELETE request to the /api/delete endpoint
    const response = await fetch("/api/auth", {
      method: "DELETE",
    });
    // Parsing the JSON response
    const result = await response.json();
    // Logging the result to the console
    console.log(result);
  };

  return (
    <div>
      <h1>Admin page</h1>
      {/* Button to trigger the handleLogin function when clicked */}
      <button onClick={handleLogin}>AdminThings</button>
    </div>
  );
}
