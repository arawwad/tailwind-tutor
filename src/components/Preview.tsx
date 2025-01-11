import { useEffect, useMemo, useRef, useState } from 'react';
import sanitize from 'sanitize-html';
import { Title } from './Title';
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
    <div>
      <Title>
        Preview
        {passed && (
          <span
            style={{ color: '#75FB4C' }}
            className="material-symbols-outlined"
          >
            check_circle
          </span>
        )}
      </Title>
      <div
        className="border border-black rounded"
        id="preview"
        style={{ width: 500, height: 500 }}
        dangerouslySetInnerHTML={{ __html: sanitizedCode }}
      />
    </div>
  );
}
