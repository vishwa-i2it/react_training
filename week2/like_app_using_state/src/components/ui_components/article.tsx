import { useState } from "react";
import LikeButton from "./likeButton";

function Article(props: {
  articleTitle: string;
  articleIndex: number;
  isParent: boolean;
  parentLikes: number[];
  childLikes: number[];
  setParentLikes: React.Dispatch<React.SetStateAction<number[]>>;
  setChildLikes: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const [like, setLike] = useState(0);
  function handleLike() {
    if (props.isParent) {
      props.parentLikes[props.articleIndex] = props.childLikes[
        props.articleIndex
      ] += 1;
      setLike(props.parentLikes[props.articleIndex]);
    } else {
      props.childLikes[props.articleIndex] = props.childLikes[
        props.articleIndex
      ] += 1;
      setLike(props.childLikes[props.articleIndex]);
    }
  }

  return (
    <div className="article">
      <h4>{props.articleTitle}</h4>
      <LikeButton likeCount={like} handleLike={handleLike} />
    </div>
  );
}

export default Article;
