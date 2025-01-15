import { useState } from 'react';

import { HtmlEditor } from './components/CodeEditor';
import { Preview } from './components/Preview';
import { Target } from './components/Target';

import './App.css';
import { Buttons } from './lessons/buttons/Buttons';
import { Tooltip } from 'react-tooltip';

function App() {
  const [code, setCode] = useState(() => Buttons.initialCode);

  return (
    <>
      {/* <Navigation /> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <HtmlEditor code={code} setCode={setCode} />
        <Preview code={code} />
        <Target>
          <Buttons />
        </Target>
        <Tooltip id="hints" />
      </div>
    </>
  );
}

export default App;
