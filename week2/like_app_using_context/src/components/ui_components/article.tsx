import { useContext } from "react";
import LikeButton from "./likeButton";
import { LikeContext } from "../parentContainer";

function Article(props: {
  articleTitle: string;
  articleIndex: number;
  isParent: boolean;
}) {
  const { parentLikes, childLikes, updateParentLike, updateChildLike } =
    useContext(LikeContext);

  const likeCount = props.isParent
    ? parentLikes[props.articleIndex]
    : childLikes[props.articleIndex];
  const handleLike = props.isParent
    ? () => updateParentLike(props.articleIndex)
    : () => updateChildLike(props.articleIndex);

  return (
    <div className="article">
      <h4>{props.articleTitle}</h4>
      <LikeButton likeCount={likeCount} handleLike={handleLike} />
    </div>
  );
}

export default Article;
