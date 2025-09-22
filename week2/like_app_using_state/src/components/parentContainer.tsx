import { useState } from "react";
import Content from "./content";

function ParentContainer() {
  const [parentLikes, setParentLikes] = useState([0, 0, 0, 0]);
  const [childLikes, setChildLikes] = useState([0, 0, 0, 0]);

  return (
    <div className="parent-container">
      <div className="parent-box">
        <h1 className="parent-title">Parent Container</h1>
        <div className="content-div">
          <Content
            isParent={true}
            parentLikes={parentLikes}
            childLikes={childLikes}
            setParentLikes={setParentLikes}
            setChildLikes={setChildLikes}
          />
        </div>
      </div>
      <div className="child-box">
        <h2 className="child-title">Child Container</h2>
        <div className="content-div">
          <Content
            isParent={false}
            parentLikes={parentLikes}
            childLikes={childLikes}
            setParentLikes={setParentLikes}
            setChildLikes={setChildLikes}
          />
        </div>
      </div>
    </div>
  );
}

export default ParentContainer;
