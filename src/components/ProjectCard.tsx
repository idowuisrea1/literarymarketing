import { Project, projectLink, thumb } from "../content/site";
import { track } from "../lib/analytics";

export default function ProjectCard({ p }: { p: Project }) {
  const href = projectLink(p);
  return (
    <article className="card project">
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={() => track("portfolio_project_view", { id: p.id })} aria-label={`${p.title}, ${p.category}`}>
        <img src={thumb(p)} alt={`${p.title} (${p.category})`} loading="lazy" width="480" height="270" />
      </a>
      <div className="pad">
        <p className="eyebrow">{p.category}</p>
        <h3>{p.title}</h3>
        {p.detail && <p className="muted">{p.detail}</p>}
      </div>
    </article>
  );
}
