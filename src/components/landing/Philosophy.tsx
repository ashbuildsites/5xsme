import { philosophyHtml } from "@/lib/landing-data";

/**
 * Splits the philosophy sentence into per-word spans so the scroll can light
 * them up one at a time. `<em>…</em>` runs mark the phrases that land in
 * accent green and italics; everything else resolves to ink.
 */
function words() {
  const out: { text: string; accent: boolean }[] = [];
  const parts = philosophyHtml.split(/(<em>.*?<\/em>)/g);

  for (const part of parts) {
    const accent = part.startsWith("<em>");
    const text = accent ? part.slice(4, -5) : part;
    for (const word of text.split(/\s+/)) {
      if (word) out.push({ text: word, accent });
    }
  }
  return out;
}

export function Philosophy() {
  return (
    <section className="lp-philo" id="approach">
      <div className="lp-philo-head">
        <div className="lp-lbl-sm">Our Approach</div>
        <div className="lp-lbl-sm">What guides the work</div>
      </div>
      <p className="lp-philo-txt" id="lpPhiloTxt">
        {words().map((w, i) => (
          <span key={i}>
            <span
              className="pw"
              data-accent={w.accent ? "1" : "0"}
              style={w.accent ? { fontStyle: "italic" } : undefined}
            >
              {w.text}
            </span>{" "}
          </span>
        ))}
      </p>
    </section>
  );
}
