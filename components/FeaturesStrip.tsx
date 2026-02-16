// Server Component ✅
interface Feature {
  icon: string;
  title: string;
  sub: string;
}

const FEATURES: Feature[] = [
  { icon: "👤", title: "20+ Characters", sub: "Full bios & gem profiles"  },
  { icon: "💎", title: "Gem Powers",     sub: "All abilities catalogued"  },
  { icon: "🔮", title: "Fusion Chart",   sub: "All fusion combos"         },
  { icon: "📺", title: "Episode Guide",  sub: "5 seasons + Future"        },
  { icon: "❤️", title: "Save Favorites", sub: "Powered by Supabase"       },
];

export default function FeaturesStrip() {
  return (
    <div className="features-strip">
      {FEATURES.map((f) => (
        <div className="feat-item" key={f.title}>
          <span className="feat-icon">{f.icon}</span>
          <div className="feat-text">
            <strong>{f.title}</strong>
            <span>{f.sub}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
