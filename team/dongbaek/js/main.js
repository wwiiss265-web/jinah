const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const searchToggle = document.querySelector(".search-toggle");
const searchPanel = document.querySelector(".search-panel");
const topButton = document.querySelector(".top-button");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

searchToggle?.addEventListener("click", () => {
  const isOpen = searchPanel.classList.toggle("open");
  searchPanel.setAttribute("aria-hidden", String(!isOpen));
  if (isOpen) searchPanel.querySelector("input")?.focus();
});

document.querySelector(".search-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const keyword = document.querySelector("#site-search").value.trim();
  if (!keyword) {
    document.querySelector("#site-search").focus();
    return;
  }
  alert(`'${keyword}' 검색 기능은 실제 콘텐츠 연결 후 사용할 수 있습니다.`);
});

document.querySelectorAll(".hero-dots button").forEach((dot) => {
  dot.addEventListener("click", () => {
    document.querySelectorAll(".hero-dots button").forEach((item) => item.classList.remove("active"));
    dot.classList.add("active");
  });
});

const eventCards = document.querySelector(".event-cards");
document.querySelector(".event-next")?.addEventListener("click", () => {
  eventCards.scrollBy({ left: eventCards.clientWidth * 0.55, behavior: "smooth" });
});
document.querySelector(".event-prev")?.addEventListener("click", () => {
  eventCards.scrollBy({ left: -eventCards.clientWidth * 0.55, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  topButton.classList.toggle("show", window.scrollY > 500);
});
topButton?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
