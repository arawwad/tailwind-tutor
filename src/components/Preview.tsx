import { useEffect, useMemo, useRef, useState } from 'react';
import sanitize from 'sanitize-html';
import { InitialData, initialize, testPassed } from '../utils/compareImages';

export function Preview({ code }: Readonly<{ code: string }>) {
  const [passed, setPassed] = useState(false);
  const initialData = useRef<InitialData>();

  useEffect(() => {
    initialize().then((data) => (initialData.current = data));
  }, []);

  const sanitizedCode = useMemo(
    () =>
      sanitize(code, {
        allowedTags: sanitize.defaults.allowedTags.concat('button'),
        allowedAttributes: { '*': ['class'] },
      }),
    [code]
  );

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (!initialData.current) return;
      const didTestsPass = await testPassed(initialData.current);
      setPassed(didTestsPass);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [code]);

  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4">
        Live Preview
        {passed && (
          <span
            style={{ color: '#75FB4C' }}
            className="material-symbols-outlined"
          >
            check_circle
          </span>
        )}
      </h2>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizedCode }}
        id="preview"
        className="bg-white border border-gray-200 rounded-md"
      ></div>
    </div>
  );
}
