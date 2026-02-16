"use client"; // ← needs useState for favourite toggle

import { useState } from "react";
import type { CSSProperties } from "react";

export interface CharacterCardProps {
  emoji: string;
  name: string;
  gem: string;
  tags: string[];
  accentColor: string;
  bgGradient: string;
  onFavorite?: (name: string, isFaved: boolean) => void;
}

export default function CharacterCard({
  emoji,
  name,
  gem,
  tags,
  accentColor,
  bgGradient,
  onFavorite,
}: CharacterCardProps) {
  const [faved, setFaved] = useState(false);

  function handleFav(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    const next = !faved;
    setFaved(next);
    onFavorite?.(name, next);
  }

  // Dynamic styles via inline — avoids styled-jsx entirely
  const cardHoverStyle: CSSProperties = {};

  const cardStyle: CSSProperties = {
    ["--accent" as string]: accentColor,
  };

  return (
    <div
      className="char-card"
      style={cardStyle}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-8px)";
        el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${accentColor}66`;
        el.style.borderColor = accentColor;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "";
        el.style.boxShadow = "";
        el.style.borderColor = "";
      }}
    >
      {/* Top colour strip */}
      <div className="char-card-top" style={{ background: bgGradient }}>
        <span className="char-emoji">{emoji}</span>
      </div>

      {/* Favourite button */}
      <button className="char-fav" onClick={handleFav} aria-label="Toggle favourite">
        {faved ? "❤️" : "🤍"}
      </button>

      {/* Info */}
      <div className="char-card-body">
        <div className="char-name">{name}</div>
        <div className="char-gem">{gem}</div>
        <div className="char-tags">
          {tags.map((t) => (
            <span className="char-tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
