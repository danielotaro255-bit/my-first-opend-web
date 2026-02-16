// Server Component ✅
interface PowerCardProps {
  icon: string;
  name: string;
  who: string;
  description: string;
  accentColor: string;
}

function PowerCard({ icon, name, who, description, accentColor }: PowerCardProps) {
  return (
    <div
      className="power-card"
      style={{ borderLeftColor: accentColor }}
    >
      <div className="power-icon">{icon}</div>
      <div className="power-name">{name}</div>
      <div className="power-who" style={{ color: accentColor }}>{who}</div>
      <div className="power-desc">{description}</div>
    </div>
  );
}

const POWERS: PowerCardProps[] = [
  {
    icon: "🛡️",
    name: "Bubble Shield",
    who: "Steven Universe",
    description: "Generates a pink protective bubble capable of blocking almost any attack. Size scales with emotional state.",
    accentColor: "#ff6b9d",
  },
  {
    icon: "👁️",
    name: "Future Vision",
    who: "Garnet / Sapphire",
    description: "Ability to see all possible futures simultaneously. More accurate for Sapphire, filtered through emotion for Garnet.",
    accentColor: "#4ecdc4",
  },
  {
    icon: "🌊",
    name: "Hydrokinesis",
    who: "Lapis Lazuli",
    description: "Full control over all water, including the Earth's oceans. Can form constructs, wings, and a mirror prison.",
    accentColor: "#3498db",
  },
  {
    icon: "🔮",
    name: "Holograms",
    who: "Pearl",
    description: "Projects detailed holograms from her gem, including interactive combat simulations and historical records.",
    accentColor: "#9b59b6",
  },
  {
    icon: "🦎",
    name: "Shapeshifting",
    who: "Amethyst / Steven",
    description: "Full body transformation into any shape, creature, or person. Can hold alternate forms for extended periods.",
    accentColor: "#27ae60",
  },
  {
    icon: "🧲",
    name: "Ferrokinesis",
    who: "Peridot",
    description: "Telekinetic control over metal objects. Developed after losing her limb enhancers — a true emergent power.",
    accentColor: "#f7dc6f",
  },
];

export default function PowersSection() {
  return (
    <section className="section-wrapper" id="powers">
      <div className="section-label">✦ Abilities</div>
      <h2 className="section-title">Gem Powers & Abilities</h2>
      <p className="section-sub">
        Every gem has a unique power tied to their gem type and emotional state.
      </p>
      <div className="powers-grid">
        {POWERS.map((p) => (
          <PowerCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
