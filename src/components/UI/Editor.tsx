import React, { useRef, useState } from "react";
import JoditEditor, { Jodit } from "jodit-react";
import { toast } from "react-toastify";

/**
 * Custom plugin to modify pasted content.
 */
function preparePaste(jodit: any) {
  jodit.e.on(
    "paste",
    (event: ClipboardEvent) => {
      if (toast.info("Change pasted content?")) {
        event.preventDefault();

        const dataTransfer = Jodit.modules.Helpers.getDataTransfer(event);
        const htmlData = dataTransfer?.getData(Jodit.constants.TEXT_HTML);

        if (htmlData) {
          jodit.s.insertHTML(htmlData.replace(/a/g, "b"));
        }

        return false;
      }
    },
    { top: true }
  );
}

// Register the plugin
Jodit.plugins.add("preparePaste", preparePaste);

interface JoditEditorProps {
  initialValue?: string;
  onChange?: (content: string) => void;
}

const Editor: React.FC<JoditEditorProps> = ({
  initialValue = "",
  onChange,
}) => {
  const editor = useRef(null);
  const [content, setContent] = useState<string>(initialValue);

  const config = {
    readonly: false,
    height: 400,
    toolbarSticky: true,
    toolbarAdaptive: false,
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onBlur={(newContent) => {
        console.log("blur");
        setContent(newContent);
        if (onChange) {
          onChange(newContent);
        }
      }}
      onChange={() => console.log("change")}
    />
  );
};

export default Editor;
