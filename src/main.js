// ==========================================================================
// DSC HEMP SAMPLING — CLIENT ENGINE
// Mobile Navigation & Netlify Form Submission Handling
// Zero localStorage persistence.
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFormSuccessCheck();
});

// 1. MOBILE NAVIGATION TOGGLE
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.usda-nav');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('is-active');
    toggleBtn.setAttribute('aria-expanded', isActive);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// 2. NETLIFY FORM SUCCESS NOTICE CHECK
function initFormSuccessCheck() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('submitted') === 'true') {
    const form = document.querySelector('form[name="sampling-request"]');
    if (form) {
      const banner = document.createElement('div');
      banner.className = 'success-banner';
      banner.innerHTML = `
        <svg style="width:24px; height:24px; fill:currentColor;" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <div>
          <strong>Sampling Request Received</strong>
          <p style="font-size:0.85rem; margin-top:0.2rem;">Thank you for contacting Dark Star Consulting Group. We will review your jurisdiction and scheduling request and respond to confirm availability and next steps.</p>
        </div>
      `;
      form.parentNode.insertBefore(banner, form);
      form.reset();
    }
  }
}
