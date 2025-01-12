import { useState } from 'react';

import { HtmlEditor } from './components/CodeEditor';
import { Preview } from './components/Preview';
import { Target } from './components/Target';

import './App.css';
import { Lesson1_1 } from './lessons/lesson1/Lesson1_1';

function App() {
  const [code, setCode] = useState(() => Lesson1_1.initialCode);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 h-screen">
      <HtmlEditor code={code} setCode={setCode} />

      <div className="grid grid-row-2 gap-4">
        <Preview code={code} />
        <Target>
          <Lesson1_1 />
        </Target>
      </div>
    </div>
  );
}

export default App;
