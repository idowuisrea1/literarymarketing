import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ProjectCard from "../components/ProjectCard";
import { categories, projects } from "../content/site";
import { track } from "../lib/analytics";

const PAGE = 9;

export default function Portfolio() {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const [count, setCount] = useState(PAGE);
  const present = categories.filter((c) => projects.some((p) => p.category === c));
  const matches = projects.filter((p) => (cat === "All" || p.category === cat) && `${p.title} ${p.detail ?? ""}`.toLowerCase().includes(q.toLowerCase()));
  return (
    <section className="section">
      <Seo title="Portfolio | literarymarketing" description="Book trailers, spotlights and cover designs made for authors." />
      <h1>Work we made for authors</h1>
      <div className="row">
        <label className="sr" htmlFor="search">Search projects</label>
        <input id="search" type="search" placeholder="Search projects" value={q} onChange={(e) => { setQ(e.target.value); setCount(PAGE); }} />
      </div>
      <div role="group" aria-label="Filter by category" className="chips">
        {["All", ...present].map((c) => (
          <button key={c} className="chip" aria-pressed={cat === c} onClick={() => { setCat(c); setCount(PAGE); track("portfolio_filter", { category: c }); }}>{c}</button>
        ))}
      </div>
      <p className="muted" aria-live="polite">Showing {Math.min(count, matches.length)} of {matches.length}</p>
      {matches.length === 0 ? <p>No projects match.</p> : <div className="grid">{matches.slice(0, count).map((p) => <ProjectCard key={p.id} p={p} />)}</div>}
      {count < matches.length && <p><button className="btn" onClick={() => setCount(count + PAGE)}>Load more</button></p>}
      <p className="callout">Want something like this? <Link to="/enquiry">Send an enquiry</Link></p>
    </section>
  );
}
