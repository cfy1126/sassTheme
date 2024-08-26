import React from 'react';
import ReactDOM from 'react-dom/client';
import Component from './Component.jsx'; // 导入Component组件


const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<Component />);
}