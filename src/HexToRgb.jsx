import React, { useState, useEffect } from 'react';
import './HexToRgb.css';

const HexToRgb = () => {
  const [input, setInput] = useState('#9921ff');
  const [result, setResult] = useState('rgb(153, 33, 255)');
  const [isError, setIsError] = useState(false);
  const [bgColor, setBgColor] = useState('#9921ff');

  const hexToRgb = (hex) => {
    if (hex.length !== 7 || !hex.startsWith('#')) return null;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
    return { r, g, b };
  };

  useEffect(() => {
    if (input.length === 7) {
      const rgb = hexToRgb(input);
      if (rgb) {
        setResult(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
        setIsError(false);
        setBgColor(input);
        document.body.style.backgroundColor = input;
      } else {
        setResult('Ошибка');
        setIsError(true);
        setBgColor('#ffffff');
        document.body.style.backgroundColor = '#ffffff';
      }
    } else {
      setResult('');
      setIsError(false);
      setBgColor('#ffffff');
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [input]);

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <label className="container">
        <input
          type="text"
          className="input-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите код цвета..."
        />
        <span className={`result ${isError ? 'error' : ''}`}>{result}</span>
      </label>
    </div>
  );
};

export default HexToRgb;
