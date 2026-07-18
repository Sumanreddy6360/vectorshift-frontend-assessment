import { DraggableNode } from "./draggableNode";
import "./styles/toolbar.css";

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">
      <DraggableNode type="customInput" label="📥 Input" />
      <DraggableNode type="llm" label="🤖 LLM" />
      <DraggableNode type="customOutput" label="📤 Output" />
      <DraggableNode type="text" label="📝 Text" />
      <DraggableNode type="api" label="🌐 API" />
      <DraggableNode type="database" label="🗄 Database" />
      <DraggableNode type="email" label="📧 Email" />
      <DraggableNode type="pdf" label="📄 PDF" />
      <DraggableNode type="prompt" label="💬 Prompt" />
    </div>
  );
};