// app.js - Main UI interactions controller

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

function initializeApp() {
  initializePageLoadAnimations();
  initializeThemeSwitcher();
  initializeModal();
  initializeFeedInteractions();
}

function initializePageLoadAnimations() {
  window.setTimeout(() => {
    document.querySelectorAll('[data-animate-on-load], [data-animate-on-ready]')
      .forEach((el) => el.classList.add('fade-slide-in'));
    document.body.classList.add('spill-page-ready');
  }, 120);
}

function initializeThemeSwitcher() {
  const toggle = document.querySelector('[data-action="toggle-theme"]');
  const body = document.body;
  const storageKey = 'spill-theme';

  const preferredTheme = localStorage.getItem(storageKey);
  const systemPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const isLight = preferredTheme ? preferredTheme === 'light' : systemPrefersLight;
  body.classList.toggle('light', isLight);
  body.classList.toggle('dark', !isLight);
  updateThemeToggleText(toggle, isLight);

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const currentlyLight = body.classList.contains('light');
    const nextIsLight = !currentlyLight;

    body.classList.toggle('light', nextIsLight);
    body.classList.toggle('dark', !nextIsLight);
    localStorage.setItem(storageKey, nextIsLight ? 'light' : 'dark');
    updateThemeToggleText(toggle, nextIsLight);
  });
}

function updateThemeToggleText(target, isLight) {
  if (!target) return;

  const label = target.querySelector('[data-theme-label]');
  const icon = target.querySelector('[data-theme-icon]');

  if (label) {
    label.textContent = isLight ? 'Light' : 'Dark';
  }
  if (icon) {
    icon.textContent = isLight ? '🌤️' : '🌙';
  }
}

function initializeModal() {
  const modal = document.querySelector('[data-modal="composer"]');
  if (!modal) return;

  const openButtons = document.querySelectorAll('[data-action="open-composer"]');
  const closeButtons = modal.querySelectorAll('[data-action="close-composer"]');
  const overlay = modal.querySelector('[data-modal-overlay]');
  const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  let previouslyFocused = null;

  openButtons.forEach((button) => {
    button.addEventListener('click', () => openModal(button));
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  if (overlay) {
    overlay.addEventListener('click', closeModal);
  }

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  modal.addEventListener('keydown', trapFocus);

  function openModal(triggerButton) {
    previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    modal.classList.remove('hidden', 'opacity-0');
    modal.classList.add('opacity-100');
    document.body.classList.add('spill-modal-open');

    const content = modal.querySelector('.bubble-surface');
    if (content) {
      content.classList.add('fade-slide-in', 'spring-transition');
      content.setAttribute('aria-live', 'polite');
    }

    const focusableElements = Array.from(modal.querySelectorAll(focusableSelectors))
      .filter((el) => !el.hasAttribute('disabled'));
    const firstFocusable = focusableElements[0];
    if (firstFocusable instanceof HTMLElement) {
      window.setTimeout(() => firstFocusable.focus(), 150);
    }

    if (triggerButton?.setAttribute) {
      triggerButton.setAttribute('aria-expanded', 'true');
    }
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('spill-modal-open');

    window.setTimeout(() => {
      modal.classList.add('hidden');
      const content = modal.querySelector('.bubble-surface');
      if (content) {
        content.classList.remove('fade-slide-in');
      }
      if (previouslyFocused && previouslyFocused.focus) {
        previouslyFocused.focus();
      }
    }, 180);
  }

  function trapFocus(event) {
    if (event.key !== 'Tab') return;

    const focusableElements = Array.from(modal.querySelectorAll(focusableSelectors))
      .filter((el) => !el.hasAttribute('disabled'));

    if (!focusableElements.length) {
      event.preventDefault();
      return;
    }

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}

function initializeFeedInteractions() {
  document.body.addEventListener('click', (event) => {
    const actionButton = event.target.closest('[data-action]');
    if (!actionButton) return;

    const actionType = actionButton.dataset.action;
    if (actionType !== 'clap' && actionType !== 'refill') return;

    event.preventDefault();
    togglePostInteraction(actionButton, actionType);
  });
}

function togglePostInteraction(button, type) {
  const article = button.closest('[data-lit-id]') || button.closest('[data-interaction-scope]');
  const stateKey = type === 'clap' ? 'clapActive' : 'refillActive';
  const baseKey = type === 'clap' ? 'clapBase' : 'refillBase';
  const activeClass = type === 'clap' ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30' : 'text-green-400 bg-green-500/10 border border-green-500/30';

  const countElement = button.querySelector('span:last-child');
  const baseCount = getBaseCount(button, article, baseKey);

  const isActive = article ? article.dataset[stateKey] === 'true' : button.dataset.active === 'true';
  const nextActive = !isActive;

  if (article) {
    article.dataset[stateKey] = String(nextActive);
  } else {
    button.dataset.active = String(nextActive);
  }

  const nextCount = baseCount + (nextActive ? 1 : 0);

  button.dataset.count = String(nextCount);

  if (countElement) {
    countElement.textContent = Number.isFinite(nextCount) ? nextCount.toLocaleString() : countElement.textContent;
  }

  button.classList.toggle('is-active', nextActive);
  toggleStateClasses(button, activeClass, nextActive);

  button.classList.add('spring-transition', 'scale-110');
  window.setTimeout(() => button.classList.remove('scale-110'), 180);
}

function getBaseCount(button, scope, baseKey) {
  const baseFromScope = scope && scope.dataset[baseKey];
  if (baseFromScope) {
    return Number(baseFromScope);
  }

  const parsed = Number(button.dataset.baseCount || button.dataset.count || extractCountFromText(button));
  const value = Number.isNaN(parsed) ? 0 : parsed;

  if (scope) {
    scope.dataset[baseKey] = String(value);
  }
  button.dataset.baseCount = String(value);
  return value;
}

function extractCountFromText(button) {
  const span = button.querySelector('span:last-child');
  if (!span) return 0;
  const digits = span.textContent ? span.textContent.replace(/[^0-9]/g, '') : '';
  return digits ? Number(digits) : 0;
}

function toggleStateClasses(button, classes, isActive) {
  classes.split(' ').forEach((className) => {
    if (!className) return;
    button.classList.toggle(className, isActive);
  });
}

