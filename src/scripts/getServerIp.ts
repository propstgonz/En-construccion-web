document.addEventListener("DOMContentLoaded", async () => {
  const ipElement = document.getElementById("server-ip");
  if (ipElement) {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      ipElement.textContent = data.ip;
    } catch {
      ipElement.textContent = "Error";
    }
  }
});