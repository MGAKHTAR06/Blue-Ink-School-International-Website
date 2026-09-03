(function () {
  const menuBtn = document.querySelector("[data-menu-btn]");
  const links = document.querySelector("[data-nav-links]");

  if (menuBtn && links) {
    menuBtn.addEventListener("click", () => {
      links.classList.toggle("open");
    });
  }

  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav] a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  const slides = document.querySelectorAll(".heroImage .slide");
  let currentSlide = 0;

  if (slides.length > 1) {
    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 4000);
  }
})();

// Nav dropdown — click to open/close on all devices
(function() {
  document.querySelectorAll('.navDropdownToggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdown = toggle.closest('.navDropdown');
      const isOpen = dropdown.classList.contains('open');

      // Close all dropdowns first
      document.querySelectorAll('.navDropdown').forEach(function(d) {
        d.classList.remove('open');
        const t = d.querySelector('.navDropdownToggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      });

      // Toggle this one
      if (!isOpen) {
        dropdown.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close when clicking anywhere outside the dropdown
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.navDropdown')) {
      document.querySelectorAll('.navDropdown').forEach(function(d) {
        d.classList.remove('open');
        const t = d.querySelector('.navDropdownToggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    }
  });
})();
