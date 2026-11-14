/**
 * ALL BUSINESS CONTENT LIVES HERE. Copied from the live site (literarymarketing.lovable.app).
 * PLACEHOLDERS (owner will replace): `stats`, `testimonials` and `proofStory.result` below.
 * Search this file for "PLACEHOLDER" to find them.
 */

const ASSETS = "https://literarymarketing.lovable.app/__l5e/assets-v1/";
const asset = (p: string) => ASSETS + p;

export const site = {
  name: "literarymarketing",
  tagline: "Turning stories into social movements for authors, novelists and publishers.",
  email: "idowuisreal@literarymarketing.online",
  whatsapp: "https://wa.me/2347033070181",
  whatsappLabel: "+234 703 307 0181",
  logo: asset("22b5b9eb-fd2a-4906-8c67-6c59332de797/logo.png"),
  founder: {
    name: "Idowu Isreal Agboola",
    role: "Founder · Social Media & Email Marketer · Website Developer",
    photo: asset("fa210a05-984f-4fce-b335-0e9ad21fbf49/founder.webp"),
    bio: "I help authors turn books into brands by combining storytelling, marketing and technology. Every book has readers waiting for it. My job is to make sure they find it, fall in love with it and come back for the next one.",
  },
};

export const why = [
  { title: "We only work with authors", text: "Books are all we do." },
  { title: "Fast start", text: "Live in 5 to 7 days." },
  { title: "You own your designs", text: "Every file is yours." },
  { title: "Clear monthly reports", text: "Plain numbers, no jargon." },
];

export type Service = { slug: string; title: string; blurb: string; items: string[] };

export const services: Service[] = [
  { slug: "amazon-goodreads-growth", title: "Amazon & Goodreads Growth", blurb: "Get found and chosen on Amazon and Goodreads.", items: ["Amazon Optimization", "Amazon A+ Content", "Amazon Marketing", "Goodreads Optimization", "Goodreads Listopia"] },
  { slug: "social-media-management", title: "Social Media Management & Content", blurb: "Show up every week where readers scroll.", items: ["Social Media Management", "Content Creation", "Content Calendars", "Community Growth"] },
  { slug: "video", title: "Video That Sells Books", blurb: "Short videos that make readers want your book.", items: ["Book Trailers", "BookTok Videos", "UGC Video", "AI UGC Video", "Slideshow Video", "Product Video"] },
  { slug: "email-marketing", title: "Email Marketing", blurb: "Turn readers into fans who buy every book.", items: ["Email Newsletters", "Email Automation", "Email Campaigns", "Reader Funnels", "ARC Launches"] },
  { slug: "author-websites", title: "Author Websites & Landing Pages", blurb: "A beautiful home online for you and your books.", items: ["Website Design", "Landing & Squeeze Pages", "Website Integration"] },
  { slug: "website-audit-seo", title: "Website Audit, SEO & Optimization", blurb: "Make your site faster and easier to find.", items: ["Website Audit", "Website SEO", "Speed & Optimization", "Website Promotion"] },
  { slug: "graphic-cover-design", title: "Graphic & Cover Design", blurb: "Covers and graphics that look like a bestseller.", items: ["Book Covers", "Book Mockups", "Book Spotlight Graphics", "Content Design"] },
  { slug: "ads-promotion", title: "Ads & Promotion", blurb: "Put your book in front of more readers.", items: ["Ads Promotion", "Book Launch Promotion", "SEO"] },
];

export type Pkg = { id: string; name: string; tagline: string; price: string; period: string; popular?: boolean; features: string[] };

export const packages: Pkg[] = [
  { id: "debut", name: "The Debut Author Package", tagline: "Get your book seen, the right way.", price: "$299", period: "/month", features: ["12 branded social posts / month", "2 platforms managed", "Welcome email sequence (3 emails)", "1 book spotlight graphic", "Monthly growth report"] },
  { id: "bestseller", name: "The Bestseller Tier", tagline: "Build a reader movement around your book.", price: "$599", period: "/month", popular: true, features: ["20 posts + 4 Reels / BookTok videos", "3 platforms managed", "Full email funnel + monthly newsletter", "1 book trailer", "3D book mockups", "Bi-weekly strategy call"] },
  { id: "empire", name: "The Publishing Empire Plan", tagline: "For publishers and serious series authors.", price: "$1,199", period: "/month", features: ["Daily content on all platforms", "Launch & pre-order campaigns", "ARC review mechanics", "Author website included", "Cover design or redesign", "Priority support"] },
];

