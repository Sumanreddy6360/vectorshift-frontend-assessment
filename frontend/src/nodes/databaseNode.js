import BaseNode from "../components/BaseNode";

export const DatabaseNode = ({ id }) => {
  return (
    <BaseNode
      title="Database Node"
      icon="🗄️"
      inputs={[{ id: `${id}-query` }]}
      outputs={[{ id: `${id}-result` }]}
    >
      <label><strong>Database</strong></label>

      <select>
        <option>MySQL</option>
        <option>PostgreSQL</option>
        <option>MongoDB</option>
      </select>
    </BaseNode>
  );
};