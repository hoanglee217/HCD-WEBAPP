import React, { useEffect, useState } from "react";
import "./Editor.scss";
import TextArea from "antd/es/input/TextArea";
import { Button, Form, FormInstance, Tabs } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import CKEditorCustom from "./CKEditorCustom";
import { DecoupledEditor } from "ckeditor5";

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

  useEffect(() => {
    setValue(initialData ? initialData : form.getFieldValue(name));
  }, [form, initialData, name]);

  const handleChange = (value: string) => {
    setValue(value);
    form.setFieldsValue({ [name]: value });
  };

  return (
    <>
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        className="editor-tabs"
        tabBarExtraContent={
          <Button icon={<CameraOutlined />} style={{ width: "max-content" }}>
            {t("ADD_MEDIA")}
          </Button>
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
