import ArticleCard from '../ArticleCard/ArticleCard.js'
import './Articles.css';

function Articles({ userSearch, articles }) {
  let articleDisplay;

  const mapArticles = (articleList) => {
    return articleList.map(article => {
      return (
        <ArticleCard
          key={article.short_url}
          id={article.short_url}
          article={article}
        />
      )
    })
  }

  if (!userSearch) {
    articleDisplay = mapArticles(articles);
  } else {
    const searchResults = articles.reduce((acc, article) => {
      if (article.title.toLowerCase().includes(userSearch.toLowerCase()) || article.byline.toLowerCase().includes(userSearch.toLowerCase())) {
        acc.push(article)
      }
      return acc;
    }, [])
    articleDisplay = mapArticles(searchResults);
  }

  return (
    <section className="articles">
      {articleDisplay}
    </section>
  );
}

export default Articles;
