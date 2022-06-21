import { Carousel, Card, Row, Col } from 'antd'

const contentStyle: React.CSSProperties = {
  height: '550px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  padding: 16,
}

export const Portfolio = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <Carousel afterChange={onChange} autoplay>
      <div style={contentStyle}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
    </Carousel>
  )
}
