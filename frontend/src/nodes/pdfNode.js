import BaseNode from "../components/BaseNode";

export const PdfNode = ({ id }) => {
  return (
    <BaseNode
      title="PDF Node"
      icon="📄"
      outputs={[
        { id: `${id}-pdf` }
      ]}
    >
      <label><strong>Upload PDF</strong></label>

      <input type="file" />
    </BaseNode>
  );
};