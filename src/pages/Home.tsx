import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import FaqList from "../components/FaqList";
import PackageCard from "../components/PackageCard";
import ProjectCard from "../components/ProjectCard";
import SignupForm from "../components/SignupForm";
import { packages, process, projects, proofStory, services, site, stats, testimonials, why } from "../content/site";
import { track } from "../lib/analytics";
import { useReveal } from "../lib/useReveal";

export default function Home() {
  useReveal();
  return (
    <>
      <Seo title="literarymarketing | Book Marketing for Authors & Publishers" description="Social media management, automated email marketing, author websites, book trailers and cover design for authors, novelists and publishers." />
      <section className="hero">
        <p className="eyebrow">Independent authors. Future-level impact.</p>
        <h1>We turn stories into cultural gravity.</h1>
        <p className="lead">We engineer the worlds around your words: story-first marketing, immersive author websites and reader communities that keep growing long after the final page.</p>
        <p className="muted">Social media management, automated email marketing and stunning websites, built exclusively for authors, novelists and publishers.</p>
        <div className="row">
          <Link className="btn primary" to="/pricing" onClick={() => track("cta_click", { location: "hero_campaign" })}>Launch Your Campaign</Link>
          <a className="btn" href={site.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => track("cta_click", { location: "hero_call" })}>Book a Free Strategy Call</a>
        </div>
      </section>

      <section className="section reveal">
        <h2>Why authors choose us</h2>
        <div className="grid">{why.map((w) => <div className="card" key={w.title}><h3>{w.title}</h3><p className="muted">{w.text}</p></div>)}</div>
      </section>

      <section className="section reveal">
        <p className="eyebrow">Services</p>
        <h2>Eight ways we help your book reach readers</h2>
        <div className="grid">
          {services.map((s) => (
            <Link className="card link-card" key={s.slug} to={`/services/${s.slug}`}>
              <h3>{s.title}</h3><p className="muted">{s.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <p className="eyebrow">Portfolio</p>
        <h2>Work we made for authors</h2>
        <div className="grid">{projects.slice(0, 6).map((p) => <ProjectCard key={p.id} p={p} />)}</div>
        <p><Link to="/portfolio">View the full portfolio →</Link></p>
      </section>

      <section className="section reveal split">
        <img src={proofStory.image} alt="Book spotlight graphic for Memoirs of a Time Traveler" loading="lazy" width="480" height="480" />
        <div>
          <p className="eyebrow">Proof story</p>
          <h2>{proofStory.title}</h2>
          <h3>Challenge</h3><p>{proofStory.challenge}</p>
          <h3>What we did</h3><p>{proofStory.did}</p>
          {proofStory.result && <><h3>Result</h3><p>{proofStory.result}</p></>}
          <Link className="btn" to="/enquiry?service=graphic-cover-design">Get a Spotlight Like This</Link>
        </div>
      </section>

      <section className="section reveal">
        <p className="eyebrow">How it works</p>
        <h2>Three steps. Zero stress.</h2>
        <ol className="steps">{process.map((s, i) => <li key={s.title}><span className="num">{i + 1}</span><strong>{s.title}</strong><span className="muted">{s.text}</span></li>)}</ol>
        <a className="btn" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Start with a Free Call</a>
      </section>

      {stats.length > 0 && (
        <section className="section reveal"><div className="grid">{stats.map((s) => <div className="card" key={s.label}><p className="amount">{s.value}</p><p className="muted">{s.label}</p></div>)}</div></section>
      )}
      {testimonials.length > 0 && (
        <section className="section reveal"><h2>Kind words</h2><div className="grid">{testimonials.map((t) => <blockquote className="card" key={t.name}><p>“{t.quote}”</p><footer>{t.name}, {t.role}</footer></blockquote>)}</div></section>
      )}

      <section className="section reveal">
        <p className="eyebrow">Pricing</p>
        <h2>Simple, transparent plans</h2>
        <div className="grid">{packages.map((p) => <PackageCard key={p.id} p={p} />)}</div>
        <p><Link to="/pricing">One-time projects and package quiz →</Link></p>
      </section>

      <section className="section reveal narrow">
        <p className="eyebrow">FAQ</p>
        <h2>Questions, answered</h2>
        <FaqList />
      </section>

      <section className="section reveal narrow">
        <h2>Free author marketing checklist</h2>
        <p className="muted">The 10 steps every author should take. Know what to do first, avoid common launch mistakes, 5 minutes to read.</p>
        <SignupForm kind="checklist" cta="Send Me the Checklist" />
      </section>
    </>
  );
}
