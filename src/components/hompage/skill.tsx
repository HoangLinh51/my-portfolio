import React from 'react';

const Skills: React.FC = () => {
  const items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div>
      <h3>Danh sách các kỹ năng:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
