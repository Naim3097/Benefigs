/**
 * DEMO auth — client-only, localStorage-backed, so the account UI is fully
 * navigable. PLACEHOLDER: replace with a real auth backend (NextAuth/Auth.js,
 * Clerk, Supabase, a custom API, etc.). No passwords are stored or validated.
 */

const KEY = "benefigs.demo-user.v1";

export interface DemoUser {
  name?: string;
  email: string;
}

export function getDemoUser(): DemoUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as DemoUser) : null;
  } catch {
    return null;
  }
}

export function setDemoUser(user: DemoUser) {
  try {
    localStorage.setItem(KEY, JSON.stringify(user));
  } catch {
    /* ignore */
  }
}

export function clearDemoUser() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}
