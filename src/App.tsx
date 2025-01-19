import { Suspense, useEffect, useState, useRef } from 'react';

import { HtmlEditor } from './components/CodeEditor';
import { Preview } from './components/Preview';
import { Target } from './components/Target';

import './App.css';

import { Tooltip } from 'react-tooltip';
import { Navigation, routes } from './components/Navigation';
import { Navigate, Route, Routes } from 'react-router';
import { percentMatching } from './utils/compareImages';

function App() {
  const [code, setCode] = useState<string>('');
  const [percentComplete, setPercentComplete] = useState(0);
  const initialDiff = useRef<number | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      const percent = await percentMatching(initialDiff);
      setPercentComplete(percent);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [code]);

  return (
    <>
      <Navigation />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <HtmlEditor code={code} setCode={setCode} />
        <Preview code={code} percentComplete={percentComplete} />
        <Suspense fallback="loading">
          <Routes>
            {Object.entries(routes).flatMap(([lesson, subLessons]) => [
              <Route
                key={lesson}
                path={lesson.toLocaleLowerCase()}
                element={<Navigate to={subLessons[0].subLesson} />}
              />,
              ...subLessons.map(({ Component, path, initialCode }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <Target
                      initialCode={initialCode}
                      setCode={setCode}
                      initialDiff={initialDiff}
                    >
                      <Component />
                    </Target>
                  }
                />
              )),
            ])}
            <Route path="*" element={<Navigate to="buttons" />} />
          </Routes>
        </Suspense>
        <Tooltip id="hints" />
      </div>
    </>
  );
}

export default App;
