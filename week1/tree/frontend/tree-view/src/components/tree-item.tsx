import React, { useState } from "react";
import type { TreeItemData } from "../types/tree-types";

interface TreeItemProps {
  items: TreeItemData;
  isExpanded: boolean;
  toggleItem: (id: string) => void;
  onHover: (node: TreeItemData | null) => void;
}

const TreeItem: React.FC<TreeItemProps> = ({
  items,
  isExpanded,
  toggleItem,
  onHover,
}) => {
  const [expandedNodes, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  const toggle = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const hasChildren = items.children && items.children.length > 0;
  return (
    <li>
      <div
        onClick={() => hasChildren && toggleItem(items.id)}
        onMouseEnter={() => onHover(items)}
        onMouseLeave={() => onHover(null)}
        className= {hasChildren ? "pointer-cursor": ""}
      >
        {hasChildren && (isExpanded ? "-" : "+")} {items.name}
      </div>

      {hasChildren && isExpanded && (
        <ul >
          {items.children!.map((child) => (
            <TreeItem
              key={child.id}
              items={child}
              isExpanded={!!expandedNodes[child.id]}
              toggleItem={toggle}
              onHover={onHover}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeItem;
