"use client";

import React from "react";
import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { fontFamilies } from "@/lib/utils";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Underline,
  Quote,
  Heading1,
  Heading2,
} from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Separator } from "@/components/ui/separator";
import UnderlineExtension from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import Blockquote from "@tiptap/extension-blockquote";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import CharacterCount from "@tiptap/extension-character-count";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const RichTextEditor = ({
  value,
  onChange,
}: {
  value?: string;
  onChange: (value: string) => void;
}) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "min-h-[300px] max-h-[150px] w-full rounded-md rounded-br-none rounded-bl-none border border-input bg-transparent px-3 py-2 border-b-0 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto",
      },
    },
    extensions: [
      StarterKit.configure({
        orderedList: { HTMLAttributes: { class: "list-decimal pl-4" } },
        bulletList: { HTMLAttributes: { class: "list-disc pl-4" } },
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      UnderlineExtension,
      Document,
      Paragraph,
      Text,
      Blockquote,
      TextStyle,
      FontFamily.configure({
        types: ["textStyle"],
      }),
      CharacterCount,
      Placeholder.configure({
        placeholder: "Start typing here...",
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      console.log("Updated content:", editor.getHTML());
      onChange(editor.getHTML());
    },
  });

  return (
    <>
      <EditorContent editor={editor} className="editor" />
      {editor ? <RichTextEditorToolbar editor={editor} /> : null}
    </>
  );
};

const RichTextEditorToolbar = ({ editor }: { editor: Editor }) => {
  const [font, setFont] = React.useState<string | undefined>("Aa");
  const handleFontFamilyChange = (value: string) => {
    editor.chain().focus().setFontFamily(value).run();
  };

  return (
    <div className="border border-input bg-transparent rounded-br-md rounded-bl-md p-1 flex flex-row items-center justify-between gap-1">
      <div className="flex gap-1">
        <Toggle
          size="sm"
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("strike")}
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("underline")}
          onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Underline className="h-4 w-4" />
        </Toggle>
        <Separator orientation="vertical" className="w-[1px] h-8" />
        <Toggle
          size="sm"
          pressed={editor.isActive("bulletList")}
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
        >
          <List className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("orderedList")}
          onPressedChange={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
        >
          <ListOrdered className="h-4 w-4" />
        </Toggle>
        <Separator orientation="vertical" className="w-[1px] h-8" />
        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 1 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          <Heading1 className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 2 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Heading2 className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("blockquote")}
          onPressedChange={() =>
            editor.chain().focus().toggleBlockquote().run()
          }
        >
          <Quote className="h-4 w-4" />
        </Toggle>
        <Separator orientation="vertical" className="w-[1px] h-8" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <span className="text-sm">{font}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {fontFamilies?.map((fontFamily) => (
              <DropdownMenuItem
                key={fontFamily?.value}
                onClick={() => {
                  setFont(fontFamily?.label);
                  handleFontFamilyChange(fontFamily?.value);
                }}
              >
                {fontFamily?.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default RichTextEditor;
