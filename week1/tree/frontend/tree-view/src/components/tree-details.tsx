import React from "react";
import type { TreeDetailsProps } from "../types/tree-types";

const TreeDetails: React.FC<TreeDetailsProps> = ({ hoveredItem }) => {
  return (
    <div className="tree-details-div">
      {hoveredItem ? (
        <div>
          <p>Details about {hoveredItem.name}...</p>
          <h3>{hoveredItem.name}</h3>
        </div>
      ) : (
        <p>Hover over an item to see details</p>
      )}
    </div>
  );
};

export default TreeDetails;
