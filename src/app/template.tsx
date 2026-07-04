/**
 * Per-navigation template. Remounts on every route change, replaying the
 * `.page-enter` CSS animation for a smooth page transition. Pure CSS — no JS
 * required for the content to be visible, and neutralised under reduced motion.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
