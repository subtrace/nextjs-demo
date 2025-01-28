"use client";

export default function App() {
  return (
    <div>
      <h1>Next.js + Subtrace</h1>
      <button onClick={handleClick}>Make a call to the server</button>
    </div>
  );

  async function handleClick() {
    const response = await fetch("/api/foo");
    const data = await response.json();
    alert(data.message);
  }
}
