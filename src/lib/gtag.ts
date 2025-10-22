export const GA_MEASUREMENT_ID = 'G-WPXNTVTKEY';

declare global {
  interface Window { gtag?: (...args: any[]) => void; }
}

export function pageview(path: string) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'page_view', { page_path: path });
}

export function event({ action, category, label, value } : 
  { action: string; category?: string; label?: string; value?: number | string }) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value
  });
}
export default { pageview, event };
