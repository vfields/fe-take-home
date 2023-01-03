import './ArticleCard.css';

function ArticleCard({ article }) {
  const { title, byline, url } = article;
  const imgUrl = article.multimedia[0].url;

  return (
    <article>
      <h3>{title}</h3>
      <img src={imgUrl} />
      <h4>{byline}</h4>
      <p><a href={url}>Read this article</a></p>
    </article>
  );
}

export default ArticleCard;
