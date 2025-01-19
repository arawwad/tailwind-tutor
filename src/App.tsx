import { Suspense, useState } from 'react';

import { HtmlEditor } from './components/CodeEditor';
import { Preview } from './components/Preview';
import { Target } from './components/Target';

import './App.css';

import { Tooltip } from 'react-tooltip';
import { Navigation, routes } from './components/Navigation';
import { Navigate, Route, Routes } from 'react-router';

function App() {
  const [code, setCode] = useState<string>('');

  return (
    <>
      <Navigation />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <HtmlEditor code={code} setCode={setCode} />
        <Preview code={code} />
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
                    <Target initialCode={initialCode} setCode={setCode}>
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
