import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';

import 'prismjs/components/prism-markup';
import 'prismjs/';

export function HtmlEditor({
  code,
  setCode,
}: Readonly<{
  code: string;
  setCode: (newCode: string) => void;
}>) {
  return (
    <div className="bg-gray-900 text-white rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Code Editor</h2>
      <div className="bg-gray-700 rounded-xl max-h-[50vh] overflow-auto">
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.html!, 'html')}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            overflow: 'auto',
          }}
        />
      </div>
    </div>
  );
}
