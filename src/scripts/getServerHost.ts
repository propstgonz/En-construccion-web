document.addEventListener("DOMContentLoaded", () => {
  const hostElement = document.getElementById("server-host");
  if (hostElement) {
    hostElement.textContent = window.location.hostname;
  }
});