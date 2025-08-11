document.addEventListener("DOMContentLoaded", async () => {
  const clientIpElement = document.getElementById("client-ip");
  if (clientIpElement) {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      clientIpElement.textContent = data.ip;
    } catch {
      clientIpElement.textContent = "Error";
    }
  }
});