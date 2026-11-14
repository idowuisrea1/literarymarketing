import Seo from "../components/Seo";
import { site, why } from "../content/site";

export default function About() {
  const f = site.founder;
  return (
    <section className="section">
      <Seo title="About | literarymarketing" description={`Meet ${f.name}, founder of literarymarketing.`} />
      <div className="split">
        <img src={f.photo} alt={`${f.name}, founder of literarymarketing`} loading="lazy" width="480" height="600" />
        <div>
          <p className="eyebrow">Meet the founder</p>
          <h1>{f.name}</h1>
          <p className="muted">{f.role}</p>
          <p>{f.bio}</p>
          <a className="btn primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Book a Call with Idowu</a>
        </div>
      </div>
      <h2>How we work</h2>
      <div className="grid">{why.map((w) => <div className="card" key={w.title}><h3>{w.title}</h3><p className="muted">{w.text}</p></div>)}</div>
    </section>
  );
}
