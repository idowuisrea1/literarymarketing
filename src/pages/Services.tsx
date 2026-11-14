import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { services, site } from "../content/site";

export default function Services() {
  return (
    <section className="section">
      <Seo title="Services | literarymarketing" description="Amazon and Goodreads growth, social media, video, email, author websites, SEO, cover design and ads for authors." />
      <h1>Everything we do</h1>
      <p className="lead">Eight ways we help your book reach readers.</p>
      <div className="grid">
        {services.map((s) => (
          <article className="card" key={s.slug}>
            <h2 className="h3"><Link to={`/services/${s.slug}`}>{s.title}</Link></h2>
            <p className="muted">{s.blurb}</p>
            <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            <Link className="btn" to={`/enquiry?service=${s.slug}`}>Get a Quote</Link>
          </article>
        ))}
      </div>
      <p className="callout">Need something else? Tell us what your book needs. <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">Message us</a></p>
    </section>
  );
}
