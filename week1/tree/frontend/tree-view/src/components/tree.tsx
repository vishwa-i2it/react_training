import React, { useEffect, useState, useRef } from "react";
import TreeView from "./tree-view";
import type { TreeItemData, TreeProps } from "../types/tree-types";
import { getAllTreeData } from "../service/tree-data";

const Tree: React.FC<TreeProps> = ({ setHoveredItem }) => {
  const [treeData, setTreeData] = useState<TreeItemData[]>([]);
  const hasFetchedRef = useRef(false);

  const fetchData = async () => {
    try {
      const response = await getAllTreeData();
      setTreeData(response.data);
    } catch (error) {
      console.error("Error fetching tree data:", error);
    }
  };

  useEffect(() => {
    if (!hasFetchedRef.current) {
      fetchData();
      hasFetchedRef.current = true;
    }
  }, []);

  return (
    <div className="tree-div">
      <TreeView data={treeData} onHover={setHoveredItem} />
    </div>
  );
};

export default Tree;