export const oneTime = [
  { name: "Book Cover Design", from: "$120" },
  { name: "Book Trailer", from: "$99" },
  { name: "BookTok / UGC Video", from: "$40" },
  { name: "Book Spotlight Graphic Pack", from: "$75" },
  { name: "Amazon A+ Content", from: "$120" },
  { name: "Landing / Squeeze Page", from: "$150" },
  { name: "Author Website", from: "$450" },
  { name: "Website Audit", from: "$79" },
];

export const quiz = {
  question: "Where is your book right now?",
  options: [
    { label: "Just launched or my first book", pkg: "debut" },
    { label: "Out for a while, sales are slow", pkg: "bestseller" },
    { label: "Several books or a series", pkg: "empire" },
  ],
};

export const process = [
  { title: "The Manuscript Sync", text: "Connect your channels and tell us about your genre and book." },
  { title: "The Blueprint Reveal", text: "We design your 30-day social and email plan for your readers." },
  { title: "The Viral Loop", text: "We schedule, post, send and scale, while you write." },
];

export const categories = ["Book Trailers", "BookTok", "Book Spotlights", "Mockups", "Cover Design", "Content Design"] as const;
export type Category = (typeof categories)[number];

export type Project = { id: string; title: string; category: Category; detail?: string; youtubeId?: string; image?: string };

// The live site lists 35 projects; the 18 below are the ones visible on its page. Add the rest here.
export const projects: Project[] = [
  { id: "dragon-cursed", title: "Dragon Cursed", detail: "by Elise Kova", category: "Book Trailers", youtubeId: "6MgL7enCGmI" },
  { id: "trailer-ahmj", title: "Book trailer", category: "Book Trailers", youtubeId: "AhmJbAvhueE" },
  { id: "wife-before", title: "The Wife Before", category: "Book Trailers", youtubeId: "hleTcjUmxoc" },
  { id: "emma-revived", title: "Emma Revived", category: "Book Trailers", youtubeId: "8DG3n8wUXXA" },
  { id: "trailer-cpg2", title: "Book trailer", category: "Book Trailers", youtubeId: "CPG-2ALbUdA" },
  { id: "trailer-fw3h", title: "Book trailer", category: "Book Trailers", youtubeId: "fW3HKIWwm5U" },
  { id: "awakening", title: "Awakening", category: "Book Trailers", youtubeId: "IHIBFc3lX6A" },
  { id: "blood-root", title: "Blood Root", category: "Book Trailers", youtubeId: "zyRxyaa8K3A" },
  { id: "last-signal", title: "The Last Signal", category: "Book Trailers", youtubeId: "sd6xmk9LYpI" },
  { id: "maly-przyjaciel", title: "Mały Przyjaciel", category: "Book Spotlights", image: asset("20f94e09-84b2-4954-a815-a0f6443f1cc6/sp-maly.webp") },
  { id: "memoirs", title: "Memoirs of a Time Traveler", category: "Book Spotlights", image: asset("462d3a49-306e-4e8b-800e-2f2bc8f8dbf5/sp-memoirs.webp") },
  { id: "sp-cloak", title: "Book spotlight", category: "Book Spotlights", image: asset("4ddc8d87-eacb-4575-b008-d29b09304a9d/sp-cloak.webp") },
  { id: "sp-treaty", title: "Book spotlight", category: "Book Spotlights", image: asset("5afaa014-cdc0-445d-8488-b861b63d4fbc/sp-treaty.webp") },
  { id: "cv-legends", title: "Book cover", category: "Cover Design", image: asset("61feb47c-21ef-480a-8e4e-984a6f54407a/cv-legends.webp") },
  { id: "cv-stardust", title: "Book cover", category: "Cover Design", image: asset("68e922a5-916e-4dc1-8950-2391e76ba234/cv-stardust.webp") },
  { id: "cv-snow", title: "Book cover", category: "Cover Design", image: asset("11c84695-c783-4aca-8757-72cf172b98f0/cv-snow.webp") },
  { id: "cv-curse", title: "Book cover", category: "Cover Design", image: asset("9511f2bb-c05d-411a-b97f-28ba4952dad2/cv-curse.webp") },
  { id: "cv-mystical", title: "Book cover", category: "Cover Design", image: asset("09fea48f-a51f-4e78-b4b1-5906bf75417e/cv-mystical.webp") },
];

