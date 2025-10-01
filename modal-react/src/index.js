import React from 'react';
import { createRoot } from 'react-dom/client';
import ModalContent from './ModalContent';
//import 'antd/dist/reset.css';

// Export the component for use in the modal
window.ModalReactContent = ModalContent;

// Function to render the React component into a container
window.renderModalReact = (containerId) => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = createRoot(container);
    root.render(<ModalContent />);
    return root;
  }
  return null;
};

export default ModalContent;
