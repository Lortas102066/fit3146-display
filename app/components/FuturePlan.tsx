import React from 'react';

interface FuturePlanProps {
  title?: string;
  description?: string;
  items?: string[];
}

const FuturePlan: React.FC<FuturePlanProps> = ({ 
  title = "Future Plans", 
  description = "Our roadmap for upcoming features and improvements",
  items = [
    "Enhanced user interface",
    "Performance optimizations", 
    "New feature implementations",
    "Mobile responsiveness improvements"
  ]
}) => {
  return (
    <div className="future-plan">
      <h2 className="future-plan__title">{title}</h2>
      <p className="future-plan__description">{description}</p>
      
      <ul className="future-plan__list">
        {items.map((item, index) => (
          <li key={index} className="future-plan__item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FuturePlan;
