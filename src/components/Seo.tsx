import { useEffect } from "react";

export default function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    let m = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.name = "description";
      document.head.appendChild(m);
    }
    m.content = description;
    const base = import.meta.env.VITE_SITE_URL;
    if (base) {
      let l = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!l) {
        l = document.createElement("link");
        l.rel = "canonical";
        document.head.appendChild(l);
      }
      l.href = base.replace(/\/$/, "") + window.location.pathname;
    }
  }, [title, description]);
  return null;
}
