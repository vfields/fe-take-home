import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from './components/Search/Search.js'
import Articles from './components/Articles/Articles.js';
import ArticleDetails from './components/ArticleDetails/ArticleDetails.js';
import BadUrl from './components/BadUrl/BadUrl.js'
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const [userSearch, setUserSearch] = useState('');

  useEffect(() => {
    setLoading('Loading...')
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ybisF2CGGDEAJBCUhCzPdJMIdJoBGGDo')
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const newData = data.results.reduce((acc, result) => {
          const id = result.short_url.split('/')[3]
          result.id = id;
          acc.push(result);
          return acc;
        }, [])
        setArticles(newData);
        setLoading('');
      })
      .catch(error => {
        setError(`Uh oh, that's a ${error.message}! Something went wrong loading our articles... please refresh or try again later.`)
        setLoading('');
      })
  }, [])

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <h1>NY Times News Reader</h1>
          <Search
            userSearch={userSearch}
            setUserSearch={setUserSearch} 
          />
          <Articles
            userSearch={userSearch}
            articles={articles}
          />
          <h2>{error && error}</h2>
          <h2>{loading && loading}</h2>
        </Route>
        <Route exact path="/details/:id" render={({ match })=> {
          const articleToRender = articles.find(article => article.id === match.params.id)
          return <ArticleDetails
                    article={articleToRender}
                    loading={loading}
                    error={error}
                 />
          }
         } 
        />
        <Route component={BadUrl} />
      </Switch>
    </main>
  );
}

export default App;
