import AceEditor from 'react-ace';
import 'ace-builds/esm-resolver';

import { Title } from './Title';

export function HtmlEditor({
  code,
  setCode,
}: Readonly<{
  code: string;
  setCode: (newCode: string) => void;
}>) {
  return (
    <div>
      <Title>Code Editor</Title>
      <AceEditor
        mode="html"
        theme="cobalt"
        name="html-editor"
        onChange={setCode}
        fontSize={14}
        value={code}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          wrap: true,
        }}
      />
    </div>
  );
}
