import { useState } from "react";
import BaseNode from "../components/BaseNode";

export const InputNode = ({ id, data }) => {
  const [inputName, setInputName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );

  const [inputType, setInputType] = useState(
    data?.inputType || "Text"
  );

  return (
    <BaseNode
      title="Input Node"
      icon="📥"
      outputs={[{ id: `${id}-value` }]}
    >
      <label>
        <strong>Name</strong>
      </label>

      <input
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />

      <label>
        <strong>Type</strong>
      </label>

      <select
        value={inputType}
        onChange={(e) => setInputType(e.target.value)}
      >
        <option>Text</option>
        <option>File</option>
      </select>
    </BaseNode>
  );
};