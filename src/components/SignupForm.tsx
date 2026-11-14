import { FormEvent, useState } from "react";
import { site } from "../content/site";
import { endpoints } from "../content/endpoints";
import { track } from "../lib/analytics";

type Props = { kind: "newsletter" | "checklist"; cta: string };

/** Consent-based email capture. Posts to the Formspree "Signups" form. */
export default function SignupForm({ kind, cta }: Props) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [trap, setTrap] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");
  const id = `signup-${kind}`;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setMsg("Please enter a valid email address.");
    if (!consent) return setMsg("Please tick the box so we can email you.");
    setMsg("");
    if (trap) { setStatus("done"); return; } // spam bot filled the hidden field
    setStatus("sending");
    try {
      const res = await fetch(endpoints.signup, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, kind, consent, _subject: `New ${kind} signup` }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
      track("lead_signup", { kind });
    } catch { setStatus("error"); }
  };

  if (status === "done") return <p role="status">Thanks, you're on the list.</p>;
  return (
    <form onSubmit={submit} noValidate className="signup">
      <label htmlFor={id} className="sr">Email address</label>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} value={trap} onChange={(e) => setTrap(e.target.value)} />
      <div className="row">
        <input id={id} type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="btn primary" disabled={status === "sending"}>{status === "sending" ? "Sending…" : cta}</button>
      </div>
      <label className="check small"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} /> I agree to receive emails from {site.name}. Unsubscribe anytime.</label>
      {msg && <p className="err" role="alert">{msg}</p>}
      {status === "error" && <p className="err" role="alert">We could not save that automatically. <a href={`mailto:${site.email}?subject=${encodeURIComponent(kind === "checklist" ? "Send me the checklist" : "Newsletter signup")}`}>Email us instead</a>.</p>}
    </form>
  );
}
