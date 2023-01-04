import './ArticleDetails.css';

function ArticleDetails({ article }) {
  const displayArticle = (articleInfo) => {
    return (
      <article>
        {articleInfo.title}
        {articleInfo.byline}
      </article>
    )
  }

  const display = article ? displayArticle(article) : "loading..."

  return (
    <section>
      I am ArticleDetails, here are some details: {display}
    </section>
  );
}

export default ArticleDetails;
