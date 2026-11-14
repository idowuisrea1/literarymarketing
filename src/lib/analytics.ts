type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    plausible?: (event: string, opts?: { props: Props }) => void;
  }
}

/** Single entry point for conversion events. Plug in GA4/GTM/Plausible later without touching components. */
export function track(event: string, props: Props = {}) {
  window.dataLayer?.push({ event, ...props });
  window.plausible?.(event, { props });
  if (import.meta.env.DEV) console.debug("[track]", event, props);
}
