import React from 'react'

import { Card } from 'antd';

const Color: React.FC = () => {
  return <Card
    title="Card title"
    bordered={true}
    style={{ width: 300 }}>
    <p>Card content</p>
  </Card>
}

export default Color
