import { useState } from "react";
import BaseNode from "../components/BaseNode";

export const OutputNode = ({ id, data }) => {
  const [outputName, setOutputName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );

  const [outputType, setOutputType] = useState(
    data?.outputType || "Text"
  );

  return (
    <BaseNode
      title="Output Node"
      icon="📤"
      inputs={[{ id: `${id}-input` }]}
    >
      <label>
        <strong>Name</strong>
      </label>

      <input
        value={outputName}
        onChange={(e) => setOutputName(e.target.value)}
      />

      <label>
        <strong>Type</strong>
      </label>

      <select
        value={outputType}
        onChange={(e) => setOutputType(e.target.value)}
      >
        <option>Text</option>
        <option>Image</option>
        <option>JSON</option>
        <option>File</option>
      </select>
    </BaseNode>
  );
};