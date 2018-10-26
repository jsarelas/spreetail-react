import React from 'react';
import { Helmet } from 'react-helmet';
import H1 from 'components/H1';

export default class ProductPage extends React.Component {
  componentDidMount() {}

  shouldComponentUpdate() {}

  render() {
    return (
      <div>
        <Helmet>
          <title>Product Page</title>
          <meta name="description" content="Product page of Spreetail.com" />
        </Helmet>
        <H1>This is the product page place holder!</H1>
      </div>
    );
  }
}
