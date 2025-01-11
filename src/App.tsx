import './App.css';
import html2canvas from 'html2canvas';
import pixelmatch from 'pixelmatch';
import { useEffect, useMemo, useState } from 'react';
import sanitize from 'sanitize-html';
import HtmlEditor from './components/CodeEditor';

const testPassed = async () => {
  const div1 = document.getElementById('target')!;

  const div2 = document.getElementById('preview')!;

  const canvas1 = await html2canvas(div1);
  const { height, width } = canvas1;
  const canvas2 = await html2canvas(div2);

  const img1 = canvas1.getContext('2d')!.getImageData(0, 0, width, height);
  const img2 = canvas2.getContext('2d')!.getImageData(0, 0, width, height);

  const diffCanvas = document.getElementById('canvas') as HTMLCanvasElement;

  diffCanvas.width = width;
  diffCanvas.height = height;
  const diffContext = diffCanvas.getContext('2d')!;
  const diffImageData = diffContext.createImageData(width, height);
  // Compare the two images using pixelmatch
  const numDiffPixels = pixelmatch(
    img1.data,
    img2.data,
    diffImageData.data,
    width,
    height,
    { threshold: 0.1 }
  );

  return numDiffPixels === 0;
};

function App() {
  const [code, setCode] = useState(`<button>Click Me!</button>`);
  const [passed, setPassed] = useState(false);
  const sanitizedCode = useMemo(
    () =>
      sanitize(code, {
        allowedTags: sanitize.defaults.allowedTags.concat('button'),
        allowedAttributes: { '*': ['class', 'style'] },
      }),
    [code]
  );

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (sanitizedCode.trim() === '') return;

      const didTestsPass = await testPassed();
      setPassed(didTestsPass);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [code]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 h-screen">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 my-4">Preview</h1>
        <div
          className="border border-black"
          id="preview"
          style={{ width: 500, height: 500 }}
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-gray-800 my-4">
          Target
          {passed && (
            <span
              style={{ color: '#75FB4C' }}
              className="material-symbols-outlined"
            >
              check_circle
            </span>
          )}
        </h1>
        <div
          className="border border-black"
          id="target"
          style={{ width: 500, height: 500 }}
        >
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Click Me!
          </button>
        </div>
      </div>
      <HtmlEditor code={code} setCode={setCode} />

      <div>
        <canvas id="canvas" />
      </div>
    </div>
  );
}

export default App;
