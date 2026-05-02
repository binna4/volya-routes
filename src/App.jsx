import { useState } from 'react'
import { AppShell } from '@mantine/core'
import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { CitiesSection } from './components/CitiesSection'
import { CardRowSection } from './components/CardRowSection'
import { FAQSection } from './components/FAQSection'
import { SiteFooter } from './components/SiteFooter'
import { cities } from './data/cities'

export default function App() {
  const [selectedCity, setSelectedCity] = useState('kyiv')
  const currentCity = cities[selectedCity]

  return (
    <AppShell header={{ height: 92 }} padding={0}>
      <AppShell.Header>
        <SiteHeader />
      </AppShell.Header>

      <AppShell.Main>
        <HeroSection />

        <CitiesSection
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity}
        />

        <CardRowSection title="Activities" items={currentCity.activities} />
        <CardRowSection title="Places to Stay" items={currentCity.stay} />
        <CardRowSection title="Food" items={currentCity.food} />

        <FAQSection />
        <SiteFooter />
      </AppShell.Main>
    </AppShell>
  )
}