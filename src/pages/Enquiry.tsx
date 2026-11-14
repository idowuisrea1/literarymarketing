import { FormEvent, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "../components/Seo";
import { genres, serviceFromParam, serviceOptions, site } from "../content/site";
import { track } from "../lib/analytics";

type Form = { name: string; email: string; genre: string; service: string; message: string; consent: boolean };
type Errors = Partial<Record<keyof Form, string>>;

const STEPS = ["About you", "Your book", "Your message"];
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(step: number, d: Form): Errors {
  const e: Errors = {};
  if (step === 0) {
    if (!d.name.trim()) e.name = "Please enter your name.";
    if (!emailRe.test(d.email)) e.email = "Please enter a valid email address.";
  }
  if (step === 1) {
    if (!d.genre) e.genre = "Please choose a genre.";
    if (!d.service) e.service = "Please choose a service.";
  }
  if (step === 2) {
    if (d.message.trim().length < 10) e.message = "Please add a few details (at least 10 characters).";
    if (!d.consent) e.consent = "Please consent so we can reply to you.";
  }
  return e;
}

export default function Enquiry() {
  const [params] = useSearchParams();
  const [step, setStep] = useState(0);
  const [d, setD] = useState<Form>({ name: "", email: "", genre: "", service: serviceFromParam(params.get("service")) || (serviceOptions.includes(params.get("service") ?? "") ? params.get("service")! : ""), message: "", consent: false });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const started = useRef(false);

  const set = <K extends keyof Form>(k: K, v: Form[K]) => {
    if (!started.current) { started.current = true; track("form_start"); }
    setD((p) => ({ ...p, [k]: v }));
  };
  const next = () => { const e = validate(step, d); setErrors(e); if (!Object.keys(e).length) setStep(step + 1); };

  const submit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(2, d);
    setErrors(e);
    if (Object.keys(e).length) return;
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
    if (!endpoint) { setStatus("error"); return; }
    setStatus("sending");
    try {
      const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
      track("form_complete", { service: d.service, genre: d.genre });
    } catch { setStatus("error"); }
  };

  const body = `${d.message}\n\nName: ${d.name}\nEmail: ${d.email}\nGenre: ${d.genre}\nService: ${d.service}`;
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Book marketing enquiry")}&body=${encodeURIComponent(body)}`;
  const wa = `${site.whatsapp}?text=${encodeURIComponent(body)}`;

  if (status === "done") return (<section className="section narrow"><Seo title="Thank you | literarymarketing" description="Enquiry received." /><h1>Thank you</h1><p role="status">Your message has been sent. We reply within 24 hours at {d.email}.</p></section>);

  const field = (id: keyof Form, label: string, el: JSX.Element) => (
    <div className="field"><label htmlFor={id}>{label}</label>{el}{errors[id] && <p className="err" id={`${id}-err`} role="alert">{errors[id]}</p>}</div>
  );
  const aria = (id: keyof Form) => ({ id, "aria-invalid": !!errors[id], "aria-describedby": errors[id] ? `${id}-err` : undefined });

  return (
    <section className="section narrow">
      <Seo title="Contact | literarymarketing" description="Tell us about your book. We reply within 24 hours." />
      <h1>Let's talk about your book</h1>
      <p className="muted">Send a short message. We reply within 24 hours. Prefer to talk first? <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">Book a free 20-minute strategy call on WhatsApp</a>.</p>
      <p className="progress" aria-live="polite">Step {step + 1} of {STEPS.length}: {STEPS[step]}</p>
      <progress max={STEPS.length} value={step + 1} aria-label="Form progress" />
      <form onSubmit={submit} noValidate>
        {step === 0 && <>
          {field("name", "Name", <input {...aria("name")} autoComplete="name" value={d.name} onChange={(e) => set("name", e.target.value)} />)}
          {field("email", "Email", <input {...aria("email")} type="email" autoComplete="email" value={d.email} onChange={(e) => set("email", e.target.value)} />)}
        </>}
        {step === 1 && <>
          {field("genre", "Book genre", <select {...aria("genre")} value={d.genre} onChange={(e) => set("genre", e.target.value)}><option value="">Choose…</option>{genres.map((g) => <option key={g}>{g}</option>)}</select>)}
          {field("service", "Service needed", <select {...aria("service")} value={d.service} onChange={(e) => set("service", e.target.value)}><option value="">Choose…</option>{serviceOptions.map((s) => <option key={s}>{s}</option>)}</select>)}
        </>}
        {step === 2 && <>
          {field("message", "Tell us about your book", <textarea {...aria("message")} rows={5} value={d.message} onChange={(e) => set("message", e.target.value)} />)}
          <div className="field">
            <label className="check"><input type="checkbox" checked={d.consent} onChange={(e) => set("consent", e.target.checked)} /> I agree to be contacted about this enquiry.</label>
            {errors.consent && <p className="err" role="alert">{errors.consent}</p>}
          </div>
        </>}
        <div className="row">
          {step > 0 && <button type="button" className="btn" onClick={() => setStep(step - 1)}>Back</button>}
          {step < STEPS.length - 1
            ? <button type="button" className="btn primary" onClick={next}>Next</button>
            : <button type="submit" className="btn primary" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send Message"}</button>}
        </div>
        {status === "error" && <p className="err" role="alert">We could not send this automatically. <a href={mailto}>Email us instead</a> or <a href={wa} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.</p>}
      </form>
    </section>
  );
}
