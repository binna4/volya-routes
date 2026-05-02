export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-bottom-gradient" />

      <div className="hero-content">
        <h1>Ukraine</h1>
        <p className="hero-subtitle">Volya Routes Travel</p>

        <div className="hero-text-block">
          <h2>Helping with travel in Ukraine</h2>
          <p>
            Tap a city on the map to discover curated trips, expert local guides, and everything waiting for you.
          </p>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <strong>2k+</strong>
          <span>Destinations</span>
        </div>
        <div className="hero-stat">
          <strong>5+</strong>
          <span>Years of Experience</span>
        </div>
        <div className="hero-stat">
          <strong>10k+</strong>
          <span>Travelers</span>
        </div>
        <div className="hero-stat">
          <strong>4.5</strong>
          <span>Rating</span>
        </div>
      </div>
    </section>
  )
}