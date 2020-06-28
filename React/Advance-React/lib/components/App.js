import React from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
import Timestamp from './Timestamp';

export default class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };
  getChildContext() {
    return {
      store: this.props.store,
    };
  }
  state = this.props.store.getState();
  //Update wjem store state changes ... subscribe.

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };

  componentDidMount() {
    this.subscribtionid = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscribtionid);
  }

  render() {
    let { articles, searchTerm } = this.state;

    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    return (
      <div>
        <Timestamp timestamp={this.state.timestamp}></Timestamp>
        <SearchBar doSearch={this.props.store.setSearchTerm}></SearchBar>
        <ArticleList articles={articles} store={this.props.store}></ArticleList>
      </div>
    );
  }
}
