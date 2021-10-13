import React, { useState } from 'react';
import './App.css';
import Background from './components/Background';
import Hashtag from './components/Hashtag';
import RgbResult from './components/RgbResult';

function App() {
  const [hashtag, setHashtag] = useState('');
  const [rgb, setRgb] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleHashtag = value => {
    setHashtag(value);
    convertHashToRgb(value);
  }

  const convertHashToRgb = value => {
    if (value.length === 7) {

      let rgbColorsString;
      
      const arrayColors10 = value.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
        ,(_m, r, g, b) => '#' + r + r + g + g + b + b)
        .substring(1).match(/.{2}/g)
        .map(x => parseInt(x, 16));

      for (let i = 0; i < arrayColors10.length; i++){
        if (isNaN(arrayColors10[i]) || value[0] !== '#') {
          setBackgroundColor('#e94b35');
          rgbColorsString = 'Ошибка!';
          setRgb(rgbColorsString);
          return false;
        }
      }

      setBackgroundColor(value);
      rgbColorsString = `rgb(${arrayColors10.join(', ')})`;
      setRgb(rgbColorsString);

    }
  }

  return (
    <div className="App">
      <Background hashtag={backgroundColor} />
      <div className="wrapper">
        <Hashtag onHashtag={handleHashtag} hashtag={hashtag} />
        <RgbResult rgb={rgb} />
      </div>
    </div>
  );
}

export default App;