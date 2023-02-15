// AOS
AOS.init({
  once: true,
  duration: 1500,
});

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
