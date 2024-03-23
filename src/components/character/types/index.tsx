import React, { useState } from 'react';

export function CharacterTypes() {
  const labels = [
    { title: 'Mayúsculas', value: 'uppercase' },
    { title: 'Minúsculas', value: 'lowercase' },
    { title: 'Números', value: 'numbers' },
    { title: 'Símbolos', value: 'symbols' }
  ];

  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((val) => val !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  return (
    <div>
      {labels.map((label, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={`checkbox${index}`}
            value={label.value}
            checked={selectedValues.includes(label.value)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={`checkbox${index}`}>{label.title}</label>
        </div>
      ))}
    </div>
  );
}
