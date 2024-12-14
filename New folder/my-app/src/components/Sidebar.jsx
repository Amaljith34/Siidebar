

import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const defaultWidgets = [
    { id: 'trending-posts', title: 'Trending Posts', content: 'Trending content here' },
    { id: 'recommended-reads', title: 'Recommended Reads', content: 'Recommended content here' },
    { id: 'latest-post', title: 'Latest Post', content: 'Latest post here' },
  ];

  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    const savedOrder = localStorage.getItem('widgetOrder');
    if (savedOrder) {
      const savedIds = JSON.parse(savedOrder);
      const widgetMap = Object.fromEntries(defaultWidgets.map((widget) => [widget.id, widget]));
      const orderedWidgets = savedIds.map((id) => widgetMap[id]).filter(Boolean);
      const missingWidgets = defaultWidgets.filter(
        (widget) => !orderedWidgets.some((w) => w.id === widget.id)
      );

      setWidgets([...orderedWidgets, ...missingWidgets]);
    } else {
      setWidgets(defaultWidgets);
    }
  }, []);
  useEffect(() => {
    if (widgets.length) {
      const widgetOrder = widgets.map((widget) => widget.id);
      localStorage.setItem('widgetOrder', JSON.stringify(widgetOrder));
    }
  }, [widgets]);
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('draggedIndex', index);
    e.target.classList.add('dragging');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const draggedIndex = e.dataTransfer.getData('draggedIndex');
    if (draggedIndex === null) return;

    const updatedWidgets = [...widgets];
    const [draggedWidget] = updatedWidgets.splice(draggedIndex, 1);
    updatedWidgets.splice(index, 0, draggedWidget);

    setWidgets(updatedWidgets);

    const draggingElement = document.querySelector('.dragging');
    if (draggingElement) draggingElement.classList.remove('dragging');
  };
  const resetLayout = () => {
    setWidgets(defaultWidgets);
    localStorage.removeItem('widgetOrder');
  };

  return (
    <div className="page-container">
      <div className="sidebar-container">
        <h2>Sidebar</h2>
        {widgets.map((widget, index) => (
          <div
            key={widget.id}
            className="widget"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            <h3>{widget.title}</h3>
            <p>{widget.content}</p>
          </div>
        ))}
        <button className="reset-button" onClick={resetLayout}>
          Reset Layout
        </button>
      </div>
      <div className="content-container">
        <h1>Home Page</h1>
        <p>Welcome to the home page </p>
      </div>
    </div>
  );
};

export default Sidebar;
