// Server Component ✅ — no interactivity needed
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">⭐ Crystal Gem Archives</div>
      <div className="nav-links">
        <a href="#characters">Characters</a>
        <a href="#powers">Powers</a>
        <a href="#fusions">Fusions</a>
        <a href="#episodes">Episodes</a>
      </div>
      <button className="nav-cta">Sign In</button>
    </nav>
  );
}