export const thumb = (p: Project) => p.image ?? `https://i.ytimg.com/vi/${p.youtubeId}/hqdefault.jpg`;
export const projectLink = (p: Project) => (p.youtubeId ? `https://www.youtube.com/watch?v=${p.youtubeId}` : p.image);

export const proofStory = {
  title: "How We Make a Book Impossible to Scroll Past",
  image: asset("462d3a49-306e-4e8b-800e-2f2bc8f8dbf5/sp-memoirs.webp"),
  challenge: "A time-travel sci-fi romance with a huge hook (a baseball signed in 1908 with ink that shouldn't exist) had to explain itself in seconds on a crowded Amazon page and social feed.",
  did: "We designed a one-glance book spotlight that turns the story's hook into five scannable moments, with the 3D book and e-reader mockups and a clear 'Available on Amazon' call to action.",
  result: "[PLACEHOLDER: add a real result here, such as clicks, saves or sales.]", // PLACEHOLDER: replace with a verified result
};

export type Testimonial = { quote: string; name: string; role: string };
// PLACEHOLDER: replace with real, permissioned testimonials.
export const testimonials: Testimonial[] = [
  { quote: "[PLACEHOLDER: add a real testimonial from a client here.]", name: "Author name", role: "Author" },
];
// PLACEHOLDER: sample figures. Replace with verified numbers.
export const stats: { value: string; label: string }[] = [
  { value: "50+", label: "Books marketed (sample)" },
  { value: "30+", label: "Authors served (sample)" },
  { value: "5★", label: "Average rating (sample)" },
];

export const faqs = [
  { q: "What is included in each package?", a: "Every package includes content design, posting and a monthly report. Higher tiers add videos, email funnels and websites. See the pricing cards for the full list." },
  { q: "How fast do you start?", a: "Most campaigns go live within 5-7 days after our strategy call and your book details are in." },
  { q: "Do you need my full manuscript?", a: "No. A synopsis, your cover, a few favourite quotes and your target readers are enough." },
  { q: "How does payment work?", a: "After you order, we confirm details and send a secure invoice. Monthly plans are billed at the start of each month." },
  { q: "Can I cancel anytime?", a: "Yes. Monthly plans can be cancelled with 14 days' notice. No long contracts." },
  { q: "Do you work with traditionally published authors?", a: "Yes, we work with indie, self-published and traditionally published authors, plus small presses." },
  { q: "Will I own the designs and website?", a: "Yes. Once paid, every graphic, video and website we create for you is yours." },
  { q: "Which platforms do you manage?", a: "Instagram, TikTok, Facebook, X, Pinterest and YouTube Shorts, plus your email list." },
];

export const genres = ["Fantasy", "Romance", "Thriller / Mystery", "Sci-Fi", "Horror", "Literary Fiction", "Young Adult", "Children's", "Non-Fiction / Memoir", "Christian / Faith", "Other"];

export const serviceOptions = [...services.map((s) => s.title), "Full Package", ...packages.map((p) => `Package: ${p.name}`)];

/** Maps a ?service= URL value (service slug or package id) to a form option. */
export const serviceFromParam = (v: string | null) => {
  if (!v) return "";
  const s = services.find((x) => x.slug === v);
  if (s) return s.title;
  const p = packages.find((x) => x.id === v);
  return p ? `Package: ${p.name}` : "";
};
