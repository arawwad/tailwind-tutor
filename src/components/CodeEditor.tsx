import AceEditor from 'react-ace';
import 'ace-builds/esm-resolver';

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
      <AceEditor
        mode="html"
        theme="dawn"
        name="html-editor"
        onChange={setCode}
        fontSize={14}
        value={code}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          wrap: true,
          showGutter: false,
        }}
        width="100%"
        className="rounded-md"
      />
    </div>
  );
}
