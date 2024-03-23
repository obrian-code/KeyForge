import { useEffect, useState } from 'react';
import './style.css';
import { generate } from '../../../utils';

export function InputText() {
  const [pass, setPass] = useState('');

  useEffect(() => {
    const value = generate();
    setPass(value);
  }, []);

  return <input type="text" value={pass} readOnly></input>;
}
