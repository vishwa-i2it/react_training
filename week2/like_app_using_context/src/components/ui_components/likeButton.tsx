function LikeButton(props: { likeCount: number; handleLike: () => void }) {
  return (
    <div className="button-div">
      <button className="like-button" onClick={props.handleLike}>
        &#128077; Like
      </button>
      <span>({props.likeCount})</span>
    </div>
  );
}

export default LikeButton;
