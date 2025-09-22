import "./App.css";
import Footer from "./common/footer";
import Header from "./common/header";
import Tree from "./components/tree";
import TreeDetails from "./components/tree-details";
import type { TreeItemData } from "./types/tree-types";
import { useState } from "react";

function App() {
  const [hoveredItem, setHoveredItem] = useState<TreeItemData | null>(null);
  return (
    <>
      <div className="header-div">
        <Header />
      </div>
      <div className="body-div">
        <Tree setHoveredItem={setHoveredItem} />
        <TreeDetails hoveredItem={hoveredItem} />
      </div>
      <div className="footer-div">
        <Footer />
      </div>
    </>
  );
}

export default App;
