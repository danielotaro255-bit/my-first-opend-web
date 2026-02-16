// Server Component ✅
interface EpisodeRowProps {
  code: string;
  title: string;
  description: string;
  tag?: string;
  tagColor?: string;
}

function EpisodeRow({ code, title, description, tag, tagColor }: EpisodeRowProps) {
  const tagStyle = tagColor
    ? { background: `${tagColor}22`, color: tagColor }
    : {};

  return (
    <div className="ep-row">
      <div className="ep-num">{code}</div>
      <div className="ep-info">
        <div className="ep-title">{title}</div>
        <div className="ep-desc">{description}</div>
      </div>
      {tag && (
        <span className="ep-tag" style={tagStyle}>
          {tag}
        </span>
      )}
    </div>
  );
}

const EPISODES: EpisodeRowProps[] = [
  {
    code: "S1E25",
    title: "Mirror Gem / Ocean Gem",
    description: "Steven frees a gem trapped in a mirror — and everything changes. The first major arc begins.",
    tag: "Arc Starter",
  },
  {
    code: "S2E2",
    title: "Steven's Lion",
    description: "The mysterious pink lion and his connection to Rose Quartz unfolds in this fan-favourite.",
    tag: "Lore",
  },
  {
    code: "S2E22",
    title: "Jail Break",
    description: "Garnet's true nature is revealed. The Garnet song alone earns this a place in animated history.",
    tag: "🔑 Key Episode",
    tagColor: "#ff6b9d",
  },
  {
    code: "S5E29",
    title: "Change Your Mind",
    description: "The emotional Season 5 finale. Every Crystal Gem fuses with Steven in the show's most spectacular sequence.",
    tag: "🏆 Finale",
    tagColor: "#ff6b9d",
  },
  {
    code: "S1E45",
    title: "Rose's Room",
    description: "A quiet, dreamlike episode exploring Steven's complex feelings about his mother.",
    tag: "Character",
  },
];

export default function EpisodesSection() {
  return (
    <section className="section-wrapper" id="episodes">
      <div className="section-label">✦ Must-Watch</div>
      <h2 className="section-title">Essential Episodes</h2>
      <p className="section-sub">
        Hand-picked episodes that define the show&apos;s best moments.
      </p>
      <div className="ep-list">
        {EPISODES.map((ep) => (
          <EpisodeRow key={ep.code} {...ep} />
        ))}
      </div>
    </section>
  );
}
