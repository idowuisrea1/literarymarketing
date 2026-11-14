import { Link } from "react-router-dom";
import { Pkg } from "../content/site";
import { track } from "../lib/analytics";

export default function PackageCard({ p }: { p: Pkg }) {
  return (
    <article className={p.popular ? "card price popular" : "card price"}>
      {p.popular && <p className="badge">Most Popular</p>}
      <h3>{p.name}</h3>
      <p className="muted">{p.tagline}</p>
      <p className="amount">{p.price}<span>{p.period}</span></p>
      <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
      <Link className={p.popular ? "btn primary" : "btn"} to={`/enquiry?service=${p.id}`} onClick={() => track("cta_click", { location: "package", pkg: p.id })}>Order Package</Link>
    </article>
  );
}
