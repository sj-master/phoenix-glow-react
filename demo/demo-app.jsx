import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  GlowButton, GlowInput, GlowCard, GlowSwitch, GlowBadge, GlowAccordion,
} from "../src/index.ts";
import "../src/styles/phoenix-glow.css";

const wrap = { maxWidth: 960, margin: "0 auto", padding: "0 1.5rem 6rem" };
const hero = { textAlign: "center", padding: "5rem 0 3.5rem" };
const grad = {
  background: "linear-gradient(100deg, hsl(330 100% 65%), hsl(320 100% 58%) 30%, hsl(270 91% 65%) 55%, hsl(190 100% 55%))",
  WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
};
const labelRow = { display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.4rem" };
const nBadge = {
  fontFamily: "ui-monospace, Menlo, monospace", fontSize: "0.72rem", color: "hsl(330 100% 65%)",
  border: "1px solid hsl(330 100% 65% / 0.4)", borderRadius: 999, padding: "0.12rem 0.6rem",
};
const rule = { flex: 1, height: 1, background: "rgba(255,255,255,0.08)" };
const panel = { background: "#101014", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "1.75rem" };
const row = { display: "flex", flexWrap: "wrap", gap: "0.85rem", alignItems: "center" };
const muted = { color: "#9aa0aa" };

function Section({ n, title, children }) {
  return (
    <section style={{ marginTop: "4rem" }}>
      <div style={labelRow}>
        <span style={nBadge}>{n}</span>
        <h2 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, letterSpacing: "-0.01em" }}>{title}</h2>
        <div style={rule} />
      </div>
      {children}
    </section>
  );
}

function Demo() {
  const [name, setName] = useState("");
  const [on, setOn] = useState(true);

  return (
    <div style={wrap}>
      <header style={hero}>
        <img
          src="./assets/phx-it-icon.webp" alt="PHX-IT phoenix logo"
          width={132} height={132}
          style={{ borderRadius: 28, filter: "drop-shadow(0 0 40px hsl(330 100% 65% / 0.35)) drop-shadow(0 0 60px hsl(190 100% 55% / 0.25))" }}
        />
        <p style={{ margin: "1.75rem 0 0", fontSize: "0.7rem", letterSpacing: "0.4em", textTransform: "uppercase", ...muted }}>
          PHX-IT · Phoenix UI
        </p>
        <h1 style={{ fontSize: "clamp(2.4rem,6vw,4rem)", fontWeight: 800, margin: "0.5rem 0 0", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
          <span style={grad}>phoenix-glow-react</span>
        </h1>
        <p style={{ ...muted, maxWidth: "46ch", margin: "1rem auto 0", fontSize: "1.05rem" }}>
          Neon React components by Skyler Jones — a live showcase of the Glow kit.
        </p>
      </header>

      <Section n="01" title="Buttons">
        <div style={panel}>
          <div style={row}>
            <GlowButton variant="orange">Orange</GlowButton>
            <GlowButton variant="pink">Pink</GlowButton>
            <GlowButton variant="purple">Purple</GlowButton>
            <GlowButton variant="blue">Blue</GlowButton>
            <GlowButton variant="cyan">Cyan</GlowButton>
            <GlowButton variant="green">Green</GlowButton>
            <GlowButton variant="orange" glow>Pulsing glow</GlowButton>
            <GlowButton variant="outline">Outline</GlowButton>
          </div>
        </div>
      </Section>

      <Section n="02" title="Input">
        <div style={{ ...panel, maxWidth: 440 }}>
          <GlowInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Type something glowing…" />
          <p style={{ ...muted, marginTop: "0.7rem", marginBottom: 0 }}>You typed: {name || "—"}</p>
        </div>
      </Section>

      <Section n="03" title="Cards">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.1rem" }}>
          <GlowCard accent="pink"><h3 style={{ margin: "0 0 0.4rem" }}>Pink glow</h3><p style={{ ...muted, margin: 0 }}>Hover to see the neon lift.</p></GlowCard>
          <GlowCard accent="purple"><h3 style={{ margin: "0 0 0.4rem" }}>Purple glow</h3><p style={{ ...muted, margin: 0 }}>Each card takes an accent.</p></GlowCard>
          <GlowCard accent="cyan"><h3 style={{ margin: "0 0 0.4rem" }}>Cyan glow</h3><p style={{ ...muted, margin: 0 }}>Matches the phoenix wing.</p></GlowCard>
        </div>
      </Section>

      <Section n="04" title="Switch">
        <div style={panel}>
          <div style={row}>
            <GlowSwitch checked={on} onChange={setOn} aria-label="Toggle demo" />
            <span style={muted}>{on ? "On" : "Off"}</span>
          </div>
        </div>
      </Section>

      <Section n="05" title="Badges">
        <div style={panel}>
          <div style={row}>
            {["orange","pink","purple","blue","cyan","green"].map((c) => (
              <GlowBadge key={c} color={c} text={c[0].toUpperCase() + c.slice(1)} />
            ))}
          </div>
        </div>
      </Section>

      <Section n="06" title="Accordion">
        <div style={{ display: "grid", gap: "0.85rem", maxWidth: 560 }}>
          <GlowAccordion title="What is phoenix-glow-react?" defaultOpen>
            A React kit wrapping the Phoenix Glow neon aesthetic — plus a full Tailwind + Radix UI layer.
          </GlowAccordion>
          <GlowAccordion title="How do I install it?">
            Run <code>npm install phoenix-glow-react</code> and import the CSS once.
          </GlowAccordion>
          <GlowAccordion title="Is it accessible?">
            Components use semantic roles and ARIA attributes where relevant.
          </GlowAccordion>
        </div>
      </Section>

      <footer style={{ marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.08)", textAlign: "center", ...muted, fontSize: "0.85rem" }}>
        <div style={{ color: "hsl(33 100% 55%)", letterSpacing: "0.25em", textTransform: "uppercase", fontSize: "0.7rem" }}>by Skyler Jones</div>
        <p>© {new Date().getFullYear()} PHX-IT • Phoenix UI — Apache-2.0</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Demo />);
