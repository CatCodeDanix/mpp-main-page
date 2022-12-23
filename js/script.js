// AOS
AOS.init({
  once: true,
  duration: 1500,
});

// First observer
const topNav = document.getElementById("top-nav");
const topNavLogo = topNav.querySelector(".top-nav__left__logo");

const termsSectionObserverHandler = function (entries) {
  const entry = entries[0];
  if (entry.isIntersecting) {
    topNavLogo.classList.add("top-nav__left__logo-dynamic");
    topNav.classList.add("top-nav-dynamic");
  } else {
    topNavLogo.classList.remove("top-nav__left__logo-dynamic");
    topNav.classList.remove("top-nav-dynamic");
    topNav.style.alignItems = "flex-start";
  }
};

const termsSectionObserver = new IntersectionObserver(
  termsSectionObserverHandler,
  { rootMargin: "-1px" }
);

const termsSection = document.getElementById("terms");

termsSectionObserver.observe(termsSection);
