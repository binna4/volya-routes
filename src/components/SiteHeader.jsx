import { Text } from '@mantine/core'
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-logo-group">
          <img
            src="/blue-logo.svg"
            alt="Volya Routes Logo"
            className="site-logo-icon"/>
          <Text className="site-logo">Volya Routes</Text>
        </div>

        <nav className="site-nav">
          <a href="#hero">Home</a>
          <a href="#activities">Activities</a>
          <a href="#places-to-stay">Places to Stay</a>
          <a href="#food">Food</a>
          <a href="#cities">Trip Planning</a>
        </nav>

        <div className="site-header__right">
          <Text className="weather-text">45 F°</Text>
          <button>Log in</button>
          <a href="#cities" className="nav-cta">Book Now</a>
        </div>
      </div>
    </header>
)}