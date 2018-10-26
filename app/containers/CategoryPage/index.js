import React from 'react';
import { Helmet } from 'react-helmet';
import H1 from 'components/H1';

export default class CategoryPage extends React.Component {
  componentDidMount() {}

  shouldComponentUpdate() {}

  render() {
    return (
      <div>
        <Helmet>
          <title>Category Page</title>
          <meta name="description" content="Category page of Spreetail.com" />
        </Helmet>
        <H1>This is the category page place holder!</H1>
      </div>
    );
  }
}
