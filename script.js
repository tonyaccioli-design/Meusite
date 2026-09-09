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

const animatedItems = document.querySelectorAll(
  ".scroll-bottom, .scroll-top, .scroll-left, .scroll-right",
);

if ("IntersectionObserver" in window) {
  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ativo");
          scrollObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  animatedItems.forEach((item) => scrollObserver.observe(item));
} else {
  animatedItems.forEach((item) => item.classList.add("ativo"));
}
