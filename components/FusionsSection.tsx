// Server Component ✅
interface FusionCardProps {
  emoji: string;
  name: string;
  combo: string;
}

function FusionCard({ emoji, name, combo }: FusionCardProps) {
  return (
    <div className="fusion-card">
      <div className="fusion-emoji">{emoji}</div>
      <div>
        <div className="fusion-name">{name}</div>
        <div className="fusion-combo">{combo}</div>
      </div>
    </div>
  );
}

const FUSIONS: FusionCardProps[] = [
  { emoji: "💜", name: "Garnet",         combo: "Ruby + Sapphire"           },
  { emoji: "🌟", name: "Opal",           combo: "Amethyst + Pearl"          },
  { emoji: "🏔️", name: "Sugilite",       combo: "Amethyst + Garnet"         },
  { emoji: "🌸", name: "Sardonyx",       combo: "Pearl + Garnet"            },
  { emoji: "🌊", name: "Alexandrite",    combo: "Amethyst + Pearl + Garnet" },
  { emoji: "🌀", name: "Stevonnie",      combo: "Steven + Connie"           },
  { emoji: "🍬", name: "Smoky Quartz",   combo: "Steven + Amethyst"         },
  { emoji: "🌺", name: "Rainbow Quartz", combo: "Steven + Pearl"            },
  { emoji: "⚡", name: "Sunstone",       combo: "Steven + Garnet"           },
  { emoji: "🌈", name: "Obsidian",       combo: "Steven + All Crystal Gems" },
];

export default function FusionsSection() {
  return (
    <section className="section-wrapper" id="fusions">
      <div className="section-label">✦ Combinations</div>
      <h2 className="section-title">Fusion Chart</h2>
      <p className="section-sub">
        When gems dance together in perfect harmony, they form a new, more powerful being.
      </p>
      <div className="fusion-wrapper">
        <div className="fusion-grid">
          {FUSIONS.map((f) => (
            <FusionCard key={f.name} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
