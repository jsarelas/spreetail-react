import React from 'react';
import { Helmet } from 'react-helmet';
import H1 from 'components/H1';

export default class HomePage extends React.Component {
  componentDidMount() {}

  shouldComponentUpdate() {}

  render() {
    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Home page of Spreetail.com" />
        </Helmet>
        <H1>This is the home page place holder!</H1>
      </div>
    );
  }
}
