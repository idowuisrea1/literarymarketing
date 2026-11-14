import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { services } from "../content/site";
import { track } from "../lib/analytics";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);
  if (!s) return <NotFound />;
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  return (
    <section className="section narrow">
      <Seo title={`${s.title} for authors | literarymarketing`} description={`${s.blurb} ${s.items.join(", ")}.`} />
      <p className="eyebrow"><Link to="/services">Services</Link></p>
      <h1>{s.title}</h1>
      <p className="lead">{s.blurb}</p>
      <h2 className="h3">What is included</h2>
      <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
      <Link className="btn primary" to={`/enquiry?service=${s.slug}`} onClick={() => track("service_enquiry_click", { service: s.slug })}>Get a Quote</Link>
      <h2 className="h3">Related services</h2>
      <div className="grid">{others.map((o) => <Link key={o.slug} className="card link-card" to={`/services/${o.slug}`}><h3>{o.title}</h3><p className="muted">{o.blurb}</p></Link>)}</div>
    </section>
  );
}
