import { useState } from 'react';

import { HtmlEditor } from './components/CodeEditor';
import { Preview } from './components/Preview';
import { Target } from './components/Target';

import './App.css';

function App() {
  const [code, setCode] = useState(
    `<button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Click Me!</button>`
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 h-screen">
      <HtmlEditor code={code} setCode={setCode} />

      <div className="grid grid-row-2 gap-4">
        <Preview code={code} />
        <Target />
      </div>
    </div>
  );
}

export default App;
