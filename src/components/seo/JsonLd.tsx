/**
 * Renders a JSON-LD structured-data script. Safe: the payload is our own
 * server-built object, serialised with `<` escaped to avoid breaking out of the
 * script context.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
