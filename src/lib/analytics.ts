// src/lib/analytics.ts
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID || "";
const TRACKING_ENABLED = import.meta.env.VITE_TRACKING === "true";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Função interna para chamar o gtag
function gtag(...args: any[]) {
  if (typeof window === "undefined" || !window.gtag || !TRACKING_ENABLED) return;
  window.gtag(...args);
}

// Rastreia visualizações de página
export function pageview(path: string) {
  gtag("event", "page_view", { page_path: path });
  console.debug("[Analytics] Página visualizada:", path);
}

// Rastreia cliques e eventos personalizados
export function trackEvent({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number | string;
}) {
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
  console.debug("[Analytics] Evento:", action, { category, label, value });
}

export default { pageview, trackEvent };
