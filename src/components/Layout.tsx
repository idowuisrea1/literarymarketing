import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { site } from "../content/site";
import { track } from "../lib/analytics";
import SignupForm from "./SignupForm";

const links = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); setOpen(false); }, [pathname]);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <Link to="/" className="brand"><img src={site.logo} alt="" width="28" height="28" /> {site.name}</Link>
        <button className="menu" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        <nav id="nav-links" aria-label="Main" className={open ? "links open" : "links"}>
          {links.map((l) => <NavLink key={l.to} to={l.to}>{l.label}</NavLink>)}
          <Link className="btn primary small" to="/enquiry" onClick={() => track("cta_click", { location: "nav" })}>Contact Us</Link>
        </nav>
      </header>
      <main id="main" tabIndex={-1}><Outlet /></main>
      {pathname !== "/enquiry" && (
        <a className="sticky-cta" href={site.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => track("cta_click", { location: "sticky_whatsapp" })}>Book a free call</a>
      )}
      <footer className="footer">
        <div className="foot-grid">
          <div>
            <p className="brand"><img src={site.logo} alt="" width="28" height="28" /> {site.name}</p>
            <p className="muted">{site.tagline}</p>
            <p className="muted"><a href={`mailto:${site.email}`}>{site.email}</a><br /><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp {site.whatsappLabel}</a></p>
          </div>
          <nav aria-label="Footer" className="foot-links">
            {links.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
            <Link to="/enquiry">Contact</Link>
          </nav>
          <div>
            <p><strong>Reader-growth tips, monthly</strong></p>
            <SignupForm kind="newsletter" cta="Join" />
          </div>
        </div>
        <p className="muted small">© {new Date().getFullYear()} {site.name} · Founded by {site.founder.name}</p>
      </footer>
    </>
  );
}
