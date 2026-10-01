/* eslint-env node */
let measurementId;
let lastPage;

// Initialize lazily so unconfigured builds never load Google's script.
export const initializeAnalytics = () => {
  if (measurementId) return true;
  const id = process.env.REACT_APP_GA_MEASUREMENT_ID?.trim();
  const enabled = process.env.REACT_APP_GA_ENABLED;
  if (
    !/^G-[A-Z0-9]+$/.test(id || '') ||
    enabled === 'false' ||
    (process.env.NODE_ENV !== 'production' && enabled !== 'true')
  ) {
    return false;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      window.dataLayer.push(arguments);
    };
  window.gtag('js', new Date());
  window.gtag('config', id, {
    send_page_view: false,
    ...(process.env.REACT_APP_GA_DEBUG === 'true' && { debug_mode: true }),
  });

  const script = document.createElement('script');
  script.async = true;
  script.id = 'google-analytics';
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
  measurementId = id;
  return true;
};

const sendEvent = (name, parameters) => {
  try {
    if (!initializeAnalytics()) return false;
    window.gtag('event', name, { send_to: measurementId, ...parameters });
    return true;
  } catch {
    // Analytics must never interrupt navigation or form interactions.
    return false;
  }
};

export const trackPageView = (title) => {
  const path = window.location.pathname;
  if (lastPage?.path === path) return;
  const location = new URL(window.location.href);
  location.hash = '';
  const sent = sendEvent('page_view', {
    page_title: title,
    page_location: location.href,
    page_path: path,
    page_referrer: lastPage?.location || document.referrer,
  });
  if (sent) lastPage = { path, location: location.href };
};

// Capture runs before React handlers navigate or unmount the clicked element.
// Delegation also covers lazy-loaded pages, modal portals, and keyboard clicks.
export const trackElementClick = (event) => {
  const element = event.target.closest?.('a, button, [role="button"]');
  if (!element || element.closest('[data-analytics-ignore]')) return;
  const category = element.dataset.category;
  if (!category && element.tagName !== 'A') return;
  sendEvent('cta_click', {
    event_category: category || 'cta',
    event_label: window.location.pathname,
    page_path: window.location.pathname,
    ...(element.dataset.project && { project_id: element.dataset.project }),
  });
};
