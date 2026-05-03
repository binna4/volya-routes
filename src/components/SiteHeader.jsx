import { Text, Button } from '@mantine/core'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-logo-group">
          <img
            src={`${window.location.hostname === 'localhost' ? '/blue-logo.svg' : `${import.meta.env.BASE_URL}/blue-logo.svg`}`}
            alt="Volya Routes Logo"
            className="site-logo-icon"
          />
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

          <Button variant="filled" className="signin-button">
            Sign in
          </Button>
        </div>
      </div>
    </header>
  )
}