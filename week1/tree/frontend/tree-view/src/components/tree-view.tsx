import React, { useState } from "react";
import type { TreeViewProps } from "../types/tree-types";
import TreeItem from "./tree-item";

const TreeView: React.FC<TreeViewProps> = ({ data, onHover }) => {
  const [expandedNodes, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <ul>
      {data.map((item) => (
        <TreeItem
          key={item.id}
          items={item}
          isExpanded={!!expandedNodes[item.id]}
          toggleItem={toggleItem}
          onHover={onHover}
        />
      ))}
    </ul>
  );
};

export default TreeView;
