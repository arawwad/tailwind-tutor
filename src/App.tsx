import { useEffect, useState } from 'react';

import { HtmlEditor } from './components/CodeEditor';
import { Preview } from './components/Preview';
import { Target } from './components/Target';

import './App.css';
import { Buttons, initialCode as buttonsCode } from './lessons/buttons/Buttons';
import {
  CardsBasic,
  initalCode as CardsBasicCode,
} from './lessons/cards/Basic';
import { Tooltip } from 'react-tooltip';
import { Navigation } from './components/Navigation';
import { Route, Routes, useLocation } from 'react-router';

const initalCodeMap = {
  '/buttons': buttonsCode,
  '/cards-basic': CardsBasicCode,
};

function App() {
  const [code, setCode] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    // @ts-ignore
    setCode(initalCodeMap[location.pathname]);
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <HtmlEditor code={code} setCode={setCode} />
        <Preview code={code} />
        <Target>
          <Routes>
            <Route path="buttons" element={<Buttons />} />
            <Route path="cards-basic" element={<CardsBasic />} />
          </Routes>
        </Target>
        <Tooltip id="hints" />
      </div>
    </>
  );
}

export default App;
