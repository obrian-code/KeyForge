import { labels, options } from '../../../helpers/radios';
import { useState } from 'react';

export function ChatacterOptions() {
  const [selectedOption, setSelectedOption] = useState('lowercase,uppercase');

  const handleRadioClick = (e: { target: { value: string | number } }) => {
    setSelectedOption(options[e.target.value]);
  };
  console.log(selectedOption);

  /**
   * radio debe ser redeondo
   */
  return (
    <div>
      {labels.map((label, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option${index}`}
            name="characterOption"
            value={label.name}
            onChange={handleRadioClick}
            defaultChecked={index === 0}
          />
          <label htmlFor={`option${index}`} title={label.tooltip}>
            {label.title}
          </label>
        </div>
      ))}
    </div>
  );
}
