import BaseNode from "../components/BaseNode";

export const ApiNode = ({ id }) => {
  return (
    <BaseNode
      title="API Node"
      icon="🌐"
      inputs={[{ id: `${id}-request` }]}
      outputs={[{ id: `${id}-response` }]}
    >
      <label><strong>Endpoint</strong></label>

      <input
        placeholder="https://api.example.com"
      />

      <label><strong>Method</strong></label>

      <select>
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
        <option>DELETE</option>
      </select>
    </BaseNode>
  );
};