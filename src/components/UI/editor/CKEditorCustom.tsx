import {
  useState,
  useEffect,
  useRef,
  useMemo,
  forwardRef,
  useImperativeHandle,
} from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./CKEditorCustom.scss";
import {
  DecoupledEditor,
  Alignment,
  Autoformat,
  AutoLink,
  Autosave,
  BlockQuote,
  Bold,
  Code,
  CodeBlock,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  Heading,
  HorizontalLine,
  HtmlEmbed,
  ImageBlock,
  ImageCaption,
  ImageEditing,
  ImageInline,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUtils,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  ListProperties,
  PageBreak,
  Paragraph,
  RemoveFormat,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Style,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  TodoList,
  Underline,
  WordCount,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

interface CKEditorCustomProps {
  initialData?: string;
  onChange?: (event: any, editor: DecoupledEditor) => void;
  onBlur?: (event: any, editor: DecoupledEditor) => void;
}

const CKEditorCustom = forwardRef(
  ({ initialData, onChange, onBlur }: CKEditorCustomProps, ref) => {
    const editorContainerRef = useRef<HTMLDivElement>(null);
    const editorMenuBarRef = useRef<HTMLDivElement>(null);
    const editorToolbarRef = useRef<HTMLDivElement>(null);
    const editorRef = useRef<HTMLDivElement>(null);
    const editorInstanceRef = useRef<DecoupledEditor | null>(null);
    const editorWordCountRef = useRef<HTMLDivElement>(null);
    const [isLayoutReady, setIsLayoutReady] = useState(false);
    const [isEditorReady, setIsEditorReady] = useState(false);

    useEffect(() => {
      return () => {
        console.log("CKEditorCustom unmounted");
      };
    }, []);

    useEffect(() => {
      setIsLayoutReady(true);
      return () => setIsLayoutReady(false);
    }, []);

    useEffect(() => {
      if (editorInstanceRef.current && isEditorReady) {
        initialData && editorInstanceRef.current.setData(initialData);
      }
    }, [initialData, isEditorReady]);

    const editorConfig = useMemo(() => {
      if (!isLayoutReady) return {};

      return {
        toolbar: {
          items: [
            "findAndReplace",
            "|",
            "heading",
            "|",
            "fontSize",
            "fontFamily",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "subscript",
            "superscript",
            "code",
            "removeFormat",
            "|",
            "specialCharacters",
            "horizontalLine",
            "pageBreak",
            "link",
            "insertTable",
            "blockQuote",
            "codeBlock",
            "htmlEmbed",
            "|",
            "alignment",
            "|",
            "bulletedList",
            "numberedList",
            "todoList",
            "outdent",
            "indent",
          ],
          shouldNotGroupWhenFull: true,
        },
        plugins: [
          Alignment,
          Autoformat,
          AutoLink,
          Autosave,
          BlockQuote,
          Bold,
          Code,
          CodeBlock,
          Essentials,
          FindAndReplace,
          FontBackgroundColor,
          FontColor,
          FontFamily,
          FontSize,
          GeneralHtmlSupport,
          Heading,
          HorizontalLine,
          HtmlEmbed,
          ImageBlock,
          ImageCaption,
          ImageEditing,
          ImageInline,
          ImageResize,
          ImageStyle,
          ImageToolbar,
          ImageUtils,
          Indent,
          IndentBlock,
          Italic,
          Link,
          List,
          ListProperties,
          PageBreak,
          Paragraph,
          RemoveFormat,
          SpecialCharacters,
          SpecialCharactersArrows,
          SpecialCharactersCurrency,
          SpecialCharactersEssentials,
          SpecialCharactersLatin,
          SpecialCharactersMathematical,
          SpecialCharactersText,
          Strikethrough,
          Style,
          Subscript,
          Superscript,
          Table,
          TableCaption,
          TableCellProperties,
          TableColumnResize,
          TableProperties,
          TableToolbar,
          TextTransformation,
          TodoList,
          Underline,
          WordCount,
        ],
        image: {
          toolbar: [
            "toggleImageCaption",
            "imageTextAlternative",
            "|",
            "imageStyle:inline",
            "imageStyle:wrapText",
            "imageStyle:breakText",
            "|",
            "resizeImage",
          ],
        },
        fontFamily: {
          supportAllValues: true,
        },
        fontSize: {
          options: [10, 12, 14, "default", 18, 20, 22],
          supportAllValues: true,
        },
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5",
            },
            {
              model: "heading6",
              view: "h6",
              title: "Heading 6",
              class: "ck-heading_heading6",
            },
          ],
        },
        htmlSupport: {
          allow: [
            {
              name: /^.*$/,
              styles: true,
              attributes: true,
              classes: true,
            },
          ],
        },
        initialData,
        licenseKey: "GPL", // Use 'GPL' for free version
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: "https://",
        },
        placeholder: "Type or paste your content here!",
        list: {
          properties: {
            styles: true,
            startIndex: true,
            reversed: true,
          },
        },
        menuBar: {
          isVisible: true,
        },
        style: {
          definitions: [
            {
              name: "Article category",
              element: "h3",
              classes: ["category"],
            },
            {
              name: "Title",
              element: "h2",
              classes: ["document-title"],
            },
            {
              name: "Subtitle",
              element: "h3",
              classes: ["document-subtitle"],
            },
            {
              name: "Info box",
              element: "p",
              classes: ["info-box"],
            },
            {
              name: "Side quote",
              element: "blockquote",
              classes: ["side-quote"],
            },
            {
              name: "Marker",
              element: "span",
              classes: ["marker"],
            },
            {
              name: "Spoiler",
              element: "span",
              classes: ["spoiler"],
            },
            {
              name: "Code (dark)",
              element: "pre",
              classes: ["fancy-code", "fancy-code-dark"],
            },
            {
              name: "Code (bright)",
              element: "pre",
              classes: ["fancy-code", "fancy-code-bright"],
            },
          ],
        },
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableProperties",
            "tableCellProperties",
          ],
        },
      };
    }, [isLayoutReady, initialData]);

    useImperativeHandle(ref, () => ({
      insertImage: (imageSrc: string) => {
        if (editorInstanceRef.current) {
          const editor = editorInstanceRef.current;
          editor.model.change((writer) => {
            const selection = editor.model.document.selection;

            if (!selection.isCollapsed) {
              // Xóa văn bản đã chọn trước khi chèn hình ảnh
              writer.remove(selection.getFirstRange()!);
            }

            // Lấy vị trí hiện tại của con trỏ
            let position = selection.getFirstPosition();

            if (!position) {
              // Nếu position null, chèn ảnh vào cuối nội dung của editor
              const root = editor.model.document.getRoot();
              if (root) {
                position = writer.createPositionAt(root, "end");
              }
            }

            // Chèn hình ảnh ngay tại vị trí của con trỏ hoặc thay thế văn bản đã chọn
            const imageElement = writer.createElement("imageBlock", {
              src: imageSrc,
              alt: "Custom Image",
            });

            // Chèn ảnh tại vị trí của con trỏ
            if (position) {
              writer.insert(imageElement, position);
            }
            editor.editing.view.focus();
          });
        }
      },
    }));

    return (
      <div className="editor-wrapper" ref={editorContainerRef}>
        <div className="editor-menu-bar" ref={editorMenuBarRef}></div>
        <div className="editor-toolbar" ref={editorToolbarRef}></div>
        <div className="editor-content">
          <div ref={editorRef}>
            {editorConfig && (
              <CKEditor
                onReady={(editor: DecoupledEditor) => {
                  editorInstanceRef.current = editor;
                  setIsEditorReady(true);
                  if (editorToolbarRef.current) {
                    editorToolbarRef.current.appendChild(
                      editor.ui.view.toolbar.element!
                    );
                  }
                  if (editorMenuBarRef.current) {
                    editorMenuBarRef.current.appendChild(
                      editor.ui.view.menuBarView.element!
                    );
                  }
                  if (editorWordCountRef.current) {
                    const wordCount = editor.plugins.get("WordCount");
                    editorWordCountRef.current.appendChild(
                      wordCount.wordCountContainer!
                    );
                  }
                }}
                editor={DecoupledEditor}
                config={editorConfig}
                onChange={(event: any, editor: DecoupledEditor) => {}}
                onBlur={onBlur}
              />
            )}
          </div>
        </div>
        <div className="editor-word-count" ref={editorWordCountRef}></div>
      </div>
    );
  }
);

export default CKEditorCustom;
