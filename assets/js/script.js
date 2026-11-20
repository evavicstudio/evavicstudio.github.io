"use strict";

const sidebar = document.querySelector("[data-sidebar]");
const sidebarButton = document.querySelector("[data-sidebar-btn]");
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

sidebarButton.addEventListener("click", () => {
  const expanded = sidebar.classList.toggle("active");
  sidebarButton.setAttribute("aria-expanded", String(expanded));
  sidebarButton.querySelector("span").textContent = expanded ? "Hide links" : "Show links";
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const selectedPage = link.dataset.navLink;

    pages.forEach((page) => {
      page.classList.toggle("active", page.dataset.page === selectedPage);
    });

    navigationLinks.forEach((navLink) => {
      const selected = navLink === link;
      navLink.classList.toggle("active", selected);
      navLink.toggleAttribute("aria-current", selected);
      if (selected) navLink.setAttribute("aria-current", "true");
    });

    window.scrollTo(0, 0);
  });
});
