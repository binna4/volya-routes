import { cities } from '../data/cities'

const cityPins = [
  { id: 'kyiv', label: 'Kyiv', top: '31%', left: '54%' },
  { id: 'lviv', label: 'Lviv', top: '34%', left: '28%' },
  { id: 'odesa', label: 'Odesa', top: '67%', left: '42%' },
  { id: 'dnipro', label: 'Dnipro', top: '45%', left: '66%' },
]

export function CitiesSection({ selectedCity, onSelectCity }) {
  const city = cities[selectedCity]

  return (
    <section id="cities" className="section cities-section">
      <div className="section-heading">
        <h2>Explore Ukraine&apos;s Cities</h2>
      </div>

      <div className="cities-layout">
        <div className="map-card">
          <div className="map-wrapper">
            <img
              src={`${window.location.hostname === 'localhost' ? '/map-of-ukraine-gradient.svg' : `${import.meta.env.BASE_URL}/map-of-ukraine-gradient.svg`}`}
              alt="Map of Ukraine"
              className="ukraine-map"
            />

            {cityPins.map((pin) => (
              <button
                key={pin.id}
                className={`city-pin ${
                  selectedCity === pin.id ? 'city-pin--active' : ''
                }`}
                style={{ top: pin.top, left: pin.left }}
                onClick={() => onSelectCity(pin.id)}
                aria-label={pin.label}
                title={pin.label}
                type="button"
              >
                <span className="city-pin__dot" />
              </button>
            ))}
          </div>
        </div>

        <div className="city-info">
          <div className="city-info__content">
            <p className="city-info__label">Choose your city</p>
            <h3>{city.name}</h3>
            <p>{city.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}