import { Accordion } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'

export function FAQSection() {
  return (
    <section id="faq" className="faq-wrapper">
      <div className="section faq-section">
        <div className="section-heading">
          <h2>Frequently asked questions</h2>
        </div>

        <Accordion
          multiple
          variant="contained"
          chevron={<IconChevronRight size={16} />}
          className="faq-accordion"
        >
          <Accordion.Item value="languages">
            <Accordion.Control>
              What languages are spoken in Ukraine?
            </Accordion.Control>
            <Accordion.Panel>
              Ukrainian is the official state language of Ukraine.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="currency">
            <Accordion.Control>
              What currency does Ukraine use?
            </Accordion.Control>
            <Accordion.Panel>
              Ukraine uses hryvnia.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="best-time">
            <Accordion.Control>
              Best time to visit Ukraine?
            </Accordion.Control>
            <Accordion.Panel>
             Late spring to early fall for warm weather and scenery, while winter is best for skiing.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  )
}