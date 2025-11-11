/**
 * Shared layout initialization and utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  initializeLayout();
  initializeAnimations();
});

function initializeLayout() {
  // Add fade-slide-in animation to main content
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.classList.add('fade-slide-in');
  }

  // Initialize navigation interactivity
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('scale-105');
    });
    item.addEventListener('mouseleave', () => {
      item.classList.remove('scale-105');
    });
  });

  // Handle active navigation states
  updateActiveNavItem();
  window.addEventListener('hashchange', updateActiveNavItem);
}

function updateActiveNavItem() {
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((item) => {
    const href = item.getAttribute('href');
    if (href && currentPath.includes(href)) {
      item.classList.add('text-blue-400', 'font-semibold');
      item.classList.remove('text-neutral-400');
    } else {
      item.classList.remove('text-blue-400', 'font-semibold');
      item.classList.add('text-neutral-400');
    }
  });
}

function initializeAnimations() {
  // Intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-slide-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el);
  });
}

// Utility function to add ripple effect on button clicks
function addRippleEffect(button) {
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');

  button.appendChild(ripple);
}

// Export for use in other modules
window.LayoutUtils = {
  addRippleEffect,
  updateActiveNavItem,
};
