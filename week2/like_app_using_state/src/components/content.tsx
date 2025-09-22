import Article from "./ui_components/article";

function Content(props: {
  isParent: boolean;
  parentLikes: number[];
  childLikes: number[];
  setParentLikes: React.Dispatch<React.SetStateAction<number[]>>;
  setChildLikes: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const articles = ["Article 1", "Article 2", "Article 3", "Article 4"];

  return (
    <div className="article-div">
      {articles.map((title, index) => (
        <Article
          key={index}
          articleTitle={title}
          articleIndex={index}
          isParent={props.isParent}
          parentLikes={props.parentLikes}
          childLikes={props.childLikes}
          setParentLikes={props.setParentLikes}
          setChildLikes={props.setChildLikes}
        />
      ))}
    </div>
  );
}

export default Content;
