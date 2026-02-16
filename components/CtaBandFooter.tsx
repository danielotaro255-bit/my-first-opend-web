// Server Component ✅
export function CtaBand() {
  return (
    <div className="cta-band">
      <h2 className="cta-title">Ready to Build This in Next.js? 🚀</h2>
      <p className="cta-sub">
        This guide connects to Supabase for user favorites, comments, and real-time data.
        Sign up to save your Crystal Gem journey!
      </p>
      <div className="cta-btns">
        <button className="btn-primary">⭐ Create Account</button>
        <button className="btn-secondary">📖 View Next.js Setup Guide</button>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <p>
        Crystal Gem Archives &nbsp;•&nbsp; Built with{" "}
        <a href="https://nextjs.org" target="_blank" rel="noreferrer">Next.js</a>
        {" "}+{" "}
        <a href="https://supabase.com" target="_blank" rel="noreferrer">Supabase</a>
        &nbsp;•&nbsp; Fan project, not affiliated with Cartoon Network
      </p>
      <p className="footer-credit">💎 Steven Universe created by Rebecca Sugar</p>
    </footer>
  );
}
