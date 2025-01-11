import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/snippets/html';

const HtmlEditor = ({
  code,
  setCode,
}: {
  code: string;
  setCode: (newCode: string) => void;
}) => (
  <div className="col-span-2">
    <AceEditor
      style={{ width: '100%', height: '500px' }}
      mode="html"
      theme="github"
      name="html-editor"
      onChange={setCode}
      fontSize={14}
      value={code}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
      }}
    />
  </div>
);

export default HtmlEditor;
