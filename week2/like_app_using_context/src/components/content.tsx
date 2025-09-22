import Article from "./ui_components/article";

function Content(props: { isParent: boolean }) {
  const articles = ["Article 1", "Article 2", "Article 3", "Article 4"];

  return (
    <div className="article-div">
      {articles.map((title, index) => (
        <Article
          key={index}
          articleTitle={title}
          articleIndex={index}
          isParent={props.isParent}
        />
      ))}
    </div>
  );
}

export default Content;
