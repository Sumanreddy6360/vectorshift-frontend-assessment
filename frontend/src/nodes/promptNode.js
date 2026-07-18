import BaseNode from "../components/BaseNode";

export const PromptNode = ({ id }) => {
  return (
    <BaseNode
      title="Prompt Node"
      icon="💬"
      outputs={[
        { id: `${id}-prompt` }
      ]}
    >
      <label><strong>Prompt</strong></label>

      <textarea
        rows={4}
        placeholder="Write your AI prompt..."
      />
    </BaseNode>
  );
};