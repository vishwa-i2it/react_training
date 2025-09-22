import { createContext, useState } from "react";
import Content from "./content";

export const LikeContext = createContext<{
  parentLikes: number[];
  childLikes: number[];
  updateParentLike: (index: number) => void;
  updateChildLike: (index: number) => void;
}>({
  parentLikes: [0, 0, 0, 0],
  childLikes: [0, 0, 0, 0],
  updateParentLike: () => {},
  updateChildLike: () => {},
});

function ParentContainer() {
  const [parentLikes, setParentLikes] = useState([0, 0, 0, 0]);
  const [childLikes, setChildLikes] = useState([0, 0, 0, 0]);

  const updateParentLike = (index: number) => {
    setParentLikes((prev) => {
      const newParentLikes = [...prev];
      newParentLikes[index] = childLikes[index] + 1;
      return newParentLikes;
    });
    setChildLikes((prev) => {
      const newChildLikes = [...prev];
      newChildLikes[index] = childLikes[index] + 1;
      return newChildLikes;
    });
  };

  const updateChildLike = (index: number) => {
    setChildLikes((prev) => {
      const newChildLikes = [...prev];
      newChildLikes[index] = prev[index] + 1;
      return newChildLikes;
    });
  };

  return (
    <LikeContext.Provider
      value={{ parentLikes, childLikes, updateParentLike, updateChildLike }}
    >
      <div className="parent-container">
        <div className="parent-box">
          <h1 className="parent-title">Parent Container</h1>
          <div className="content-div">
            <Content isParent={true} />
          </div>
        </div>
        <div className="child-box">
          <h2 className="child-title">Child Container</h2>
          <div className="content-div">
            <Content isParent={false} />
          </div>
        </div>
      </div>
    </LikeContext.Provider>
  );
}

export default ParentContainer;
