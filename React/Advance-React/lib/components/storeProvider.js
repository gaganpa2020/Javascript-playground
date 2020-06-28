import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (Component) => {
  return class extends React.Component {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object,
    };

    render() {
      return <Component {...this.props} store={this.context.store}></Component>;
    }
  };

  //Thorugh function component.
  //   const WithStore = (props, { store }) => (
  //     <Component {...props} store={store}></Component>
  //   );
  //   WithStore.contextTypes = {
  //     store: PropTypes.object,
  //   };
  //   WithStore.displayName = `${Component.name}Container`;
  //   return WithStore;
};

export default storeProvider;
