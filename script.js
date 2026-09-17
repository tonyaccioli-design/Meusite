const siteConfig = {
  whatsappNumber: "5591980194530",
  whatsappMessage:
    "Olá, Antônio! Vim pelo seu portfólio e gostaria de solicitar um orçamento.",
};

const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = whatsappUrl;
});

document.querySelectorAll(".hero-topline span").forEach((item) => {
  if (item.textContent.trim() === "01/06") {
    item.remove();
  }
});
