/**
 * Formspree endpoints. These URLs are public by design (they are the form's address, not a secret).
 * Env vars VITE_FORM_ENDPOINT / VITE_SIGNUP_ENDPOINT override them if set.
 */
export const endpoints = {
  enquiry: import.meta.env.VITE_FORM_ENDPOINT || "https://formspree.io/f/meagepoq",
  signup: import.meta.env.VITE_SIGNUP_ENDPOINT || "https://formspree.io/f/mvkazvgk",
};
