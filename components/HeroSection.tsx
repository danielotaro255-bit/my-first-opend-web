import type { CSSProperties } from "react";

interface GemFloat {
  emoji: string;
  style: CSSProperties;
}

// Server Component ✅
const GEM_FLOATS: GemFloat[] = [
  { emoji: "💎", style: { top: "10%", left: "5%",  animationDelay: "0s"   } },
  { emoji: "⭐", style: { top: "30%", right: "4%", animationDelay: "1s"   } },
  { emoji: "🔮", style: { top: "60%", left: "3%",  animationDelay: "2s"   } },
  { emoji: "💜", style: { top: "75%", right: "6%", animationDelay: "0.5s" } },
];

export default function HeroSection() {
  return (
    <section className="hero">
      {GEM_FLOATS.map(({ emoji, style }) => (
        <div key={emoji} className="gem-float" style={style}>
          {emoji}
        </div>
      ))}

      <div className="hero-badge">✦ The Ultimate Fan Guide ✦</div>

      <h1 className="hero-title">
        <span className="line1">Crystal Gem</span>
        <br />
        <span className="line2">Archives</span>
      </h1>

      <p className="hero-sub">
        Your complete guide to the world of Steven Universe — characters, gem powers,
        fusions, and every episode. Save your favorites, leave reviews, and explore Beach City! 🌊
      </p>

      <div className="hero-btns">
        <button className="btn-primary">✨ Explore Characters</button>
        <button className="btn-secondary">▶ Watch Guide</button>
      </div>

      <div className="crystal-orb">
        <div className="orb-inner" />
        <div className="orb-star">⭐</div>
      </div>
    </section>
  );
}
