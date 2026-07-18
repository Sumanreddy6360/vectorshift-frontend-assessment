import "./styles/app.css";

import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div className="app-container">

      {/* Sidebar */}
      <aside className="sidebar">
  <div className="logo">
    🚀
    <div>
      <h2>Pipeline Builder</h2>
      <p>AI Workflow Studio</p>
    </div>
  </div>

  <div className="toolbar-wrapper">
    <PipelineToolbar />
  </div>
</aside>

      {/* Main Content */}
      <main className="main-content">

        <header className="header">

          <div>
            <h1>VectorShift Pipeline Builder</h1>
            <p>Create, connect and analyze intelligent workflows.</p>
          </div>

          <SubmitButton />

        </header>

        <section className="canvas-container">
    <PipelineUI />
</section>

      </main>

    </div>
  );
}

export default App;