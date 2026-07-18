import BaseNode from "../components/BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM Node"
      icon="🤖"
      inputs={[
        { id: `${id}-system` },
        { id: `${id}-prompt` },
      ]}
      outputs={[
        { id: `${id}-response` },
      ]}
    >
      <div
        style={{
          padding: "10px",
          background: "#f8fafc",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
        }}
      >
        <strong>Large Language Model</strong>

        <p
          style={{
            marginTop: "8px",
            color: "#64748b",
            fontSize: "14px",
          }}
        >
          Accepts a system prompt and user prompt, then generates an AI response.
        </p>
      </div>
    </BaseNode>
  );
};