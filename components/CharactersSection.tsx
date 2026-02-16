// Server Component ✅ — CharacterCard is Client but can be used inside Server
import CharacterCard, { CharacterCardProps } from "./CharacterCard";

type CharacterData = Omit<CharacterCardProps, "onFavorite">;

const CHARACTERS: CharacterData[] = [
  {
    emoji: "⭐",
    name: "Steven Universe",
    gem: "Rose Quartz / Pink Diamond",
    tags: ["Half-Gem", "Shield", "Healing"],
    accentColor: "#ff6b9d",
    bgGradient: "linear-gradient(135deg,#ff6b9d33,#ffb4d433)",
  },
  {
    emoji: "💜",
    name: "Garnet",
    gem: "Ruby + Sapphire Fusion",
    tags: ["Future Vision", "Gauntlets", "Leader"],
    accentColor: "#9b59b6",
    bgGradient: "linear-gradient(135deg,#9b59b633,#c39bd333)",
  },
  {
    emoji: "🔵",
    name: "Pearl",
    gem: "Pearl",
    tags: ["Spear", "Holograms", "Swordfight"],
    accentColor: "#4ecdc4",
    bgGradient: "linear-gradient(135deg,#4ecdc433,#a8edea33)",
  },
  {
    emoji: "💚",
    name: "Amethyst",
    gem: "Amethyst",
    tags: ["Whip", "Shapeshifting", "Wild"],
    accentColor: "#27ae60",
    bgGradient: "linear-gradient(135deg,#27ae6033,#a8e6cf33)",
  },
  {
    emoji: "💛",
    name: "Peridot",
    gem: "Peridot",
    tags: ["Ferrokinesis", "Tech", "Limb Enhancers"],
    accentColor: "#f7dc6f",
    bgGradient: "linear-gradient(135deg,#f7dc6f33,#fff9c433)",
  },
  {
    emoji: "🔷",
    name: "Lapis Lazuli",
    gem: "Lapis Lazuli",
    tags: ["Hydrokinesis", "Wings", "Mirror"],
    accentColor: "#3498db",
    bgGradient: "linear-gradient(135deg,#3498db33,#85c1e933)",
  },
  {
    emoji: "🌸",
    name: "Rose Quartz",
    gem: "Pink Diamond (Disguise)",
    tags: ["Healing", "Shield", "Shield Rose"],
    accentColor: "#ff8c69",
    bgGradient: "linear-gradient(135deg,#ff8c6933,#ffa07a33)",
  },
  {
    emoji: "❤️",
    name: "Ruby",
    gem: "Ruby",
    tags: ["Gauntlet", "Heat", "Passionate"],
    accentColor: "#e74c3c",
    bgGradient: "linear-gradient(135deg,#e74c3c33,#c0392b33)",
  },
];

export default function CharactersSection() {
  return (
    <section className="section-wrapper" id="characters">
      <div className="section-label">✦ Main Cast</div>
      <h2 className="section-title">Meet the Crystal Gems</h2>
      <p className="section-sub">
        Click any character to explore their full bio, gem type, abilities, and story arc.
      </p>

      <div className="chars-grid">
        {CHARACTERS.map((char) => (
          <CharacterCard key={char.name} {...char} />
        ))}
      </div>
    </section>
  );
}
