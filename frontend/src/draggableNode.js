// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };

    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",

        width: "100%",
        height: "56px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        borderRadius: "12px",

        background: "#1f2937",

        color: "#ffffff",

        border: "1px solid rgba(255,255,255,0.08)",

        fontWeight: "600",
        fontSize: "16px",

        transition: "all .25s ease",

        boxShadow: "0 6px 18px rgba(0,0,0,.12)",

        userSelect: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#2563eb";
        e.currentTarget.style.transform = "translateX(6px)";
        e.currentTarget.style.boxShadow =
          "0 12px 24px rgba(37,99,235,.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#1f2937";
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.boxShadow =
          "0 6px 18px rgba(0,0,0,.12)";
      }}
    >
      {label}
    </div>
  );
};