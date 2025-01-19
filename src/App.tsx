import { Suspense, useEffect, useState } from 'react';

import { HtmlEditor } from './components/CodeEditor';
import { Preview } from './components/Preview';
import { Target } from './components/Target';

import './App.css';
import { initialCode as buttonsCode } from './lessons/Buttons/Misc';
import {
  // CardsBasic,
  initalCode as CardsBasicCode,
} from './lessons/Cards/Basic';
import { Tooltip } from 'react-tooltip';
import { Navigation, routes } from './components/Navigation';
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
          <Suspense fallback="loading">
            <Routes>
              {Object.values(routes).flatMap((route) =>
                route.map(({ Component, path }) => (
                  <Route key={path} path={path} element={<Component />} />
                ))
              )}
            </Routes>
          </Suspense>
        </Target>
        <Tooltip id="hints" />
      </div>
    </>
  );
}

export default App;
