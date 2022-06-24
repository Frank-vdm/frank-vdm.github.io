import { Card, Modal } from 'src/components'
import { SectionProps } from '../SectionProps'

export const Portfolio = ({ id }: SectionProps) => {
  // const onChange = (currentSlide: number) => {
  //   console.log(currentSlide)
  // }

  return (
    <div id={id} className="portfolio-container">
      <div className="portfolio-content">
        <Card />
        <Modal>
          <Card />
        </Modal>
        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  )
}
