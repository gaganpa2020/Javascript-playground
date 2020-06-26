import React from 'react';
import DataApi from '../DataApi';
import { data } from '../testdata.json';

const api = new DataApi(data);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };

    console.log(this.state);
  }

  render() {
    return <div>test Component</div>;
  }
}
