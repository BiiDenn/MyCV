// cuộn mượt đến các section
document.querySelectorAll('.navbar a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });

      target.classList.add("flash-highlight");
      setTimeout(() => {
        target.classList.remove("flash-highlight");
      }, 1500);
    }
  });
});

// hiệu ứng cuộn fade-in section khi cuộn tới
const section = document.querySelectorAll(".section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 }
);

section.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// trở về trang đầu
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
