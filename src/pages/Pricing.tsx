import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PackageCard from "../components/PackageCard";
import { oneTime, packages, quiz } from "../content/site";
import { track } from "../lib/analytics";

export default function Pricing() {
  const [pick, setPick] = useState("");
  const rec = packages.find((p) => p.id === pick);
  return (
    <section className="section">
      <Seo title="Pricing | literarymarketing" description="Monthly plans from $299 and one-time book projects from $40." />
      <h1>Simple, transparent plans</h1>
      <p className="lead">Pick a monthly plan, or pay once for a single project.</p>
      <div className="grid">{packages.map((p) => <PackageCard key={p.id} p={p} />)}</div>

      <h2>One-time projects</h2>
      <p className="muted">Pay once, own it forever.</p>
      <div className="grid">
        {oneTime.map((o) => (
          <div className="card" key={o.name}>
            <h3>{o.name}</h3>
            <p className="muted">Starting from</p>
            <p className="amount">{o.from}</p>
            <Link className="btn" to={`/enquiry?service=${encodeURIComponent(o.name)}`} onClick={() => track("cta_click", { location: "one_time", item: o.name })}>Get a Quote</Link>
          </div>
        ))}
      </div>

      <fieldset className="selector">
        <legend>Which package is right for me? {quiz.question}</legend>
        {quiz.options.map((o) => (
          <label key={o.label}><input type="radio" name="quiz" checked={pick === o.pkg} onChange={() => { setPick(o.pkg); track("package_quiz_used", { pkg: o.pkg }); }} /> {o.label}</label>
        ))}
      </fieldset>
      {rec && <p className="callout" role="status">Suggested starting point: <strong>{rec.name}</strong>. <Link to={`/enquiry?service=${rec.id}`}>Enquire about this →</Link></p>}
      <p className="muted small">Prices are starting points. Final scope is confirmed after your strategy call. Need something custom? <Link to="/enquiry">Tell us what you need</Link>.</p>
    </section>
  );
}
