import { useState } from "react";
import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Unable to connect to backend.");
    }
  };

  return (
    <>
      <button
        onClick={handleSubmit}
        style={{
          background: "linear-gradient(90deg,#2563eb,#3b82f6)",
          color: "white",
          border: "none",
          borderRadius: "14px",
          padding: "14px 30px",
          cursor: "pointer",
          fontWeight: "700",
          fontSize: "16px",
          boxShadow: "0 12px 25px rgba(37,99,235,.30)",
          transition: "all .25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow =
            "0 18px 35px rgba(37,99,235,.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 12px 25px rgba(37,99,235,.30)";
        }}
      >
        🚀 Analyze Pipeline
      </button>

      {result && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,.45)",
            backdropFilter: "blur(5px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: "420px",
              background: "#fff",
              borderRadius: "18px",
              padding: "28px",
              boxShadow: "0 30px 60px rgba(0,0,0,.25)",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                marginBottom: "24px",
                color: "#2563eb",
                textAlign: "center",
              }}
            >
              📊 Pipeline Analysis
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "14px",
              }}
            >
              <span>📦 Total Nodes</span>
              <strong style={{ color: "#2563eb", fontSize: 22 }}>
                {result.num_nodes}
              </strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "14px",
              }}
            >
              <span>🔗 Total Edges</span>
              <strong style={{ color: "#2563eb", fontSize: 22 }}>
                {result.num_edges}
              </strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: result.is_dag ? "#ecfdf5" : "#fef2f2",
                border: `1px solid ${
                  result.is_dag ? "#86efac" : "#fca5a5"
                }`,
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "20px",
              }}
            >
              <span>✅ Valid DAG</span>

              <strong
                style={{
                  color: result.is_dag ? "#16a34a" : "#dc2626",
                  fontSize: 20,
                }}
              >
                {result.is_dag ? "YES" : "NO"}
              </strong>
            </div>

            <div
              style={{
                background: "#eff6ff",
                borderRadius: "12px",
                padding: "14px",
                textAlign: "center",
                marginBottom: "20px",
                color: "#1d4ed8",
                fontWeight: "600",
              }}
            >
              {result.is_dag
                ? "🟢 Pipeline is structurally valid."
                : "🔴 Cycle detected in the pipeline."}
            </div>

            <button
              onClick={() => setResult(null)}
              style={{
                width: "100%",
                padding: "13px",
                border: "none",
                borderRadius: "12px",
                background: "#2563eb",
                color: "white",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: "15px",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};