import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const ModalContent = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Hello World!</Title>
      <Paragraph>
        This is your React!!!!????
      </Paragraph>
      <Paragraph>
        You can now use any React components and Ant Design here.
        This is completely separate from your Hugo site but embedded within it.
      </Paragraph>
    </div>
  );
};

export default ModalContent;
