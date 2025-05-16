import "./Editor.scss";
import { DecoupledEditor } from "ckeditor5";
import CKEditorCustom from "./CKEditorCustom";
import TextArea from "antd/es/input/TextArea";
import { useTranslation } from "react-i18next";
import { Form, FormInstance, Tabs } from "antd";
import React, { useEffect, useRef, useState } from "react";
import ImageStorage from "../image-storage/ImageStorage";

interface EditorProps {
  name: string;
  form: FormInstance;
  initialData?: string;
}
function Editor({ name, form, initialData }: EditorProps) {
  const { t } = useTranslation();
  const [value, setValue] = useState(
    initialData ? initialData : form.getFieldValue(name)
  );
  const [activeTab, setActiveTab] = useState("visual");
  const editorRef = useRef<{ insertImage: (src: string) => void } | null>(null);

  useEffect(() => {
    setValue(initialData ? initialData : form.getFieldValue(name));
  }, [form, initialData, name]);

  const handleChange = (value: string) => {
    setValue(value);
    form.setFieldsValue({ [name]: value });
  };

  const handleInsertImage = () => {
    if (editorRef.current) {
      editorRef.current.insertImage(
        "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      );
    }
  };

  return (
    <>
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        className="editor-tabs"
        tabBarExtraContent={
          <ImageStorage
            type="button"
            title={t("ADD_MEDIA")}
            onSubmit={handleInsertImage}
          />
        }
      >
        <Tabs.TabPane tab="Visual" key="visual">
          <div className="tab-content">
            <Form.Item name={name}>
              <CKEditorCustom
                initialData={value}
                onBlur={(event: any, editor: DecoupledEditor) => {
                  const value = editor.getData();
                  handleChange(value);
                }}
                ref={editorRef}
              />
            </Form.Item>
          </div>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Text" key="text">
          <div className="tab-content">
            <Form.Item name={name}>
              <TextArea
                className="html-textarea"
                value={value}
                onBlur={(e) => handleChange(e.target.value)}
              />
            </Form.Item>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}

export default Editor;
