import { faqs } from "../content/site";
import { track } from "../lib/analytics";

export default function FaqList() {
  return (
    <div>
      {faqs.map((f) => (
        <details key={f.q} onToggle={(e) => (e.currentTarget as HTMLDetailsElement).open && track("faq_open", { q: f.q })}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
