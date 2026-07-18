import { useEffect, useMemo, useRef, useState } from "react";
import BaseNode from "../components/BaseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");

  const textareaRef = useRef(null);

  // Extract variables like {{name}}
  const variables = useMemo(() => {
    const matches = [...text.matchAll(/{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g)];

    return [...new Set(matches.map((m) => m[1]))];
  }, [text]);

  // Auto-grow textarea
  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + "px";
  }, [text]);

  return (
    <BaseNode
      title="Text Node"
      icon="📝"
      inputs={variables.map((variable) => ({
  id: `${id}-${variable}`,
  label: variable,
}))}
      outputs={[
        {
          id: `${id}-text`,
        },
      ]}
    >
      <label>
        <strong>Text</strong>
      </label>

      <textarea
        ref={textareaRef}
        value={text}
        placeholder="Example: Hello {{name}}"
        onChange={(e) => setText(e.target.value)}
        style={{
          resize: "none",
          overflow: "hidden",
          minHeight: "90px",
        }}
      />

      <small
        style={{
          color: "#64748b",
        }}
      >
        Variables detected:
        {variables.length === 0
          ? " None"
          : " " + variables.join(", ")}
      </small>
    </BaseNode>
  );
};