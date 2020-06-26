import React from 'react';
import DataApi from '../DataApi';
import { data } from '../testdata.json';
import ArticleList from './ArticleList';

const api = new DataApi(data);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
  }

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        authors={this.state.authors}
      ></ArticleList>
    );
  }
}
