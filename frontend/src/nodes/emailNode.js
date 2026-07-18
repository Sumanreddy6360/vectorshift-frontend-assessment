import BaseNode from "../components/BaseNode";

export const EmailNode = ({ id }) => {
  return (
    <BaseNode
      title="Email Node"
      icon="📧"
      inputs={[
        { id: `${id}-subject` },
        { id: `${id}-body` }
      ]}
      outputs={[
        { id: `${id}-status` }
      ]}
    >
      <label><strong>Recipient</strong></label>

      <input
        placeholder="user@example.com"
      />
    </BaseNode>
  );
};