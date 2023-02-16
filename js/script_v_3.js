// AOS
AOS.init({
  once: true,
  duration: 1500,
});

// First observer
const topNav = document.getElementById("top-nav");
const topNavLogo = topNav.querySelector(".top-nav__left__logo");
const reservationSection = document.getElementById("reservation-terms");

const reservationSectionObserverHandler = function (entries) {
  const entry = entries[0];
  const elDistanceToTop =
    window.pageYOffset + entry.target.getBoundingClientRect().top;
  if (entry.isIntersecting && window.scrollY < elDistanceToTop) {
    topNavLogo.classList.add("top-nav__left__logo-dynamic");
    topNav.classList.add("top-nav-dynamic");
  } else {
    if (window.scrollY < elDistanceToTop) {
      topNavLogo.classList.remove("top-nav__left__logo-dynamic");
      topNav.classList.remove("top-nav-dynamic");
      topNav.style.alignItems = "flex-start";
    }
  }
};

const reservationSectionObserver = new IntersectionObserver(
  reservationSectionObserverHandler,
  { rootMargin: "-90px" }
);

reservationSectionObserver.observe(reservationSection);

// Fixing Refresh in the middle Bug of top navbar

if (
  window.scrollY >
  window.pageYOffset + reservationSection.getBoundingClientRect().top
) {
  topNavLogo.classList.add("top-nav__left__logo-dynamic");
  topNav.classList.add("top-nav-dynamic");
}

// Menu Icon
const menuIcon = document.getElementById("menu-icon");
const bsOffcanvas = new bootstrap.Offcanvas("#offcanvasWithBothOptions");

menuIcon.addEventListener("click", function (e) {
  bsOffcanvas.toggle();
});

// Closing  offcanvas when clicking a link
const offcanvasLinkList = document.getElementById("offcanvas-link-list");

offcanvasLinkList.addEventListener("click", function (e) {
  if (!e.target.tagName === "A") return;
  bsOffcanvas.hide();
});
