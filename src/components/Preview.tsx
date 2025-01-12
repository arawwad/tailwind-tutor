import { useEffect, useMemo, useRef, useState } from 'react';
import sanitize from 'sanitize-html';
import {
  InitialData,
  initialize,
  numOfDiffPixels,
} from '../utils/compareImages';

export function Preview({ code }: Readonly<{ code: string }>) {
  const [percentComplete, setPercentComplete] = useState(0);
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
      const currentDiff = await numOfDiffPixels(initialData.current);
      setPercentComplete(
        100 - 100 * (currentDiff / initialData.current.initalDiff)
      );
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [code]);

  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4 flex justify-items-stretch items-center">
        Preview
        <div className="ml-2 w-full h-1 bg-gray-300 rounded-lg overflow-hidden">
          <div
            id="progress-bar"
            className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
            style={{ width: `${percentComplete}%` }}
          ></div>
        </div>
      </h2>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizedCode }}
        id="preview"
        className="bg-white border border-gray-200 rounded-md"
      ></div>
    </div>
  );
}
