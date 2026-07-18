import { Handle, Position } from "reactflow";
import "../styles/node.css";

export default function BaseNode({
  title,
  icon = "📦",
  children,
  inputs = [],
  outputs = [],
}) {
  return (
    <div className="node-card">
      {/* Input Handles */}
      {inputs.map((handle, index) => {
        const top = `${((index + 1) * 100) / (inputs.length + 1)}%`;

        return (
          <div key={handle.id}>
            <Handle
              type="target"
              position={Position.Left}
              id={handle.id}
              style={{ top }}
            />

            {handle.label && (
              <span
                style={{
                  position: "absolute",
                  left: -55,
                  top,
                  transform: "translateY(-50%)",
                  fontSize: "12px",
                  color: "#475569",
                  fontWeight: 600,
                  width: "50px",
                  textAlign: "right",
                  pointerEvents: "none",
                }}
              >
                {handle.label}
              </span>
            )}
          </div>
        );
      })}

      {/* Header */}
      <div className="node-header">
        <span className="node-icon">{icon}</span>
        <span>{title}</span>
      </div>

      {/* Body */}
      <div className="node-body">{children}</div>

      {/* Output Handles */}
      {outputs.map((handle, index) => {
        const top = `${((index + 1) * 100) / (outputs.length + 1)}%`;

        return (
          <Handle
            key={handle.id}
            type="source"
            position={Position.Right}
            id={handle.id}
            style={{ top }}
          />
        );
      })}
    </div>
  );
}