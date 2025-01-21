import { useMemo } from 'react';
import sanitize from 'sanitize-html';

export function Preview({
  code,
  percentComplete,
}: Readonly<{ code: string; percentComplete: number }>) {
  const sanitizedCode = useMemo(
    () =>
      sanitize(code, {
        allowedTags: sanitize.defaults.allowedTags.concat('button', 'img'),
        allowedAttributes: { '*': ['class', 'style'], img: ['src'] },
        exclusiveFilter: function (frame) {
          return (
            frame.tag === 'img' &&
            !/^https:\/\/placehold.co/.test(frame.attribs.src)
          );
        },
      }),
    [code]
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        Live Preview
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
        className="bg-white border border-gray-300 rounded-md px-2 py-4"
      ></div>
    </div>
  );
}
