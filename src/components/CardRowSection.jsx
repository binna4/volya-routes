import { Card, Rating, Text } from '@mantine/core'
import { Carousel } from '@mantine/carousel'

export function CardRowSection({ title, items }) {
  const sectionId = title.toLowerCase().replaceAll(' ', '-')

  return (
    <section id={sectionId} className="section card-section">
      <div className="section-heading">
        <h2>{title}</h2>
      </div>

      <Carousel
        slideSize="320px"
        slideGap="20px"
        align="start"
        withControls={false}
        dragFree
        emblaOptions={{
          loop: true,
          dragFree: true,
          align: 'start',
        }}
        className="places-carousel"
      >
        {items.map((item) => (
          <Carousel.Slide key={item.title}>
            <Card
              className="place-card"
              radius="xl"
              padding="md"
            >
              <div className="place-card__media">
                <img
                  src={`${import.meta.env.BASE_URL}${item.image}`}
                  alt={item.title}
                  className="place-card__image"
                />
              </div>

              <div className="place-card__content">
                <div className="place-card__top">
                  <Text fw={600}>{item.title}</Text>

                  <div className="place-rating">
                    <Rating
                      value={item.rating}
                      readOnly
                      size="sm"
                    />
                  </div>
                </div>

                <Text c="dimmed" size="sm">
                  {item.type}
                </Text>
              </div>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  )
}