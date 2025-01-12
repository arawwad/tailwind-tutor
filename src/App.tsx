import { useState } from 'react';

import { HtmlEditor } from './components/CodeEditor';
import { Preview } from './components/Preview';
import { Target } from './components/Target';

import './App.css';
import { Lesson1_1 } from './lessons/lesson1/Lesson1_1';
import { Tooltip } from 'react-tooltip';

function App() {
  const [code, setCode] = useState(() => Lesson1_1.initialCode);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <HtmlEditor code={code} setCode={setCode} />
      <Preview code={code} />
      <Target>
        <Lesson1_1 />
      </Target>
      <Tooltip id="hints" />
    </div>
  );
}

export default App;
